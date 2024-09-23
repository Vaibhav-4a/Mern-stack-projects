import React from "react";

function Contact(){
    return <div id="clients" className="contact-main">
        <h1 className="contact-heading">My Clients</h1>
        <p className="contact-para">I have had the opportunity to work with a diverse group of companies. Some of the notable <br></br>companies I have worked with include</p>
        <div className="contact-list">
            <div className="contact-list-item"><img className = "contact-img" src="./assets/walmart.png"></img></div>
            <div className="contact-list-item"><img className = "contact-img" src="./assets/adobe.png"></img></div>
            <div className="contact-list-item"><img className = "contact-img" src="./assets/microsoft.png"></img></div>
            <div className="contact-list-item"><img className = "contact-img" src="./assets/facebook.png"></img></div>
        </div>
    </div>
}

export default Contact;