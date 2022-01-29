import React, { useReducer, useContext } from "react";

// Initial State

const initialState = {
    url: "http://notesrailsbackend.herokuapp.com"
}


// Reducer 
const reducer = (state, action) => {

    switch(action.type){

        default: {
            return state
        }
    }
}

/// app context
const AppContext = React.createContext(null)

export const AppState = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return <AppContext.Provider value={{state, dispatch}}>{props.children}</AppContext.Provider>
}


// useAppState Hook

export const useAppState = () => {
    return React.useContext(AppContext)
}


