import Styles from "./App.module.css";
import Footer from "./pages/footer/Footer";
import MainView from "./pages/mainView/MainView";

function App() {

  return (<>
    <div className={Styles.Foundation}>

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
