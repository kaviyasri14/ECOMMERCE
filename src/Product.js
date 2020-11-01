import React from "react";
import neck from "./images/neck.png";
import "./styles.css";
import "./styles/commonComponents.css";
import { Input, Button } from "./commonComponents/Common";
import testimonial from "./images/vikas.png";
import { collection } from "./data.js";
import brownman from "./images/dark-haired-man-brown.jpg";
import businessman from "./images/modern-businessman.jpg";
import mobilehome from "./images/mobilehome.png";
import desktophome from "./images/desktophome.png";

export function Coupon(props) {
  return (
    <div className="couponContainer">
      <div
        className="couponImage"
        style={{
          backgroundImage: `url("${neck}")`
        }}
      ></div>
      <div className="couponContent">
        <h3>GET COUPONS AND STYLE GUIDES</h3>
        <h5>Subscribe to our Newsletter</h5>
        <div className="coupontinput">
          {" "}
          <Input type="text" placeholder="E-mail" />
        </div>
        <span>
          <Button title="SUBSCRIBE" size={props.size} type="sec" />
        </span>
      </div>
      <div className="location">
        <button className="locbutton">
          <span>&#128225;</span>LOCATE US
        </button>
      </div>
    </div>
  );
}
export function Testimonial(props) {
  let name = "vikas";
  let star = 5;
  let comments =
    "Love the cloth material! So breezy and comfortable.Really durable as well. I must say the jeans I bought was worth the piece.";
  return (
    <div className="reviews" key={props.tabs} id="testimonil">
      <h2>TESTIMONIALS</h2>
      <div className="main">
        {Array.from(Array(props.tabs), (e, i) => {
          return (
            <div className="reviewContainer">
              <img className="reviewIcon" src={testimonial} alt="jeans" />
              <span className="reviewName">{name}</span>
              <span className="ratingContainer">
                {Array.from(Array(star), (e, i) => {
                  return (
                    <span className="rating" key={i}>
                      &#9733;
                    </span>
                  );
                })}
              </span>
              <br />
              <p className="comments">{comments}</p>
            </div>
          );
        })}

        {/* </div> */}
      </div>
    </div>
  );
}
export function Collections(props) {
  return (
    <div>
      <div className="collectionHeader">LATEST COLLECTION</div>
      <div className="collectionContainer">
        {collection.map((s) => {
          return (
            <div key={s.id} className="carouselslide">
              <img src={s.imgurl} alt="jeanpants" />
              <p>{s.name}</p>
              <p className="price">{s.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export function Quality(props) {
  return (
    <div className="qualityContainer">
      <div className="qualitySubContainer">
        <img className="qualityImageContainer" src={brownman} alt="brown" />
        <span className="ImgOverlayButtons">
          <span className="highlight">Summer </span>is here and
        </span>
        <span className="secImgOverlayButtons">
          So is our <span className="highlight">Collection </span>
        </span>
      </div>
      <div className="qualitySubContainer">
        <div className="mainsub">
          <div className="qualitySubContainer">
            <img
              className="qualityImageContainer"
              src={businessman}
              alt="busines"
            />
            <span className="ImgOverlayButtons">
              <span className="highlight">Wrinkle-free </span>t-shirts
            </span>
          </div>
          <div className="qualitySubContainer">
            <img
              className="qualityImageContainer businessman"
              src={brownman}
              alt="brown"
            />
            <span className="ImgOverlayButtons">
              <span className="highlight">Stain-free </span>denim shirts
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export function Poster(props) {
  return (
    <div>
      {props.mobile ? (
        <div>
          {" "}
          <div
            className="mobileContainer poster"
            style={{
              backgroundImage: `url("${mobilehome}")`
            }}
          ></div>
          <div className="posterContainer">
            <span className="posterButton postercontent">
              Clothes that <span className="highlight">respire</span>
            </span>
            <span className="posterButton postercontent">
              for men who <span className="highlight">Aspire</span>
            </span>
            <span
              className={`highlightButton browse${
                props.tab ? "tabbrowse" : ""
              }`}
            >
              BROWSE COLLECTION
            </span>
          </div>
        </div>
      ) : (
        <div>
          <div
            className="mobileContainer"
            style={{
              backgroundImage: `url("${desktophome}")`
            }}
          ></div>
          <div className="desktopContainer">
            <span className="posterButton postercontent">
              Clothes that <span className="highlight">respire</span>
            </span>
            <span className="posterButton postercontent">
              for men who <span className="highlight">Aspire</span>
            </span>
            <span
              className={`highlightButton browse${
                props.tab ? "tabbrowse" : ""
              }`}
            >
              BROWSE COLLECTION
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
