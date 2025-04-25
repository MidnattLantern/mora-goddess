import Styles from "./MainView.module.css";
import ProjectViewFromInside from "../../components/projectViewFromInside/ProjectViewFromInside";
import ProjectViewFromOutside from "../../components/projectViewFromOutside/ProjectViewFromOutside";
import ProjectBustPortrait from "../../components/projectBustPortrait/ProjectBustPortrait";

const MainView = () => {

    return(<>
        <div className={Styles.Foundation}>
            <br/>
            <ProjectViewFromInside />
            <br/>
            <ProjectViewFromOutside />
            <br/>
            <ProjectBustPortrait />
        </div>
    </>)
};

export default MainView