import React, { useState } from "react";
import Navbar from "../../../components/nrtc/Navbar";
import Footer from "../../../components/nrtc/Footers";


export default function List2024() {
  const [mode, setMode] = useState("online"); // "online" or "offline"

  const categories = [
    {
      label: "Daftar Pemenang",
      driveLink: {
        online:
          "https://drive.google.com/file/d/17BoAWIj9XWkROEGd9ZxycEAHhKzrqMBt/view?usp=sharing",
        offline: "https://drive.google.com/file/d/1wHNvIyHmbbE20ngu44iTY-jbnDfo08fT/view?usp=sharing",
        SA: "https://drive.google.com/file/d/1WeH-HOxEGFj_9JaXFHycmB9wN1cQxDnV/view?usp=sharing"
      },
    }
  ];

  return (
    <>
      <Navbar />
      {/* BREADCUMB START */}
      <div className="breadcumb-low text-center">
        <h1 className="display-5">Pemenang 2024</h1>
        <p className="lead text-muted">
          Pilih kategori dan mode untuk melihat PDF pemenang
        </p>
      </div>
      {/* BREADCUMB END */}

      <div className="container py-5">
        {/* Mode Switch (Online / Offline) */}
        <div className="d-flex justify-content-center mb-4">
          <div className="btn-group" role="group" aria-label="Mode selection">
            <button
              type="button"
              className={`btn btn-lg ${
                mode === "online" ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => setMode("online")}
            >
              Online
            </button>
            <button
              type="button"
              className={`btn btn-lg ${
                mode === "offline" ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => setMode("offline")}
            >
              Offline
            </button>
            <button
              type="button"
              className={`btn btn-lg ${
                mode === "SA" ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => setMode("SA")}
            >
              Special Award
            </button>
          </div>
        </div>

        <div className="row g-4">
          {categories.map((cat) => {
            const link = cat.driveLink[mode]; // jika kosong => falsy
            return (
              <div key={cat.label} className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body d-flex flex-column align-items-center text-center">
                    <div className="mb-3 fs-1">🏆</div>
                    <h5 className="card-title fw-bold">{cat.label}</h5>
                    <p className="text-muted mb-3">
                      Daftar pemenang {cat.label} - 2024 ({mode})
                    </p>

                    {link ? (
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        aria-label={`Open ${cat.label} winners PDF (${mode})`}
                      >
                        Open
                      </a>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        disabled
                        aria-label={`${cat.label} ${mode} coming soon`}
                      >
                        Soon
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
      <Footer />
    </>
  );
}