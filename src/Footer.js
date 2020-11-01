import React from "react";

import "./styles/footer.css";
import fb from "./images/facebook.svg";
import youtube from "./images/youtube.png";
import insta from "./images/instagram.svg";
import phone from "./images/phone-call.png";
import mail from "./images/mail.png";
export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="footerContainer">
        <div className="footercols">
          <ul className="footerdata">
            <li className="footerlist">About Us</li>
            <li className="footerlist">Delivery Information</li>
            <li className="footerlist">Returns & Exchange</li>
            <li className="footerlist">Technical & Privacy</li>
            <li className="footerlist">Order Status</li>
          </ul>
        </div>
        <div className="footercols">
          <div className="Logo">MADE UP</div>
          <div className="socialConnect">Stay in touch with us</div>
          <div>
            <img src={fb} alt="fb" className="footerIcons" />
            <img src={insta} alt="fb" className="footerIcons" />
            <img src={youtube} alt="fb" className="footerIcons" />
          </div>
        </div>
        <div className="footercols">
          <div className="Location">
            <p className="header">Our Corporate Office</p>
            <p>No: 7,A2B road, Adayar Rajapuram,</p>
            <p>T-Nagar, Chennai - 642002</p>
          </div>
          <div className="contact">
            <span>
              <img src={mail} alt="email" />
            </span>
            <span>sales@madeup.com</span>
            <br />
            <span>
              <img src={phone} alt="contact" />
            </span>
            <span>044 9999 9999</span>
          </div>
        </div>
      </div>
    );
  }
}
