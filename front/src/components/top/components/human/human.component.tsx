type Props = {
  loading?: boolean;
  error?: any;
  edit?: boolean;
  data?: any;
  onStartEdit?: () => void;
};

export function Human({ loading, error, edit, data, onStartEdit }: Props) {
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
              <button onClick={onStartEdit}>Edit</button>
            </div>
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
