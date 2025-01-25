import React, { useState } from "react";
import { useTranslation } from "react-i18next"; // 👈 Импортируем i18n

export default function Book({ onFilterChange }) {
  const { t } = useTranslation("common"); // 👈 Получаем функцию t()

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [category, setCategory] = useState("");
  const [capacity, setCapacity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterChange({
      checkIn,
      checkOut,
      category,
      capacity,
    });
  };

  return (
    <div
      className="container-fluid booking pb-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container">
        <div className="bg-white shadow" style={{ padding: "35px" }}>
          <div className="row g-2">
            <div className="col-md-10">
              <div className="row g-2">
                <div className="col-md-3">
                  <div className="date" id="date1" data-target-input="nearest">
                    <input
                      type="text"
                      className="form-control datetimepicker-input"
                      placeholder={t("checkIn")} // 👈 Перевод
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="date" id="date2" data-target-input="nearest">
                    <input
                      type="text"
                      className="form-control datetimepicker-input"
                      placeholder={t("checkOut")} // 👈 Перевод
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <select
                    className="form-select"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="">{t("category")}</option>
                    <option value="deluxe">{t("deluxe")}</option>
                    <option value="suite">{t("suite")}</option>
                    <option value="standard">{t("standard")}</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <select
                    className="form-select"
                    value={capacity}
                    onChange={(e) => setCapacity(e.target.value)}
                  >
                    <option value="">{t("capacity")}</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <button className="btn btn-primary w-100" onClick={handleSubmit}>
                {t("submit")} {/* 👈 Перевод кнопки */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
