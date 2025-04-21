import Styles from "./MainView.module.css";
import SmallViewFromInside from "../../assets/downloadable/mora-temple-v1-1mb.jpg"
import LargeViewFromInside from "../../assets/downloadable/mora-temple-v1-16mb.png";
import SmallViewFromOutside from "../../assets/downloadable/mora-temple-v2-1mb.jpg"
import LargeViewFromOutside from "../../assets/downloadable/mora-temple-v2-6mb.png";

const MainView = () => {

    return(<>
        <div className={Styles.Foundation}>

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

        <h1>{"View from outside"}</h1>
          <img className={Styles.ImageAppearance} src={SmallViewFromOutside} alt={"Failed to load image: View from inside"}/>

        <div className={Styles.DownloadButtonsView}>
            <a className={Styles.DownloadButton} href={SmallViewFromOutside} download="Mora Goddess V2">
            {"Download as jpg 1mb"}
            </a>
            <a className={Styles.DownloadButton} href={LargeViewFromOutside} download="Mora Goddess V2">
            {"Download as png 6mb"}
            </a>
        </div>
        
        </div>
    </>)
};

export default MainView