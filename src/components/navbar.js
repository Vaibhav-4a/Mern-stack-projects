import React from "react";
function Navbar() {
    return <div className="navbar">
    <input type="checkbox" id="check"></input>
    <div id="bar">


    <label for= "check"><img className="h1" id="ham-menu" src="./assets/menu.png"></img></label>
        <ul className="bar-list">
            <li className="bar-list-item"><a className="h1" href="#intro">Home</a></li>
            <li className="bar-list-item"><a className="h1" href="#skills">About</a></li>
            <li className="bar-list-item"><a className="h1" href="#portfolio">Portfolio</a></li>
            <li className="bar-list-item"><a className="h1" href="#clients">Clients</a></li>
        </ul>
    </div>
        <img src="./assets/logo.png" alt="" className="main" />
        <div class="alist">
            <a href="#intro" >Home</a>
            <a href="#skills">About</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#clients">Clients</a>
        </div>
        <a id="nav-button" href="#contact"> <button > <img src="./assets/chat.png"></img>Contact Me</button></a>
    </div>

}


export default Navbar;
