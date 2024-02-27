import React from "react";
import { useParams } from "react-router-dom";
import { serviceData } from "./ServiceData";
import "../hero.css";
const ServiceDetail = () => {
  console.log("ServiceDetail component rendered");
  const { serviceId } = useParams();
  const service = serviceData.find((service) => service.id === serviceId);

  return (
    <div className="pt-16">
      <h2>hy</h2>
      <h2>{service.service_name}</h2>
      <p>{service.service_description}</p>
    </div>
  );
};

export default ServiceDetail;
