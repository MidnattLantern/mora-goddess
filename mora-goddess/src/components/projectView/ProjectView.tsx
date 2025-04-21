import Styles from "./ProjectView.module.css";
import SmallViewFromInside from "../../assets/downloadable/mora-temple-v1-1mb.jpg";

const ProjectView = () => {
    return (
        <>
            <div className={Styles.Foundation}>
                <div className={Styles.TitleContainer}>
                    <h1 className={Styles.TitleText}>{"View from inside"}</h1>
                </div>

                <div className={Styles.ImageAndNavigationContainer}>
                    <div className={Styles.ImageContainer}>
                        <img className={Styles.ImageSize} src={SmallViewFromInside} alt={"Failed to load image: View from inside"}/>
                    </div>
                    <div className={Styles.NavigationBarContainer}>
                        <button className={Styles.DownloadButton}>
                            {"As jpg 1mb"}
                        </button>
                        <button className={Styles.DownloadButton}>
                            {"As png 16mb"}
                        </button>
                        <a className={Styles.LinkToWeblogButton}>
                            {"Read the Weblog"}
                        </a>
                    </div>
                </div>

            </div>
        </>
    );
}
export default ProjectView;