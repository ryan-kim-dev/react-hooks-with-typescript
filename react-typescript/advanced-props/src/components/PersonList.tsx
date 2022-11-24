import { Name } from '../types/Person.types';

type PersonListProps = {
  names: Name[];
};

function PersonList({ names }: PersonListProps) {
  return (
    <div>
      {names.map(el => (
        <div>
          {el.first} {el.last}
        </div>
      ))}
    </div>
  );
}

export default PersonList;
