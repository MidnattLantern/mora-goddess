import Styles from "./App.module.css";
import PayPalQR from "./components/payPalQR/PayPalQR";
import Footer from "./pages/footer/Footer";
import MainView from "./pages/mainView/MainView";
import { usePayPalContext } from "./contexts/usePayPalContext";
import Wallpaper from "./components/wallpaper/Wallpaper";
import PayPalInfo from "./components/payPalInfo/PayPalInfo";
import { useWindowSize } from "./hooks/useWindowSize";

function App() {
  const { displayQRCode } = usePayPalContext();
  const { width } = useWindowSize();

  return (<>
    <div className={Styles.Foundation}>

    {width > 768 && <PayPalInfo />}

    {displayQRCode ?
      <PayPalQR />
    : null}

    <div className={Styles.MainView}>
      <MainView />
    </div>

    {width > 768 &&
      <div className={Styles.FooterView}>
        <Footer />
      </div>
    }


    <Wallpaper />
      
    </div>
  </>)
};

export default App
