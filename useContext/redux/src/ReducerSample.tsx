import { useSampleState, useSampleDispatch } from './SampleContext';

function ReducerSample() {
  const state = useSampleState();
  const dispatch = useSampleDispatch();

  const setCount = () => dispatch({ type: 'SET_COUNT', count: 5 });
  const setText = () => dispatch({ type: 'SET_TEXT', text: 'b2b2' });
  const setColor = () => dispatch({ type: 'SET_COLOR', color: 'orange' });
  const toggleGood = () => dispatch({ type: 'TOGGLE_GOOD' });

  return (
    <div>
      <p>
        <code>count: </code> {state.count}
      </p>
      <p>
        <code>count: </code> {state.text}
      </p>
      <p>
        <code>count: </code> {state.color}
      </p>
      <p>
        <code>count: </code> {state.isGood ? 'true' : 'false'}
      </p>
      <div>
        <button onClick={setCount}>SET_COUNT</button>
        <button onClick={setText}>SET_TEXT</button>
        <button onClick={setColor}>SET_COLOR</button>
        <button onClick={toggleGood}>SET_GOOD</button>
      </div>
    </div>
  );
}

export default ReducerSample;
