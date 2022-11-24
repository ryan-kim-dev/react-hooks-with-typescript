type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[];
};

function PersonList(props: PersonListProps) {
  return (
    <ul>
      {props.names.map(el => (
        <li key={Math.random()}>
          {el.first} {el.last}
        </li>
      ))}
    </ul>
  );
}

export default PersonList;
