import { gql, useQuery, useMutation } from '@apollo/client';
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

const UPDATE_HUMAN = gql`
  mutation UpdateHuman($id: String!, $name: String!) {
    updateHuman(id: $id, name: $name) {
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
  const [updateHuman] = useMutation(UPDATE_HUMAN);

  const handleStartEdit = useCallback(() => {
    setEdit(true);
  }, []);

  const handleEndEdit = useCallback(() => {
    setEdit(false);
  }, []);

  const handleUpdateHuman = useCallback(({ id, name }: { id: string, name: string }) => {
    updateHuman({
      variables: {
        id,
        name,
      },
    });
  }, [updateHuman]);

  return {
    loading,
    error,
    data,
    edit,
    handleStartEdit,
    handleEndEdit,
    handleUpdateHuman,
  } as const;
}
