import { useContext } from "react";
import { PayPalContext } from "./PayPalContext";

export const usePayPalContext = () => {
    const context = useContext(PayPalContext);
    if (!context) {
        throw new Error("PayPalContext error: usePayPalContext must be used within a PayPalContextProvider");
    };
    return context;
};
