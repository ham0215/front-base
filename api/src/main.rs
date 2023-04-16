//! Actix Web juniper example
//!
//! A simple example integrating juniper in Actix Web

use std::{io, sync::Arc};

use actix_cors::Cors;
use actix_web::{
    get, middleware, route,
    web::{self, Data},
    App, HttpResponse, HttpServer, Responder,
};
use actix_web_lab::respond::Html;
use juniper::http::{graphiql::graphiql_source, GraphQLRequest};
use openssl::ssl::{SslAcceptor, SslFiletype, SslMethod};

mod schema;

use crate::schema::{create_schema, Schema};

/// GraphiQL playground UI
#[get("/graphiql")]
async fn graphql_playground() -> impl Responder {
    Html(graphiql_source("/graphql", None))
}

/// GraphQL endpoint
#[route("/graphql", method = "GET", method = "POST")]
async fn graphql(st: web::Data<Schema>, data: web::Json<GraphQLRequest>) -> impl Responder {
    let user = data.execute(&st, &()).await;
    HttpResponse::Ok().json(user)
}

#[actix_web::main]
async fn main() -> io::Result<()> {
    // Create Juniper schema
    let schema = Arc::new(create_schema());

    let mut builder = SslAcceptor::mozilla_modern_v5(SslMethod::tls_server()).unwrap();
    builder
        .set_private_key_file("localhost-key.pem", SslFiletype::PEM)
        .unwrap();
    builder.set_certificate_chain_file("localhost.pem").unwrap();

    // Start HTTP server
    HttpServer::new(move || {
        App::new()
            .app_data(Data::from(schema.clone()))
            .service(graphql)
            .service(graphql_playground)
            // the graphiql UI requires CORS to be enabled
            .wrap(Cors::permissive())
            .wrap(middleware::Logger::default())
    })
    .workers(2)
    .bind_openssl("0.0.0.0:8080", builder)?
    .run()
    .await
}
