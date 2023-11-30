import Navbar from "../components/nrtc/Navbar";
import Abouts from "../components/nrtc/Abouts";
import Category from "../components/Category";
import Objective from "../components/Objective";
import Organized from "../components/Organized";
import Faq from "../components/Faq";
import Contact from "../components/Contact";
import Footers from "../components/nrtc/Footers";


import "../css/Nrtc.css";

function Nrtcpage() {
    return (
        <div>
        < Navbar />
        < Abouts />
        < Category />
        < Objective />
        < Organized />
        < Faq />
        < Contact />
        < Footers />
        </div>

    );
}

export default Nrtcpage;