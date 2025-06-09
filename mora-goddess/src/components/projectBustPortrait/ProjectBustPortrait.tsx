import Styles from "./ProjectBustPortrait.module.css";
import DownloadIcon from "../../assets/svg/DownloadIcon.svg?react";
import TurnPageIcon from "../../assets/svg/TurnPageIcon.svg?react";
import { useRenderPageContext } from "../../contexts/useRenderPageContext";
import Bust from "../../assets/downloadable/bust-portrait-9mb.png";
import BustSmall from "../../assets/downloadable/bust-portrait-288kb.jpg";
//import BustNoLogo from "../../assets/downloadable/variations/bust-portrait-nologo-8mb.png"; //depricated
//import BustNoLogoSmall from "../../assets/downloadable/variations/bust-portrait-nologo-160kb.jpg"; //depricated
import BustVariationFullNoLogo from "../../assets/downloadable/variations/bust-portrait-full-nologo-21mb.png";
import BustVariationFullNoLogoSmall from "../../assets/downloadable/variations/bust-portrait-full-nologo-300kb.jpg";
import BustVariationFullSketchNoLogo from "../../assets/downloadable/variations/bust-portrait-full-sketch-nologo-11mb.png";
import BustVariationFullSketchNoLogoSmall from "../../assets/downloadable/variations/bust-portrait-full-sketch-nologo-1mb.jpg";
import BustVariationFullSketch from "../../assets/downloadable/variations/bust-portrait-full-sketch-4mb.png";
import BustVariationFullSketchSmall from "../../assets/downloadable/variations/bust-portrait-full-sketch-234kb.jpg";
import { useState, useEffect } from "react";


const ProjectBustPortrait = () => {
    const { setPageName } = useRenderPageContext();
    const [showVariants, setShowVariants] = useState<boolean>(false);
//    const [previewVariant, setPreviewVariant] = useState<string | null >(null);
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
                <img className={Styles.ImageSize} src={BustSmall} alt={"Failed to load image: Bust Variation Full No Logo"}/>
            </div>
        )
    }

    const NavigationBar = () => {
        return (
            <div className={Styles.NavigationBarContainer}>
                    <a className={Styles.DownloadButton} href={Bust} download={"Bust No Logo"}>
                        <DownloadIcon className={Styles.DownloadIcon}/>
                        {"As png 9mb"}
                    </a>

                    <a className={Styles.DownloadButton} href={BustSmall} download={"Bust No Logo"}>
                        <DownloadIcon className={Styles.DownloadIcon}/>
                        {"As jpg 288kb"}
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
        const [previewVariant, setPreviewVariant] = useState<string | null >(null);
        return (
            <div className={Styles.VariantsViewContainer}>
                <div className={Styles.VariantsMenuContainer}>
                    <button onClick={() => {setShowVariants(false)}}>Hide variants</button> {/* move to a better point */}
                    <div className={Styles.VariantItem} onMouseEnter={() => {setPreviewVariant(BustSmall)}}>
                        <h1 className={Styles.VariationTitle}>{"Bust portrait"}</h1>
                        <a className={Styles.DownloadButton} href={Bust} download={"Full No Logo"}>
                            <DownloadIcon className={Styles.DownloadIcon}/>
                            {"As png 9mb"}
                        </a>
                        <a className={Styles.DownloadButton} href={BustSmall} download={"Full No Logo"}>
                            <DownloadIcon className={Styles.DownloadIcon}/>
                            {"As jpg 288kb"}
                        </a>
                    </div>
                    <div className={Styles.VariantItem} onMouseEnter={() => {setPreviewVariant(BustVariationFullSketchSmall)}}>
                        <h1 className={Styles.VariationTitle}>{"Sketch"}</h1>
                        <a className={Styles.DownloadButton} href={BustVariationFullSketch} download={"Full No Logo"}>
                            <DownloadIcon className={Styles.DownloadIcon}/>
                            {"As png 4mb"}
                        </a>
                        <a className={Styles.DownloadButton} href={BustVariationFullSketchSmall} download={"Full No Logo"}>
                            <DownloadIcon className={Styles.DownloadIcon}/>
                            {"As jpg 234kb"}
                        </a>
                    </div>
                    <div className={Styles.VariantItem} onMouseEnter={() => {setPreviewVariant(BustVariationFullNoLogoSmall)}}>
                        <h1 className={Styles.VariationTitle}>{"Legacy"}</h1>
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
                        <h1 className={Styles.VariationTitle}>{"Legacy Sketch"}</h1>
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