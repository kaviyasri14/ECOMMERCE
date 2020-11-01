import React from "react";
import "../styles/tabs.css";

export function Input(props) {
  return (
    <input
      type={props.type}
      className="inputelement"
      placeholder={props.placeholder}
    />
  );
}
export function Button(props) {
  return (
    <button className={`btn ${props.type} btn${props.size}`}>
      {props.title}
    </button>
  );
}
export function Panel(props) {
  return (
    <div className="panel">
      <section
        data-title={props.panelTitle}
        id="side_tab3"
        className={`item ${
          props.panelId === props.SelectedPane ? "active1" : ""
        }`}
      >
        {props.Mobile ? (
          <p className="userSubtitle">{props.panelSubtitle}</p>
        ) : (
          ""
        )}
        <span
          onClick={(x) => {
            console.log(props.panelId, "panel");
            props.selectedtab(props.panelId);
          }}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;
        </span>

        <div className="item-content">{props.children}</div>
      </section>
    </div>
  );
}
