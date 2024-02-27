import React, { useState } from "react";
import "../hero.css";
import Image1 from "../Images/image1.jpg";
import Image2 from "../Images/image2.jpg";
import Image3 from "../Images/image3.jpg";
import Image4 from "../Images/image4.jpg";
import Image5 from "../Images/image5.jpg";
import Image6 from "../Images/image6.jpg";
import Image7 from "../Images/image7.jpg";
import Image8 from "../Images/image8.jpg";
import Image9 from "../Images/image9.jpg";
import Image10 from "../Images/image10.jpg";
import { IoMdCall } from "react-icons/io";
const ImageGallery = () => {
  const images = [
    { id: 1, src: Image1, height: "200px" },
    { id: 2, src: Image2, height: "200px" },
    { id: 3, src: Image3, height: "200px" },
    { id: 4, src: Image4, height: "200px" },
    { id: 5, src: Image5, height: "200px" },
    { id: 6, src: Image6, height: "200px" },
    { id: 7, src: Image7, height: "200px" },
    { id: 8, src: Image8, height: "200px" },
    { id: 9, src: Image9, height: "200px" },
    { id: 10, src: Image10, height: "250px" },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  return (
    <>
      <div className="bg-lightC">
        <div className="justify-center text-center pt-8">
          <h2 className="text-redC">GALLERY</h2>
          <h3 className="text-2xl font-bold text-blueC mb-4">Our Projects</h3>
        </div>
        <div className="grid grid-cols-2 gap-3 bg-lightC pt-24  pb-8 px-4 gb box-shad relative">
          {images.map((image, index) => {
            let height = image.height;
            let marginTop = 0;

            if (index > 0 && index % 2 === 1) {
              marginTop = -50;
            }

            return (
              <div
                key={image.id}
                style={{
                  height,
                  marginTop,
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "1px 1px 7px -1px rgb(0, 0, 0)",
                }}
                className="rounded-md  cursor-pointer "
                onClick={() => handleImageClick(image)}
              >
                <img
                  src={image.src}
                  alt={`Image ${image.id}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  className="rounded-md shadow-2xl"
                />
              </div>
            );
          })}
        </div>
        {modalVisible && (
          <div className="fixed top-0 left-0 w-full h-full bg-opacity-50 backdrop-filter backdrop-blur flex items-center justify-center">
            <div className="bg-white p-4 rounded-md w-full max-w-3xl relative">
              <button
                className="absolute top-0 right-0 p-2 text-redC bg-lightC rounded-xl box-shad "
                onClick={closeModal}
              >
                Cancel
              </button>
              {selectedImage && (
                <img
                  src={selectedImage.src}
                  alt={`Image ${selectedImage.id}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  className="rounded-md"
                />
              )}
            </div>
          </div>
        )}
        <div className="flex relative justify-center  items-center bg-lightC mt-[-10px]  p-4 box-shad gt">
          <a>
            <button className="bg-redC text-lightC shadow-lightC border-solid border-lightC rounded-md p-2 shadow mr-3">
              Get Free Quote!!!
            </button>
          </a>
          <a href="tel:+14016326426">
            <button className="bg-redC text-lightC shadow-lightC border-solid border-lightC rounded-md p-2 shadow mr-3 flex items-center gap-4">
              <IoMdCall /> (401) 632 6426
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
