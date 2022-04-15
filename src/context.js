import React, { useReducer, useEffect, useContext } from 'react'

const AppContext = React.createContext();
const url = "https://my-json-server.typicode.com/mosgizy/Portfolio-Api/db"

const reducer = (state, action) => {
    if (action.type === 'SET') {
        return {
            ...state,
            projects: [...action.payload.projects],
            skills: { ...action.payload.skills },
            avatar: { ...action.payload.avatar }
        }
    }

    if (action.type === "PAGE_UPDATE") {
        return {
            ...state,
            pages: { ...state.pages, ...action.payload }
        }
    }

    if (action.type === "LOAD_STOP") {
        return {
            ...state,
            loader:true,
        }
    }
}

const defaultValue = {
    projects: [],
    skills: {},
    avatar: {},
    pages: { home: 0, about: 0, projects: 0, contact: 0 },
    loader:false,
}

const Context = ({ children }) => {
    const [data, dispatch] = useReducer(reducer, defaultValue);

    const getProjects = async () => {
        const data = await fetch(url);
        const response = await data.json();
        return response
    }

    useEffect(() => {
        getProjects().then((res) => {
            dispatch({ type: "SET", payload: { ...res } })
            dispatch({ type: "LOAD_STOP", payload: false })
        })
    }, [])

    return (
        <AppContext.Provider value={{ ...data,navH:data.pages.navH, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)

export { Context, AppContext }
