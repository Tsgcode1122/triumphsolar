import React from "react";
import { Link } from "react-router-dom";
import serviceB from "../Images/bb.jpg";
import videoSolar from "../Videos/solar.mp4";
import servicesData from "./servicesData.json";

const ServiceList = () => {
  const bStyle = {
    backgroundImage: `url(${serviceB})`,
  };
  return (
    <>
      <div
        className="m-0 pb-8 bg-cover bg-center justify-center text-center sm:px-6   bg-no-repeat"
        style={bStyle}
      >
        <div>
          <h2 className="text-redC">OUR SERVICES</h2>
          <h3 className="text-2xl font-bold text-blueC mb-4">
            providing the Best Services
          </h3>
        </div>
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="m-8 bg-lightC border-2 border-solid border-lightC rounded-xl p-2  box-shad border-design"
          >
            {service.video ? (
              <video
                src={service.video}
                alt={service.service_name}
                className="border-des"
                controls
                autoPlay
                loop
                muted
              />
            ) : (
              <img
                src={service.img}
                alt={service.service_name}
                className="border-des max-h-[20rem] w-full"
              />
            )}
            <div className="m">
              <h2 className="text-blueC text-xl font-bold">
                {service.service_name}
              </h2>
              <p className="mb-4">{service.service_description}</p>
              <Link key={index} to={`/Services/${service.id}`}>
                <button className="bg-redC shadow-lightC  border-solid border-lightC rounded-md p-2 shadow  mr-3 text-lightC ">
                  Read More...
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServiceList;
