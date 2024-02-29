import React from "react";
import "../hero.css";
import bef1 from "../Images/bef1.jpg";
import aft1 from "../Images/aft1.jpg";
import bef2 from "../Images/bef2.jpg";
import aft2 from "../Images/aft2.jpg";
import brick from "../Images/icons/light.png";
import ReactCompareImage from "react-compare-image";
const GalleryImg = () => {
  return (
    <>
      <div className="bg-cover bg-center justify-center text-center">
        <div className=" flex flex-col items-center relative my-8">
          <img
            src={brick}
            className="max-w-full h-[3rem] rounded-full bg-lightC p-2 absolute mt-[-2rem] box-shad "
            alt="Flooring"
          />
          <h2 className="text-redC tsgB subhead  font-bold">TRANSFORMATION</h2>
          <p className="text-blueC font-tsg mt-[3rem] text-xl bg-lightC p-2 absolute  rounded-xl">
            Before & After
          </p>
        </div>

        <div className="mb-4">
          <ReactCompareImage
            leftImage={bef1}
            rightImage={aft1}
            aspectRatio="wider"
          />
        </div>
        <ReactCompareImage
          leftImage={bef2}
          rightImage={aft2}
          aspectRatio="wider"
        />
      </div>
    </>
  );
};

export default GalleryImg;
