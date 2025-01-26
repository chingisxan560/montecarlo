import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Heading from "../components/common/Heading";
import CommonHeading from "../components/common/CommonHeading";
import { contact } from "../components/data/Data";
import { ref, set } from "firebase/database";
import { db } from "../firebase"; // Firebase initialization

export default function Contact() {
  const { t } = useTranslation("common"); // Используем namespace "common"

  // Initialize state for the form
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    // phone: "+",
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
    const contactData = { ...formData };

    // Save data to Firebase under "contacts" node
    const newContactRef = ref(db, "contacts/" + Date.now()); // Use timestamp as unique key
    set(newContactRef, contactData)
      .then(() => {
        alert(t("messageSent")); // Используем перевод
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
        alert(t("messageError")); // Используем перевод
      });
  };

  return (
    <>
      <Heading
        heading={t("contact")}
        title={t("home")}
        subtitle={t("contact")}
      />
      <div className="container-xxl py-5">
        <div className="container">
          <CommonHeading
            heading={t("contactUs")}
            subtitle={t("contact")}
            title={t("forAnyQuery")}
          />
          <div className="row g-4">
            <div className="col-12">
              <div className="row gy-4">
                {contact.map((item, index) => (
                  <div className="col-md-4" key={index}>
                    <h6 className="section-title text-start text-primary text-uppercase">
                      {t(item.title)}
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.1573704161055!2d44.510123!3d40.1791853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404a4c7a5b97d6b3%3A0x40375550f0901b0!2zS2VudHJvbiwgWWVyZXZhbiwgQXJtZW5pYQ!5e0!3m2!1sen!2sbd!4v1674248929350!5m2!1sen!2sbd"
                frameBorder="0"
                style={{ minHeight: "350px", border: "0" }}
                allowFullScreen
                aria-hidden="false"
                title="map"
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
                          placeholder={t("yourFirstName")}
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="firstName">{t("yourFirstName")}</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          placeholder={t("yourLastName")}
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="lastName">{t("yourLastName")}</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder={t("yourEmail")}
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="email">{t("yourEmail")}</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          placeholder={t("subject")}
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="subject">{t("subject")}</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          id="message"
                          placeholder={t("yourMessage")}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          style={{ height: "150px" }}
                          required
                        ></textarea>
                        <label htmlFor="message">{t("yourMessage")}</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-primary w-100 py-3"
                      >
                        {t("sendMessage")}
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
