import Styles from "./ProjectShrine.module.css";
import DownloadIcon from "../../assets/svg/DownloadIcon.svg?react";
import ShrineTransparent from "../../assets/downloadable/mora-shrine-transparent-610kb.png";
import EmptyShrineTransparent from "../../assets/downloadable/variations/mora-empty-shrine-transparent-610kb.png";
import ShrineLightLarge from "../../assets/downloadable/variations/mora-shrine-light-598kb.png";
import ShrineLightSmall from "../../assets/downloadable/variations/mora-shrine-light-37kb.jpg";
import EmptyShrineLightLarge from "../../assets/downloadable/variations/mora-empty-shrine-light-598kb.png";
import EmptyShrineLightSmall from "../../assets/downloadable/variations/mora-empty-shrine-light-37kb.jpg";
import ShrineDarkLarge from "../../assets/downloadable/variations/mora-shrine-dark-586kb.png";
import ShrineDarkSmall from "../../assets/downloadable/variations/mora-shrine-dark-33kb.jpg";
import EmptyShrineDarkLarge from "../../assets/downloadable/variations/mora-empty-shrine-dark-582kb.png";
import EmptyShrineDarkSmall from "../../assets/downloadable/variations/mora-empty-shrine-dark-33kb.jpg";
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
                <img className={Styles.ImageSize} src={ShrineTransparent} alt={"Failed to load image: Bust Variation Full No Logo"}/>
            </div>
        )
    }

    const NavigationBar = () => {
        return (
            <div className={Styles.NavigationBarContainer}>
                    <a className={Styles.DownloadButton} href={ShrineTransparent} download={"Shrine Transparent"}>
                        <DownloadIcon className={Styles.DownloadIcon}/>
                        {"As png 610kb"}
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

                    <div className={Styles.VariantItem}
                    //onMouseEnter={() => {setPreviewVariant(ShrineTransparent)}}
                        >
                        <h1 className={Styles.VariationTitle}>{"Transparent"}</h1>
                        <a className={Styles.DownloadButton} href={ShrineTransparent} download={"Transparent"}>
                            <DownloadIcon className={Styles.DownloadIcon}/>
                            {"As png 610kb"}
                        </a>
                    </div>

                    <div className={Styles.VariantItem}
                    //onMouseEnter={() => {setPreviewVariant(EmptyShrineTransparent)}}
                        >
                        <h1 className={Styles.VariationTitle}>{"Empty Transparent"}</h1>
                        <a className={Styles.DownloadButton} href={EmptyShrineTransparent} download={"Empty Transparent"}>
                            <DownloadIcon className={Styles.DownloadIcon}/>
                            {"As png 610kb"}
                        </a>
                    </div>

                    <div className={Styles.VariantItem}
                    //onMouseEnter={() => {setPreviewVariant(ShrineLightSmall)}}
                        >
                        <h1 className={Styles.VariationTitle}>{"Light"}</h1>
                        <a className={Styles.DownloadButton} href={ShrineLightLarge} download={"Light"}>
                            <DownloadIcon className={Styles.DownloadIcon}/>
                            {"As png 598kb"}
                        </a>
                        <a className={Styles.DownloadButton} href={ShrineLightSmall} download={"Light"}>
                            <DownloadIcon className={Styles.DownloadIcon}/>
                            {"As jpg 37"}
                        </a>
                    </div>

                    <div className={Styles.VariantItem}
                    //onMouseEnter={() => {setPreviewVariant(EmptyShrineLightLarge)}}
                        >
                        <h1 className={Styles.VariationTitle}>{"Empty Light"}</h1>
                        <a className={Styles.DownloadButton} href={EmptyShrineLightLarge} download={"Empty Light"}>
                            <DownloadIcon className={Styles.DownloadIcon}/>
                            {"As png 598kb"}
                        </a>
                        <a className={Styles.DownloadButton} href={EmptyShrineLightSmall} download={"Empty Light"}>
                            <DownloadIcon className={Styles.DownloadIcon}/>
                            {"As jpg 37"}
                        </a>
                    </div>

                    <div className={Styles.VariantItem}
                    //onMouseEnter={() => {setPreviewVariant(ShrineDarkSmall)}}
                        >
                        <h1 className={Styles.VariationTitle}>{"Dark"}</h1>
                        <a className={Styles.DownloadButton} href={ShrineDarkLarge} download={"Dark"}>
                            <DownloadIcon className={Styles.DownloadIcon}/>
                            {"As png 586kb"}
                        </a>
                        <a className={Styles.DownloadButton} href={ShrineDarkSmall} download={"Dark"}>
                            <DownloadIcon className={Styles.DownloadIcon}/>
                            {"As jpg 33"}
                        </a>
                    </div>

                    <div className={Styles.VariantItem}
                    //onMouseEnter={() => {setPreviewVariant(EmptyShrineDarkSmall)}}
                    >
                        <h1 className={Styles.VariationTitle}>{"Empty Dark"}</h1>
                        <a className={Styles.DownloadButton} href={EmptyShrineDarkLarge} download={"Empty Dark"}>
                            <DownloadIcon className={Styles.DownloadIcon}/>
                            {"As png 582kb"}
                        </a>
                        <a className={Styles.DownloadButton} href={EmptyShrineDarkSmall} download={"Empty Dark"}>
                            <DownloadIcon className={Styles.DownloadIcon}/>
                            {"As jpg 33"}
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