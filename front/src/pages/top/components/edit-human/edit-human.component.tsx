type Props = {
  data?: any;
};

export function EditHuman({ data }: Props) {
  return (
    <div>
      <div>
        {data.human.id}
      </div>
      <div>
        {data.human.name}
      </div>
    </div >
  );
}
