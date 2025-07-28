import { Link } from "react-router-dom";
import Styles from "./UsedTech.module.css";

const UsedTech = () => {
    return(
        <div className={Styles.UsedTechView}>
            <h1>Software:</h1>
            <li>Clip Studio Paint EX 1.0</li>
            <li>Affinity Designer 2</li>
            <li>Affinity Photo 2</li>
            <li>Blender</li>
            <li>Unity</li>

            <h1>Technology</h1>
            <li>Vite (React with TypeScript)</li>
            <li>Github Pages</li>
            <Link to={"/"}>
                <a>Return home</a>
            </Link>
        </div>
    )
};

export default UsedTech;