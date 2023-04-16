import { useEditHuman } from "./edit-human.presenter";

type Props = {
  name?: string;
  onEndEdit?: () => void;
};

export function EditHuman({ name, onEndEdit }: Props) {
  const { register, onSubmit } = useEditHuman({ name, onEndEdit });

  return (
    <form onSubmit={onSubmit}>
      <input {...register("name")} />
      <div className="bg-red-50">
        <input type="submit" className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base" />
      </div>
    </form>
  );
}
