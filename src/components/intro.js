import React from "react";

function Intro(){
    return <div id="intro" className="intro-main">
        <div className="intro-detail">
            <p className="intro-para">Hello,</p>
            <h1 className="intro-heading" >
            I'm <span id="smith">Smith</span> <br></br>Website Designer </h1>
            <p className="intro-para">I'm a skilled and passionate website designer <br></br> with experience in creating visually appealing and creative websites</p>
            <button id="intro-button"> <img src="./assets/hireme.png" alt="hireme"></img><span>Hire Me</span></button>
        </div>
        <img src="./assets/image.png" alt="Person " className="intro-image"></img>
    </div>
}

export default Intro;