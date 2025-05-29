import Styles from "./MoraIcon.module.css";

import ReturnIcon from "../../../assets/svg/ReturnIcon.svg?react";
import { useRenderPageContext } from "../../../contexts/useRenderPageContext";
import { useWindowSize } from "../../../hooks/useWindowSize";
import WallpaperImage from "../../../assets/downloadable/mora-icon-46kb.jpg";

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
                    <h1>Mora Icon</h1>
                    <p>No content yet</p>
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
            {width > 440 && <Wallpaper/> }
        </div>
    )
};

export default MoraIcon