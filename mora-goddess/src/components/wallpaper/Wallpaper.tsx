import Styles from './Wallpaper.module.css';
import WallpaperAsset from '../../assets/downloadable/mora-temple-v1-1mb.jpg';

const Wallpaper = () => {
    const Overlay = () => {
        return (
            <div className={Styles.Overlay} />
        );
    };

    return (
        <div className={Styles.Foundation}>
            <img className={Styles.ImageAppearance} src={WallpaperAsset} alt={"Failed to load image: Wallpaper"}/>
            <Overlay />
        </div>
    );
};

export default Wallpaper;