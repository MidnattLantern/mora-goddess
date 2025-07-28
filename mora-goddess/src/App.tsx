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
import { Link, Route, Routes } from "react-router-dom";
import UsedTech from "./pages/usedTech/UsedTech";

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
    <Routes>
      <Route path="/" element={
        <RenderPage />
      }/>
      <Route path="/tech" element={
        <UsedTech/>
      }/>
      <Route path="*" element={<>
        <h1>404</h1>
        <Link to="/">Return home</Link>
        </>}/>
    </Routes>

    {width > 1024 &&
      <div className={Styles.FooterView}>
        <Footer />
      </div>
    }
      
    </div>
  </>)
};

export default App
