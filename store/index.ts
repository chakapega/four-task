import { useMemo } from 'react';
import { createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { StoreStateType } from './../types/index';
import rootReducer from './reducer';

const initialState: StoreStateType = {
  user: {
    users: [],
  },
};

let store: Store | undefined;

export const initializeStore = (preloadedState = initialState): Store => {
  let newStore = store ?? createStore(rootReducer, preloadedState, composeWithDevTools());

  if (preloadedState && store) {
    newStore = createStore(
      rootReducer,
      {
        ...store.getState(),
        ...preloadedState,
      },
      composeWithDevTools()
    );

    store = undefined;
  }

  if (typeof window === 'undefined') return newStore;

  if (!store) store = newStore;

  return newStore;
};

export function useStore(initialState: StoreStateType): Store {
  const store = useMemo(() => initializeStore(initialState), [initialState]);

  return store;
}
