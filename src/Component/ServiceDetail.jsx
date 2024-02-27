import { React, useEffect } from "react";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import lashB from "../Images/b1.jpg";
import t1 from "../Images/t1.jpg";
import t2 from "../Images/t2.jpg";

import { Outlet, Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { serviceData } from "./ServiceData";
import "../hero.css";
const ServiceDetail = () => {
  useEffect(() => {
    // Scroll to the top on component mount
    window.scrollTo(0, 0);
  });
  const bStyle = {
    backgroundImage: `url(${lashB})`,
  };
  console.log("ServiceDetail component rendered");
  const { serviceId } = useParams();
  const service = serviceData.find((service) => service.id === serviceId);

  return (
    <>
      <div className="pt-16">
        <div className="pt-16  bg-center bg-cover text-center" style={bStyle}>
          <h1 className="p-[60px] text-lightC font-bold bg-blueC  bg-opacity-60 text-2xl">
            {service.service_name}
          </h1>
        </div>
        <div className="flex flex-wrap items-center justify-center p- bg-lightC">
          {/* Solar Installations and Solar Cleaning */}
          <div className="w-full p-4 mb-2 mt-8  mx-4 bg-blueC rounded-md box-shad">
            <p className="text-white">{service.description}</p>
          </div>

          {/* Images */}
          <div className="w-full p-4 flex justify-center space-x-8">
            <img
              src={service.image}
              alt="Solar Installations and Cleaning"
              className=""
            />
          </div>

          {/* Benefits and Why Choose Us */}
          <div className="flex w-full lg:w-1/2">
            {/* Benefits */}
            <div className="w-full p-4 mb-8 mx-2 bg-blueC rounded-md box-shad">
              <h2 className="text-white text-2xl mb-4 font-bold">
                {service.h_one}
              </h2>
              <ul className="text-white">
                <li> {service.p_one}</li>
                <li> {service.p_two}</li>
                <li> {service.p_three}</li>
              </ul>
            </div>

            {/* Why Choose Us */}
            <div className="w-full p-4 mb-8 mx-2 bg-blueC rounded-md box-shad">
              <h2 className="text-white text-2xl mb-4 font-bold">
                {service.h_two}
              </h2>
              <ul className="text-white">
                <li> {service.p_2one}</li>
                <li> {service.p_2two}</li>
                <li>{service.p_2three}</li>
              </ul>
            </div>
          </div>

          {/* Images */}
          <div className="w-full p-4 flex justify-center space-x-8">
            <img
              src={service.image_2}
              alt="Solar Installations and Cleaning"
              className=""
            />
          </div>
        </div>
      </div>
      <ContactForm />
      <Footer />
    </>
  );
};

export default ServiceDetail;
