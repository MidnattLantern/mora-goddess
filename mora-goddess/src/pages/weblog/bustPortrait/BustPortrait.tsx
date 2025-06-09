import Styles from "./BustPortrait.module.css";
import ReturnIcon from "../../../assets/svg/ReturnIcon.svg?react";
import { useRenderPageContext } from "../../../contexts/useRenderPageContext";
import { useWindowSize } from "../../../hooks/useWindowSize";
import WallpaperImage from "../../../assets/downloadable/variations/bust-portrait-full-nologo-300kb.jpg";
import HandMistake from "../../../assets/weblog/bust-portrait/hand-mistake.png";
import HandFixMistake from "../../../assets/weblog/bust-portrait/hand-fix-mistake.png";
import TenHands from "../../../assets/weblog/bust-portrait/ten-hands.png";
import LotsHair from "../../../assets/weblog/bust-portrait/lots-hair.png";
import CreepyEyes from "../../../assets/weblog/bust-portrait/creepy-eyes.png";
import DuckHandsHyaxuii from "../../../assets/weblog/bust-portrait/duck-hands-hyaxuii.jpg";
import Sketch from "../../../assets/downloadable/variations/bust-portrait-full-sketch-nologo-1mb.jpg"
import SkinNoGlow from "../../../assets/weblog/bust-portrait/skin-no-glow.png"
import SkinGlow from "../../../assets/weblog/bust-portrait/skin-glow.png"
import RedHair from "../../../assets/weblog/bust-portrait/red-hair.png";
import BlueHair from "../../../assets/weblog/bust-portrait/blue-hair.png";
import BustPortraitResult from "../../../assets/downloadable/variations/bust-portrait-nologo-8mb.png";

