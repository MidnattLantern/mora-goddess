import Styles from "./Footer.module.css";

const Footer = () => {

    return(<>
        <div className={Styles.Foundation}>
        <p>{"GitHub Repository: "}</p>
        <a href="https://github.com/MidnattLantern/mora-goddess" target="_blank">{"github.com/MidnattLantern/mora-goddess"}</a>

        <p>{"Developer's GitHub: "}</p>
        <a href="https://github.com/MidnattLantern" target="_blank">{"github.com/MidnattLantern"}</a>

        <p>{"Illustrator's ArtStation: "}</p>
        <a href="https://www.artstation.com/midnight_lantern" target="_blank">{"artstation.com/midnight_lantern"}</a>
            
            <p>{"Project Idoria: "}</p>
            <a href="https://www.worldanvil.com/w/idoria-yviira" target="_blank">{"wordanvil.com/w/idoria-yviira"}</a>
        </div>
    </>)
};

export default Footer