import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';

function App() {
  const username = {
    first: 'Ryan',
    last: 'Kim',
  };

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne',
    },
    {
      first: 'Clark',
      last: 'Kent',
    },
    {
      first: 'Princess',
      last: 'Diana',
    },
  ];

  return (
    <div>
      <Greet username="FE라이언" msgCount={20} isLoggedIn={false} />
      <Person name={username} />
      <PersonList names={nameList} />
      <Status status="success" />
    </div>
  );
}

export default App;
