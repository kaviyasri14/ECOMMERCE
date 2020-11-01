import React from "react";
import searchIcon from "./images/search.png";
import profile from "./images/userprofile.png";
import cart from "./images/trolley.png";

import "./styles/navbar.css";
import { navlist, overlaymenuItem, secondaryManyItem } from "./data.js";
export default class Navigationbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "1",
      navlist: navlist,
      showNavMenu: false,
      showMneu: false,
      selectedItem: "1",
      secSelectedItem: 11
    };
    this.activeTab = this.activeTab.bind(this);
  }
  activeTab(id) {
    this.setState({ active: id });
  }
  componentDidMount() {
    this.setState({ showNavMenu: window.innerWidth <= 1080 });
    window.addEventListener("resize", () => {
      this.setState({ showNavMenu: window.innerWidth <= 1080 });
    });
  }
  render() {
    return (
      <>
        {this.state.showMenu ? (
          <div className="SideMenu">
            <div
              onClick={() => {
                this.setState({ showMenu: !this.state.showMenu });

              }}
              className="closeicon"
            >
              &#128473;
           
            </div>
            <div className="overlayitems">
              {overlaymenuItem.map((menu) => {
                return (
                  <li
                    className={`${
                      this.state.selectedItem === menu.id ? "showactive " : ""
                    }`}
                    onClick={() => {
                      this.setState({ showMenu: !this.state.showMenu });
                      this.props.menuSelecion(["/" + menu.route]);
                    }}
                    key={menu.id}
                  >
                    {menu.name}
                  </li>
                );
              })}
              <hr />
              {secondaryManyItem.map((secMenu) => {
                return (
                  <li
                   
                    className={`${
                      this.state.secSelectedItem === secMenu.id
                        ? "showactive "
                        : ""
                    }${secMenu.id === 1 ? "listitems" : ""}`}
                    key={secMenu.id}
                  >
                    {secMenu.name}
                  </li>
                );
              })}
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="Navbar">
          <div className="navs logo">MADE UP</div>
          {this.state.showNavMenu ? (
            <div className="NavList">
              <div
                className="navbaricon"
                onClick={() => {
                  this.setState({ showMenu: !this.state.showMenu });
                }}
              >
                &#9776;
              </div>
              <div className="navbaricon">
                <img src={cart} alt="Cart" />
              </div>
            </div>
          ) : (
            <div className="NavList">
              {this.state.navlist.map((navitem) => {
                return (
                  <div
                    className={`navs ${
                      this.state.active === navitem.itemid ? "selected" : ""
                    }`}
                    key={navitem.itemid}
                    onClick={() => {
                      this.activeTab(navitem.itemid);
                    }}
                  >
                    {navitem.itemname}
                  </div>
                );
              })}
              <div
                className="navbaricon"
                onClick={() => {
                  this.props.menuSelecion(["/profile"]);
                }}
              >
                <img src={profile} alt="profile" />
              </div>
            
              <div className="navbaricon">
                <img src={cart} alt="cart" />
              </div>
              <div className="navbaricon">
                <img src={searchIcon} alt="search" />
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}
