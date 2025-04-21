import Styles from "./ViewFromInside.module.css";
import Wallpaper from "../../../components/wallpaper/Wallpaper";
import ReturnIcon from "../../../assets/svg/ReturnIcon.svg?react";
import { Link } from "react-router-dom";
import BirdseyeView1 from "../../../assets/weblog/view-from-inside/birdseye-view-1.png"
import BirdseyeView2 from "../../../assets/weblog/view-from-inside/birdseye-view-2.png"
import FinalModel from "../../../assets/weblog/view-from-inside/final-model.png";

const ViewFromInside = () => {
    const WeblogContent = () => {
        return(
            <div className={Styles.WeblogContainer}>
                <h1>The Making of Inside View</h1>
                <p>By commission from Idoria, I was asked to paint a couple point of views (POVs) for Mora's temple. With the descriptions:</p>
                <br/>
                <ul>
                    <li>Lots of plants</li>
                    <li>Orchards of fruits</li>
                    <li>Trees and gardens outside</li>
                    <li>Lots of sunlight</li>
                    <li>Well-kept greenery</li>
                    <li>The size equivalent of a sunday mass</li>
                </ul>
                <br/>
                <h1>3D Moddeling</h1>
                <p>I've never worked with complicated architecture besides basic manual perspective grid using a ruler and Clip Studio Paint's built-in perspective ruler, but this time I wanted to use Blender.</p>
                <br/>
                <p>I started with planning what bird's eye layout view I should use. I suggested two layouts:</p>
                <img className={Styles.BirdViewImageSize} src={BirdseyeView1} alt={"couldn't load image"}/>
                <img className={Styles.BirdViewImageSize} src={BirdseyeView2} alt={"couldn't load image"}/>
                <p>We went for the left one.</p>
                <br/>
                <p>Having studied graphic design during year 10 - 13, I had prior knowledge with Adobe Illustrator and Affinity Designer. I had some basic understanding on Blender, it's like 3D Illustrator/ Designer, so most technical things wasn't too hard to figure out with intuition and help of the internet and ChatGPT. This was the project that pushed me to learn Blender in more depth; using modifiers such as Boolean, Mirror, Array and Panel making square faces into window planes. I learned how to join verticies and faces and finnaly applying modifiers to a single less heavy object.</p>
                <br/>
                <p>I eventually ended up with this design:</p>
                <img className={Styles.FinalModelImageSize} src={FinalModel} alt={"couldn't load image"}/>
                <p>After getting the design approved, it was time to think of good POVs. I could go the traditional route by placing the camera in different angles, render and suggesting them to my client, but I had a better idea...</p>
                <br/>
                <h1>POV using Unity</h1>
                <p>...I've been wanting to learn about Unity and C#. Why not build a web-game in Unity and let my client move around and pick POVs herself? I exported the model as an .fbx file, a 3d model file format Blender can read. Then I imported the .fbx file, wrote a C# script to allow the player to navigate with WASD, Shift, Space and the mouse. Then I built the game as a web app, published the build to GitHub and sent her the link.</p>
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