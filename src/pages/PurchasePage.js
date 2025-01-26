import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { ref, set } from "firebase/database";
import { db } from "../firebase";
import { useTranslation } from "react-i18next";

export default function PurchasePage() {
  const { t } = useTranslation("common");
  const location = useLocation();
  const { name, price, key, img } = location.state || {};
  console.log(location.state);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "+",
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const orderData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      productName: name,
      productPrice: price,
    };

    const newOrderRef = ref(db, "orders/" + Date.now());
    set(newOrderRef, orderData)
      .then(() => {
        alert(t("Order success message"));
      })
      .catch((error) => {
        console.error("Error adding order: ", error);
        alert(t("Order error message"));
      });
  };

  return (
    <div className="container py-5">
      <h2>{t("Making a purchase")}</h2>
      <div className="row">
        <div className="col-md-6">
          <img
            src={img}
            alt={name}
            width="100%"
            height="auto"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h3>{name}</h3>
          <h4 className="text-primary">
            {price.split("/")[0]} {t("perNight")}
          </h4>
          <p>{t(`description${key + 1}`)}</p>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                {t("Name")}
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                {t("Surname")}
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                {t("Email")}
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                {t("Phone")}
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                pattern="^\+?[0-9]{10,15}$"
                maxLength="16"
              />
            </div>
            <button
              type="submit"
              className="btn btn-lg"
              style={{
                color: "white",
                backgroundColor: "#FEA116",
                borderColor: "#FEA116",
              }}
            >
              {t("Confirm order")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
