import { useReducer,useContext,createContext } from "react";
import reducer from "./reducer";
import { initialState } from "./reducer";

export const stateContext= createContext();
export  function StateProvider({children}){
       return <stateContext.Provider value={useReducer(reducer,initialState)}>
            {children}
        </stateContext.Provider>   
}

export const useStateProvider = ()=> useContext(stateContext);