import Styles from "./App.module.css";
import PayPalQR from "./components/payPalQR/PayPalQR";
import Footer from "./pages/footer/Footer";
import MainView from "./pages/mainView/MainView";
import { usePayPalContext } from "./contexts/usePayPalContext";
import Wallpaper from "./components/wallpaper/Wallpaper";
import PayPalInfo from "./components/payPalInfo/PayPalInfo";
import { useWindowSize } from "./hooks/useWindowSize";
import { Routes, Route } from "react-router-dom";
import WeblogViewFromInside from "./pages/weblog/viewFromInside/ViewFromInside";

function App() {
  const { displayQRCode } = usePayPalContext();
  const { width } = useWindowSize();

  return (<>
    <div className={Styles.Foundation}>

    {width > 768 && <PayPalInfo />}

    {displayQRCode ?
      <PayPalQR />
    : null}

      <Routes>

        <Route path="mora-goddess" element={<>
          <div className={Styles.MainView}>
            <MainView />
            <div className={Styles.BottomMargin}/>
          </div>
          <Wallpaper />
        </>}/>

        <Route path="mora-goddess/weblog/view-from-inside" element={<>
          <WeblogViewFromInside />
        </>}/>

        <Route path="mora-goddess/weblog/view-from-outside" element={<>
          <h1>View from outside weblog</h1>
        </>}/>

        <Route path="*" element={<>
          <h1>404 Not found</h1>
        </>}/>

      </Routes>

    {width > 768 &&
      <div className={Styles.FooterView}>
        <Footer />
      </div>
    }
      
    </div>
  </>)
};

export default App
