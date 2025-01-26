import React, { useState } from "react";
import { about } from "../data/Data";
import CustomModal from "../common/Modal";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation("common");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h6 className="section-title text-start text-primary text-uppercase">
                {t("About Us")}
              </h6>
              <h1 className="mb-4">
                {t("Welcome to")}{" "}
                <span className="text-primary text-uppercase">Monte Carlo</span>
              </h1>
              <p className="mb-4">{t("aboutDescription")}</p>
              <div className="row g-3 pb-4">
                {about.map((item, key) => (
                  <div
                    className="col-sm-4 wow fadeIn"
                    data-wow-delay="0.1s"
                    key={key}
                  >
                    <div className="border rounded p-1">
                      <div className="border rounded text-center p-4">
                        {item.icon}
                        <h2 className="mb-1" data-toggle="counter-up">
                          {item.count}
                        </h2>
                        <p className="mb-0">{t(item.text)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={handleOpenModal}
                className="btn btn-primary py-3 px-5 mt-2"
                data-wow-delay="0.2s"
                style={{
                  transition:
                    "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
                }}
              >
                {t("Explore More")}
              </button>
              <CustomModal
                isOpen={isModalOpen}
                img={"/assets/img/explorehotel.png"}
                text={t("modalText")}
                onClose={handleCloseModal}
              />
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.1s"
                    alt=""
                    src="/assets/img/about-1.jpg"
                    style={{ marginTop: "25%" }}
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    alt=""
                    className="img-fluid rounded w-100 wow zoomIn"
                    data-wow-delay="0.3s"
                    src="/assets/img/about-2.jpg"
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    alt=""
                    className="img-fluid rounded w-50 wow zoomIn"
                    data-wow-delay="0.5s"
                    src="/assets/img/about-3.jpg"
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    alt=""
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.7s"
                    src="/assets/img/about-4.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
