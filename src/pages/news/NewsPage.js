import React from "react";
import Navbar from "../../components/common/Navbar";
import NewsList from "../../components/news/NewsList";
import Footer from "../../components/common/Footer";

import "../../css/News1.css";

function NewsPage() {
  return (
    <div>
      <Navbar />
      <NewsList />
      <Footer />
    </div>
  );
}

export default NewsPage;

