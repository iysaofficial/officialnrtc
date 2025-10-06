import React from "react";

const HeroSection = () => {
  return (
    <section
      className="main-hero"
      style={{
        background: "url('../assets/img/bg.png') no-repeat center center",
      }}
    >
      <div className="main-hero-overlay ">
        <div className="main-hero-content">
          <h1>National Research Teacher Competition</h1>
          <p>
            Daftarkan dirimu dan tim untuk berkompetisi, berbagi inovasi, serta memperluas jejaring bersama rekan terbaik dari seluruh Indonesia.<br />
          </p>
          <div className="main-hero-buttons">
            <a
              href="https://drive.google.com/file/d/1FD4SoRz3ENzYAT-TSWpNFDl-5ngURgoP/view?usp=sharing"
              className="main-hero-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lihat Buku Panduan
            </a>
            {/* <a href="/homeindo" className="main-hero-btn main-hero-btn-yellow">
              Daftar Sekarang!
            </a> */}
            <a href="/" className="main-hero-btn main-hero-btn-yellow">
              Tutup Pendaftaran
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
