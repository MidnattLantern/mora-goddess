import Styles from "./Footer.module.css";

const Footer = () => {

    return(<>
        <div className={Styles.Foundation}>
        <div>
            <p className={Styles.FooterItemTitle}>{"GitHub Repository: "}</p>
            <a className={Styles.FooterItemLink} href="https://github.com/MidnattLantern/mora-goddess" target="_blank">{"github.com/MidnattLantern/mora-goddess"}</a>
        </div>

        <div>
            <p className={Styles.FooterItemTitle}>{"Developer's GitHub: "}</p>
            <a className={Styles.FooterItemLink}href="https://github.com/MidnattLantern" target="_blank">{"github.com/MidnattLantern"}</a>
        </div>

        <div>
            <p className={Styles.FooterItemTitle}>{"Illustrator's ArtStation: "}</p>
            <a className={Styles.FooterItemLink}href="https://www.artstation.com/midnight_lantern" target="_blank">{"artstation.com/midnight_lantern"}</a>
        </div>
            
        <div>
            <p className={Styles.FooterItemTitle}>{"Project Idoria: "}</p>
            <a className={Styles.FooterItemLink}href="https://www.worldanvil.com/w/idoria-yviira" target="_blank">{"wordanvil.com/w/idoria-yviira"}</a>
        </div>
        </div>
    </>)
};

export default Footer