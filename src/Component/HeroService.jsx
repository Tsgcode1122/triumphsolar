import React from "react";
import "../hero.css";
import brick from "../Images/icons/solarcl.png";
import renovation from "../Images/icons/renovation.png";
import lands from "../Images/icons/lands.png";
import washing from "../Images/icons/washing.png";
import leaking from "../Images/icons/leaking.png";
import pool from "../Images/icons/pool.png";
const HeroService = () => {
  return (
    <>
      <div className="bg-lightC  mt-[-2rem] mx-4 border-2 border-solid border-lightC rounded-2xl p-2  flex flex-wrap gap-1 box-shad">
        <div className="bg-lightC flex  flex-col max-w-[7rem] justify-center items-center text-center mx-4 border-2 border-solid border-lightC rounded-xl p-1 shadow-md  ">
          <img src={brick} className="max-w-full h-[2rem] " alt="Flooring" />
          <span className="text-[12px] ">SOLAR INSTALL/CLEANING</span>
        </div>
        <div className="bg-lightC flex  flex-col max-w-[7rem] justify-center items-center text-center mx-4 border-2 border-solid border-lightC rounded-xl p-1 shadow-md  ">
          <img src={washing} className="max-w-full h-[2rem] " alt="Flooring" />
          <span className="text-[12px]">ALL PRESSURE WASHING</span>
        </div>
        <div className="bg-lightC flex  flex-col max-w-[7rem] justify-center items-center text-center mx-4 border-2 border-solid border-lightC rounded-xl p-1 shadow-md  ">
          <img src={brick} className="max-w-full h-[2rem] " alt="Flooring" />
          <span className="text-[12px]">EXTERIOR/INTERIOR PAINTING</span>
        </div>

        <div className="bg-lightC flex  flex-col min-w-[7rem] justify-center items-center text-center mx-4 border-2 border-solid border-lightC rounded-xl p-1 shadow-md  ">
          <img src={lands} className="max-w-full h-[2rem] " alt="Flooring" />
          <span className="text-[12px]">LANDSCAPE</span>
        </div>
        <div className="bg-lightC flex  flex-col min-w-[7rem] justify-center items-center text-center mx-4 border-2 border-solid border-lightC rounded-xl p-1 shadow-md  ">
          <img src={leaking} className="max-w-full h-[2rem] " alt="Flooring" />
          <span className="text-[12px]">LEAK REPAIR</span>
        </div>
        <div className="bg-lightC flex  flex-col min-w-[7rem] justify-center items-center text-center mx-4 border-2 border-solid border-lightC rounded-xl p-1 shadow-md  ">
          <img src={pool} className="max-w-full h-[2rem] " alt="Flooring" />
          <span className="text-[12px]">POOL SERVICES</span>
        </div>
      </div>
    </>
  );
};

export default HeroService;
