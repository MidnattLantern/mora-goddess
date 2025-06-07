import Styles from "./App.module.css";
import PayPalQR from "./components/payPalQR/PayPalQR";
import Footer from "./pages/footer/Footer";
import MainView from "./pages/mainView/MainView";
import { usePayPalContext } from "./contexts/usePayPalContext";
import { useRenderPageContext } from "./contexts/useRenderPageContext";
import Wallpaper from "./components/wallpaper/Wallpaper";
import PayPalInfo from "./components/payPalInfo/PayPalInfo";
import { useWindowSize } from "./hooks/useWindowSize";
import WeblogViewFromInside from "./pages/weblog/viewFromInside/ViewFromInside";
import WeblogViewFromOutside from "./pages/weblog/viewFromOutside/ViewFromOutside";
import WeblogBustPortrait from "./pages/weblog/bustPortrait/BustPortrait";
import WeblogMoraIcon from "./pages/weblog/moraIcon/MoraIcon";
import Shrine from "./pages/weblog/shrine/Shrine";

function App() {
  const { displayQRCode } = usePayPalContext();
  const { pageName, setPageName } = useRenderPageContext();
  const { width } = useWindowSize();

  const MainPageComponent = () => {
    return(<>
        {width > 1024 && <PayPalInfo />}
      <div className={Styles.MainView}>
      <MainView />
      <div className={Styles.BottomMargin}/>
    </div>
    <Wallpaper />
    </>)
  };
  const NotFoundComponent = () => {
    return(<>
      <h1>Page not found</h1>
      <button onClick={() => {setPageName("main")}}>Return to main menu</button>
    </>)
  };

  const RenderPage = () => {
    switch (pageName) {
      case "main":
        return <MainPageComponent />;
      case "weblog-view-from-inside":
        return <WeblogViewFromInside />;
        case "weblog-view-from-outside":
          return <WeblogViewFromOutside />;
        case "weblog-bust-portrait":
          return <WeblogBustPortrait />;
        case "weblog-mora-icon":
          return <WeblogMoraIcon />;
        case "weblog-shrine":
          return <Shrine />
      default:
        return <NotFoundComponent />;
    }
  };

  return (<>
    <div className={Styles.Foundation}>

    {displayQRCode ?
      <PayPalQR />
    : null}

  <RenderPage />

    {width > 1024 &&
      <div className={Styles.FooterView}>
        <Footer />
      </div>
    }
      
    </div>
  </>)
};

export default App
