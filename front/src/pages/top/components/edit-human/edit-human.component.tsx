type Props = {
  loading?: boolean;
  error?: any;
  edit?: boolean;
  data?: any;
};

export function EditHuman({ loading, error, edit, data }: Props) {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <>
      {
        edit ? (
          <div>
            <div>
              {data.human.id}
            </div>
            <div>
              {data.human.name}
            </div>
          </div >
        ) : (
          <div>
            <div>
              {data.human.id}
            </div>
            <div>
              {data.human.name}
            </div>
          </div>
        )
      }
    </>
  );
}
