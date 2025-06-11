import React, { useState, useEffect } from "react";
import { indonesiaOnlineTerms, indonesiaOfflineTerms } from "../data/term";
import Navbar from "../../components/nrtc/Navbar";
import Footer from "../../components/nrtc/Footers";
import "../../css/registration.css";

function HomeIndo() {
  const [showModal, setShowModal] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [redirectLink, setRedirectLink] = useState("");
  const [termsContent, setTermsContent] = useState("");

  const handleOpenModal = (link, terms) => {
    setRedirectLink(link);
    setTermsContent(terms);
    setShowModal(true);
  };

  const handleAccept = () => {
    if (termsAccepted) {
      sessionStorage.setItem("termsAccepted", "true");
      setShowModal(false);
      window.location.href = redirectLink;
    } else {
      alert("Harap setujui Syarat & Ketentuan untuk melanjutkan.");
    }
  };

  useEffect(() => {
    const hasAcceptedTerms = sessionStorage.getItem("termsAccepted");
    if (hasAcceptedTerms === "true") {
      setTermsAccepted(true);
    }
  }, []);

  return (
    <>
      <Navbar />
      <section className="homeregist-section">
        <div>
          <div className="wrapper">
            <div className="text-center">
              <h1 className="mx-auto text-sm md:text-lg lg:text-5xl">
                FORMULIR REGISTRASI{" "}
              </h1>
              <h3 className="mx-auto mt-5 mb-2 text-sm md:text-lg lg:text-2xl">
                Pilih Kategori Kompetisi untuk Registrasi NRTC 2025
              </h3>
            </div>
          </div>
          <div className="link-web mx-auto text-center">
            <a
              className="btn-regist btn-action text-center me-lg-5 m-2"
              onClick={() =>
                handleOpenModal("/indo-online", indonesiaOnlineTerms)
              }
            >
              Kompetisi Online<i className="fa-solid fa-earth-americas"></i>
            </a>
            <a
              className="btn-regist btn-action text-center me-lg-5 m-2"
              onClick={() =>
                handleOpenModal("/indo-offline", indonesiaOfflineTerms)
              }
            >
              Kompetisi Offline<i className="fa-solid fa-earth-americas"></i>
            </a>
          </div>
        </div>
      </section>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="text-4xl">Syarat & Ketentuan</h2>
            <div>{termsContent}</div>
            <div className="checkbox mt-2">
              <input
                type="checkbox"
                id="terms"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
              />
              <label htmlFor="terms">
                Saya menyetujui Syarat & Ketentuan di atas
              </label>
            </div>
            <div className="modal-actions">
              <button
                className="btn btn-secondary"
                onClick={() => setShowModal(false)}
              >
                Kembali
              </button>
              <button className="btn btn-primary" onClick={handleAccept}>
                Terima & Proses
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default HomeIndo;
