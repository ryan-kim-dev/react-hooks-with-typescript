import { useContext } from 'react';
import { MyContext } from '../contexts';

export function useMyContext() {
  return useContext(MyContext);
}
