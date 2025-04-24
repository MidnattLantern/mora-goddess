import Styles from "./ViewFromInside.module.css";
import Wallpaper from "../../../components/wallpaper/Wallpaper";
import ReturnIcon from "../../../assets/svg/ReturnIcon.svg?react";
import BirdseyeView1 from "../../../assets/weblog/view-from-inside/birdseye-view-1.png"
import BirdseyeView2 from "../../../assets/weblog/view-from-inside/birdseye-view-2.png"
import FinalModel from "../../../assets/weblog/view-from-inside/final-model.png";
import POVScreenshotInside from "../../../assets/weblog/view-from-inside/pov-screenshot-inside.png";
import POVScreenshotOutside from "../../../assets/weblog/view-from-inside/pov-screenshot-outside.png";
import EstablishLayers from "../../../assets/weblog/view-from-inside/establish-layers.png";
import LightValues from "../../../assets/weblog/view-from-inside/light-values.png";
import FinalResult from "../../../assets/downloadable/mora-temple-v1-1mb.jpg";
import { useState } from "react";
import { useRenderPageContext } from "../../../contexts/useRenderPageContext";
import { useWindowSize } from "../../../hooks/useWindowSize";

const ViewFromInside = () => {
    const { width } = useWindowSize();
    const { setPageName } = useRenderPageContext();
    const [showFreeCamScript, setShowFreeCamScript] = useState<boolean>(false);

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
                <a href="#intro">Into</a>
                <a href="#3d-model">3D Model</a>
                <a href="#unity">Unity</a>
                <a href="#values">Values</a>
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

    const FreeCamScript = () => {
        return(
            showFreeCamScript ? (
<pre className={Styles.CodeBlock}>
<code>
    {`using UnityEngine;

    public class FreeCam : MonoBehaviour
    {
        public float moveSpeed = 10f;
        public float lookSensitivity = 2f;
        public bool invertY = false;

        private float rotationX = 0f;
        private float rotationY = 0f;

        void Start()
        {
            Cursor.lockState = CursorLockMode.Locked;
            Cursor.visible = false;
        }

        void Update()
        {
            float mouseX = Input.GetAxis("Mouse X") * lookSensitivity;
            float mouseY = Input.GetAxis("Mouse Y") * lookSensitivity * (invertY ? 1 : -1);

            rotationX += mouseX;
            rotationY = Mathf.Clamp(rotationY + mouseY, -90f, 90f);

            transform.rotation = Quaternion.Euler(rotationY, rotationX, 0f);

            float moveX = Input.GetAxis("Horizontal");
            float moveZ = Input.GetAxis("Vertical");
            float moveY = 0f;

            if (Input.GetKey(KeyCode.Space)) moveY = 1f;
            if (Input.GetKey(KeyCode.LeftShift)) moveY = -1f;

            Vector3 move = transform.right * moveX + transform.forward * moveZ + transform.up * moveY;
            transform.position += move * moveSpeed * Time.deltaTime;

            if (Input.GetKeyDown(KeyCode.Escape))
            {
                Cursor.lockState = CursorLockMode.None;
                Cursor.visible = true;
            }
        }
    }`}
</code>
</pre>
            ) : (
            null
            )
        )
    };

    const WeblogContent = () => {
        return(
            <div className={Styles.WeblogContainer}>
                <ChapterDiv id="intro">
                    <h1>The Making of Inside View</h1>
                    <p>When Yviira asked me to design and paint a temple for her character Mora, I was excited with the descriptions: A lush but well kept sanctuary and an orchard with lots of greenery, and big window frames to let in the light and atmosphere. Painting lush landscapes and architectural paintings is my favorite theme to paint, this was my element.</p>
                </ChapterDiv>
                <ChapterDiv id="3d-model">
                    <h1>3D Modeling</h1>
                    <p>Up to this point, my experience with architecture was basic. I've mostly drawn manual perspective grids with a ruler or using Clip Studio Paint's perspective tool. But for this project, I wanted to take it a step further. I've been wanting to learn Blender to paint more complex architecture and general composition, so this was my perfect excuse.</p>
                    <br/>
                    <p>I started with planning what bird's eye layout view I should use. I proposed two layouts:</p>
                    <img className={Styles.BirdViewImageSize} src={BirdseyeView1} alt={"couldn't load image"}/>
                    <img className={Styles.BirdViewImageSize} src={BirdseyeView2} alt={"couldn't load image"}/>
                    <p>We went for the left one, as it resembled the description of Mora's star-like logo/ icon.</p>
                    <br/>
                    <p>Having studied graphic design during year 10 - 13, it gave me a decent head-start into Blender. It's a bit like a 3D version of the tools I already knew, Adobe Illustrator and Affinity Designer. Most of the technical hurdles weren't too hard to figure out, thanks to intuition and some help from internet tutorials and ChatGPT.</p>
                    <br/>
                    <p>This project pushed me to really dig into Blender's features; using modifiers like Boolean, Mirror, and Array, and turning simple faces into detailed window panels. I learned how to properly join vertices, edges and faces, and finally how to apply modifiers cleanly to keep the object lightweight.</p>
                    <br/>
                    <p>Eventually I ended up with this design:</p>
                    <img className={Styles.FinalModelImageSize} src={FinalModel} alt={"couldn't load image"}/>
                    <p>After getting the design approved, it was time to think of good POVs. I could go the traditional route by placing the camera in different angles, render and suggesting them to my client, but I had a better idea...</p>
                </ChapterDiv>
                <ChapterDiv id="unity">
                    <h1>POV using Unity</h1>
                    <p>...I've been wanting to learn about Unity and C#, so this was my perfect excuse. Let's make it interactive and let my client move around and pick POVs herself! I exported the Blender model as an .fbx file, imported it into Unity, and wrote a basic script that let players move freely with WASD keys, mouse look, Shift, and Space. Then I built the game as a web app, published the app to GitHub Pages and sent Yviira the link. She was able to move explore and screenshot POVs she liked.</p>

                    {width > 440 && <>
                        <button className={Styles.ToggleShowScriptButton} onClick={() => {setShowFreeCamScript(!showFreeCamScript)}}>
                            {showFreeCamScript ? (
                                <>Hide FreeCam script</>
                            ) : (
                                <>Show FreeCam script</>
                            )}
                        </button>
                        <FreeCamScript />
                        <p>If you're curious, you can check it out yourself with this link: <a href="https://midnattlantern.github.io/display-mora-temple/" target="_blank">midnattlantern.github.io/display-mora-temple</a></p>
                        <br/>
                    </>}

                    <p>Yviira sent me these screenshots:</p>
                    <img className={Styles.POVScreenshotImageSize} src={POVScreenshotInside} alt="couldn't load image"/>
                    <img className={Styles.POVScreenshotImageSize} src={POVScreenshotOutside} alt="couldn't load image"/>
                    <p>This weblog is regarding the left image. For the right image, check the weblog regarding View From Outside.</p>
                </ChapterDiv>
                <ChapterDiv id="values">
                    <h1>Establishing the light values</h1>
                    <p>By using the screenshot as a background layer, I was able to trace over the shapes of the structure. I made multiple layers ranging from closest to farthest away. I started by tracing over the basic structure using layers from the closest elements to the farthest. For this weblog, I dimmed the background layers to show how depth was built up step-by-step.</p>
                    <img className={Styles.EstablishLayersImageSize} src={EstablishLayers} alt="couldn't load image"/>
                    <br/>
                    <br/>
                    <p>Next, I focused on the lighting. Before adding color, I spent time experimenting purely with values — making sure the light separated the different sections of the temple and kept the whole scene balanced and atmospheric. </p>
                    <img className={Styles.LightValuesImageSize} src={LightValues} alt="couldn't load image"/>
                    <br/>
                    <br/>
                    <p>All art/ photography applications have a level correction feature, this can be a great way to begin applying colors to a greyscale image, though it can be tedious to apply a level correction to each and every layer. Though, at this stage, you usually don't have that many layers. Of course you want to use actual colors to shift away from greyscale. If you're worried that radical shifting will break the atmosphere and light values, you can use soft brushes or blending brushes, as well as adding a saturation correction layer at the top to check how the brightness values change along with the color.</p>
                </ChapterDiv>
                <ChapterDiv id="final">
                    <h1>Final touches</h1>
                    <p>I added vines and bushes, and amplified the lighting with Clip Studio Paint's Add Glow blend option. Most software have their equivalent to CSP's Add Glow. CSP being a software targeted towards digital painting, it lacks some editing features you'd find in a photography targeted software. So I exported the image as a .png and opened it with Affinity Photo, adding a tiny bit of chromatic aberration, soft Gaussian blur, and subtle noise. These small tweaks helped dissolve that overly crisp digital feeling and gave the artwork a more authentic atmosphere.</p>
                    <br/>
                    <p>Yviira wanted the temple to look maintained. I think I nailed a good balance between maintained and natural, she was satisfied with the final result:</p>
                    <img className={Styles.FinalResultImageSize} src={FinalResult} alt="couldn't load image"/>

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
            {width > 440 && <Wallpaper/>}

        </div>
    )
};

export default ViewFromInside