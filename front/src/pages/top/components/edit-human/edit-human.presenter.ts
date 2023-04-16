import { useForm } from 'react-hook-form';

type Props = {
  name?: string;
  onEndEdit?: () => void;
  onUpdateHuman?: ({ id, name }: { id: string, name: string }) => void;
};

export function useEditHuman({ name, onEndEdit, onUpdateHuman }: Props) {

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name,
    },
  });

  const onSubmit = handleSubmit(({ name }) => {
    if (!name) return;

    onEndEdit?.();
    onUpdateHuman?.({ id: '1234', name });
  });

  return {
    register,
    onSubmit,
  } as const;
}
