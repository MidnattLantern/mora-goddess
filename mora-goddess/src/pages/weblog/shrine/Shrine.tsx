import Styles from "./Shrine.module.css";
import Wallpaper from "../../../components/wallpaper/Wallpaper";
import ReturnIcon from "../../../assets/svg/ReturnIcon.svg?react";
import { useRenderPageContext } from "../../../contexts/useRenderPageContext";
import { useWindowSize } from "../../../hooks/useWindowSize";
import Option1a from "../../../assets/weblog/shrine/option-1a.jpg";
import Option2a from "../../../assets/weblog/shrine/option-2a.jpg";
import Option3a from "../../../assets/weblog/shrine/option-3a.jpg";
import Option4a from "../../../assets/weblog/shrine/option-4a.jpg";
import Option5a from "../../../assets/weblog/shrine/option-5a.jpg";
import Option6a from "../../../assets/weblog/shrine/option-6a.jpg";
import Option1b from "../../../assets/weblog/shrine/option-1b.jpg";
import Option2b from "../../../assets/weblog/shrine/option-2b.jpg";
import Option3b from "../../../assets/weblog/shrine/option-3b.jpg";
import Option4b from "../../../assets/weblog/shrine/option-4b.jpg";
import Option1c from "../../../assets/weblog/shrine/option-1c.jpg";
import Option2c from "../../../assets/weblog/shrine/option-2c.jpg";
import Option3c from "../../../assets/weblog/shrine/option-3c.jpg";
import Option4c from "../../../assets/weblog/shrine/option-4c.jpg";
import Option5c from "../../../assets/weblog/shrine/option-5c.jpg";
import Option6c from "../../../assets/weblog/shrine/option-6c.jpg";
import Option7c from "../../../assets/weblog/shrine/option-7c.jpg";
import CSPLayers from "../../../assets/weblog/shrine/csp-layers.png";
import CSPSelection from "../../../assets/weblog/shrine/csp-selection.png";
import CSPGradient from "../../../assets/weblog/shrine/csp-gradient.png";
import CSPWithColorDodge from "../../../assets/weblog/shrine/csp-with-color-dodge.jpg";
import CSPWithoutColorDodge from "../../../assets/weblog/shrine/csp-without-color-dodge.jpg";
import Final from "../../../assets/downloadable/mora-shrine-transparent-610kb.png";

