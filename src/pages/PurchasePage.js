import React, { useState } from "react";
import { useLocation } from "react-router-dom";
// Импортируем функции для работы с Firebase
import { ref, set } from "firebase/database";
import { db } from "../firebase"; // Импортируем нашу инициализацию Firebase

export default function PurchasePage() {
  const location = useLocation();
  const { name, price, description, img } = location.state || {};

  // Состояние для формы
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "+",
  });

  // Обработчик изменения данных формы
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      let formattedValue = value.replace(/[^0-9]/g, "");
      setFormData({
        ...formData,
        [name]: `+${formattedValue}`, // Форматируем телефон
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();

    // Данные заказа
    const orderData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      productName: name,
      productPrice: price,
      productDescription: description,
      productImage: img,
    };

    // Сохраняем данные в Firebase
    const newOrderRef = ref(db, "orders/" + Date.now()); // Используем текущую метку времени для уникального ключа
    set(newOrderRef, orderData)
      .then(() => {
        alert("Your order has been placed! Thanks for your purchase.");
      })
      .catch((error) => {
        console.error("Error adding order: ", error);
        alert("There was an error placing your order.");
      });
  };

  return (
    <div className="container py-5">
      <h2>Making a purchase</h2>
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
          <h4 className="text-primary">{price}</h4>
          <p>{description}</p>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                Name
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
                Surname
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
                Email
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
                Phone
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
            <button type="submit" className="btn btn-lg" style={{ color:"white", backgroundColor: '#FEA116', borderColor: '#FEA116' }}>
  Confirm order
</button>

          </form>
        </div>
      </div>
    </div>
  );
}
