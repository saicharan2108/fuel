import "./index.css";
import { Component } from "react";
import { CgProfile } from "react-icons/cg";

import { BsBookHalf } from "react-icons/bs";
import { BiHelpCircle } from "react-icons/bi";
import { MdPendingActions } from "react-icons/md";
import { BsCartPlusFill } from "react-icons/bs";

class Profile extends Component {
  state = { activeTab: "DB" };

  activeDashboard = () => {
    this.setState({ activeTab: "DB" });
  };

  activeOrderFuel = () => {
    this.setState({ activeTab: "OF" });
  };

  activeOrderStatus = () => {
    this.setState({ activeTab: "OS" });
  };

  activeHelpTab = () => {
    this.setState({ activeTab: "HT" });
  };

  render() {
    return (
      <div className="profileContainer">
        <h1 className="logo-heading">FDMS</h1>
        <div className="sub-profile">
          <CgProfile className="profile-image" />
        </div>
        <p className="profile-name">Pavani</p>
        <p className="profile-email">pavani2021@gmail.com</p>
        <ul className="tabs-container">
          <li className="tab-Item" onClick={this.activeDashboard}>
            <BsBookHalf className="dashboard-image" />
            <p className="tab-des">Dashboard</p>
          </li>
          <li className="tab-Item" onClick={this.activeOrderFuel}>
            <BsCartPlusFill className="dashboard-image" />
            <p className="tab-des">Order Your Fuel</p>
          </li>
          <li className="tab-Item" onClick={this.activeOrderStatus}>
            <MdPendingActions className="dashboard-image" />
            <p className="tab-des">Order Status</p>
          </li>
          <li className="tab-Item" onClick={this.activeHelpTab}>
            <BiHelpCircle className="dashboard-image" />
            <p className="tab-des">Help</p>
          </li>
        </ul>
      </div>
    );
  }
}
export default Profile;
