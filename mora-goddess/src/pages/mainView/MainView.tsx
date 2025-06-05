import Styles from "./MainView.module.css";
import ProjectViewFromInside from "../../components/projectViewFromInside/ProjectViewFromInside";
import ProjectViewFromOutside from "../../components/projectViewFromOutside/ProjectViewFromOutside";
import ProjectBustPortrait from "../../components/projectBustPortrait/ProjectBustPortrait";
import ProjectMoraIcon from "../../components/projectMoraIcon/ProjectMoraIcon";
import ProjectShrine from "../../components/projectShrine/ProjectShrine";

const MainView = () => {

    return(<>
        <div className={Styles.Foundation}>
            <br/>
            <ProjectViewFromInside />
            <br/>
            <ProjectViewFromOutside />
            <br/>
            <ProjectBustPortrait />
            <br/>
            <ProjectMoraIcon />
            <br/>
            <ProjectShrine />
        </div>
    </>)
};

export default MainView