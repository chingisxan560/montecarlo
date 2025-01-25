import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { navList } from "../data/Data";
import SocialIcons from "./SocialIcons";

export default function Header() {
  const { t, i18n } = useTranslation("navigation");
  const [navbarCollapse, setNavbarCollapse] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [forceRender, setForceRender] = useState(0); // ✅ добавляем состояние

  useEffect(() => {
    setForceRender((prev) => prev + 1);
  }, [i18n.language]); // ✅ исправлено, теперь язык влияет на ререндер

  const handleMouseEnter = (itemId) => {
    setActiveDropdown(itemId);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const changeLanguage = (lng) => {
    console.log("Changing language to:", lng);
    i18n.changeLanguage(lng).then(() => {
      console.log("Language changed:", i18n.language);
    });
  };

  console.log("Перевод 'home':", t("home"));

  return (
    <>
      <div className="container-fluid bg-dark px-0" key={forceRender}>
        <div className="row gx-0">
          <div className="col-lg-3 bg-dark d-none d-lg-block">
            <Link
              to="/"
              className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
            >
              <h1 className="m-0 text-primary text-uppercase">Monte Carlo</h1>
            </Link>
          </div>
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
              <Link to="/" className="navbar-brand d-block d-lg-none">
                <h1 className="m-0 text-primary text-uppercase">Monte Carlo</h1>
              </Link>
              <button
                type="button"
                className="navbar-toggler"
                onClick={() => setNavbarCollapse(!navbarCollapse)}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className={
                  navbarCollapse
                    ? "navbar-collapse justify-content-around navbarCollapse"
                    : "collapse navbar-collapse justify-content-around"
                }
              >
                <div className="navbar-nav mr-auto py-0">
                  {navList.map((item, index) => (
                    <div key={index}>
                      {item.subItems ? (
                        <div
                          className="nav-item dropdown"
                          onMouseEnter={() => handleMouseEnter(item.id)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <Link className="nav-link dropdown-toggle">
                            {t(item.text)}
                          </Link>
                          <div
                            className={`dropdown-menu rounded-0 m-0 ${
                              activeDropdown === item.id ? "show" : ""
                            }`}
                          >
                            {item.subItems &&
                              item.subItems.map((sub, idx) => (
                                <Link
                                  key={idx}
                                  to={sub.path}
                                  className="dropdown-item"
                                >
                                  {t(sub.text)}
                                </Link>
                              ))}
                          </div>
                        </div>
                      ) : (
                        <Link to={item.path} className="nav-item nav-link">
                          {t(item.text)}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
                <div className="d-flex align-items-center">
                  <button
                    onClick={() => changeLanguage("en")}
                    className="btn btn-sm btn-outline-light mx-1"
                  >
                    EN
                  </button>
                  <button
                    onClick={() => changeLanguage("ru")}
                    className="btn btn-sm btn-outline-light mx-1"
                  >
                    RU
                  </button>
                  <button
                    onClick={() => changeLanguage("hy")}
                    className="btn btn-sm btn-outline-light mx-1"
                  >
                    HY
                  </button>
                </div>

                <SocialIcons />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
