import React from "react";

import ReactCompareImage from "react-compare-image";
const GalleryImg = () => {
  return (
    <>
      <div className="bg-cover bg-center justify-center text-center">
        <h2 className="text-redC">TRANSFORMATION</h2>
        <h3 className="text-2xl font-bold text-blueC mb-4">Before & After</h3>
        <div className="mb-4">
          <ReactCompareImage
            leftImage="src/Images/bef1.jpg"
            rightImage="src/Images/aft1.jpg"
            aspectRatio="wider"
          />
        </div>
        <ReactCompareImage
          leftImage="src/Images/bef2.jpg"
          rightImage="src/Images/aft2.jpg"
          aspectRatio="wider"
        />
      </div>
    </>
  );
};

export default GalleryImg;
