import Styles from "./ViewFromOutside.module.css";
import ReturnIcon from "../../../assets/svg/ReturnIcon.svg?react";
import POVScreenshotOutside from "../../../assets/weblog/view-from-inside/pov-screenshot-outside.png";
import FinalResult from "../../../assets/downloadable/mora-temple-v2-1mb.jpg";
import { useRenderPageContext } from "../../../contexts/useRenderPageContext";
import { useWindowSize } from "../../../hooks/useWindowSize";
import WallpaperImage from "../../../assets/downloadable/mora-temple-v2-1mb.jpg";
import EstablishLayers from "../../../assets/weblog/view-from-outside/establish-layers.png";
import EstablishShade from "../../../assets/weblog/view-from-outside/establish-shade.png";
import FirstDraft from "../../../assets/weblog/view-from-outside/first-draft.png";
import SecondDraft from "../../../assets/weblog/view-from-outside/second-draft.png";
import AddedPaint from "../../../assets/weblog/view-from-outside/added-paint.png";
import AddedParticles from "../../../assets/weblog/view-from-outside/added-particles.png";

const ViewFromOutside = () => {
    const { width } = useWindowSize();
    const { setPageName } = useRenderPageContext();

    const Wallpaper = () => {
        return(
            <div className={Styles.Wallpaper}>
                <img src={WallpaperImage} alt=""/>
                <div className={Styles.Overlay}/>
            </div>
        )
    };

    const ChapterDiv = ({children, id} : { children: React.ReactNode; id?: string}) => {
        return(
            <div className={Styles.ChapterDiv} id={id}>
                {children}
            </div>
        )
    };

    const LargeNavigationBar = () => {
        return(
            <div className={Styles.LargeNavigationBar}>
                <ReturnIcon className={Styles.ReturnIcon} onClick={() => {setPageName("main")}}/>
                <a href="#intro">Intro</a>
                <a href="#final">Final</a>
            </div>
        )
    };

    const SmallNavigationBar = () => {
        return(
            <div className={Styles.SmallNavigationBar}>
                <ReturnIcon className={Styles.ReturnIcon} onClick={() => {setPageName("main")}}/>
            </div>
        )
    }

    const WeblogContent = () => {
        return(
            <div className={Styles.WeblogContainer}>
                <ChapterDiv id="intro">
                    <h1>The Making of Outside View</h1>
                    <img className={Styles.POVScreenshotImageSize} src={POVScreenshotOutside} alt="couldn't load image"/>
                    <p>This is a sequel to the Inside View piece. It follows the same story, starting from the point when Yviira sent me screenshots from the web game, after that, the project is expanded to two branches. <a onClick={() => {setPageName("weblog-view-from-inside")}} className={Styles.LinkToWeblog}>You can read about the View from Inside here.</a></p>
                </ChapterDiv>
                <ChapterDiv>
                    <h1>Establishing the layers</h1>
                    <p>Same way as I approaced the inside view project, I put the screenshot on a layer furthest back in Clip Studio Paint (CSP) and traced over the defining shapes across four layesr. This screenshot show the distance much more clearly. Each layer has a clipping layer with locked pixels for defining shades, volume and edges.</p>
                    <img className={Styles.EstablishLayersImageSize} src={EstablishLayers} alt="couldn't load image"/>
                    <br/>
                    <br/>
                    <p>Notice the slightly lighter areas on this image, they make up the "shade" layers:</p>
                    <img className={Styles.EstablishShade} src={EstablishShade} alt="couldn't load image"/>
                </ChapterDiv>
                <ChapterDiv>
                    <h1>Establishing the light</h1>
                    <p>Before adding color, it was appropriate to establish harmonious light values, to find a lighting that makes sense and provides atmosphere. For this POV, I had foliage leaves to play around with as well as considering how the slight off-center perspective for the temple may affect the lighting. I decided to place the light source to the horizon so that the lighting would cast on the temple, making each part more defined as walls and trees create distinct shadows. The first draft was a bit dark for Yviira's taste...</p>
                    <img className={Styles.FirstDraftImageSize} src={FirstDraft} alt="couldn't load image"/>
                    <br/>
                    <br/>
                    <p>...So I placed the trees not as compact and redefined how lighting works for this POV. I had to figure out the spacial placements of the trees the traditional way without Blender or other 3D methods, so it was a bit of a challenge after getting a bit spoiled by Blender. This was my second and approved take:</p>
                    <img className={Styles.SecondDraftImageSize} src={SecondDraft} alt="couldn't load image"/>
                </ChapterDiv>
                <ChapterDiv>
                    <h1>Adding colours</h1>
                    <p>Similarly to the inside POV, I used the level correction feature to shift away from greyscale to some colour value with atmosphere to each layer. At this stage, there aren't that many layers, around 10 average. Using soft spray and blending brushes, I could gently shift to actual colours without accidentally breaking the atmosphere. I had a saturation filter at top to check from time to time that I didn't ruin the light I've established.</p>
                    <img className={Styles.AddedPaintImageSize} src={AddedPaint} alt="couldn't load image"/>
                    <br/>
                    <br/>
                    <p>However, despite looking fine with the saturation filter, it felt flat and empty. It was time to add the floral, vines, and orchard fruits Yviira had requested. I took plenty of inspiration from Ross Tran/ "Ross Draws" as I resonated with his approach of changing the atmosphere with small random colourful dots across the canvas. First, I placed some dots at the trees, second I drew a few flowers and finally gently sprayed the 'Ross Draws' dots across the shadowed sections. I considered adding white dots on the light secions but went for Add Glow ("Colour Dodge" in photoshop) soft brush casting instead. Blinding light on the light sections, Colorful concentrate particles on the shadow sections.</p>
                    <img className={Styles.AddedParticlesImageSize} src={AddedParticles} alt="couldn't load image" />
                </ChapterDiv>
                <ChapterDiv id="final">
                    <h1>Final touches</h1>
                    <p>I tied the piece together with a level correction filter, making the colours more unified like they belong in the same enviroment, as well as getting that sweet spot of atmospheric lighting/ shadow. Finally, throwing the piece into Affinity Photo to add a gentle chromatic abberation, gaussian blur and noise to kill the overly crisp digital feel. I and yviira was happy about the results:</p>
                    <img className={Styles.FinalResultImageSize} src={FinalResult} alt="couldn't load image"/>
                </ChapterDiv>

            </div>
        )
    };

    return(
        <div className={Styles.Foundation}>
            <WeblogContent />
            <div className={`${Styles.NavigationBarContainer} ${width > 1024 ? null : Styles.PushDown}`}>
                {width > 1024 ?
                    <LargeNavigationBar/>
                :
                    <SmallNavigationBar/>
                }
            </div>
            {width > 440 && <Wallpaper/>}

        </div>
    )
};

export default ViewFromOutside