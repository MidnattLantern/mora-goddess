import Styles from "./ProjectViewFromOutside.module.css";
import SmallViewFromOutside from "../../assets/downloadable/mora-temple-v2-1mb.jpg"
import LargeViewFromOutside from "../../assets/downloadable/mora-temple-v2-6mb.png";
import DownloadIcon from "../../assets/svg/DownloadIcon.svg?react";
import TurnPageIcon from "../../assets/svg/TurnPageIcon.svg?react";
import { useRenderPageContext } from "../../contexts/useRenderPageContext";

const ProjectViewFromOutside = () => {
    const { setPageName } = useRenderPageContext();

    const Image = () => {
        return (
            <div className={Styles.ImageContainer}>
                <img className={Styles.ImageSize} src={SmallViewFromOutside} alt={"Failed to load image: View from outside"}/>
            </div>
        )
    };

    const NavigationBar = () => {
        return (
            <div className={Styles.NavigationBarContainer}>
                <a className={Styles.DownloadButton} href={SmallViewFromOutside} download={"view from outside"}>
                    <DownloadIcon className={Styles.DownloadIcon}/>
                    {"As jpg 1mb"}
                </a>
                <a className={Styles.DownloadButton} href={LargeViewFromOutside} download={"view from outside"}>
                    <DownloadIcon className={Styles.DownloadIcon}/>
                    {"As png 6mb"}
                </a>
                <button className={Styles.LinkToWeblogButton} onClick={() => {setPageName("weblog-view-from-outside")}}>
                    {"Read the Weblog"}
                    <TurnPageIcon className={Styles.TurnPageIcon}/>
                </button>
            </div>
        )
    };

    return (
        <>
            <div className={Styles.Foundation}>
                <div className={Styles.TitleContainer}>
                    <h1 className={Styles.TitleText}>{"View from outside"}</h1>
                </div>

                <div className={Styles.ImageAndNavigationContainer}>
                    <Image />
                    <NavigationBar />
                </div>

            </div>
        </>
    );
}
export default ProjectViewFromOutside;