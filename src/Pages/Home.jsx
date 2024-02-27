import { React, useEffect } from "react";
import Navbar from "../Component/Navbar";
import Hero from "../Component/Hero";
import About from "../Component/About";
import Whychoose from "../Component/Whychoose";
import Services from "./Services";
import ServiceList from "../Component/ServiceList";
import MovingText from "../Component/MovingText";
import WhyChooseUs from "../Component/WhyChooseUs";
import GalleryImg from "../Component/GalleryImg";
import ImageGallery from "../Component/ImageGallery";
import ServiceArea from "../Component/ServiceArea";
import Reviews from "../Component/Reviews";
import ContactForm from "../Component/ContactForm";

const Home = () => {
  useEffect(() => {
    // Scroll to the top on component mount
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <MovingText />
      <ServiceList />
      <Whychoose />
      <WhyChooseUs />
      <GalleryImg />
      <ServiceArea />
      <ImageGallery />
      <Reviews />
      <ContactForm />
    </>
  );
};

export default Home;
