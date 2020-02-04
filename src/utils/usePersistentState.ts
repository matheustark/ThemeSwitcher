import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type Repsponse<T> = [
  T,
  Dispatch<SetStateAction<T>>,
]

function usePersistentState<T>(key: string, initialValue: any ) {
  const [ state, setState ] = useState(() => {
    const storageValue = localStorage.getItem(key);

    if(storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state])

  return [state, setState];
}

export default usePersistentState;