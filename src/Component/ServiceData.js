import videoSolar from "../Videos/solar.mp4";
import pressure from "../Images/pressure.jpg";
import lands from "../Images/landscape.jpg";
import painter from "../Images/painter.jpg";
import leakrepair from "../Images/leakrepair.jpg";
import poolservice from "../Images/poolservice.jpg";

export const serviceData = [
  {
    id: "solar-service",
    video: videoSolar,
    service_name: "Solar Install/Cleaning",
    service_description:
      "We specialize in a full spectrum of solar services, from installations to removals/reinstalls, cleanings, troubleshooting, and software updates. Our dedicated team ensures the seamless integration of cutting-edge solar systems, optimizing their performance through meticulous inspections.",
  },
  {
    id: "landscape-service",
    img: lands,
    service_name: "Landscape Service",
    service_description:
      "Transform your outdoor space into a picturesque oasis with our Landscape Service. From lush greenery to vibrant flowers, our expert team crafts stunning landscapes that elevate your property's beauty and functionality.",
  },
  {
    id: "pressure-service",
    img: pressure,
    service_name: "All Pressure Washing Service",
    service_description:
      "Experience a pristine transformation with our All-Pressure Washing Service. We wash away dirt, grime, and stains, restoring surfaces to their original glory. From sidewalks to siding, we bring a refreshing cleanliness to every corner.",
  },
  {
    id: "painter-service",
    img: painter,
    service_name: "Exterior/Interior Painting",
    service_description:
      "Add a splash of color to your surroundings with our Exterior/Interior Painting service. Our skilled painters breathe new life into your spaces, creating personalized palettes that reflect your style and personality.",
  },
  {
    id: "leak-service",
    img: leakrepair,
    service_name: "Leak Repair",
    service_description:
      "Protect your property from water damage with our Leak Repair service. Our experienced technicians swiftly identify and repair leaks, ensuring the integrity and longevity of your structure.",
  },
  {
    id: "pool-service",
    img: poolservice,
    service_name: "Pool Screen Repair",
    service_description:
      "Keep your pool area bug-free with our Pool Screen Repair service. Our team expertly repairs and replaces damaged screens, allowing you to enjoy your outdoor oasis without any unwanted guests.",
  },
];
