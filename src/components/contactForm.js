import React from "react";

function ContactForm(){
    return <div id="contact" className="contact-form">
        <h1 className="contact-form-heading">Contact Me</h1>
        <p className="contact-form-para">Please fill out the form below to discuss any work opportunities</p>
        <form>
            <input type="text"  placeholder="Your Name"></input>
            <input type="text"  placeholder="Your email"></input>
            <textarea id="message" placeholder="Enter message"></textarea>
        </form>
    </div>
}

export default ContactForm;