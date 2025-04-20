import Styles from "./PayPalQR.module.css";
import QRCode from "../../assets/paypal/PayPalQR.png";
import { usePayPalContext } from "../../contexts/usePayPalContext";

const PayPalQR = () => {
    const { setDisplayQRCode } = usePayPalContext();

    const CloseButton = () => {
        return (
            <button onClick={() => {setDisplayQRCode(false)}} className={Styles.CloseButton}>
                {"x"}
            </button>
        )
    };

    return (<>
        <div className={Styles.Foundation}>
            <div className={Styles.ScanView}>
                <CloseButton />
                <h1 className={Styles.Header}>Scan QR code</h1>
                <img className={Styles.QRCodeAppearance} src={QRCode} alt="Couldn't load QR code"/>
            </div>
        </div>
    </>)
};

export default PayPalQR;