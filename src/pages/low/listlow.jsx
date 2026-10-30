import React from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

function ListLow() {
  const winners = [
    {
      year: 2026,
      color: "warning",
      link: "/list2026",
      external: true,
    },
    {
      year: 2025,
      color: "primary",
      link: "/list2025",
      external: true,
    },
    {
      year: 2024,
      color: "primary",
      link: "/list2024",
      external: false,
    },
    {
      year: 2023,
      color: "primary",
      link: "https://drive.google.com/file/d/1d-kHyOz1eHjZvxVGDBpnJSMWFlwTKbte/view?usp=sharing",
      external: false,
    },
    {
      year: 2022,
      color: "primary",
      link: "https://drive.google.com/file/d/11u-wyqTiCAHS064A20X9HXWWdO_S3MFq/view?usp=share_link",
      external: false,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="breadcumb-low text-center">
        <h1>List Pemenang</h1>
        <p>Lihat daftar pemenang NRTC dari berbagai tahun</p>
      </div>

      <div className="container py-5">
        <div className="row g-4">
          {winners.map((item) => (
            <div key={item.year} className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm text-center">
                <div
                  className={`bg-${item.color} p-5`}
                  style={{ height: "120px" }}
                >
                  <div className="text-white fs-1">🏆</div>
                </div>

                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <h5 className="card-title fw-bold fs-4 mb-3">{item.year}</h5>

                  {item.external ? (
                    <a
                      href={item.link}
                      rel="noopener noreferrer"
                      className="btn btn-primary rounded-pill px-5"
                    >
                      Open
                    </a>
                  ) : (
                    <a
                      href={item.link}
                      className="btn btn-primary rounded-pill px-5"
                    >
                      Open
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ListLow;
