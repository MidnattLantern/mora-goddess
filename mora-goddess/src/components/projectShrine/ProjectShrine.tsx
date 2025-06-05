import Styles from "./ProjectShrine.module.css";
import DownloadIcon from "../../assets/svg/DownloadIcon.svg?react";
import ShrineLightSmall from "../../assets/downloadable/mora-shrine-light-37kb.jpg";
import ShrineLightLarge from "../../assets/downloadable/mora-shrine-light-598kb.png";
import ShrineDarkSmall from "../../assets/downloadable/variations/mora-shrine dark-33kb.jpg";
import ShrineDarkLarge from "../../assets/downloadable/variations/mora-shrine-dark-586kb.png";
import ShrineTransparent from "../../assets/downloadable/variations/mora-shrine-transparent-618kb.png";
import { useState, useEffect } from "react";


const ProjectShrine = () => {
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
                <img className={Styles.ImageSize} src={ShrineLightSmall} alt={"Failed to load image: Bust Variation Full No Logo"}/>
            </div>
        )
    }

    const NavigationBar = () => {
        return (
            <div className={Styles.NavigationBarContainer}>
                    <a className={Styles.DownloadButton} href={ShrineLightLarge} download={"Shrine Light"}>
                        <DownloadIcon className={Styles.DownloadIcon}/>
                        {"As png 598kb"}
                    </a>

                    <a className={Styles.DownloadButton} href={ShrineLightSmall} download={"Shrine Light"}>
                        <DownloadIcon className={Styles.DownloadIcon}/>
                        {"As jpg 37kb"}
                    </a>

                    <button className={Styles.ShowVariantsButton} onClick={() => {setShowVariants(true)}}>
                        {"Show variants"}
                    </button>
            </div>
        )
    }

    const VariantsView = () => {
        return (
            <div className={Styles.VariantsViewContainer}>
                <div className={Styles.VariantsMenuContainer}>
                    <button onClick={() => {setShowVariants(false)}}>Hide variants</button> {/* move to a better point */}
                    <div className={Styles.VariantItem} onMouseEnter={() => {setPreviewVariant(ShrineLightSmall)}}>
                        <h1 className={Styles.VariationTitle}>{"Light"}</h1>
                        <a className={Styles.DownloadButton} href={ShrineLightLarge} download={"Shrine Light"}>
                            <DownloadIcon className={Styles.DownloadIcon}/>
                            {"As png 598kb"}
                        </a>
                        <a className={Styles.DownloadButton} href={ShrineLightSmall} download={"Shrine Light"}>
                            <DownloadIcon className={Styles.DownloadIcon}/>
                            {"As jpg 37kb"}
                        </a>
                    </div>
                    <div className={Styles.VariantItem} onMouseEnter={() => {setPreviewVariant(ShrineDarkSmall)}}>
                        <h1 className={Styles.VariationTitle}>{"Dark"}</h1>
                        <a className={Styles.DownloadButton} href={ShrineDarkLarge} download={"Shrine Dark"}>
                            <DownloadIcon className={Styles.DownloadIcon}/>
                            {"As png 586mb"}
                        </a>
                        <a className={Styles.DownloadButton} href={ShrineDarkSmall} download={"Shrine Dark"}>
                            <DownloadIcon className={Styles.DownloadIcon}/>
                            {"As jpg 33kb"}
                        </a>
                    </div>
                    <div className={Styles.VariantItem} onMouseEnter={() => {setPreviewVariant(ShrineTransparent)}}>
                        <h1 className={Styles.VariationTitle}>{"Transparent"}</h1>
                        <a className={Styles.DownloadButton} href={ShrineTransparent} download={"Shrine Transparent"}>
                            <DownloadIcon className={Styles.DownloadIcon}/>
                            {"As png 618mb"}
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
                    <h1 className={Styles.TitleText}>{"Shrine"}</h1>
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
export default ProjectShrine;