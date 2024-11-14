import React, { createContext, useReducer } from "react";

const initialState = {
  token: null,
  user: null,
};

const AppContext = createContext(initialState);

const appReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, token: action.payload.token, user: action.payload.user };
    case "LOGOUT":
      return { ...state, token: null, user: null };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
