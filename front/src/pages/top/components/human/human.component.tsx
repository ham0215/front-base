type Props = {
  data?: any;
  onStartEdit?: () => void;
};

export function Human({ data, onStartEdit }: Props) {
  return (
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
    </div >
  );
}
