import React from "react";
import { useLocation, Link } from "react-router-dom";
import "../../css/registration.css";

function Thankyou() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const fullName = searchParams.get("namaLengkap") || "No data available";
  const projectTitle = searchParams.get("projectTitle") || "No data available";
  const category = searchParams.get("category") || "No data available";
  const schoolName = searchParams.get("namasekolah") || "No data available";

  return (
    <section className="thankyou">
      <div>
        <h1>Terima Kasih telah mendaftar!</h1>
        <p>
          Kami menghargai partisipasi Anda dan menantikan keterlibatan Anda.
        </p>

        <table className="thankyou-table">
          <tbody>
            <tr>
              <td>
                <strong>Anggota Tim</strong>
              </td>
              <td>{fullName}</td>
            </tr>
            <tr>
              <td>
                <strong>Nama Sekolah</strong>
              </td>
              <td>{schoolName}</td>
            </tr>
            <tr>
              <td>
                <strong>Judul Proyek</strong>
              </td>
              <td>{projectTitle}</td>
            </tr>
            <tr>
              <td>
                <strong>Kategori Kompetisi</strong>
              </td>
              <td>{category}</td>
            </tr>
          </tbody>
        </table>

        <p>
          <strong>
            *Jika data muncul, tangkap layar halaman ini sebagai bukti pendaftaran berhasil
          </strong>
        </p>
        <Link to="/homeindo" className="btn btn-action">
          Kembali ke Menu Pendaftaran
        </Link>
      </div>
    </section>
  );
}

export default Thankyou;
