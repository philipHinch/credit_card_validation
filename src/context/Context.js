import { createContext, useReducer } from "react";

export const Context = createContext()

export const Reducer = (state, action) => {
    switch (action.type) {
        case 'NAME':
            return { ...state, name: action.payload }
        default:
            return state;
    }
}

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, {
        title: null,
        name: null,
        font_theme: null,
        back_color: null
    })

    return (
        <Context.Provider value={{ ...state, dispatch }}>
            {children}
        </Context.Provider>
    )
}

