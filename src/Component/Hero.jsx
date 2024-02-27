import React from "react";
import lashB from "../Images/hero.jpg";
import HeroService from "./HeroService";
const Hero = () => {
  const bStyle = {
    backgroundImage: `url(${lashB})`,
  };
  return (
    <>
      <div
        className="m-0  bg-cover bg-center justify-center text-center sm:px-6 xl:flex xl:flex-row-reverse xl:text-center xl:h-[90vh] xl:px-16 xl:justify-center xl:items-center xl:gap-4  bg-no-repeat "
        style={bStyle}
      >
        <div className="p-8 pt-[12rem] pb-[10rem] bg-blueC bg-opacity-60 text-lightC h-full w-screen">
          <div className="pb-4">
            <h1 className="text-[70px] leading-10  font-bold "> TRIUMPH</h1>
            <span className="text-lightC text-[35px] font-bold ">
              SolarPicasso
            </span>
          </div>
          <h3>
            Pioneering Excellence in Solar Cleaning, Comprehensive Pressure
            Washing, Painting, and Handyman Services for Residential and
            Commercial Properties
          </h3>
          <div className=" pt-8 gap-4 ">
            <a>
              {" "}
              <button className="bg-redC shadow-lightC  border-solid border-lightC rounded-md p-2 shadow  mr-3 ">
                Get a Quote
              </button>
            </a>
            <a>
              {" "}
              <button className="bg-redC shadow-lightC  border-solid border-lightC rounded-md p-2 shadow  ">
                Explore Services
              </button>
            </a>
          </div>
        </div>
      </div>
      <HeroService />
    </>
  );
};

export default Hero;
