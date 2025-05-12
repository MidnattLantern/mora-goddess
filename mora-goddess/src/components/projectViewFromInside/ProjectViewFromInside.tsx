import Styles from "./ProjectViewFromInside.module.css";
import SmallViewFromInside from "../../assets/downloadable/mora-temple-v1-1mb.jpg"
import LargeViewFromInside from "../../assets/downloadable/mora-temple-v1-16mb.png";
import DownloadIcon from "../../assets/svg/DownloadIcon.svg?react";
import TurnPageIcon from "../../assets/svg/TurnPageIcon.svg?react";
import { useRenderPageContext } from "../../contexts/useRenderPageContext";

const ProjectViewFromInside = () => {
    const { setPageName } = useRenderPageContext();

    const Image = () => {
        return(
            <div className={Styles.ImageContainer}>
                <img className={Styles.ImageSize} src={SmallViewFromInside} alt={"Failed to load image: View from inside"}/>
            </div>
        )
    };

    const NavigationBar = () => {
        return(
            <div>
                <div className={Styles.NavigationBarContainer}>
                    <a className={Styles.DownloadButton} href={SmallViewFromInside} download={"view from inside"}>
                        <DownloadIcon className={Styles.DownloadIcon}/>
                        {"As jpg 1mb"}
                    </a>
                    <a className={Styles.DownloadButton} href={LargeViewFromInside} download={"view from inside"}>
                        <DownloadIcon className={Styles.DownloadIcon}/>
                        {"As png 16mb"}
                    </a>
                    <button className={Styles.LinkToWeblogButton} onClick={() => {setPageName("weblog-view-from-inside")}}>
                        {"Read the Weblog"}
                        <TurnPageIcon className={Styles.TurnPageIcon}/>
                    </button>
                </div>
            </div>
        )
    };

    return (
        <>
            <div className={Styles.Foundation}>
                <div className={Styles.TitleContainer}>
                    <h1 className={Styles.TitleText}>{"View from inside"}</h1>
                </div>

                <div className={Styles.ImageAndNavigationContainer}>
                    <Image />
                    <NavigationBar />
                </div>

            </div>
        </>
    );
}
export default ProjectViewFromInside;