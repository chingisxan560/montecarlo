import React from "react";
import { Link, useLocation } from "react-router-dom";
import Heading from "../components/common/Heading"; // Ваш компонент заголовка

export default function Roominfo() {
  const location = useLocation();
  const { name, info, price, description, img, darkbtn } = location.state || {};

  return (
    <>
      <Heading heading={name} title="Home" subtitle="Room-info" />
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <img src={img} alt={name} width="800" height="auto" className="img-fluid rounded" />
          </div>
          <div className="col-md-6">
            <h2>{name}</h2>
            <h4 className="text-primary">{price}</h4>
            <h3>{description}</h3>
            <hr></hr>
            <h6 style={{paddingTop:"20px",paddingBottom:"20px"}}>{info}</h6>
            <Link
              to="/purchase"
              state={{ 
                name: name, 
                price: price,
                info: info, 
                description: description, 
                img: img,
                darkbtn: darkbtn 
              }}
            >
              <button className="btn btn-sm btn-dark rounded py-2 px-4">
                {darkbtn}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
