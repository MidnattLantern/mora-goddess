import { createContext, useState } from "react";

const RenderPageContext = createContext<RenderPageContextType | undefined>(undefined);

interface RenderPageContextType {
    pageName : string;
    setPageName : React.Dispatch<React.SetStateAction<string>>;
};

interface RenderPageContextProps {
    children: React.ReactNode;
};

const RenderPageContextProvider: React.FC<RenderPageContextProps> = ({children}) => {
    const [pageName, setPageName] = useState<string>("main");

    return (
        <RenderPageContext.Provider value={{
            pageName,
            setPageName
        }}>
            {children}
        </RenderPageContext.Provider>
    );
};

export { RenderPageContextProvider, RenderPageContext };