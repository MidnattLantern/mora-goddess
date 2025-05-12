import Styles from "./ProjectBustPortrait.module.css";
import DownloadIcon from "../../assets/svg/DownloadIcon.svg?react";
//import TurnPageIcon from "../../assets/svg/TurnPageIcon.svg?react";
//import { useRenderPageContext } from "../../contexts/useRenderPageContext";
import BustNoLogo from "../../assets/downloadable/bust-portrait-nologo-8mb.png";
import BustNoLogoSmall from "../../assets/downloadable/bust-portrait-nologo-160kb.jpg";
import BustVariationFullNoLogo from "../../assets/downloadable/variations/bust-portrait-full-nologo-21mb.png";
import BustVariationFullNoLogoSmall from "../../assets/downloadable/variations/bust-portrait-full-nologo-300kb.jpg";
import BustVariationFullSketchNoLogo from "../../assets/downloadable/variations/bust-portrait-full-sketch-nologo-11mb.png";
import BustVariationFullSketchNoLogoSmall from "../../assets/downloadable/variations/bust-portrait-full-sketch-nologo-1mb.jpg"
import { useState } from "react";


const ProjectBustPortrait = () => {
//    const { setPageName } = useRenderPageContext();
    const [showVariants, setShowVariants] = useState<boolean>(false);

    const FeaturedImageView = () => {
        return (
            <>
                <div className={Styles.ImageContainer}>

                    <div className={Styles.ImageAspect}/>
                        <img className={Styles.ImageSize} src={BustNoLogo} alt={"Failed to load image: Bust No Logo"}/>
                    </div>
                    <div className={Styles.NavigationBarContainer}>
                        <a className={Styles.DownloadButton} href={BustNoLogo} download={"Bust No Logo"}>
                            <DownloadIcon className={Styles.DownloadIcon}/>
                            {"As png 8mb"}
                        </a>

                        <a className={Styles.DownloadButton} href={BustNoLogoSmall} download={"Bust No Logo"}>
                            <DownloadIcon className={Styles.DownloadIcon}/>
                            {"As jpg 160kb"}
                        </a>

                        {/*
                        <button className={Styles.LinkToWeblogButton} onClick={() => {setPageName("weblog-bust-portrait")}}>
                            {"Read the Weblog"}
                            <TurnPageIcon className={Styles.TurnPageIcon}/>
                        </button>
                        */}

                        <button className={Styles.VariantsButton} onClick={() => {setShowVariants(true)}}>
                            {"Variants"}
                        </button>
                </div>
            </>
        )
    };

    const VariantsView = () => {
        return(
            <>
                <h1>{"Bust"}</h1>
                <a className={Styles.DownloadButton} href={BustNoLogo} download={"Bust No Logo"}>
                    <DownloadIcon className={Styles.DownloadIcon}/>
                    {"As png 8mb"}
                </a>
                <a className={Styles.DownloadButton} href={BustNoLogoSmall} download={"Bust No Logo"}>
                    <DownloadIcon className={Styles.DownloadIcon}/>
                    {"As jpg 160kb"}
                </a>
                <br/>

                <h1>{"Full Body"}</h1>
                <a className={Styles.DownloadButton} href={BustVariationFullNoLogo} download={"Full No Logo"}>
                    <DownloadIcon className={Styles.DownloadIcon}/>
                    {"As png 21mb"}
                </a>
                <a className={Styles.DownloadButton} href={BustVariationFullNoLogoSmall} download={"Full No Logo"}>
                    <DownloadIcon className={Styles.DownloadIcon}/>
                    {"As jpg 300kb"}
                </a>
                <br/>

                <h1>{"Full Body Sketch"}</h1>
                <a className={Styles.DownloadButton} href={BustVariationFullSketchNoLogo} download={"Full Sketch No Logo"}>
                    <DownloadIcon className={Styles.DownloadIcon}/>
                    {"As png 11mb"}
                </a>
                <a className={Styles.DownloadButton} href={BustVariationFullSketchNoLogoSmall} download={"Full Sketch No Logo"}>
                    <DownloadIcon className={Styles.DownloadIcon}/>
                    {"As jpg 1mb"}
                </a>
                <br/>
            </>
        )
    };

    return (
        <>
            <div className={Styles.Foundation}>
                <div className={Styles.TitleContainer}>
                    <h1 className={Styles.TitleText}>{"Bust Portrait"}</h1>
                </div>

                <div className={Styles.ImageAndNavigationContainer}>
                    {showVariants ? <>
                        <VariantsView />
                    </> : <>
                        <FeaturedImageView />
                    </>}

                </div>
            </div>
        </>
    );
}
export default ProjectBustPortrait;