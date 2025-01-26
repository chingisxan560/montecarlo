import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import CommonHeading from "../common/CommonHeading";
import { roomItems } from "../data/Data";
import { Link } from "react-router-dom";

export default function Rooms({ filters }) {
  const { t } = useTranslation("common"); // 👈 Добавляем namespace "common"
  const [filteredRooms, setFilteredRooms] = useState(roomItems);

  useEffect(() => {
    let filtered = roomItems;

    if (filters.category) {
      filtered = filtered.filter((room) => room.category === filters.category);
    }

    if (filters.capacity) {
      filtered = filtered.filter(
        (room) => room.capacity >= parseInt(filters.capacity)
      );
    }

    setFilteredRooms(filtered);
  }, [filters]);

  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <CommonHeading
            heading={t("Our Rooms")}
            title={t("Rooms")}
            subtitle={t("Explore Our")}
          />
          <div className="row g-4">
            {filteredRooms.length === 0 ? (
              <p>{t("No rooms match your criteria")}</p>
            ) : (
              filteredRooms.map((item, key) => (
                <div
                  key={key}
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="room-item shadow rounded overflow-hidden">
                    <div className="position-relative">
                      <img className="img-fluid" src={item.img} alt="img" />
                      <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                        {item.price.split("/")[0]} {t("perNight")}
                      </small>
                    </div>
                    <div className="p-4 mt-2">
                      <div className="d-flex justify-content-between mb-3">
                        <h5 className="mb-0">{t(item.name)}</h5>
                        <div className="ps-2">{item.star}</div>
                      </div>
                      <div className="d-flex mb-3">
                        {item.facilities.map((facilityItem, index) => (
                          <small key={index} className="border-end me-3 pe-3">
                            {facilityItem.icon}
                            {facilityItem.quantity || ""}{" "}
                            {t(facilityItem.facility)}
                          </small>
                        ))}
                      </div>
                      <p className="text-body mb-3">
                        {t(`description${key + 1}`)}{" "}
                      </p>

                      <div className="d-flex justify-content-between">
                        <Link
                          to="/roominfo"
                          state={{
                            name: item.name,
                            key: key,
                            price: t(item.price),
                            info: t(`info${key + 1}`),
                            description: t(`description${key + 1}`),
                            img: item.img,
                            darkbtn: item.darkbtn,
                          }}
                        >
                          <button className="btn btn-sm btn-primary rounded py-2 px-4">
                            {t(item.yellowbtn)}
                          </button>
                        </Link>
                        <Link
                          to="/purchase"
                          state={{
                            key: key,
                            name: item.name,
                            price: item.price,
                            info: `info${key + 1}`,
                            description: `description${key + 1}`,
                            img: item.img,
                            darkbtn: item.darkbtn,
                          }}
                        >
                          <button className="btn btn-sm btn-dark rounded py-2 px-4">
                            {t(item.darkbtn)}
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
