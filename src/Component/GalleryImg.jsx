import React from "react";
import "../hero.css";
import bef1 from "../Images/bef1.jpg";
import aft1 from "../Images/aft1.jpg";
import bef2 from "../Images/bef2.jpg";
import aft2 from "../Images/bef2.jpg";
import ReactCompareImage from "react-compare-image";
const GalleryImg = () => {
  return (
    <>
      <div className="bg-cover bg-center justify-center text-center">
        <h2 className="text-redC">TRANSFORMATION</h2>
        <h3 className="text-2xl font-bold text-blueC mb-4">Before & After</h3>
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
