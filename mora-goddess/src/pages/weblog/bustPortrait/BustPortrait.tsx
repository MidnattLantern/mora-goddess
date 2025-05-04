import Styles from "./BustPortrait.module.css";

import ReturnIcon from "../../../assets/svg/ReturnIcon.svg?react";
import { useRenderPageContext } from "../../../contexts/useRenderPageContext";
import { useWindowSize } from "../../../hooks/useWindowSize";

const BustPortrait = () => {
    const { width } = useWindowSize();
    const { setPageName } = useRenderPageContext();

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
                    <p>Here, I’m getting to the meat: Designing Mora herself, the Goddess of Light & Promises. Yviira described Mora's form as incomprehensible to humans but depicted as beautiful, flowing, and brilliant. The portrait needed glowing eyes, intense hair flowing in all directions, and more than two hands, like Durga or Kali. During the pandemic, I experimented with extraterrestrial art to depict higher beings with non-human elements, such as wings, peculiar eyes (up to a dozen), robes, and metal rings with peculiar engravings. This was when biblically accurate angels were trending on the internet. This realm breaks the barriers of what is truly logical for character design—it’s the wet dream for artists during their most whimsical period(s). Over the years, I had become fairly confident drawing playful hands and uncaged hairstyles. Hair can be the perfect playground for throwing absolute chaos with no logic and relying entirely on intuition to find logic and harmony for (in my opinion) the most beautiful body-part. Now, throw an extraterrestrial entity into the equation, and I was very excited about this project!</p>
                </ChapterDiv>
                <ChapterDiv id="hands">
                    <h1>Hands</h1>
                    <p>What I love about hands is that they're both the most practical and expressive body-part. They don't express emotions like body language or the face does, but rather expose another dimension of emotions.</p>
                    <p>It turned out to be harder than I'd expected, I wasn't sure how I should direct Mora's depiction. The obvious route would be going the traditional route: Give her a face, some hair, some arms, the usual depiction you get when you Google Greek or Hinduistic gods. In Christianity however, it's generally discouraged to depict God at all; One of the reasons, it can be easy to fall into the trap and depict the divine as just a human-being with supernatural priviedges, their additional body parts or features and their accessories are marks of their priviledge, but they are still humans as evident by their human-like features. If you look at the biblically accurate angels that was roaming around the internet during the pandemic, you don't see human-like enitities, you see bizzare depictions of providences your mind could only make up during fever dreams. I made some sketches with human-like features to at least get started.</p>
                    <p>I knew I wanted to capture the materialistic beauty of a supermodel, to appeal to the familiarity, a human body is less intimidating than a weird entity. However, there are many gods in the world of Idoria, depicted by other artists, who were very likely to go for a human-like form. I decided to paint Mora with human form as to not risk breaking the consistency.</p>
                </ChapterDiv>
                <ChapterDiv id="final">
                    <h1>Final</h1>
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
            {width > 440 && <></> /* wallpaper */ }
        </div>
    )
};

export default BustPortrait