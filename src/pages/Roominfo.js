import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Heading from "../components/common/Heading";

export default function Roominfo() {
  const { t } = useTranslation("common");
  const location = useLocation();
  const { name, info, price, description, key, img } = location.state || {};
  console.log(price);

  return (
    <>
      <Heading heading={t(name)} title={t("home")} subtitle={t("roomInfo")} />
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <img
              src={img}
              alt={name}
              width="800"
              height="auto"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            <h2>{t(name)}</h2>
            <h4 className="text-primary">
              {" "}
              {price.split("/")[0]} {t("perNight")}
            </h4>
            <h3>{t(`description${key}`)}</h3>
            <hr />
            <h6 style={{ paddingTop: "20px", paddingBottom: "20px" }}>
              {t(`info${key}`)}
            </h6>
            <Link
              to="/purchase"
              state={{
                name: name,
                price: price,
                info: info,
                description: description,
                img: img,
                // darkbtn: darkbtn,
              }}
            >
              <button className="btn btn-sm btn-dark rounded py-2 px-4">
                {t("Book Now")}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
