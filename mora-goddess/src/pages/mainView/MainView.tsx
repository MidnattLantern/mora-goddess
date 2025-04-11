import { ReactNode } from "react";
import Styles from "./MainView.module.css";
import SmallViewFromInside from "../../assets/downloadable/mora-temple-v1-1mb.jpg"
import LargeViewFromInside from "../../assets/downloadable/mora-temple-v1-16mb.png";

const MainView = () => {
    const PayPalInfoView = ({ children }: { children: ReactNode }) => {
        return(
          <div className={Styles.PayPalInfoView}>
            {children}
          </div>
        )
      };

    return(<>
        <div className={Styles.Foundation}>

        <PayPalInfoView>
            <h1>{"PayPal:"}</h1>
            <p>{"Alma Isaksson"}</p>
            <p>{"@midnattlantern"}</p>
        </PayPalInfoView>

        <h1>{"View from inside"}</h1>
          <img className={Styles.ImageAppearance} src={SmallViewFromInside} alt={"Failed to load image: View from inside"}/>

        <div className={Styles.DownloadButtonsView}>
            <a className={Styles.DownloadButton} href={SmallViewFromInside} download="Mora Goddess V1">
            {"Download as jpg 1mb"}
            </a>
            <a className={Styles.DownloadButton} href={LargeViewFromInside} download="Mora Goddess V1">
            {"Download as png 16mb"}
            </a>
        </div>
        
        </div>
    </>)
};

export default MainView