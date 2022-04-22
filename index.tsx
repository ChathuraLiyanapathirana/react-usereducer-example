import React, { useReducer } from 'react';
import { render } from 'react-dom';
import './style.css';

interface IState {
  value: number;
  action: string;
  oldValue: number;
}

interface IAction {
  type: string;
}

const initialState: IState = { value: 0, action: '-', oldValue: 0 };

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case 'increment':
      return {
        value: state.value + 1,
        action: 'Increment',
        oldValue: state.value,
      };
    case 'decrement':
      return {
        value: state.value - 1,
        action: 'Decrement',
        oldValue: state.value,
      };
    default:
      throw new Error();
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>useReducer() Example:</h1>
      <h3>Action Type: {state.action}</h3>
      <h3>Now Value: {state.value}</h3>
      <h3>Old Value: {state.oldValue}</h3>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
};

render(<App />, document.getElementById('root'));
