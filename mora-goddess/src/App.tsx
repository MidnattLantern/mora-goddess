import Styles from "./App.module.css";
import PayPalQR from "./components/payPalQR/PayPalQR";
import Footer from "./pages/footer/Footer";
import MainView from "./pages/mainView/MainView";
import { usePayPalContext } from "./contexts/usePayPalContext";

function App() {
  const { displayQRCode } = usePayPalContext();

  return (<>
    <div className={Styles.Foundation}>

    {displayQRCode ?
      <PayPalQR />
    : null}

    <div className={Styles.MainView}>
      <MainView />
    </div>
    <div className={Styles.FooterView}>
      <Footer />
    </div>
      
    </div>
  </>)
};

export default App
