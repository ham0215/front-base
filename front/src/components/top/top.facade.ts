import { gql, useQuery } from '@apollo/client';
import { useCallback, useState } from 'react';

const GET_HUMAN = gql`
  query Human($id: String!) {
    human(id: $id) {
      id
      name
    }
  }
`;

export function useTop() {
  const [edit, setEdit] = useState(false);
  const { loading, error, data } = useQuery(GET_HUMAN, {
    variables: { id: '1000' },
  });

  const handleStartEdit = useCallback(() => {
    setEdit(true);
  }, []);

  return {
    loading,
    error,
    data,
    edit,
    handleStartEdit,
  } as const;
}
