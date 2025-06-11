import React from "react";
const Organized = () => {
  return (
    <section className="event_sponser_area">
      <div className="container">
        <div className="event_sponser_inner">
          <div className="event_sponser_item">
            <div className="row Organized-by">
              <div className="col-lg-3 col-md-4">
                <h4 className="h_head sponser_title mb-5">Diselenggarakan Oleh :</h4>
              </div>
              <div className="organized-image image col-lg-9 col-md-8 text-lg-start text-md-start text-center">
                <img
                  src="./assets/img/logo/IYSAlogo.WebP"
                  className=" col-3 image-iysa"
                  alt="gallery"
                />
                {/* <img
                  src="./assets/img/logo/aktuaria.png"
                  className="ms-1 col-3 image-aktuaria"
                  alt="gallery"
                />
                <img
                  src="./assets/img/logo/vokasi.png"
                  className="ms-1 col-3 image-vokasi"
                  alt="gallery"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organized;
