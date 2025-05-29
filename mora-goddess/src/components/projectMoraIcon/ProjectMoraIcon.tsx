import Styles from "./ProjectMoraIcon.module.css";
import DownloadIcon from "../../assets/svg/DownloadIcon.svg?react";
import TurnPageIcon from "../../assets/svg/TurnPageIcon.svg?react";
import { useRenderPageContext } from "../../contexts/useRenderPageContext";
import MoraIcon from "../../assets/downloadable/mora-icon-3mb.png";
import MoraIconSmall from "../../assets/downloadable/mora-icon-46kb.jpg";


const ProjectMoraIcon = () => {
    const { setPageName } = useRenderPageContext();


    const NavigationBar = () => {
        return (
            <div className={Styles.NavigationBarContainer}>
                    <a className={Styles.DownloadButton} href={MoraIcon} download={"Mora Icon"}>
                        <DownloadIcon className={Styles.DownloadIcon}/>
                        {"As png 3mb"}
                    </a>

                    <a className={Styles.DownloadButton} href={MoraIconSmall} download={"Mora Icon"}>
                        <DownloadIcon className={Styles.DownloadIcon}/>
                        {"As jpg 46kb"}
                    </a>

                    <button className={Styles.LinkToWeblogButton} onClick={() => {setPageName("weblog-mora-icon")}}>
                        {"Read the Weblog"}
                        <TurnPageIcon className={Styles.TurnPageIcon}/>
                    </button>

            </div>
        )
    };

        const Image = () => {
        return (
            <div className={Styles.ImageContainer}>
                <img className={Styles.ImageSize} src={MoraIconSmall} alt={"Failed to load image: Mora Icon Small"}/>
            </div>
        )
    }

    return (
        <>
            <div className={Styles.Foundation}>
                <div className={Styles.TitleContainer}>
                    <h1 className={Styles.TitleText}>{"Mora Icon"}</h1>
                </div>

                <div className={Styles.ImageAndNavigationContainer}>
                    <Image />
                    <NavigationBar />
                </div>
            </div>
        </>
    );
}
export default ProjectMoraIcon;