const BustPortrait = () => {
    const { width } = useWindowSize();
    const { setPageName } = useRenderPageContext();

    const Wallpaper = () => {
        return(
            <div className={Styles.Wallpaper}>
                <img src={WallpaperImage} alt="" />
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
                <a href="#hair">Hair</a>
                <a href="#hands">Hands</a>
                <a href="#sketch">Sketch</a>
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
                    <h1>The Making of the Bust Portrait</h1>
                    <br/>
                    <p>Here’s where I get to the core: designing Mora herself, the Goddess of Light and Promises. Yviira described Mora’s form as incomprehensible to humans but portrayed as beautiful, flowing, and radiant. The portrait needed glowing eyes, intense hair flowing in all directions, and more than two hands—like Durga or Kali.</p>
                    <br/>
                    <p>During the pandemic, I experimented with depicting higher beings using non-human elements—wings, peculiar eyes (sometimes up to a dozen), and elaborate robes. This aligned with the rise of biblically accurate angels trending online. These experiments expanded the rules of character design. I reached a breaking point while drawing hair and hands; my mind doesn’t follow rigid instructions well, so abandoning logic in favor of divine abstraction unleashed something within me. I realized hair could be thrown into total chaos, guided purely by intuition to restore harmony. I was thrilled by this process.</p>
                </ChapterDiv>
                <ChapterDiv id="hair">
                    <h1>Hair</h1>
                    <br/>
                    <p>The strokes and patterns in this hair technique are the result of lessons learned while trying to make it flow without losing density or imagination, something I've been struggling with. The hair is essentially composed of soft triangles that curve into themselves. Initially, I throw down random strokes—like I'm having a stroke—then search for places to insert these "soft triangles" along the lines. This step becomes deeply meditative because it’s guided not by logic, but by emotional intuition, which suits how my brain operates.</p>
                    <br/>
                    <p>In the early stages, the canvas looks like a hurricane of curved strokes. Letting the hair fully grow out allows the rhythm and potential of the piece to reach their peak. By chance, brilliant patterns emerge—like lucky dice rolls—producing results that calculated manufacturing could never dream of replicating. I learned this during the pandemic, during the biblically accurate internet period.</p>
                    <img src={LotsHair} className={Styles.SmallImage} alt="couldn't load image"/>
                    <br/>
                    <p>Next comes the selective filtering, because the piece is messy and overwhelming. Personally, I find it easier to erase existing parts than to invent new ones on demand—so this step feels natural to me. I chose to keep the sections that made the hair resemble vibrant rays and lifelike vines, complementing Mora’s radiant and nourishing vibe.</p>
                    <br/>
                    <p>The biblical period inspired me to experiment with placing eyes in unexpected spots. I knew it might come off as creepy, but there was a chance it could work. I tried it for Mora—it looked interesting, but ultimately didn’t feel right for her floral and approachable vibe.</p>
                    <img src={CreepyEyes} className={Styles.SmallImage} alt="couldn't load image"/>
                </ChapterDiv>
                <ChapterDiv id="hands">
                    <h1>Ten Hands</h1>
                    <br/>
                    <p>What I love about hands is that they’re both the most practical and expressive body part. You can reference your own hands or find great poses on Pinterest.</p>
                    <br/>
                    <p>Yviira requested ten hands. Mora holds a few items that depict life, hope, and enlightenment, so some hands were designed to hold objects such as a torch or a sunflower. The two primary hands embrace the icon/ symbol.</p>
                    <br/>
                    <p>Each hand was its seperate layer, making it easier to manage and relocate them and add arms afterward.</p>
                    <img src={TenHands} className={Styles.SmallImage} alt="couldn't load image"/>
                    <br/>
                    <p>Human artists and AI can agree on one thing: hands are tricky. One trick I’ve learned from other artists is something I call “Duck Feet”—I sketch each phalanx section as a unified square to ensure consistent height and length. It’s easy to add internal lines afterward, making the block resemble a duck's foot. The second and third phalanges are harder since fingers tend to deviate, but the first joint becomes a reliable reference for the rest. Once the skeleton is in place, I add volume, and fingers emerge. I almost never get it right on the first try. <a target="_blank" href="https://x.com/hyaxuii/status/1461591055124791301">Hyaxuii on Twitter</a> illustrates this method really well:</p>
                    <img src={DuckHandsHyaxuii} className={Styles.SmallImage} alt="couldn't load image"/>
                    <br/>
                    <p>I’ve also adapted a simplified stylization: I default to two joints per finger, only adding the third when needed for expression or practicality. When multiple fingers rest on or overlap each other, I erase the borders, making them appear as one cohesive form. This makes hand gestures and expressions more legible.</p>
                    <br/>
                    <p>At one point, I accidentally created something that looked like an AI-generated image—not with Midjourney or ChatGPT’s image generator, but because I got confused by the chaos of hair and nine other hands. The far-right arm was misplaced. I had to fix it or risk looking like a fraud who faked everything.</p>
                    <img src={HandMistake} className={Styles.SmallImage} alt="couldn't load image"/>
                    <img src={HandFixMistake} className={Styles.SmallImage} alt="couldn't load image"/>
                </ChapterDiv>
                <ChapterDiv id="sketch">
                    <h1>Final Sketch first draft</h1>
                    <p>I gave Mora a minimalistic off-shoulder Greek-goddess-style dress and a few items to hold: a torch, a globe, a ring, a sunflower, subtle sparks, and the icon. However, the icon hadn’t been designed yet at that stage, so I used a placeholder star.</p>
                    <img src={Sketch} className={Styles.SmallImage} alt="couldn't load image"/>
                </ChapterDiv>
                <ChapterDiv id="paint">
                    <h1>Paint</h1>
                    <p>The sketch layer is used as a "foundation" layer set to Multiply. All the colors that make up the character are painted underneath this layer. The color of the outlines automatically shifts depending on the hue beneath, helping the lines blend more naturally with the rest of the piece.</p>
                    <br/>
                    <p>I keep the base layer for the skin pale and muted. This temporarily lifeless appearance ensures that the values won't compete when I add light and glow later in the process.</p>                    
                    <img src={SkinNoGlow} className={Styles.SmallImage} alt="couldn't load image"/>
                    <img src={SkinGlow} className={Styles.SmallImage} alt="couldn't load image"/>
                    <br/>
                    <p>I gave her saturated cerise hair (red-pink), with a royal blue tint in the inner sections. The red-pink tone works well for a goddess of life and hope, while the blue helps soften the intensity so it doesn't become overwhelming.</p>
                    <img src={RedHair} className={Styles.SmallImage} alt="couldn't load image"/>
                    <img src={BlueHair} className={Styles.SmallImage} alt="couldn't load image"/>
                    <br/>
                    <p>I kept the dress color neutral so it would blend into the environment, shifting attention toward the more important elements.</p>
                </ChapterDiv>
                <ChapterDiv id="final">
                    <h1>Final</h1>
                    <br/>
                    <p>Finally, I gave the icon a vibrant flare using an Add (Glow) layer and highlighted some areas with Color Dodge. Color Dodge is a great blending mode for adding vibrancy without increasing the brightness value, though it can be tricky to master. That’s why I keep the hue layer pale—to let Color Dodge or Add (Glow) bring it to life later, then a final touch of level correction to tie all elements to the same atmosphere and achieve the right tone.</p>
                    <img src={BustPortraitResult} className={Styles.SmallImage} alt="couldn't load image"/>
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

export default BustPortrait