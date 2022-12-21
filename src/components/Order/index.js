import { Component } from "react";
import Profile from "../Profile";

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
  Register = () => {
    alert("Order Confirmed");
  };

  render() {
    return (
      <div className="bgContainer">
        <Profile />
        <div className="form-container">
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
                <option value={each}>{each}</option>
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
        </div>
      </div>
    );
  }
}

export default Order;
