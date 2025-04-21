import Styles from "./MainView.module.css";
import SmallViewFromOutside from "../../assets/downloadable/mora-temple-v2-1mb.jpg"
import LargeViewFromOutside from "../../assets/downloadable/mora-temple-v2-6mb.png";
import ProjectViewFromInside from "../../components/projectViewFromInside/ProjectViewFromInside";

const MainView = () => {

    return(<>
        <div className={Styles.Foundation}>

        <ProjectViewFromInside />

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