import { gql, useQuery } from '@apollo/client';
import { useCallback, useState } from 'react';

type HumanType = {
  human: {
    id: number;
    name: string;
  };
};

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
  const { loading, error, data } = useQuery<HumanType>(GET_HUMAN, {
    variables: { id: '1000' },
  });

  const handleStartEdit = useCallback(() => {
    setEdit(true);
  }, []);

  const handleEndEdit = useCallback(() => {
    setEdit(false);
  }, []);

  return {
    loading,
    error,
    data,
    edit,
    handleStartEdit,
    handleEndEdit,
  } as const;
}
