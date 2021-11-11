import React from "react";
import Fit3 from "../image/fit-3.jpg";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

class Contact extends React.Component {
  render() {
    return (
      <div className="contact " style={{ minHeight: "100vh" }}>
        <div className="contact_pic">
          <img src={Fit3} alt="" />
          <span>Contact us </span>
          <p className="contact_subtitle">working time 8am ~ 10pm everyday</p>
        </div>

        <div className="contact_form grid">
          <div className="contact_form_left g-col-6">
            <div className="contact_information">
              <div className="contact_title">
                <FaPhone size={32} className="react_icons" />
                <h3 className="contact_title">Call us</h3>
              </div>
              <div className="contact_subtitle">
                <span>+886 (0)912345678</span>
              </div>
            </div>

            <div className="contact_information">
              <div className="contact_title">
                <FaEnvelope size={32} className="react_icons" />
                <h3 className="contact_title">Email</h3>
              </div>
              <div className="contact_subtitle">
                <span>jason20017@hotmail.com</span>
              </div>
            </div>

            <div className="contact_information">
              <div className="contact_title">
                <FaMapMarkerAlt size={32} className="react_icons" />
                <h3 className="contact_title">Location</h3>
              </div>
              <div className="location">
                <span className="contact_subtitle">Taiwan</span>
              </div>
            </div>
          </div>

          <div className="contact_form_right g-col-6">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Your Name"
              ></input>
            </div>

            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Phone number
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="09xx-xxx-xxx"
              ></input>
            </div>

            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                E-mail
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              ></input>
            </div>

            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Example textarea
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>

              <button type="button" className="btn btn-secondary">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
