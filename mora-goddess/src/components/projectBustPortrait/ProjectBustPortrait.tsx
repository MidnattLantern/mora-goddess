import Styles from "./ProjectBustPortrait.module.css";
import DownloadIcon from "../../assets/svg/DownloadIcon.svg?react";
import TurnPageIcon from "../../assets/svg/TurnPageIcon.svg?react";
import { useRenderPageContext } from "../../contexts/useRenderPageContext";
import BustNoLogo from "../../assets/downloadable/bust-portrait-nologo-8mb.png";
import BustNoLogoSmall from "../../assets/downloadable/bust-portrait-nologo-160kb.jpg";
import BustVariationFullNoLogo from "../../assets/downloadable/variations/bust-portrait-full-nologo-21mb.png";
import BustVariationFullNoLogoSmall from "../../assets/downloadable/variations/bust-portrait-full-nologo-300kb.jpg";
import BustVariationFullSketchNoLogo from "../../assets/downloadable/variations/bust-portrait-full-sketch-nologo-11mb.png";
import BustVariationFullSketchNoLogoSmall from "../../assets/downloadable/variations/bust-portrait-full-sketch-nologo-1mb.jpg"
import { useState, useEffect } from "react";


const ProjectBustPortrait = () => {
    const { setPageName } = useRenderPageContext();
    const [showVariants, setShowVariants] = useState<boolean>(false);
    const [previewVariant, setPreviewVariant] = useState<string | null >(null);
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setViewportWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isMobile = viewportWidth < 440;

    const Image = () => {
        return (
            <div className={Styles.ImageContainer}>
                <img className={Styles.ImageSize} src={BustVariationFullNoLogoSmall} alt={"Failed to load image: Bust Variation Full No Logo"}/>
            </div>
        )
    }

    const NavigationBar = () => {
        return (
            <div className={Styles.NavigationBarContainer}>
                    <a className={Styles.DownloadButton} href={BustNoLogo} download={"Bust No Logo"}>
                        <DownloadIcon className={Styles.DownloadIcon}/>
                        {"As png 8mb"}
                    </a>

                    <a className={Styles.DownloadButton} href={BustNoLogoSmall} download={"Bust No Logo"}>
                        <DownloadIcon className={Styles.DownloadIcon}/>
                        {"As jpg 160kb"}
                    </a>

                    <button className={Styles.ShowVariantsButton} onClick={() => {setShowVariants(true)}}>
                        {"Show variants"}
                    </button>

                    <button className={Styles.LinkToWeblogButton} onClick={() => {setPageName("weblog-bust-portrait")}}>
                        {"Read the Weblog"}
                        <TurnPageIcon className={Styles.TurnPageIcon}/>
                    </button>
            </div>
        )
    }

    const VariantsView = () => {
        return (
            <div className={Styles.VariantsViewContainer}>
                <div className={Styles.VariantsMenuContainer}>
                    <div className={Styles.VariantItem} onMouseEnter={() => {setPreviewVariant(BustNoLogoSmall)}}>
                        <h1 className={Styles.VariationTitle}>{"Bust"}</h1>
                        <a className={Styles.DownloadButton} href={BustNoLogo} download={"Bust No Logo"}>
                            <DownloadIcon className={Styles.DownloadIcon}/>
                            {"As png 8mb"}
                        </a>
                        <a className={Styles.DownloadButton} href={BustNoLogoSmall} download={"Bust No Logo"}>
                            <DownloadIcon className={Styles.DownloadIcon}/>
                            {"As jpg 160kb"}
                        </a>
                    </div>
                    <div className={Styles.VariantItem} onMouseEnter={() => {setPreviewVariant(BustVariationFullNoLogoSmall)}}>
                        <h1 className={Styles.VariationTitle}>{"Full Body"}</h1>
                        <a className={Styles.DownloadButton} href={BustVariationFullNoLogo} download={"Full No Logo"}>
                            <DownloadIcon className={Styles.DownloadIcon}/>
                            {"As png 21mb"}
                        </a>
                        <a className={Styles.DownloadButton} href={BustVariationFullNoLogoSmall} download={"Full No Logo"}>
                            <DownloadIcon className={Styles.DownloadIcon}/>
                            {"As jpg 300kb"}
                        </a>
                    </div>
                    <div className={Styles.VariantItem} onMouseEnter={() => {setPreviewVariant(BustVariationFullSketchNoLogoSmall)}}>
                        <h1 className={Styles.VariationTitle}>{"Full Body Sketch"}</h1>
                        <a className={Styles.DownloadButton} href={BustVariationFullSketchNoLogo} download={"Full Sketch No Logo"}>
                            <DownloadIcon className={Styles.DownloadIcon}/>
                            {"As png 11mb"}
                        </a>
                        <a className={Styles.DownloadButton} href={BustVariationFullSketchNoLogoSmall} download={"Full Sketch No Logo"}>
                            <DownloadIcon className={Styles.DownloadIcon}/>
                            {"As jpg 1mb"}
                        </a>
                    </div>
                </div>

                {!isMobile && <>
                    <div className={Styles.VariantImagePreviewContainer}>
                        {previewVariant && <img className={Styles.VariantPreviewImageSize} src={previewVariant} alt={""}/>}
                    </div>                
                </>}

            </div>
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
                        <Image />
                        <NavigationBar />
                    </>}

                </div>
            </div>
        </>
    );
}
export default ProjectBustPortrait;