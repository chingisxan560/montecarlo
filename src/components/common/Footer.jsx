import { Link } from "react-router-dom";
import { footerContact, footerItem, socialIcons } from "../data/Data";
import Newsletter from "../home/Newsletter";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation("common");
  return (
    <>
      <Newsletter />
      <div
        className="container-fluid bg-dark text-light footer wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container pb-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-4">
              <div className="bg-primary rounded p-4">
                <Link to="/">
                  <h1 className="text-white text-uppercase mb-3">
                    Monte Carlo
                  </h1>
                </Link>
                <p className="text-white mb-0">{t("footerText")}</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <h6 className="section-title text-start text-primary text-uppercase mb-4">
                {t(`Contact`)}
              </h6>
              {footerContact.map((val, index) => (
                <p className="mb-2" key={index}>
                  {val.icon} {val.name}
                </p>
              ))}
              <div className="d-flex pt-2">
                {socialIcons.slice(0, 4).map((val, index) => (
                  <button className="btn btn-outline-light btn-social">
                    {val.icon}
                  </button>
                ))}
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="row gy-5 g-4">
                {footerItem.map((section, sectionIndex) => (
                  <div className="col-md-6" key={sectionIndex}>
                    <h6 className="section-title text-start text-primary text-uppercase mb-4">
                      {t(section.header)}
                    </h6>
                    {section.UnitItem.map((item, itemIndex) => (
                      <Link to={item.url}>
                        <button className="btn btn-link" key={itemIndex}>
                          {t(item.name)}
                        </button>
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
