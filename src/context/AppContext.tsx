import { createContext, PropsWithChildren } from "react";
import { env } from "../settings/env";
import { AppSettings } from "@/settings/AppSettings";

interface AppContextProps {
    apiURL: string;
    apiKey: string;
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps)

export const AppProvider = ({children}: PropsWithChildren) => {
    const originURL = AppSettings.URL.origin

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
    }

    const apiURL = getAPI()['url']
    const apiKey = getAPI()['key']

    return(
        <AppContext.Provider value={{
            apiURL,
            apiKey
        }}>
            {children}
        </AppContext.Provider>
    )
}