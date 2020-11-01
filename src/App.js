import React from "react";
import Navbar from "./Navigationbar";
import Footer from "./Footer";
import { Panel, Input, Button } from "./commonComponents/Common.js";
import Tabs from "./commonComponents/Tabs.js";
import { tabitems, myOrderDetails } from "./data.js";
import { Coupon, Testimonial, Collections, Quality, Poster } from "./Product";

import "./styles/order.css";
import grish from "./images/grish.png";
import Mobnav from "./Mobilenav.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobileDevice: false,
      isTabletDevice: false,
      testimonialgrid: 3,
      selectedPanel: 1,
      pathinroutearr: this.props.routes
    };
  }
  componentDidMount() {
    this.setState({
      isTabletDevice: window.innerWidth <= 1080 && window.innerWidth > 440
    });
    this.setState({ isMobileDevice: window.innerWidth <= 440 });
    this.setTestimonialTab();

    window.addEventListener("resize", () => {
      this.setState({ isMobileDevice: window.innerWidth <= 440 });
      this.setState({
        isTabletDevice: window.innerWidth <= 1080 && window.innerWidth > 440
      });
      this.setTestimonialTab();
    });
  }
  setTestimonialTab() {
    if (!this.state.isMobileDevice && !this.state.isTabletDevice) {
      this.setState({ testimonialgrid: 3 });
    } else if (this.state.isTabletDevice && !this.state.isMobileDevice) {
      this.setState({ testimonialgrid: 2 });
    } else {
      this.setState({ testimonialgrid: 1 });
    }
  }
  render() {
    return (
      <div>
        <Navbar
          menuSelecion={(path) => {
            window.history.pushState({}, undefined, path);
            this.setState({ pathinroutearr: path });
          }}
        />
        {(this.state.isMobileDevice || this.state.isTabletDevice) &&
        this.state.pathinroutearr[0] === "" ? (
          <Mobnav />
        ) : (
          ""
        )}
        {this.state.pathinroutearr[0] === "" ? (
          <>
            <Poster
              mobile={this.state.isMobileDevice}
              tab={this.state.isTabletDevice}
            />
            <Quality />
            <Collections />
            <Testimonial tabs={this.state.testimonialgrid} />
            <Coupon
              size={
                !this.state.isMobileDevice && !this.state.isTabletDevice
                  ? "small"
                  : "medium"
              }
            />
          </>
        ) : (
          <div>
            <div
              className={`${
                !this.state.isMobileDevice
                  ? "position userContainer"
                  : "userContainer desktopuserdetail"
              }`}
            >
              {!this.state.isMobileDevice ? (
                <h4 className="home">Home |</h4>
              ) : (
                ""
              )}
              <img className="userimage" src={grish} alt="usr" />
              <p className="username">Grishk</p>
              <br />
              <p className="useremail">grishk@gmail.com</p>
            </div>
            <Tabs
              tabitems={tabitems}
              preselect={this.state.selectedPanel}
              selectedtab={(id) => {
                this.setState({
                  selectedPanel: id
                });
              }}
            >
              <Panel
                panelId={1}
                Mobile={this.state.isMobileDevice}
                panelTitle={"My Profile"}
                panelSubtitle={"notifications,password"}
                selectedtab={(id) => {
                  this.setState({
                    selectedPanel: id
                  });
                }}
                SelectedPane={this.state.selectedPanel}
              >
                <div
                  className={`${
                    !this.state.isMobileDevice
                      ? " profileForm boxing"
                      : "mobProfileForm"
                  }`}
                >
                  {!this.state.isMobileDevice ? <h3>My Profile</h3> : ""}
                  {window.innerWidth >= 950 ? (
                    <div className="mobForm">
                      <Input type="text" placeholder="First name" />
                      &nbsp;
                      <Input type="text" placeholder="Last name" />
                    </div>
                  ) : (
                    <div>
                      <Input type="text" placeholder="First name" />
                      <br />
                      <br />
                      <Input type="text" placeholder="Last name" />
                      <br />
                      <br />
                    </div>
                  )}
                  <div className={window.innerWidth >= 950 ? "inpSmall" : ""}>
                    <Input type="text" placeholder="Phone number" />
                    <br />
                    <br />
                    <Input type="email" placeholder="Email" />
                    <br />
                    <br />
                    <Input type="password" placeholder="Password" />
                    <br />
                    <br />
                    <Input type="password" placeholder="Confirm Password" />
                    <br />
                    <br />
                  </div>

                  <Button
                    title={
                      window.innerWidth >= 950
                        ? "ADD NEW ADDRESS"
                        : "SAVE CHANGES"
                    }
                    size={window.innerWidth >= 950 ? "large" : "medium"}
                    type="dark"
                  />
                </div>
              </Panel>
              <Panel
                panelId={2}
                Mobile={this.state.isMobileDevice}
                panelTitle={"My Orders"}
                panelSubtitle={"Already have 12 orders"}
                selectedtab={(id) => {
                  this.setState({
                    selectedPanel: id
                  });
                }}
                SelectedPane={this.state.selectedPanel}
              >
                <div
                  className={`${!this.state.isMobileDevice ? "boxing" : ""}`}
                >
                  {!this.state.isMobileDevice ? (
                    <h3>My Orders</h3>
                  ) : (
                    <h4 className="orderSubTitle">Pending Orders</h4>
                  )}
                  {myOrderDetails.map((order) => {
                    return (
                      <div
                        className={
                          this.state.isMobileDevice
                            ? "myMobileOrder"
                            : "MyDesktopOrder"
                        }
                        key={order.id}
                      >
                        <img
                          className="myOrderPoster"
                          src={order.poster}
                          alt="poster"
                        />
                        <span className="myOrderPrice">
                          Credit Card Payment <br />
                          <strong style={{ color: "black" }}>
                            Rs {order.orderprice}
                          </strong>
                        </span>
                        <div className="myOrderContainerDesktop">
                          <span className="orderid">
                            Order #{order.orderid}
                          </span>
                          <br />
                          <p className="orderdesc">{order.content}</p>
                          <br />
                          <br />
                          <p className="orderDate">
                            {"Express Delivery by" + order.date}
                          </p>
                        </div>
                        <span className="arrow">&gt;</span>
                        <br />
                        <button
                          className={`progress ${
                            order.onProcess ? "pending" : "completed"
                          }`}
                        >
                          Pending
                        </button>
                      </div>
                    );
                  })}
                </div>
              </Panel>
              <Panel
                panelId={3}
                Mobile={this.state.isMobileDevice}
                panelTitle={"Shipping Address"}
                panelSubtitle={"3 Orders"}
                selectedtab={(id) => {
                  this.setState({
                    selectedPanel: id
                  });
                }}
                SelectedPane={this.state.selectedPanel}
              >
                <div
                  className={`${!this.state.isMobileDevice ? "boxing" : ""}`}
                >
                  <h1 className="shipping">ADDRESS DETAILS</h1>
                </div>
              </Panel>
            </Tabs>
          </div>
        )}

        <Footer />
      </div>
    );
  }
}
