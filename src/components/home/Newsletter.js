import { ref, set } from "firebase/database";
import { db } from "../../firebase"; // Import Firebase setup
import { useState } from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation

export default function Newsletter() {
  const { t } = useTranslation("common"); // Add 'common' namespace or appropriate namespace for translation
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Submit handler for the form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Data for saving to Firebase
    const orderData = {
      email: formData.email,
    };

    // Save data to Firebase
    const newOrderRef = ref(db, "newsletter/" + Date.now()); // Using current timestamp for unique key
    set(newOrderRef, orderData)
      .then(() => {
        alert(t("newsletterSuccessMessage")); // Using translation key
      })
      .catch((error) => {
        console.error("Error adding subscription: ", error);
        alert(t("newsletterErrorMessage")); // Using translation key
      });
  };

  return (
    <div className="container newsletter mt-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="row justify-content-center">
        <div className="col-lg-10 border rounded p-1">
          <div className="border rounded text-center p-1">
            <div className="bg-white rounded text-center p-5">
              <h4 className="mb-4">
                {t("subscribeTo")}{" "}
                <span className="text-primary text-uppercase">
                  {t("newsletter")}
                </span>
              </h4>
              <form onSubmit={handleSubmit}>
                <div
                  className="position-relative mx-auto"
                  style={{ maxWidth: "400px" }}
                >
                  <input
                    className="form-control w-100 py-3 ps-4 pe-5"
                    type="email" // Ensure the type is email for validation
                    placeholder={t("enterEmailPlaceholder")} // Translated placeholder
                    name="email" // Add name attribute so it binds with formData
                    value={formData.email} // Bind value to formData.email
                    onChange={handleChange} // Handle the change
                    required // Make email input required
                  />
                  <button
                    type="submit" // Should be 'submit' for form submission
                    className="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2"
                  >
                    {t("submitButton")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
