import React from "react";

function Skill() {
    return <section id="skills" className="skills">
        <h1 id="skill-heading-main">What I Do</h1>
        <p id="skill-para">I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly <br></br>websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS,<br></br> and JavaScript, as well as design software such as Adobe Photoshop and Illustrator</p>
        <div className="skill-content">
            <img className="skill-img" src="./assets/ui-design.png" alt="hello3"></img>
            <div className="skill-content-details">
                <h1 className="skill-heading">UI/UX Design</h1>
                <p>This is a demo text, you can write your own content here</p>
            </div>
        </div>
        <div className="skill-content">
            <img className="skill-img" src="./assets/website-design.png" alt="hello2"></img>
            <div className="skill-content-details">
            <h1 className="skill-heading">Website Design</h1>
                <p>This demo text can be changed while making the production ready site</p>
            </div>
        </div>
        <div className="skill-content">
            <img className="skill-img" src="./assets/app-design.png" alt="hello"></img>
            <div className="skill-content-details">
            <h1 className="skill-heading">App Design</h1>
                <p>You can write text related to mobile app development</p>
            </div>
        </div>
    </section>
}

export default Skill;