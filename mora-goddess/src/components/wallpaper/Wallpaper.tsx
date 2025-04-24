import Styles from './Wallpaper.module.css';
import WallpaperAsset from '../../assets/downloadable/mora-temple-v1-1mb.jpg';
import { useWindowSize } from '../../hooks/useWindowSize';

const Wallpaper = () => {
    const { width } = useWindowSize();

    const Overlay = () => {
        return (
            <div className={Styles.Overlay} />
        );
    };

    return (
        <div className={Styles.Foundation}>
            {width > 440 ? (<>
                <img className={Styles.ImageAppearance} src={WallpaperAsset} alt={"Failed to load image: Wallpaper"}/>
            </>) : (<>

            </>) }
            <Overlay />
        </div>
    );
};

export default Wallpaper;