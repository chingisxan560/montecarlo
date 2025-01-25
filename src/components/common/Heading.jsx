import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Импортируем хук для перевода

export default function Heading({ heading, title, subtitle }) {
  const { t } = useTranslation("common"); // Получаем функцию t для перевода

  return (
    <>
      <div className="container-fluid page-header mb-5 p-0 bg-image">
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center pb-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              {t(heading)} {/* Переводим heading */}
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item">
                  <Link to="/">{t(title)}</Link>
                </li>
                <li
                  className="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  {t(subtitle)}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
