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
              href="https://drive.google.com/drive/folders/1OnbHFulrSRrVx3SSEAoxxqw0h6Jr8g5l?usp=sharing"
              className="main-hero-btn main-hero-btn-blue"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buku Panduan
            </a>

            {/* <a href="/homeindo">
            <button type="button" className="main-hero-btn main-hero-btn-yellow">
              Daftar Sekarang !
            </button>
            </a> */}
            <button type="button" className="main-hero-btn main-hero-btn-yellow" disabled style={{ cursor: "not-allowed" }}>
              Coming Soon 2027
            </button>
      
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
