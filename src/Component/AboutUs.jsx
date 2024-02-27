import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import about from "../Images/brickb.png";
import aboutu from "../Images/t2.jpg";
import Whychoose from "./Whychoose";
import "../hero.css";
const AboutUs = () => {
  const bStyle = {
    backgroundImage: `url(${about})`,
  };
  return (
    <>
      <div className="m-0   bg-cover bg-center justify-center text-center sm:px-6   bg-no-repeat ">
        <div className="pt-6">
          <h2 className="text-redC">ABOUT US</h2>
          <h3 className="text-2xl font-bold text-blueC mb-4">
            Professional Home & Residential Services
          </h3>
          <article className="p-2 justify-center">
            At TriumphSolarPicasso, we specialize in illuminating homes through
            solar services, offering solar installations/system diagnosis. Our
            expert team delivers excellence in a spectrum of home services,
            including solar cleaning, pressure washing, painting, gutter
            cleaning and versatile handyman solutions. Trust us to transform
            your living space into a haven of brilliance and functionality.
            Welcome to TriumphSolarPicasso – where every service is a
            brushstroke of excellence.
          </article>

          <Link to="/About">
            <button className="bg-redC shadow-lightC  border-solid border-lightC rounded-md p-2 shadow  mr-3 text-lightC ">
              Read More...
            </button>
          </Link>
          <div className="p-6   ">
            <img
              src={aboutu}
              className="max-w-full border-design border-design   border-solid flex flex-wrap gap-1 box-shad "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
