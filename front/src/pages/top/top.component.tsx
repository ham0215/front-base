import { useTop } from './top.facade';
import { Human, EditHuman } from './components';

export function Top() {
  const {
    loading,
    error,
    data,
    edit,
    handleStartEdit,
  } = useTop();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <>
      {
        edit ? (
          <Human
            data={data}
          />
        ) : (
          <Human
            data={data}
            onStartEdit={handleStartEdit}
          />
        )
      }
    </>
  );
}
