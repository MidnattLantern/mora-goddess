import Styles from "./ProjectBustPortrait.module.css";
import DownloadIcon from "../../assets/svg/DownloadIcon.svg?react";
//import TurnPageIcon from "../../assets/svg/TurnPageIcon.svg?react";
//import { useRenderPageContext } from "../../contexts/useRenderPageContext";
import VariationFullSketchNoLogo from "../../assets/downloadable/variations/bust-portrait-full-sketch-nologo.png";
import VariationFullSketchNoLogoSmall from "../../assets/downloadable/variations/bust-portrait-full-sketch-nologo-1mb.jpg";

const ProjectBustPortrait = () => {
//    const { setPageName } = useRenderPageContext();

    return (
        <>
            <div className={Styles.Foundation}>
                <div className={Styles.TitleContainer}>
                    <h1 className={Styles.TitleText}>{"Bust Portrait"}</h1>
                </div>

                <div className={Styles.ImageAndNavigationContainer}>
                    <div className={Styles.ImageContainer}>
                        <img className={Styles.ImageSize} src={VariationFullSketchNoLogo} alt={"Failed to load image: Variation Full Body Sketch"}/>
                    </div>
                    <div className={Styles.NavigationBarContainer}>
                        <a className={Styles.DownloadButton} href={VariationFullSketchNoLogo} download={"variation full body sketch"}>
                            <DownloadIcon className={Styles.DownloadIcon}/>
                            {"As png 16mb"}
                        </a>

                        <a className={Styles.DownloadButton} href={VariationFullSketchNoLogoSmall} download={"variation full body sketch 1mb"}>
                            <DownloadIcon className={Styles.DownloadIcon}/>
                            {"As jpg 1mb"}
                        </a>

{/*
                        <button className={Styles.LinkToWeblogButton} onClick={() => {setPageName("weblog-bust-portrait")}}>
                            {"Read the Weblog"}
                            <TurnPageIcon className={Styles.TurnPageIcon}/>
                        </button>
*/}

                    </div>
                </div>

            </div>
        </>
    );
}
export default ProjectBustPortrait;