import React from "react";
import { createCustomContext } from "../utils/CreateCustomContext";

interface IError {
   title: string;
   message: string;
}
interface IGlobalState {
   showSidebar?: boolean;
   loading?: boolean;
   error: IError;
   phoneNumber?: string;
   showChangeNumberDialog: boolean;
}

const initialState: IGlobalState = {
   showSidebar: false,
   loading: false,
   error: { message: "", title: "" },
   showChangeNumberDialog: false,
};

function setState(state: IGlobalState, newState: Partial<IGlobalState>): IGlobalState {
   return { ...state, ...newState };
}

const functions = {
   setState,
};

const { Context, Provider, useContextHook } = createCustomContext<IGlobalState, typeof functions>({
   initialState,
   functions,
});

export const GlobalContextProvider = Provider;
export const useGlobalContext = useContextHook;
