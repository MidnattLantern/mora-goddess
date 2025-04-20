import { ReactNode } from "react";
import Styles from "./PayPalInfo.module.css";
import { usePayPalContext } from "../../contexts/usePayPalContext";

const PayPalInfo = () => {
      const { displayQRCode, setDisplayQRCode } = usePayPalContext();

    const PayPalInfoView = ({ children }: { children: ReactNode }) => {
        return(
            <p className={Styles.PayPalInfoView}>
                {children}
            </p>
        )
    };

    const InfoTagItem = ({ children }: { children: ReactNode }) => {
        return(
            <div className={Styles.InfoTagItem}>
                {children}
            </div>
        )
    };  

    return (
        <div className={Styles.Foundation}>
            <PayPalInfoView>
                <h1 className={Styles.PayPalHeader}>{"PayPal:"}</h1>
                <div className={Styles.PayPalInfoTags}>
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
            </PayPalInfoView>
        </div>
    )
};

export default PayPalInfo;