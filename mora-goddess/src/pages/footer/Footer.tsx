import Styles from "./Footer.module.css";
import { ReactNode } from "react";

const Footer = () => {

    const FooterItem = ({children} : { children: ReactNode }) => {
        return(
            <div className={Styles.FooterItem}>
                {children}
            </div>
        )
    }

    return(<>
        <div className={Styles.Foundation}>
        <FooterItem>
            <a className={Styles.FooterItemLink} href="https://github.com/MidnattLantern/mora-goddess" target="_blank">{"GitHub Repository"}</a>
        </FooterItem>

        <FooterItem>
            <a className={Styles.FooterItemLink}href="https://github.com/MidnattLantern" target="_blank">{"Developer's GitHub"}</a>
        </FooterItem>

        <FooterItem>
            <a className={Styles.FooterItemLink}href="https://www.artstation.com/midnight_lantern" target="_blank">{"Illustrator's ArtStation"}</a>
        </FooterItem>
            
        <FooterItem>
            <a className={Styles.FooterItemLink}href="https://www.worldanvil.com/w/idoria-yviira" target="_blank">{"Project Idoria"}</a>
        </FooterItem>
        </div>
    </>)
};

export default Footer