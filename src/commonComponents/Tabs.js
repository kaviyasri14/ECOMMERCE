import React from "react";
import "../styles/tabs.css";

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <article className="tabs-side">
        <nav className="tabs">
          <ul className="tablist">
            {this.props.tabitems.map((item) => {
              return (
                <div
                  onClick={(x) => {
                    this.props.selectedtab(x.target.value);
                  }}
                >
                  <li
                    key={item.id}
                    value={item.id}
                    className={`tabItems verticalTabs ${
                      this.props.preselect === item.id ? "active" : ""
                    }`}
                  >
                    {item.name}
                    <span className="chev">{">"}</span>
                    <br />
                    <span value={item.id} className="tabSubtitle">
                      {" "}
                      {item.subTitle}
                    </span>
                    {this.props.preselect === item.id ? (
                      <hr className="line" />
                    ) : (
                      ""
                    )}
                  </li>
                </div>
              );
            })}
          </ul>
        </nav>
        <div className="tabsChild">{this.props.children}</div>
      </article>
    );
  }
}
