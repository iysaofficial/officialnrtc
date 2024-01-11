const Category = () => {
  return (
    <section className="expert-team min-vh-100 mb-5">
      <div className="pem container-lg">
        <h1 className="text-center row-cols-sm-2">Our Categories</h1>
        <h1 className="garis-bawah"></h1>
        <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3">
          <div className="col text-center mx-auto mx-auto">
            <img
              src="./assets/img/logo/sus.WebP"
              className="gallery-item "
              alt="gallery"
            />
            <h5 className="text-center">
              Sustainability Development
            </h5>
          </div>
          <div className="col text-center mx-auto">
            <img
              src="./assets/img/logo/life.WebP"
              className="gallery-item mt-4"
              alt="gallery"
            />
            <h5 className="text-center mt-5">Life Science</h5>
          </div>
          <div className="col text-center mx-auto">
            <img
              src="./assets/img/logo/eng.WebP"
              className="gallery-item"
              alt="gallery"
            />
            <h5 className="text-center">Engineering</h5>
          </div>
          <div className="col text-center mx-auto">
            <img
              src="./assets/img/logo/ed.png"
              className="gallery-item"
              alt="gallery"
            />
            <h5 className="text-center">Education</h5>
          </div>
          <div className="col text-center mx-auto">
            <img
              src="./assets/img/logo/en.WebP"
              className="gallery-item mt-4"
              alt="gallery"
            />
            <h5 className="text-center mt-5">Environmental</h5>
          </div>
          <div className="col text-center mx-auto">
            <img
              src="./assets/img/logo/tek.WebP"
              className="gallery-item"
              alt="gallery"
            />
            <h5 className="text-center mt-4">Technology</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
