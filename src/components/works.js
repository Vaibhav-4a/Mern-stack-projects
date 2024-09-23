import React from "react";

function Works() {
    return <section id="portfolio" className="portfolio">
        <h1 id="port-heading">My Portfolio</h1>
            <p className="port-para">I take pride in paying attention to the smallest details and making sure that my work is pixel<br></br> perfect. I am excited to bring my skills and experience to help businesses <br></br>achieve their goals and create a strong online presence</p>
            <div className="port-img-container">
                <img className="port-img" src="./assets/portfolio-1.png" alt="p"></img>
                <img className="port-img" src="./assets/portfolio-2.png" alt="p"></img>
                <img className="port-img" src="./assets/portfolio-3.png" alt="p"></img>
                <img className="port-img" src="./assets/portfolio-4.png" alt="p"></img>
                <img className="port-img" src="./assets/portfolio-5.png" alt="p"></img>
                <img className="port-img" src="./assets/portfolio-6.png" alt="p"></img>
            </div>
    </section>
}

export default Works;