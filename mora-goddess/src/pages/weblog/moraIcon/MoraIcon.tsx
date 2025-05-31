import Styles from "./MoraIcon.module.css";

import ReturnIcon from "../../../assets/svg/ReturnIcon.svg?react";
import { useRenderPageContext } from "../../../contexts/useRenderPageContext";
import { useWindowSize } from "../../../hooks/useWindowSize";
import WallpaperImage from "../../../assets/downloadable/mora-icon-46kb.jpg";
import TempleBirdEye from "../../../assets/weblog/view-from-inside/birdseye-view-1.png";
import BustPortrait from "../../../assets/downloadable/bust-portrait-nologo-160kb.jpg";
import FirstPhase from "../../../assets/weblog/mora-icon/first-phase.png";
import SecondPhase from "../../../assets/weblog/mora-icon/second-phase.png";
import Angle1 from "../../../assets/weblog/mora-icon/angle-1.png";
import Angle2 from "../../../assets/weblog/mora-icon/angle-2.png";
import Angle3 from "../../../assets/weblog/mora-icon/angle-3.png";
import Angle4 from "../../../assets/weblog/mora-icon/angle-4.png";
import Layers from "../../../assets/weblog/mora-icon/layers.png";
import PaintNoShift from "../../../assets/weblog/mora-icon/paint-no-shift.png";
import MoraIconResult from "../../../assets/downloadable/mora-icon-46kb.jpg";

const MoraIcon = () => {
    const { width } = useWindowSize();
    const { setPageName } = useRenderPageContext();

    const Wallpaper = () => {
        return(
            <div className={Styles.Wallpaper}>
                <img src={WallpaperImage} alt="" className={Styles.ImageAppearance}/>
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
                <a href="#stars">Stars</a>
                <a href="#sketches">Sketches</a>
                <a href="#blender">Blender</a>
                <a href="#paint">Paint</a>
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
                    <h1>The making of Mora's Icon</h1>
                    <br/>
                    <p>We needed a recognizable symbol associated with Mora. This symbol appears in all elements related to her—such as the temple, shrine, or souvenirs. It is a brownish stone that turns blue when exposed to light.</p>
                    <br/>
                </ChapterDiv>
                <ChapterDiv id="stars">
                    <h1>✦ Stars everywhere ✦</h1>
                    <br/>
                    <p>Yviira had a clear vision for the symbol. Coincidentally, one of my earlier architectural suggestions for the temple already resembled it—a four-pointed star. The placeholder for the first edition of the bust portrait also aligned with her description, serving as both a reference and source of inspiration for the designs.</p>
                    <img src={TempleBirdEye} className={Styles.SmallImage} alt="couldn't load image"/>
                    <img src={BustPortrait} className={Styles.SmallImage} alt="couldn't load image"/>
                </ChapterDiv>
                <ChapterDiv id="sketches">
                    <h1>Sketches</h1>
                    <br/>
                    <p>I made some sketches in Clip Studio Paint, which has a useful feature called the “Symmetrical Ruler.” By setting the number of lines to eight, I could draw one-eighth of the design and have it automatically mirror into a perfectly symmetrical four-pointed star.</p>
                    <br/>
                    <p>We went through two phases of selection. The first batch of sketches included four with round gemstones framed into a four-pointed star, and four others that more closely followed the original description:</p>
                    <img src={FirstPhase} className={Styles.FirstPhaseImage} alt="couldn't load image"/>
                    <br/>
                    <p>The faithful batch, specifically number 5 made it to the next phase. The second phase of sketches had four sharp gem stones, four soft gem stones, each with varying frames:</p>
                    <img src={SecondPhase} className={Styles.SmallImage} alt="couldn't load image"/>
                    <br/>
                    <p>Ironically, sketch number 5 from the first phase—renumbered as number 1 in the second phase—ended up being the final choice. Number 5 was number 1 in more ways than one. Perhaps the second phase wasn’t strictly necessary, but offering alternatives is part of the process.</p>
                </ChapterDiv>
                <ChapterDiv id="blender">
                    <h1>Blender</h1>
                    <br/>
                    <p>As with the temple, I created a 3D model of the symbol. This helps in capturing accurate angles, especially if we need a tilted illustration.</p>
                    <br/>
                    <p>Blender’s “Mirror Modifier” works similarly to Clip Studio Paint’s “Symmetrical Ruler.” Using the sketch as a reference, I created a flat plane, added vertices, and moved them around as if working on a vector project in Adobe Illustrator or Affinity Designer. Then I applied a “Solidify Modifier” for depth, tweaking the gemstone vertices so the top pointed upward—enhancing the three-dimensional effect.</p>
                    <br/>
                    <p>I adjusted the light source to clearly showcase the symbol in renders. This time, I created a few point-of-view renders myself—no 3D web game. To align the camera with the editor’s view, simply select the camera object and choose {"View > Align View > Align Active Camera to View"} from the menu.</p>
                    <br/>
                    <p>These are the four angles I proposed:</p>
                    <img src={Angle1} className={Styles.SmallImage} alt="couldn't load image"/>
                    <img src={Angle2} className={Styles.SmallImage} alt="couldn't load image"/>
                    <img src={Angle3} className={Styles.SmallImage} alt="couldn't load image"/>
                    <img src={Angle4} className={Styles.SmallImage} alt="couldn't load image"/>
                    <br/>
                    <p>The first angle worked best. It clearly shows the symbol, like the second angle, but adds a moderate, dynamic, and playful perspective. It also highlights both the gemstone’s depth and the frame’s flatness, as seen in the third and fourth angles.</p>
                </ChapterDiv>
                <ChapterDiv id="paint">
                    <h1>Paint</h1>
                    <br/>
                    <p>I began by importing the render as a reference layer, then applied paint to each section: the frame, the frame's depth, and the gemstone itself.</p>
                    <img src={Layers} className={Styles.SmallImage} alt="couldn't load image"/>
                    <br/>
                    <p>Due to the gemstone's complexity, it eventually required its own folder to manage east, west, south, and north lighting, as well as the eventual blue shift.</p>
                    <br/>
                    <p>I added glare to the frame by masking a Color Dodge layer over it, using the same values as the frame itself. Color Dodge is especially useful for rendering metal-like materials, as it naturally shifts from dark to bright in a vibrant way while respecting the underlying values.</p>
                    <br/>
                    <p>Each direction of the star—north, west, east, and south—was assigned a distinct color, overlaid with a Color Dodge blending layer. The edges have soft opacity, the lower sections are given a gradient, and a subtle spray of random dots adds a shimmering effect. This evokes a universe-like aesthetic, emphasizing Mora’s divinity and complementing her godlike presence.</p>
                    <img src={PaintNoShift} className={Styles.SmallImage} alt="couldn't load image"/>
                    <br/>
                    <p>The final step was to make the exposed sections blue. Initially, I tried applying a Color blending overlay (not to be confused with Color Dodge) with blue paint, but it ended up looking plastic. I had to manually shift the base layers to blue tones. The north section, being most exposed to light, reached turquoise hues—otherwise, it would blend in with the other directions and break the immersion.</p>
                </ChapterDiv>
                <ChapterDiv id="final">
                    <h1>Final</h1>
                    <br/>
                    <p>Now we have a symbol for Mora, which I can also implement into previous pieces to complete them, and use it to give this web page a proper favicon.</p>
                    <img src={MoraIconResult} className={Styles.SmallImage} alt="couldn't load image"/>
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
            {width > 440 && <Wallpaper/> }
        </div>
    )
};

export default MoraIcon