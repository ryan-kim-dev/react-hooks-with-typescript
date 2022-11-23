import { useState } from 'react';
import Timer from './components/Timer';

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggleButton = () => {
    return setIsOpen(!isOpen);
  };

  return (
    <div>
      {isOpen && <Timer />}
      <button onClick={handleToggleButton}>Toggle Timer</button>
    </div>
  );
}

export default App;
