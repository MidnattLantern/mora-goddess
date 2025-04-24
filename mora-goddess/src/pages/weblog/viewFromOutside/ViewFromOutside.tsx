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
                    <p>This is a sequel to the Inside View piece. It follows the same story, now from the outside in. The story unfolds from the moment Yviira shared the screenshots from the web game. <a onClick={() => {setPageName("weblog-view-from-inside")}} className={Styles.LinkToWeblog}>You can read about the View from Inside here.</a></p>
                </ChapterDiv>
                <ChapterDiv>
                    <h1>Establishing the layers</h1>
                    <p>Just like with the inside view, I started by placing the screenshot far back in the layers menu in Clip Studio Paint (CSP), then carefully traced the defining shapes across four separate layers. This screenshot shows the distance much more clearly. Each layer comes with a clipping layer, where I locked pixels to paint in shades, volumes, and crisp edges.</p>
                    <img className={Styles.EstablishLayersImageSize} src={EstablishLayers} alt="couldn't load image"/>
                    <br/>
                    <br/>
                    <p>Notice the slightly lighter patches here — these are the “shade” layers:</p>
                    <img className={Styles.EstablishShade} src={EstablishShade} alt="couldn't load image"/>
                </ChapterDiv>
                <ChapterDiv>
                    <h1>Establishing the light</h1>
                    <p>Before diving into color, I needed to find good lighting to balance and breathe life into the scene. For this POV, I had the fun arena of working with foliage leaves and factoring in the temple's off-center perspective. I imagined the light source resting like during the afternoon, casting light that highlights the temple's walls and creates dramatic shadows from the trees. My first draft turned out too moody for Yviira's taste...</p>
                    <img className={Styles.FirstDraftImageSize} src={FirstDraft} alt="couldn't load image"/>
                    <br/>
                    <br/>
                    <p>...So, I lightened things up by loosening the tree clusters and refining how the light plays across the scene. Without Blender or fancy 3D tools, I had to rely on traditional spatial intuition, a bit of a puzzle, but I believe it made it look genuine. This was my second and approved take:</p>
                    <img className={Styles.SecondDraftImageSize} src={SecondDraft} alt="couldn't load image"/>
                </ChapterDiv>
                <ChapterDiv>
                    <h1>Adding colors</h1>
                    <p>Similarly to the inside POV, I used the level correction feature to shift the layers away from greyscale toward harmonious colors that carry the atmosphere. Using soft spray and blending brushes, I gently shifted to actual colors without disrupting the atmosphere. A saturation filter sat on top, helping me double-check that the mood stayed intact.</p>
                    <img className={Styles.AddedPaintImageSize} src={AddedPaint} alt="couldn't load image"/>
                    <br/>
                    <br/>
                    <p>Even though the colors looked good under the saturation filter, the scene felt a bit empty. It was time to add the magic; floral elements, vines, and orchard fruits that Yviira requested. Inspired by Ross Tran/ “Ross Draws”, I resonated with his approach of changing the atmosphere with small fairy-dust-like sparkles across the canvas. I placed some dots at the trees making up the fruits, then a few flowers, and finally dusting the scene with those 'fairy-dust' sparkles. I considered adding white dots on the light sections but went for Add Glow ("Color Dodge" in Photoshop) soft brush casting instead to keep the identity of light and shadow separate.</p>
                    <img className={Styles.AddedParticlesImageSize} src={AddedParticles} alt="couldn't load image" />
                </ChapterDiv>
                <ChapterDiv id="final">
                    <h1>Final touches</h1>
                    <p>To wrap it all up, I gave the piece a final pass with a level correction filter, pulling the colors into harmony so everything felt like it belonged in the same environment. Finally, throwing the piece into Affinity Photo to add a gentle chromatic aberration, Gaussian blur and noise, just enough to soften the image and make it feel genuine. I was proud of how it turned out, but most importantly, Yviira's vision had come alive:</p>
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