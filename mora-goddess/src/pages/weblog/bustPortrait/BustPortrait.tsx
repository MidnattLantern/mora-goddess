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
                    <p>Here, I’m getting to the meat: Designing Mora herself, the Goddess of Light & Promises. Yviira described Mora’s form as incomprehensible to humans but depicted as beautiful, flowing, and brilliant. The portrait needed glowing eyes, intense hair flowing in all directions, and more than two hands, like Durga or Kali. During the pandemic, I experimented with extraterrestrial art to depict higher beings with non-human elements, such as wings, peculiar eyes (up to a dozen), robes, and metal rings with peculiar engravings. This was when biblically accurate angels were trending on the internet. This realm breaks the barriers of what is truly logical for character design—it’s the wet dream for artists during their most whimsical period(s). Over the years, I had become fairly confident drawing playful hands and uncaged hairstyles. Hair can be the perfect playground for throwing absolute chaos with no logic and relying entirely on intuition to find logic and harmony for (in my opinion) the most beautiful body-part. Now, throw an extraterrestrial entity into the equation, and I was very excited about this project!</p>
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