import React, { useReducer, useContext, createContext, Dispatch } from 'react';

type Color = 'red' | 'orange' | 'yellow';

// state의 타입
type State = {
  count: number;
  text: string;
  color: Color;
  isGood: boolean;
};

// action의 타입
type Action =
  | { type: 'SET_COUNT'; count: number }
  | { type: 'SET_TEXT'; text: string }
  | { type: 'SET_COLOR'; color: Color }
  | { type: 'TOGGLE_GOOD' };

// dispatch 함수의 타입
type SampleDispatch = Dispatch<Action>;

// createContext
const SampleStateContext = createContext<State | null>(null);
const SampleDispatchContext = createContext<SampleDispatch | null>(null);

// reducer 함수
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_COUNT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'SET_TEXT':
      return {
        ...state,
        text: action.text,
      };
    case 'SET_COLOR':
      return {
        ...state,
        color: action.color,
      };
    case 'TOGGLE_GOOD':
      return {
        ...state,
        isGood: !state.isGood,
      };
    default:
      throw new Error('정의되지 않은 action입니다');
  }
}

export function SampleProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    text: 'hello',
    color: 'red',
    isGood: true,
  });

  return (
    <SampleStateContext.Provider value={state}>
      <SampleDispatchContext.Provider value={dispatch}>
        {children}
      </SampleDispatchContext.Provider>
    </SampleStateContext.Provider>
  );
}

// state, dispatch 사용 커스텀 hooks
export function useSampleState() {
  const state = useContext(SampleStateContext);
  if (!state) throw new Error('SampleProvider가 없습니다'); // 유효하지 않은 경우

  return state;
}

export function useSampleDispatch() {
  const dispatch = useContext(SampleDispatchContext);
  if (!dispatch) throw new Error('SampleProvider가 없습니다'); // 유효하지 않은 경우

  return dispatch;
}
