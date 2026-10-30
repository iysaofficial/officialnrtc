import React from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import HeroSection from "../../components/home/HeroSection";
import AboutSection from "../../components/home/AboutSection";
import CategorySection from "../../components/home/CategorySection";
import ObjectiveSection from "../../components/home/ObjectiveSection";
import VideoSection from "../../components/home/VideoSection";
import OrganizedSection from "../../components/home/OrganizedSection";
import FaqSection from "../../components/home/FaqSection";
import ContactSection from "../../components/home/ContactSection";

import "../../css/Nrtc.css";

function NrtcPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CategorySection />
      <ObjectiveSection />
      <VideoSection />
      <OrganizedSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default NrtcPage;

