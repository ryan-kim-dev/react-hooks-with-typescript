import { useMyContext } from './hooks/useMyContext';
import { MyContext } from './contexts';
import { value } from './data';

function App() {
  return (
    <MyContext.Provider value={value}>
      <AwesomeComponent />
    </MyContext.Provider>
  );
}

export default App;

function AwesomeComponent() {
  return (
    <div>
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
    </div>
  );
}

function FirstComponent() {
  const value = useMyContext();
  return <div>First Component says: "{value}"</div>;
}

function SecondComponent() {
  const value = useMyContext();
  return <div>Second Component says: "{value}"</div>;
}

function ThirdComponent() {
  const value = useMyContext();
  return <div>Third Component says: "{value}"</div>;
}
