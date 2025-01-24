import React, { useState } from "react";
import CommonHeading from "../common/CommonHeading";
import { services } from "../data/Data";
import CustomModal from "../common/Modal";

export default function   Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null); 

  const handleOpenModal = (service) => {
    setSelectedService(service); 
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null); 
  };

  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <CommonHeading
              heading="Our Services"
              title="Services"
              subtitle="Explore Our"
            />
          </div>
          <div className="row g-4">
            {services.map((item, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <button
                  onClick={() => handleOpenModal(item)} 
                  className="service-item rounded"
                  style={{
                    width: "300px",
                    transition:
                      "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
                  }}
                >
                  <div className="service-icon bg-transparent border rounded p-1">
                    <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                      {item.icon}
                    </div>
                  </div>
                  <h5 className="mb-3">{item.name}</h5>
                  <p className="text-body mb-0">{item.description}</p>
                </button>
              </div>
            ))}
          </div>
          {selectedService && ( 
            <CustomModal
              isOpen={isModalOpen}
              img={selectedService.img} 
              text={selectedService.description} 
              onClose={handleCloseModal}
            />
          )}
        </div>
      </div>
    </>
  );
}
