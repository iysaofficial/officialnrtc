import Navigation from "../components/Navigation";
import About from "../components/About";
import Category from "../components/Category";
import Objective from "../components/Objective";
import Organized from "../components/Organized";
import Faq from "../components/Faq";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

// Import CSS
import "../css/Irtc.css";


function Irtcpage() {
    return (  
      <div>
        < Navigation />
        < About />
        < Category />
        < Objective />
        < Organized />
        < Faq />
        < Contact />
        < Footer />
      </div>
    );
  }
  
export default Irtcpage;