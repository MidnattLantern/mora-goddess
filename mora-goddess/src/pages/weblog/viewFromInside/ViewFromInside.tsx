import Styles from "./ViewFromInside.module.css";
import Wallpaper from "../../../components/wallpaper/Wallpaper";
import ReturnIcon from "../../../assets/svg/ReturnIcon.svg?react";
import { Link } from "react-router-dom";

const ViewFromInside = () => {

    return(
        <div className={Styles.Foundation}>
            <h1>View from inside weblog</h1>

            <div className={Styles.NavigationBarContainer}>
                <Link className={Styles.NavigationBar} to="/mora-goddess">
                    <ReturnIcon className={Styles.ReturnIcon}/>
                </Link>
            </div>

            <Wallpaper />
        </div>
    )
};

export default ViewFromInside