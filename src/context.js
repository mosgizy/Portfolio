import React, { useReducer, useEffect, useContext } from 'react'
import * as actions from './actionTypes'

const AppContext = React.createContext();
const url = "https://my-json-server.typicode.com/mosgizy/Portfolio-Api/db"

const reducer = (state, action) => {
    if (action.type === actions.SET_DATA) {
        return {
            ...state,
            projects: [...action.payload.projects],
            skills: { ...action.payload.skills },
            avatar: { ...action.payload.avatar },
            api_key:{...action.payload.api_key}
        }
    }

    if (action.type === actions.PAGE_UPDATED) {
        return {
            ...state,
            pages: { ...state.pages, ...action.payload }
        }
    }

    if (action.type === actions.STOP_LOADER) {
        return {
            ...state,
            loader:true,
        }
    }

    return state
}

const defaultValue = {
    projects: [],
    skills: {},
    avatar: {},
    loader: false,
    api_key:{}
}

const Context = ({ children }) => {
    const [data, dispatch] = useReducer(reducer, defaultValue);

    const getProjects = async () => {
        try {
            const data = await fetch(url);
            const response = await data.json();
            return response
        } catch (error) {
            console.error(error)
        }
    }

    const scroll = (id) => {
        const view = document.getElementById(id)
        if (view) {
            view.scrollIntoView({behavior:'smooth'})
        }
    }

    const checkScroll = (id) => {
        const view = document.getElementById(id);
        if (view) {
            const rect = view.getBoundingClientRect();
            // console.log(rect.top,window.innerHeight,rect.bottom)
            // console.log(rect)
            return (
                rect.top <= 120 &&
                rect.bottom >= 0
            );
        }
    };

    useEffect(() => {
        getProjects().then((res) => {
            dispatch({ type: actions.SET_DATA, payload: { ...res } })
            dispatch({ type: actions.STOP_LOADER, payload: false })
        })
    }, [])

    return (
        <AppContext.Provider value={{ ...data,scroll,checkScroll }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)

export { Context, AppContext }
