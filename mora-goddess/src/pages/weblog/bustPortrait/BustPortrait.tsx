import Styles from "./BustPortrait.module.css";

import ReturnIcon from "../../../assets/svg/ReturnIcon.svg?react";
import { useRenderPageContext } from "../../../contexts/useRenderPageContext";
import { useWindowSize } from "../../../hooks/useWindowSize";
import WallpaperImage from "../../../assets/downloadable/variations/bust-portrait-full-nologo-300kb.jpg";

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
                    <p>The strokes and patterns in this hair technique are the result of lessons learned while trying to make it flow without losing density or imagination. The hair is essentially composed of soft triangles that curve into themselves. Initially, I throw down random strokes—like I'm having a stroke—then search for places to insert these "soft triangles" along the lines. This step becomes deeply meditative because it’s guided not by logic, but by emotional intuition, which suits how my brain operates. In the early stages, the canvas looks like a hurricane of curved strokes. Letting the hair fully grow out allows the rhythm and potential of the piece to reach their peak.</p>
                </ChapterDiv>
                <ChapterDiv id="hands">
                    <h1>Ten Hands</h1>
                    <br/>
                    <p>What I love about hands is that they’re both the most practical and expressive body part. You can reference your own hands or find great poses on Pinterest.</p>
                    <br/>
                    <p>Yviira requested ten hands. Mora holds a few items that depict life, hope, and enlightenment, so some hands were designed to hold objects such as a torch or a sunflower. The two primary hands embrace the icon/ symbol.</p>
                    <br/>
                    <p>Human artists and AI may be at great conflict with each other (for good reasons), but we can agree on one thing: hands are tricky. One trick I’ve learned from other artists is something I call “Duck Feet”—I sketch each phalanx section as a unified square to ensure consistent length. It’s easy to add internal lines afterward, making the block resemble a duck's foot. The second and third phalanges are harder since fingers tend to deviate, but the first joint becomes a reliable reference for the rest. Once the skeleton is in place, I add volume, and fingers emerge. I almost never get it right on the first try.</p>
                    <br/>
                    <p>I’ve also adapted a simplified stylization: I default to two joints per finger, only adding the third when needed for expression or practicality. When multiple fingers touch or overlap, I erase the borders, making them appear as one cohesive form. This makes hand gestures and expressions more legible.</p>
                    <br/>
                    <p>At one point, I accidentally created something that looked like an AI-generated image—not with Midjourney or ChatGPT’s generator, but because I got confused by the chaos of hair and nine other hands. The far-right arm was misplaced. I had to fix it or risk looking like a fraud who faked everything.</p>
                </ChapterDiv>
                <ChapterDiv id="final">
                    <h1>Final</h1>
                    <br/>
                    <p>The first version didn’t include the icon—it was completed before I even created it.</p>
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