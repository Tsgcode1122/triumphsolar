import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "../hero.css";
const WhyChooseUs = () => {
  return (
    <>
      <div className=" bg-cover bg-center justify-center text-center">
        <h2 className="text-redC">WHY CHOOSE US</h2>
        <h3 className="text-2xl font-bold text-blueC mb-4">
          What TriumphSolarPicasso Offers
        </h3>
      </div>
      <div className="text-center">
        <div className="my-2 mx-8 text-lightC bg-blueC border-lightC border-design p-6  box-shad">
          <h3 className="font-bold">EXPERTISE</h3>
          <p>
            With industry leadership and extensive experience, we deliver
            excellence in every service. Your satisfaction is our priority.
          </p>
        </div>

        <div className="my-2 mx-8 text-lightC bg-blueC border-lightC border-design p-6  box-shad">
          <h3>VERSATILITY</h3>
          <p>
            Offering a range of home services including painting, gutter
            cleaning, solar maintenance, and more. to meet your need.
            Prioritizing your contentment.
          </p>
        </div>

        <div className="my-2 mx-8 text-lightC bg-blueC border-lightC p-6   border-design box-shad">
          <h3>QUALITY SERVICE</h3>
          <p>
            We are committed to delivering excellence in every service we offer.
            Our services are not only of the highest quality but also
            trustworthy and dependable.
          </p>
        </div>

        <div className="my-2 mx-8 text-lightC bg-blueC border-lightC border-design p-6  box-shad">
          <h3>CUSTOMER SATISFACTION</h3>
          <p>
            We prioritize your contentment by providing top-notch services. Our
            team consists of highly trained experts dedicated to ensuring your
            satisfaction.
          </p>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
