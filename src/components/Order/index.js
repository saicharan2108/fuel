import { Component } from "react";
import { CgProfile } from "react-icons/cg";

import { BsBookHalf } from "react-icons/bs";
import { BiHelpCircle } from "react-icons/bi";
import { MdPendingActions } from "react-icons/md";
import { BsCartPlusFill } from "react-icons/bs";

import "./index.css";

const stations = [
  "Choose the Station",
  "Adilabad",
  "Anantapur",
  "Chittoor",
  "Kakinada",
  "Guntur",
  "Hyderabad",
  "Karimnagar",
  "Khammam",
  "Krishna",
  "Kurnool",
  "Mahbubnagar",
  "Medak",
  "Nalgonda",
  "Nizamabad",
  "Ongole",
  "Hyderabad",
  "Srikakulam",
  "Nellore",
  "Visakhapatnam",
  "Vizianagaram",
  "Warangal",
  "Eluru",
  "Kadapa",
];
const states = [
  "Choose the State",
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Goa",
  "Gujurat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerela",
  "Ladakh",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "NCT of Delhi",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
];

class Order extends Component {
  state = {
    activeTab: true,
    activeTabStyle: "OF",
    dbStyle: "tab-Item",
    ofStyle: "selected-tab-Item",
    aoStyle: "tab-Item",
    hStyle: "tab-Item",
  };

  Register = () => {
    alert("Order Confirmed");
  };
  activeDashboard = () => {
    this.setState({
      activeTab: false,
      activeTabStyle: "DB",
      dbStyle: "selected-tab-Item",
      ofStyle: "tab-Item",
      aoStyle: "tab-Item",
      hStyle: "tab-Item",
    });
  };

  activeOrderFuel = () => {
    this.setState({
      activeTab: true,
      activeTabStyle: "OF",
      dbStyle: "tab-Item",
      ofStyle: "selected-tab-Item",
      aoStyle: "tab-Item",
      hStyle: "tab-Item",
    });
  };

  activeOrderStatus = () => {
    this.setState({
      activeTab: false,
      activeTabStyle: "OS",
      dbStyle: "tab-Item",
      ofStyle: "tab-Item",
      aoStyle: "selected-tab-Item",
      hStyle: "tab-Item",
    });
  };

  activeHelpTab = () => {
    this.setState({
      activeTab: false,
      activeTabStyle: "HT",
      dbStyle: "tab-Item",
      ofStyle: "tab-Item",
      aoStyle: "tab-Item",
      hStyle: "selected-tab-Item",
    });
  };

  FormContainer = () => (
    <form className="form-con">
      <h1 className="title">Order Your Fuel</h1>
      <label htmlFor="stateid" className="label-style">
        State
      </label>
      <br />
      <select
        placeholder="Choose the state"
        className="input-ele"
        onChange={this.changeState}
        id="stateid"
      >
        {states.map((each) => (
          <option value={each} key={each}>
            {each}
          </option>
        ))}
      </select>
      <br />
      <label htmlFor="cityid" className="label-style">
        City
      </label>
      <br />
      <input
        type="text"
        className="input-element"
        placeholder="Enter Your City Name"
      />
      <br />
      <label htmlFor="fuelid" className="label-style">
        Available Fuel Station
      </label>
      <br />
      <select
        placeholder="Choose the state"
        className="input-ele"
        onChange={this.changeState}
        id="stateid"
      >
        {stations.map((each) => (
          <option value={each}>{each}</option>
        ))}
      </select>

      <br />
      <label htmlFor="typeid" className="label-style">
        Type of Fuel
      </label>
      <br />
      <input
        type="text"
        className="input-element"
        placeholder="Enter Type of Fuel"
      />
      <br />
      <label htmlFor="typeid" className="label-style">
        Price of Fuel (per liter)
      </label>
      <br />
      <input
        type="text"
        className="input-element"
        placeholder="Enter The Price"
      />
      <br />
      <label htmlFor="typeid" className="label-style">
        Date of Delivery
      </label>
      <br />
      <input
        type="date"
        className="input-element"
        placeholder="Enter The Price"
      />
      <br />
      <label htmlFor="typeid" className="label-style">
        Time of Delivery
      </label>
      <br />
      <input
        type="time"
        className="input-element"
        placeholder="Enter The Price"
      />
      <br />
      <label htmlFor="typeid" className="label-style">
        Quantity of Fuel (in LTR)
      </label>
      <br />
      <input
        type="text"
        className="input-element"
        placeholder="Enter Quantity of Fuel"
      />
      <br />
      <label htmlFor="typeid" className="label-style">
        Fuel Delivery Address
      </label>
      <br />
      <input
        type="text"
        className="input-element"
        placeholder="Enter Delivery Address"
      />
      <br />
      <label htmlFor="typeid" className="label-style">
        Payment Mode
      </label>
      <br />
      <input
        type="text"
        className="input-element"
        placeholder="Enter Payment Mode"
      />
      <br />
      <button type="submit" className="btn-style" onClick={this.Register}>
        Order
      </button>
    </form>
  );

  NotFound = () => (
    <div className="load-container">
      <div className="err-content">
        <p className="not-found-des">Thank you for visiting!</p>
        <h1 className="err-title">We are developing our website.</h1>
        <p className="not-found-des">Please visit again.</p>
      </div>
      <img
        src="https://res.cloudinary.com/due4dmz2b/image/fetch/f_auto,q_auto/https://ibhubs-media-files.s3.ap-southeast-1.amazonaws.com/ib-hubs/maintenance.png"
        alt="inprogress"
        className="err-img"
      />
    </div>
  );

  finalView = () => {
    const { activeTab } = this.state;
    if (activeTab) {
      return this.FormContainer();
    }
    return this.NotFound();
  };

  render() {
    const { dbStyle, ofStyle, aoStyle, hStyle } = this.state;

    return (
      <>
        <div className="bgContainer">
          <div className="profileContainer">
            <h1 className="logo-heading">FDMS</h1>
            <div className="sub-profile">
              <CgProfile className="profile-image" />
            </div>
            <p className="profile-name">Pavani</p>
            <p className="profile-email">pavani2021@gmail.com</p>
            <ul className="tabs-container">
              <li className={dbStyle}>
                <button onClick={this.activeDashboard}>
                  <BsBookHalf className="dashboard-image" />
                  <p className="tab-des">Dashboard</p>
                </button>
              </li>
              <li className={ofStyle}>
                <button onClick={this.activeOrderFuel}>
                  <BsCartPlusFill className="dashboard-image" />
                  <p className="tab-des">Order Fuel</p>
                </button>
              </li>
              <li className={aoStyle}>
                <button onClick={this.activeOrderStatus}>
                  <MdPendingActions className="dashboard-image" />
                  <p className="tab-des">Order Status</p>
                </button>
              </li>
              <li className={hStyle}>
                <button onClick={this.activeHelpTab}>
                  <BiHelpCircle className="dashboard-image" />
                  <p className="tab-des">Help</p>
                </button>
              </li>
            </ul>
          </div>
          );
          <div className="form-container">{this.finalView()}</div>
        </div>
      </>
    );
  }
}

export default Order;
