import React from "react";
const d = new Date().getFullYear();
function Footer(){
    return <footer>
        <div>
        <img src="./assets/instagram.png" className="footer-img" alt="none"></img>
        <img src="./assets/facebook-icon.png" className="footer-img" alt="none"></img>
        <img src="./assets/twitter.png" className="footer-img" alt="none"></img>
        </div>
        <p>Copyright ©  {d} All rights received</p>
    </footer>
}

export default Footer;