import { ReactNode, useEffect } from "react";
import Styles from "./PayPalInfo.module.css";
import { usePayPalContext } from "../../contexts/usePayPalContext";
import { useState } from "react";
import PayPalLogo from "../../assets/paypal/PayPal-logo.png";

const PayPalInfo = () => {
    const { displayQRCode, setDisplayQRCode } = usePayPalContext();
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
    const [foundationWidth, setFoundationWidth] = useState<number>(100);

    // components
    const PayPalInfoView = () => {
        return(
            <div className={Styles.PayPalInfoView}>

                <InfoTagItem>
                    {"isakvent@outlook.com"}
                </InfoTagItem>
                <InfoTagItem>
                    <a href={"https://www.paypal.com/paypalme/midnattlantern"} target="_blank">{"PayPal.me/midnattlantern"}</a>
                </InfoTagItem>
                <InfoTagItem>
                    <button onClick={() => {setDisplayQRCode(!displayQRCode)}} className={Styles.ShowQRCodeButton}>
                        { displayQRCode ?
                        "Hide QR code" :
                        "Show QR code" }
                    </button>
                </InfoTagItem>

            </div>
        )
    };
    const InfoTagItem = ({ children }: { children: ReactNode }) => {
        return(
            <p className={Styles.InfoTagItem}>
                {children}
            </p>
        )
    };  

    // effects
    useEffect(() => {
        if (isCollapsed) {
            setFoundationWidth(850);
        } else {
            setFoundationWidth(100);
        }
    }, [isCollapsed]);

    // render
    return (
            <div
            onMouseEnter={() => {setIsCollapsed(true)}} // for mouse devices
            onMouseLeave={() => {setIsCollapsed(false)}} // for mouse devices
            className={Styles.Foundation} style={{ width: `${foundationWidth}px` }}>

            <button className={Styles.LogoCollapse}
            onTouchStart={() => {setIsCollapsed(!isCollapsed)}} // for touch devices
            >
                <img src={PayPalLogo} alt="PayPal Logo" className={Styles.LogoSize}/>
            </button>

            <PayPalInfoView />

        </div>
    )
};

export default PayPalInfo;