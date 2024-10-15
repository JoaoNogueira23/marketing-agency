import { AppContext, AppProvider } from "@/context/AppContext";
import { useContext } from "react";


export function Providers({children}:{
    children: React.ReactNode
} ) {
    return(
        <AppProvider>
            {children}
        </AppProvider>
        
    )
}

export const useAppContext = () => {
    const context = useContext(AppContext)

    return context
}