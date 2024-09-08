// import { applyMiddleware, compose, createStore } from "redux";
// import { thunk } from "redux-thunk";
// import rootReducer from "../reducer/rootReducer";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(thunk))
// );

// export default store;

import { createContext, useCallback, useEffect, useReducer } from "react";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../constants/types";

const initialState = {
  loggedInState: {
    isLoading: false,
    isLoggedIn: false,
    error: null,
    user: {
      email: null,
      password: null,
    },
  },
};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  // Load state from localStorage, if available
  const loadStateFromStorage = () => {
    const savedState = sessionStorage.getItem("loggedInState");
    return {
      loggedInState: savedState
        ? JSON.parse(savedState)
        : initialState.loggedInState,
    };
  };

  const [state, dispatch] = useReducer(
    useCallback((state, action) => {
      const newState = { ...state };
      switch (action.type) {
        case LOGIN_REQUEST:
          newState.loggedInState = {
            ...newState.loggedInState,
            isLoading: true,
          };
          return newState;
        case LOGIN_SUCCESS:
          newState.loggedInState = {
            ...newState.loggedInState,
            isLoading: false,
            isLoggedIn: true,
            user: action.payload,
          };
          return newState;
        case LOGIN_FAILURE:
          newState.loggedInState = {
            ...state.loggedInState,
            isLoading: false,
            isLoggedIn: false,
            error: action.payload,
          };
          return newState;
        default:
          return newState;
      }
    }, []),
    { ...initialState, ...loadStateFromStorage() }
  );

  useEffect(() => {
    // Save state to localStorage whenever it changes
    sessionStorage.setItem(
      "loggedInState",
      JSON.stringify(state.loggedInState)
    );
  }, [loadStateFromStorage()]);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
