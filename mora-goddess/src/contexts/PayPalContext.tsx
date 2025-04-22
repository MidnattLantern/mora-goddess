import { createContext, useState } from "react";

const PayPalContext = createContext<PayPalContextType | undefined>(undefined);

interface PayPalContextType {
    displayQRCode : boolean;
    setDisplayQRCode : React.Dispatch<React.SetStateAction<boolean>>;
};

interface PayPalContextProps {
    children: React.ReactNode;
};

const PayPalContextProvider: React.FC<PayPalContextProps> = ({children}) => {
    const [displayQRCode, setDisplayQRCode] = useState<boolean>(false);

    return (
        <PayPalContext.Provider value={{
            displayQRCode,
            setDisplayQRCode
        }}>
            {children}
        </PayPalContext.Provider>
    );
};

export { PayPalContextProvider, PayPalContext };