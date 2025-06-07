import Styles from "./MainView.module.css";
import ProjectViewFromInside from "../../components/projectViewFromInside/ProjectViewFromInside";
import ProjectViewFromOutside from "../../components/projectViewFromOutside/ProjectViewFromOutside";
import ProjectBustPortrait from "../../components/projectBustPortrait/ProjectBustPortrait";
import ProjectMoraIcon from "../../components/projectMoraIcon/ProjectMoraIcon";
import ProjectShrine from "../../components/projectShrine/ProjectShrine";
import ClientCredits from "../../components/clientCredits/ClientCredits";

const MainView = () => {

    return(<>
        <div className={Styles.Foundation}>
            <br/>
            <ClientCredits />
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