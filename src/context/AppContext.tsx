"use client"
import { Post } from "@/types/index.s";
import { createContext, PropsWithChildren, useState } from "react";

interface AppContextProps {
    apiURL: string;
    apiKey: string;
    postsContext: Post[];
    setPostsContext: React.Dispatch<React.SetStateAction<Post[]>>;
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps)

export const AppProvider = ({children}: PropsWithChildren) => {
    /* const originURL = AppSettings.URL.origin

    const getAPI = () => {
        if(originURL.includes('dev') || originURL.includes('localhost')){
            return{
                url: env.API_URL,
                key: ''
            }
        }else if(originURL.includes('medical-control')){
            return{
                url: env.API_URL,
                key: ''
            }
        }
        else{
            throw new Error(`Não foi possível detectar a origem do servidor: "${originURL}"`)
        }
    } */
    const [postsContext, setPostsContext] = useState<Post[]>([])
    const apiURL = 'http://localhost:8000/'
    const apiKey = ''

    return(
        <AppContext.Provider value={{
            apiURL,
            apiKey,
            postsContext,
            setPostsContext
        }}>
            {children}
        </AppContext.Provider>
    )
}