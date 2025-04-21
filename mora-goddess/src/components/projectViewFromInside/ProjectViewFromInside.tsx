import Styles from "./ProjectViewFromInside.module.css";
import SmallViewFromInside from "../../assets/downloadable/mora-temple-v1-1mb.jpg"
import LargeViewFromInside from "../../assets/downloadable/mora-temple-v1-16mb.png";
import DownloadIcon from "../../assets/svg/DownloadIcon.svg?react";
import TurnPageIcon from "../../assets/svg/TurnPageIcon.svg?react";
import { Link } from "react-router-dom";

const ProjectViewFromInside = () => {
    return (
        <>
            <div className={Styles.Foundation}>
                <div className={Styles.TitleContainer}>
                    <h1 className={Styles.TitleText}>{"View from inside"}</h1>
                </div>

                <div className={Styles.ImageAndNavigationContainer}>
                    <div className={Styles.ImageContainer}>
                        <img className={Styles.ImageSize} src={SmallViewFromInside} alt={"Failed to load image: View from inside"}/>
                    </div>
                    <div className={Styles.NavigationBarContainer}>
                        <a className={Styles.DownloadButton} href={SmallViewFromInside} download={"view from inside"}>
                            <DownloadIcon className={Styles.DownloadIcon}/>
                            {"As jpg 1mb"}
                        </a>
                        <a className={Styles.DownloadButton} href={LargeViewFromInside} download={"view from inside"}>
                            <DownloadIcon className={Styles.DownloadIcon}/>
                            {"As png 16mb"}
                        </a>
                        <Link className={Styles.LinkToWeblogButton} to={"./weblog/view-from-inside"}>
                            {"Read the Weblog"}
                            <TurnPageIcon className={Styles.TurnPageIcon}/>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    );
}
export default ProjectViewFromInside;