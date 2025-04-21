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
import { Link } from "react-router-dom";

const ViewFromInside = () => {
    const [showFreeCamScript, setShowFreeCamScript] = useState<boolean>(false);

    const ChapterDiv = ({children} : { children: React.ReactNode}) => {
        return(
            <div className={Styles.ChapterDiv}>
                {children}
            </div>
        )
    };

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
                <ChapterDiv>
                    <h1>The Making of Inside View</h1>
                    <p>By commission from Yviira, I was asked to paint a couple point of views (POVs) for Mora's temple. With the descriptions:</p>
                    <br/>
                    <ul>
                        <li>Lots of plants</li>
                        <li>Orchards of fruits</li>
                        <li>Trees and gardens outside</li>
                        <li>Lots of sunlight</li>
                        <li>Well-kept greenery</li>
                        <li>The size equivalent of a sunday mass</li>
                    </ul>
                </ChapterDiv>
                <ChapterDiv>
                    <h1>3D Modeling</h1>
                    <p>I've never worked with complicated architecture besides basic manual perspective grid using a ruler and Clip Studio Paint's built-in perspective ruler, but this time I wanted to use Blender.</p>
                    <br/>
                    <p>I started with planning what bird's eye layout view I should use. I suggested two layouts:</p>
                    <img className={Styles.BirdViewImageSize} src={BirdseyeView1} alt={"couldn't load image"}/>
                    <img className={Styles.BirdViewImageSize} src={BirdseyeView2} alt={"couldn't load image"}/>
                    <p>We went for the left one.</p>
                    <br/>
                    <p>Having studied graphic design during year 10 - 13, I had prior knowledge with Adobe Illustrator and Affinity Designer. I had some basic understanding on Blender, it's like a 3D Illustrator/Designer, so most technical things weren't too hard to figure out with intuition and help of the internet and ChatGPT. This was the project that pushed me to learn Blender in more depth; using modifiers such as Boolean, Mirror, Array and Panel making square faces into window planes. I learned how to join vertices and faces and finally applying modifiers to a single less heavy object.</p>
                    <br/>
                    <p>I eventually ended up with this design:</p>
                    <img className={Styles.FinalModelImageSize} src={FinalModel} alt={"couldn't load image"}/>
                    <p>After getting the design approved, it was time to think of good POVs. I could go the traditional route by placing the camera in different angles, render and suggesting them to my client, but I had a better idea...</p>
                </ChapterDiv>
                <ChapterDiv>
                    <h1>POV using Unity</h1>
                    <p>...I've been wanting to learn about Unity and C#. Why not build a 3D web-game in Unity and let my client move around and pick POVs herself? I exported the model as an .fbx file, a 3d model file format Blender can read. Then I imported the .fbx file, wrote a C# script to allow the player to navigate with WASD, Shift, Space and the mouse and assigned the script to the camera. Then I built the game as a web app, published the build to GitHub and sent her the link. My client would move the camera and take screenshots of POVs she liked.</p>
                    <button onClick={() => {setShowFreeCamScript(!showFreeCamScript)}}>
                        {showFreeCamScript ? (
                            <>Hide FreeCam script</>
                        ) : (
                            <>Show FreeCam script</>
                        )}
                    </button>
                    <FreeCamScript />
                    <p>The web game can be accessed through this link: <a href="https://midnattlantern.github.io/display-mora-temple/" target="_blank">midnattlantern.github.io/display-mora-temple</a></p>
                    <br/>
                    <p>Yviira sent me these screenshots:</p>
                    <img className={Styles.POVScreenshotImageSize} src={POVScreenshotInside} alt="couldn't load image"/>
                    <img className={Styles.POVScreenshotImageSize} src={POVScreenshotOutside} alt="couldn't load image"/>
                    <p>This weblog is regarding the left image. For the right image, check the weblog regarding View From Outside.</p>
                </ChapterDiv>
                <ChapterDiv>
                    <h1>Establishing the light values</h1>
                    <p>By using the screenshot as a background layer, I was able to trace over the shapes of the structure. I made multiple layers ranging from closest to farthest away. For this weblog, the farthest layers have been reduced in opacity. Then I added a clipping layer to each to establish highlighting and shading. Every layer has its pixels locked for fast and easy shading.</p>
                    <img className={Styles.EstablishLayersImageSize} src={EstablishLayers} alt="couldn't load image"/>
                    <br/>
                    <br/>
                    <p>Before applying colors, I was playing around experimenting with values to achieve harmony, using light to separate foreground from background, making each section of the structure distinct and providing atmosphere. </p>
                    <img className={Styles.LightValuesImageSize} src={LightValues} alt="couldn't load image"/>
                    <br/>
                    <br/>
                    <p>All art/ photography applications have a level correction feature, this can be a great way to begin applying colors to a greyscale image, though it can be tedious to apply a level correction to each and every layer. Though, at this stage, you usually don't have that many layers. Of course you want to use actual colors to shift away from greyscale. If you're worried that radical shifting will break the atmosphere and light values, you can use soft brushes or blending brushes, as well as adding a saturation correction layer at the top to check how the brightness values change along with the color.</p>
                </ChapterDiv>
                <ChapterDiv>
                    <h1>Final touches</h1>
                    <p>I added some vines and bushes, and amplified the lighting with Clip Studio Paint's Add Glow blend option. Most softwares have their equivalent to CSP's Add Glow. CSP being a software targeted towards digital painting, it lacks some editing features you'd find in a photography targeted software. So I exported the image as a .png and opened it with Affinity Photo, a competitor to Adobe's Photoshop, to add light chromatic aberration, barely noticeable Gaussian blur, and finally light noise. This effect gives the image a more authentic feel, as it dissolves elements from digital artworks that can make it feel artificial.</p>
                    <br/>
                    <p>Yviira wanted the temple to look maintained. I think I nailed a good balance between maintained and natural, she was satisfied with the final result:</p>
                    <img className={Styles.FinalResultImageSize} src={FinalResult} alt="couldn't load image"/>

                </ChapterDiv>

            </div>
        )
    };

    return(
        <div className={Styles.Foundation}>

            <div className={Styles.NavigationBarContainer}>
                <Link className={Styles.NavigationBar} to="/mora-goddess">
                    <ReturnIcon className={Styles.ReturnIcon}/>
                </Link>
            </div>

            <WeblogContent />
            <Wallpaper />
        </div>
    )
};

export default ViewFromInside