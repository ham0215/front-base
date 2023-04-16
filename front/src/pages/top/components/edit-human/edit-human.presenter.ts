import { useForm } from 'react-hook-form';

type Props = {
  name?: string;
  onEndEdit?: () => void;
};

export function useEditHuman({ name, onEndEdit }: Props) {

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name,
    },
  });

  const onSubmit = handleSubmit(({ name }) => {
    onEndEdit?.();
  });

  return {
    register,
    onSubmit,
  } as const;
}
