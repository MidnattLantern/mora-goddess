import { useContext } from "react";
import { RenderPageContext } from "./RenderPageContext";

export const useRenderPageContext = () => {
    const context = useContext(RenderPageContext);
    if (!context) {
        throw new Error("RenderPageContext error: useRenderPageContext must be used within a RenderPageContextProvider");
    };
    return context;
};
