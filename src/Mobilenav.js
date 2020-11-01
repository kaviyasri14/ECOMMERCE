import React from "react";
import "./styles/mobilenav.css";
import { mobileNavDataList } from "./data.js";

export default class Mobilenav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navList: mobileNavDataList,
      start: 0,
      end: 4,
      selected: "2"
    };
    this.scroll = this.scroll.bind(this);
  }
  scroll(direction) {
    if (
      this.state.end <= this.state.navList.length - 2 &&
      direction === "right"
    ) {
      let revisedNavList = [...this.state.navList];
      for (let i = this.state.start; i < this.state.end + 2; i++) {
        if (i === this.state.start || i === this.state.end + 1) {
          revisedNavList[i] = {
            ...revisedNavList[i],
            selected: !revisedNavList[i].selected
          };
        }
      }
      let act = this.state.start + 2;
      this.setState({
        selected: act + ""
      });

      this.setState({
        start: this.state.start + 1,
        end: this.state.end + 1,
        navList: revisedNavList
      });
    } else if (direction === "left" && this.state.start >= 1) {
      let revisedNavList = [...this.state.navList];
      for (let i = this.state.end; i > this.state.start - 2; i--) {
        if (i === this.state.start - 1 || i === this.state.end) {
          revisedNavList[i] = {
            ...revisedNavList[i],
            selected: !revisedNavList[i].selected
          };
        }
      }
      let act = this.state.start - 1;
      this.setState({
        selected: act + ""
      });
      this.setState({
        navList: revisedNavList,
        start: this.state.start - 1,
        end: this.state.end - 1
      });
    }
  }
  render() {
    return (
      <div className="mobileNavbarContainer">
        <div
          className={`leftButton`}
          onClick={() => {
            this.scroll("left");
          }}
        >
          &lt;
        </div>
        <div className="navIconContainer">
          {this.state.navList.map((navItem) => {
            return (
              <img
                key={navItem.id}
                onClick={() => {
                  this.setState({ selected: navItem.id });
                }}
                className={`roundNavIcons ${
                  !navItem.selected ? "hiddenstory" : ""
                } ${this.state.selected === navItem.id ? "selectedIcon" : ""}`}
                src={navItem.icon}
                alt={navItem.id}
              />
            );
          })}
        </div>
        <div
          className={`righticon`}
          onClick={() => {
            this.scroll("right");
          }}
        >
          &gt;
        </div>
      </div>
    );
  }
}
