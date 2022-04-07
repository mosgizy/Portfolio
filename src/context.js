import React, { useReducer, useEffect, useContext } from 'react'

const AppContext = React.createContext();
const url = "https://my-json-server.typicode.com/mosgizy/Portfolio-Api/db"

const reducer = (state, action) => {
    if (action.type === 'SET') {
        return {
            ...state,
            projects:[...action.payload.projects],
            skills: { ...action.payload.skills },
            avatar:{...action.payload.avatar}
        }
    }
}

const defaultValue = {
    projects: [],
    skills: {},
    avatar: {},
}

const Context = React.memo(({ children }) => {
    const [data, dispatch] = useReducer(reducer,defaultValue );

    const getProjects = async () => {
        const data = await fetch(url);
        const response = await data.json();
        dispatch({type:"SET",payload:{...response}})
    }
    
    useEffect(() => {
        getProjects()
    }, [])

    return (
        <AppContext.Provider value={{ ...data}}>
            {children}
        </AppContext.Provider>
    )
})

export const useGlobalContext = () => useContext(AppContext)

export { Context, AppContext }
