import Styles from "./MainView.module.css";
import ProjectViewFromInside from "../../components/projectViewFromInside/ProjectViewFromInside";
import ProjectViewFromOutside from "../../components/projectViewFromOutside/ProjectViewFromOutside";

const MainView = () => {

    return(<>
        <div className={Styles.Foundation}>
            <br/>
            <ProjectViewFromInside />
            <br/>
            <ProjectViewFromOutside />
            <br/>
        </div>
    </>)
};

export default MainView