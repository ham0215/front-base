import { useTop } from './top.facade';
import { Human, EditHuman } from './components';

export function Top() {
  const {
    loading,
    error,
    data,
    edit,
    handleStartEdit,
    handleEndEdit,
  } = useTop();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <>
      {
        edit ? (
          <EditHuman
            name={data?.human.name}
            onEndEdit={handleEndEdit}
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
