import { gql, useQuery } from '@apollo/client';

const GET_HUMAN = gql`
  query Human($id: String!) {
    human(id: $id) {
      id
      name
    }
  }
`;

export function App() {
  const { loading, error, data } = useQuery(GET_HUMAN, {
    variables: { id: '1000' },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  console.log(data);

  return (
    <p>
      {data.human.id}
      <br />
      {data.human.name}
    </p>
  )
}
