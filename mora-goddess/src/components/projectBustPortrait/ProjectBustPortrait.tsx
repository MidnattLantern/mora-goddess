import Styles from "./ProjectBustPortrait.module.css";
import DownloadIcon from "../../assets/svg/DownloadIcon.svg?react";
import TurnPageIcon from "../../assets/svg/TurnPageIcon.svg?react";
import { useRenderPageContext } from "../../contexts/useRenderPageContext";

const ProjectBustPortrait = () => {
    const { setPageName } = useRenderPageContext();

    return (
        <>
            <div className={Styles.Foundation}>
                <div className={Styles.TitleContainer}>
                    <h1 className={Styles.TitleText}>{"Bust Portrait"}</h1>
                </div>

                <div className={Styles.ImageAndNavigationContainer}>
                    <div className={Styles.ImageContainer}>
                        <div className={Styles.ImageSize} />
                    </div>
                    <div className={Styles.NavigationBarContainer}>
                        <p className={Styles.DownloadButton}>
                            <DownloadIcon className={Styles.DownloadIcon}/>
                            {"As jpg 1mb"}
                        </p>
                        <p className={Styles.DownloadButton}>
                            <DownloadIcon className={Styles.DownloadIcon}/>
                            {"As png"}
                        </p>
                        <button className={Styles.LinkToWeblogButton} onClick={() => {setPageName("weblog-bust-portrait")}}>
                            {"Read the Weblog"}
                            <TurnPageIcon className={Styles.TurnPageIcon}/>
                        </button>
                    </div>
                </div>

            </div>
        </>
    );
}
export default ProjectBustPortrait;