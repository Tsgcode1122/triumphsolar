// ServiceArea.jsx
import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "../hero.css";
import lashB from "../Images/service-bg.jpg";
const ServiceAreass = () => {
  const serviceAreas = [
    { id: 1, name: "123 Main St, City" },
    { id: 2, name: "456 Oak St, City" },
    { id: 3, name: "789 Pine St, City" },
    { id: 4, name: "101 Elm St, City" },
    { id: 5, name: "202 Maple St, City" },
    { id: 6, name: "303 Birch St, City" },
    { id: 7, name: "404 Cedar St, City" },
    { id: 8, name: "505 Walnut St, City" },
    { id: 9, name: "606 Pine St, City" },
    { id: 10, name: "707 Oak St, City" },
  ];
  const bStyle = {
    backgroundImage: `url(${lashB})`,
  };
  return (
    <>
      <div className="p-8   bg-cover bg-center" style={bStyle}>
        <div className="text-center">
          <h2 className="text-redC font-bold mb-4">SERVICE AREA</h2>
          <h3 className="text-lightC text-xl font-bold mb-8">
            We offer and cover services in the following USA cities:
          </h3>
        </div>
        <div className="grid grid-cols-2  gap-1">
          {serviceAreas.map((area) => (
            <div key={area.id} className="flex items-center mb-4">
              <div className="mr-4">📍</div>
              <div>
                <h4 className="text-lightC text-lg font-bold">{area.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServiceAreass;
