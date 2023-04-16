type Props = {
  data?: any;
  onStartEdit?: () => void;
};

export function Human({ data, onStartEdit }: Props) {
  return (
    <div>
      <div className="bg-red-50">
        <button className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base" onClick={onStartEdit}>Edit</button>
      </div>
      <div>
        {data.human.id}
      </div>
      <div>
        {data.human.name}
      </div>
    </div >
  );
}
