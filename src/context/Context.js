import { createContext, useEffect, useReducer } from "react";

export const Context = createContext()

export const Reducer = (state, action) => {
    switch (action.type) {
        case 'NAME':
            return { ...state, name: action.payload }
        case 'TITLE':
            return { ...state, title: action.payload }
        case 'THEME':
            return { ...state, front_theme: action.payload }
        case 'BACKGROUND':
            return { ...state, back_color: action.payload }
        default:
            return state;
    }
}

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, {
        title: null,
        name: null,
        front_theme: null,
        back_color: null
    })

    return (
        <Context.Provider value={{ ...state, dispatch }}>
            {children}
        </Context.Provider>
    )
}

