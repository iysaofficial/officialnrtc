import Navbar from "../components/nrtc/Navbar";
import Abouts from "../components/nrtc/Abouts";
import Category from "../components/Category";
import Objective from "../components/Objective";
import Organized from "../components/Organized";
import Faq from "../components/Faq";
import Contact from "../components/Contact";
import Footers from "../components/nrtc/Footers";
import Video from "../components/Video";


import "../css/Nrtc.css";
import HeroSection from "../components/HeroSection";

function Nrtcpage() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <Abouts />
            <Category />
            <Objective />
            <Video />
            <Organized />
            <Faq />
            <Contact />
            <Footers />
        </>
    );
}

export default Nrtcpage;