const Shrine = () => {
    const { width } = useWindowSize();
    const { setPageName } = useRenderPageContext();

    const ChapterDiv = ({children, id} : { children: React.ReactNode; id?: string}) => {
        return(
            <div className={Styles.ChapterDiv} id={id}>
                {children}
            </div>
        )
    };

    const LargeNavigationBar = () => {
        return(
            <div className={Styles.LargeNavigationBar}>
                <ReturnIcon className={Styles.ReturnIcon} onClick={() => {setPageName("main")}}/>
                <a href="#intro">Intro</a>
                <a href="#blender">Blender</a>
                <a href="#paint">Paint</a>
                <a href="#final">Final</a>
            </div>
        )
    };

    const SmallNavigationBar = () => {
        return(
            <div className={Styles.SmallNavigationBar}>
                <ReturnIcon className={Styles.ReturnIcon} onClick={() => {setPageName("main")}}/>
            </div>
        )
    }

    const WeblogContent = () => {
        return(
            <div className={Styles.WeblogContainer}>
                <ChapterDiv id="intro">
                <h1>The Making of the Shrine</h1>
                <br/>
                <p>
                    {"The shrine(s) are tables roughly at chest height where pilgrims and other characters can leave offerings to Mora across the world. I encourage you to read more in detail on Yviira's WordAnvil: "}
                    <a target="_blank" href="https://www.worldanvil.com/w/idoria-yviira/a/mora-person">worldanvil.com/w/idoria-yviira/a/mora-person</a>
                </p>
                <br/>
                <p>This time, the object is illustrated in a straightforward, utilitarian style, without any elaborate environment, background, or lighting. It is presented from a specific angle to showcase as much of the structure as possible. This type of illustration is similar to how items, assets, or Minecraft mobs are displayed on Wiki pages.</p>
                </ChapterDiv>
                <ChapterDiv id="blender">
                    <h1>Blender and modelling</h1>
                    <br/>
                    <p>This project began after the symbol was completed. Since it was a 3D model, I was able to reuse it as an asset when designing the shrine. The symbol serves as a key feature, though we still had to figure out the design of the shrine itself. Some concepts are simple and square, while others are more intricate, drawing inspiration from the medieval, prestigious fashion often seen in fantasy media. In a few designs, I placed the symbol on its own wall, separating the offering table from Mora. This was intended to demonstrate the segregation between the human realm and the divine realm. Other designs position the symbol directly on the offering table, centered to allow offerings to be placed on both sides. Others have the symbol on the back, functioning as a piece of furniture you might place against a wall, thus providing more space for offerings:</p>
                    <img className={Styles.SmallImage} src={Option1a} alt=""/>
                    <img className={Styles.SmallImage} src={Option2a} alt=""/>
                    <img className={Styles.SmallImage} src={Option3a} alt=""/>
                    <img className={Styles.SmallImage} src={Option4a} alt=""/>
                    <img className={Styles.SmallImage} src={Option5a} alt=""/>
                    <img className={Styles.SmallImage} src={Option6a} alt=""/>
                    <br/>
                    <p>The unified, intricate, and centered design aligned best with Yviira’s vision. However, it needed to be less rectangular and more balanced with square and rounded shapes. Besides, the offering table was too narrow, and expanding it into a square shape would provide more space. I offered round and square feet, with varying details:</p>
                    <img className={Styles.TinyImage} src={Option1b} alt=""/>
                    <img className={Styles.TinyImage} src={Option2b} alt=""/>
                    <img className={Styles.TinyImage} src={Option3b} alt=""/>
                    <img className={Styles.TinyImage} src={Option4b} alt=""/>
                    <br/>
                    <p>The detailed round feet worked well, so I proceeded to render several angles for use in this project:</p>
                    <img className={Styles.TinyImage} src={Option1c} alt=""/>
                    <img className={Styles.TinyImage} src={Option2c} alt=""/>
                    <img className={Styles.TinyImage} src={Option3c} alt=""/>
                    <img className={Styles.TinyImage} src={Option4c} alt=""/>
                    <img className={Styles.SmallImage} src={Option5c} alt=""/>
                    <img className={Styles.SmallImage} src={Option6c} alt=""/>
                    <img className={Styles.SmallImage} src={Option7c} alt=""/>
                </ChapterDiv>
                <ChapterDiv id="paint">
                    <h1>Paint and colours</h1>
                    <br/>
                    <p>I painted over the rendered image in Clip Studio Paint, as I have with the previous projects. I created separate layers for different planes and transitions, such as slopes, to facilitate working with gradients on “locked transparent pixel” layers:</p>
                    <img className={Styles.LargeImage} src={CSPLayers} alt=""/>
                    <br/>
                    <p>However, all the cutouts were placed on the same layer, with the gradient transition occurring sideways. Since each cutout is exposed to sunlight differently, I had to individually mark each one and manually paint the shadows and highlights:</p>
                    <img className={Styles.LargeImage} src={CSPSelection} alt=""/>
                    <br/>
                    <p>Also, since the shrine is illustrated with neutral lighting, I can demonstrate how the symbol appears under neutral conditions without the blue tint it takes on under direct sunlight:</p>
                    <img className={Styles.LargeImage} src={CSPGradient} alt=""/>
                    <br/>
                    <p>After completing the gradients, I applied noise and level corrections to give the material closet a stone-like texture. Then, I added an orange “Color Dodge” layer to enhance the lighting with more complexity than a simple two-color gradient. Below, you can see the difference with and without this effect:</p>
                    <img className={Styles.MediumImage} src={CSPWithoutColorDodge} alt=""/>
                    <img className={Styles.MediumImage} src={CSPWithColorDodge} alt=""/>
                </ChapterDiv>
                <ChapterDiv id="final">
                    <h1>Final</h1>
                    <br/>
                    <p>After adding vines and a couple of offerings, here is the final result:</p>
                    <img className={Styles.LargeImage} src={Final} alt=""/>
                </ChapterDiv>

            </div>
        )
    };

    return(
        <div className={Styles.Foundation}>
            <WeblogContent />
            <div className={`${Styles.NavigationBarContainer} ${width > 1024 ? null : Styles.PushDown}`}>
                {width > 1024 ?
                    <LargeNavigationBar/>
                :
                    <SmallNavigationBar/>
                }
            </div>
            {width > 440 && <Wallpaper/> }
        </div>
    )
};

export default Shrine