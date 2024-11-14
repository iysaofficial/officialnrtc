import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <footer>
      <div className="rowFooter">
        <div className="colFooter">
          <img
            src="./assets/img/logo/NRTC PNG.WebP"
            alt="Footer Logo"
            className="logoFooter"
          ></img>
          <p className="rata-kirkan">
            Kemampuan guru untuk mengembangkan produk inovatif harus didukung
            oleh kemampuan guru untuk mempresentasikan produk tersebut di depan
            para ahli untuk mendapatkan masukan dalam pengembangan produk dan
            juga legalitas karya yang dihasilkan.
          </p>
        </div>
        <div className="colFooter">
          <h3 className="fw-bold">Informasi Tentang Kami</h3>
          <a
            href="https://goo.gl/maps/9x18coXGCmSscKec6"
            rel="noreferrer noopener"
            target="_blank"
            className="office rata-kirkan"
          >
            Jl. Kemang, Pasir Putih, Kecamatan. Sawangan, Kota Depok, Jawa Barat
            16519
          </a>
          <br></br>
          <br></br>
          <a
            href="mailto:youngscientist.iysa@gmail.com"
            rel="noreferrer noopener"
            target="_blank"
            className="office "
          >
            youngscientist.iysa@gmail.com
          </a>
          <br></br>
          <br></br>
          <a
            href="https://wa.me/+6281770914129"
            rel="noreferrer noopener"
            target="_blank"
            className="office "
            >
            +62 817 7091 4129
          </a>
            <br></br>
          <a
            href="https://wa.me/+6288213248890"
            rel='noreferrer noopener'
            target="_blank"
            className="office "
          >
            +62 882 1324 8890
          </a>
        </div>
        <div className="colFooter">
          <h3 className="fw-bold">Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#faqs">FAQ</a>
            </li>
            {/* <li>
              <a href="/NewsletterPage">Gallery</a>
            </li> */}
            <li>
              <a href="/GalleryPhoto">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="mx-auto" />
      <p className="copyright">
        Copyright &copy; 2023, Developed by IYSA IT Division
      </p>
    </footer>
  );
};
export default Footer;
