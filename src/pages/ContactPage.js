import React, { useState } from "react";
import Heading from "../components/common/Heading";
import CommonHeading from "../components/common/CommonHeading";
import { contact } from "../components/data/Data";
import { ref, set } from "firebase/database";
import { db } from "../firebase"; // Firebase initialization

export default function Contact() {
  // Initialize state for the form
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "+",
    subject: "",
    message: "",
  });

  // Handle input changes in the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      let formattedValue = value.replace(/[^0-9]/g, "");
      setFormData({
        ...formData,
        [name]: `+${formattedValue}`,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the data for saving to Firebase
    const contactData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    };

    // Save data to Firebase under "contacts" node
    const newContactRef = ref(db, "contacts/" + Date.now()); // Use timestamp as unique key
    set(newContactRef, contactData)
      .then(() => {
        alert("Your message has been sent. Thank you!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        }); // Reset form after submission
      })
      .catch((error) => {
        console.error("Error sending message: ", error);
        alert("There was an error sending your message. Please try again.");
      });
  };

  return (
    <>
      <Heading heading="Contact" title="Home" subtitle="Contact" />
      <div className="container-xxl py-5">
        <div className="container">
          <CommonHeading
            heading="Contact Us"
            subtitle="Contact "
            title="For Any Query"
          />
          <div className="row g-4">
            <div className="col-12">
              <div className="row gy-4">
                {contact.map((item, index) => (
                  <div className="col-md-4" key={index}>
                    <h6 className="section-title text-start text-primary text-uppercase">
                      {item.title}
                    </h6>
                    <p>
                      {item.icon}
                      {item.email}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
              <iframe
                className="position-relative rounded w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227968.13213040494!2d44.50912329999999!3d40.1791853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404a4c7a5b97d6b3%3A0x40375550f0901b0!2z0KHRgtC-0YHQutC-0LXQvdC-0LPQltCy0LDRjtGA0LDRg9Cw!5e0!3m2!1sen!2sbd!4v1674248929350!5m2!1sen!2sbd"
                frameBorder="0"
                style={{ minHeight: "350px", border: "0" }}
                allowFullScreen
                aria-hidden="false"
                title="#"
                tabIndex="0"
              ></iframe>
            </div>
            <div className="col-md-6">
              <div className="wow fadeInUp" data-wow-delay="0.2s">
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          placeholder="Your First Name"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="firstName">Your First Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          placeholder="Your Last Name"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="lastName">Your Last Name</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Your Email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          placeholder="Subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          id="message"
                          placeholder="Your Message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          style={{ height: "150px" }}
                          required
                        ></textarea>
                        <label htmlFor="message">Your Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary w-100 py-3">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
