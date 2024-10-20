import { createContext, useEffect, useReducer } from "react";
import { State, Action, GlobalStateProviderProps } from "../types/GlobalStateContext.types";

const initialState: State = {
  users: [],
  categories: [],
  currentUser: JSON.parse(localStorage.getItem("currentUser") || "null"),
  isAuthenticated: JSON.parse(localStorage.getItem("currentUser") || "null")
    ? true
    : false,
  loading: false,
  error: null,
};

export const GlobalStateContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => {} });

const globalReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        currentUser: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        currentUser: null,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "SET_CATEGORIES": 
      return { 
        ...state, 
        categories: action.payload 
      };
    default:
      return state;
  }
};

export const GlobalStateProvider: React.FC<GlobalStateProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  useEffect(() => {
    if (state.currentUser) {
      console.log(state.currentUser);
      localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
    } else {
      localStorage.removeItem("currentUser");
    }
  }, [state.currentUser]);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};