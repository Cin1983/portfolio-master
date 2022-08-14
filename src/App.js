import React from "react";
import Image from "./images/DSC_6425.jpg";
import "./style.css";
import "./phone.css";
import "./tablet.css";

function App() {

  const handleClick = () => {
    const nav = document.querySelector('navbar');
    const navlinks = document.querySelectorAll('.links li');

        nav.classList.toggle('navbaract')
        navlinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navlinkfade 4s ease backwards ${index / 10}s`;
            }
        });
  }
  

  return (
    <div>
        <div id="container">
          <div className="navbar">
            <div id="nav">
              <ul className="links">
                <li><a href="./" className="nvg">HOME</a></li>
                <li><a href="/about">ABOUT</a></li>
                <li><a href="/work">WORK</a></li>
                <li><a href="/resume">RESUME</a></li>
                <li><a href="/contact">CONTACT</a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- Hamburger bar --> */}
        <burger>
          <div className="burger" onClick={handleClick}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </burger>
        {/* <!-- vertical line of cyan color form social media icons --> */}
        <div id="vl"></div>

        {/* <!-- adding social media icons --> */}
        <div id="follow">
          <i className="fa fa-linkedin" aria-hidden="true"></i>
          <br />
          <i className="fa fa-facebook-official" aria-hidden="true"></i>
          <br />
          <i className="fa fa-twitter" aria-hidden="true"></i>
          <br />
        </div>

        {/* <!-- this box contains some info --> */}
        <div id="box1">
          <div id="hello"></div>
          <div id="me">
            Hi there <span id="rks">Maria Groeizaam</span>
          </div>
          <div id="webdev">IT Consultant Front-end Developer</div>
          <div id="para1">
              Entrepreneurial creative IT Consultant with a passion for building
              eclectic & dynamic websites. I have more than 10 years of work
              experience in the field of management support tasks in various
              industries at the most prestigious international corporates of the
              world. Because of the skills I have gained, I am very versatile
              and willing to learn everything, to develop myself into one of the
              best Front-end Developers of your company.
          </div>
        </div>
        {/* <!-- buttons --> */}
        <div id="btncontact" type="button">
          Contact
        </div>
        <div id="btnknow" type="button">
          Know more
        </div>
        {/* <!-- Adding profile picture in the background --> */}
        <div id="pic">
          <img src={Image} alt="Maria_Groeizaam_pic" />
        </div>
    </div>
  );
}

export default App;
