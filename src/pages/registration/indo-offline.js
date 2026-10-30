import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import "../../css/registration.css";

function IndonesiaOffline() {
  const [selectedMaxNamaLengkap, setselectedMaxNamaLengkap] = useState("");
  const maxNameChars = 180;
  const [selectedMaxProject, setselectedMaxProject] = useState("");
  const [selectedNamaSekolah, setselectedNamaSekolah] = useState("");
  const maxSchoolChars = 500;
  const maxProjectChars = 160;
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryPrice, setCategoryPrice] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [canClick, setCanClick] = useState(false);
  const router = useNavigate();

  const handleInputNameChange = (e) => {
    const { value } = e.target;
    if (value.length <= maxNameChars) {
      setselectedMaxNamaLengkap(value);
    }
  };

  const handleInputNameSchoolChange = (e) => {
    const { value } = e.target;
    if (value.length <= maxSchoolChars) {
      setselectedNamaSekolah(value);
    }
  };

  const handleInputProjectChange = (e) => {
    const { value } = e.target;
    if (value.length <= maxProjectChars) {
      setselectedMaxProject(value);
    }
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);

    switch (value) {
      case "National Research Teacher Competition - Offline Competition":
        setCategoryPrice("Rp. 3.150.000");
        break;
      case "National Research Teacher Competition - Offline Competition + Excursion":
        setCategoryPrice("");
        break;
      default:
        setCategoryPrice("");
        break;
    }
  };

  useEffect(() => {
    const termsAccepted = sessionStorage.getItem("termsAccepted");
    if (!termsAccepted) {
      alert("Anda harus menyetujui Syarat & Ketentuan terlebih dahulu.");
      router("/homeindo");
    }
  }, [router]);

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxRrYIEd8c9u3yYEjW2rNsD1TYXnXWYH618DkY0uVwcXpbnuYqj9aigHGn_XKMSTObp/exec";

  useEffect(() => {
    const form = document.forms["regist-form"];

    if (form) {
      const handleSubmit = async (e) => {
        e.preventDefault();
        setShowModal(true);
        setCanClick(false);
        setCountdown(5);

        let count = 5;
        const interval = setInterval(() => {
          count -= 1;
          setCountdown(count);

          if (count <= 1) {
            clearInterval(interval);
            setCanClick(true);
          }
        }, 1000);
      };

      form.addEventListener("submit", handleSubmit);
      return () => {
        form.removeEventListener("submit", handleSubmit);
      };
    }
  }, []);

  const handleConfirmSubmit = async () => {
    setShowModal(false);
    const form = document.forms["regist-form"];

    if (!form) return;

    setIsLoading(true);
    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: new FormData(form),
      });

      if (response.ok) {
        setStatusMessage("Data berhasil dikirim!");

        form.reset();
        setTimeout(() => {
          router(
            `/thankyou?namaLengkap=${encodeURIComponent(
              selectedMaxNamaLengkap
            )}&projectTitle=${encodeURIComponent(
              selectedMaxProject
            )}&category=${encodeURIComponent(
              selectedCategory
            )}&namasekolah=${encodeURIComponent(selectedNamaSekolah)}`
          );
        }, 1000);
      } else {
        setStatusMessage("Terjadi kesalahan saat mengirim data.");
      }
    } catch (error) {
      setStatusMessage("Terjadi kesalahan saat mengirim data.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <section className="registration-section">
        <div className="container">
          <div className="content">
            <h1 className="sub">FORMULIR PENDAFTARAN</h1>
            <span className="garis-bawah"></span>
            <br />
            <br />
            <h4>
              HALLO PESERTA NRTC 2026, Mohon perhatikan informasi berikut ini
              sebelum mengisi formulir pendaftaran :
            </h4>
            <br />
            <p>
              1. Mohon mengisi data yang diperlukan dengan benar dan memastikan
              tidak ada kesalahan penulisan. Pastikan juga bahwa data yang
              dikirim sudah final dan tidak mengalami perubahan.
            </p>
            <p>
              2. Setelah memastikan data sudah benar, Anda dapat mengklik tombol
              <span className="fw-bold"> &quot;KIRIM&quot;</span> cukup sekali
              saja. Jika data telah berhasil dikirimkan, Anda akan dipindahkan
              ke halaman lain.
            </p>
            <p>
              3. Akan ada email informasi bahwa pendaftaran telah diterima yang
              dikirimkan ke alamat email ketua tim, dan berkas akan divalidasi
              oleh tim kami. Mohon bersabar dan tunggu maksimal 3 hari setelah
              waktu pendaftaran, Letter of Acceptance (LOA) akan dikirimkan ke
              alamat email team leader.
            </p>
            <br />
            <br />
            {showModal && (
              <div className="modal-overlay-submit">
                <div className="modal-submit text-lg-center text-md-center">
                  <h2 className="text-center">⚠️PERHATIAN!</h2>
                  <p>
                    Data yang sudah dikirim tidak dapat diubah kembali. Panitia
                    akan menggunakan data terakhir yang masuk untuk pencetakan
                    sertifikat.
                    <br />
                    <b>PASTIKAN SELURUH DATA SUDAH BENAR!</b>
                    <br />
                    <b>
                      JANGAN MENDAFTAR ULANG DENGAN DATA YANG SAMA BERKALI-KALI!
                    </b>
                  </p>
                  <div className="modal-buttons-submit">
                    <button onClick={() => setShowModal(false)}>Kembali</button>
                    <button
                      onClick={handleConfirmSubmit}
                      disabled={!canClick || isLoading}
                    >
                      {isLoading
                        ? "Mengirim..."
                        : canClick
                          ? "Lanjutkan"
                          : `Tunggu... ${countdown}`}
                    </button>
                  </div>
                </div>
              </div>
            )}

            <form name="regist-form">
              {/* BIODATA START */}
              <h1 className="text-sm md:text-lg lg:text-5xl">BIODATA</h1>
              <span className="garis-bawah"></span>
              <div className="user-details">
                <div className="input-box">
                  <label
                    htmlFor="CATEGORY_PARTICIPANT"
                    className="form-label"
                  >
                    Kategori Peserta
                  </label>
                  <input
                    type="text"
                    id="CATEGORY_PARTICIPANT"
                    name="CATEGORY_PARTICIPANT"
                    className="form-control"
                    placeholder="Pilih Kategori Peserta"
                    value="PESERTA INDONESIA"
                    readOnly
                  />
                </div>
                <div className="input-box">
                  <label
                    htmlFor="CATEGORY_COMPETITION"
                    className="form-label"
                  >
                    Kategori Kompetisi
                  </label>
                  <select
                    id="CATEGORY_COMPETITION"
                    name="CATEGORY_COMPETITION"
                    className="form-control"
                    onChange={handleCategoryChange}
                    required
                  >
                    <option value="">--Pilih Kategori Kompetisi--</option>
                    <option value="National Research Teacher Competition - Offline Competition">
                      Kategori Luring
                    </option>
                    <option value="National Research Teacher Competition - Offline Competition + Excursion">
                      Kategori Luring + Excursion
                    </option>
                  </select>
                </div>
              </div>

              <div className="user-details">
                <div className="input-box">
                  <label htmlFor="NAMA_LENGKAP" className="form-label">
                    Nama Ketua &amp; Anggota Tim
                  </label>
                  <label>
                    <p>
                      Masukan nama ketua dan anggota tim dengan nama ketua tim
                      diawal, dengan format seperti berikut :
                    </p>
                    <p>Note : maksimal 2 anggota + 1 ketua tim</p>
                    <h6>Kamal Putra situmorang</h6>
                    <h6>prasetya Adi zaidan</h6>
                    <h6>Irsyad Zaidan Kamil</h6>
                  </label>
                  <textarea
                    id="NAMA_LENGKAP"
                    name="NAMA_LENGKAP"
                    className="form-control"
                    placeholder="Masukan Nama Ketua & Anggota"
                    required
                    value={selectedMaxNamaLengkap}
                    onChange={handleInputNameChange}
                  ></textarea>
                  <p>
                    {selectedMaxNamaLengkap.length} / {maxNameChars} karakter
                  </p>
                </div>
                <div className="input-box">
                  <label htmlFor="LEADER_WHATSAPP" className="form-label">
                    Nomor WhatsApp Ketua Tim
                    <p>
                      Harap tulis dengan kode telepon, contoh : (kode negara)
                      (nomor telepon) +62 81770914xxxx
                    </p>
                    <p>
                      Notes : Dimohon untuk mengisi nomor ketua tim dengan
                      benar, untuk dimasukan kedalam group
                    </p>
                  </label>
                  <input
                    type="number"
                    id="LEADER_WHATSAPP"
                    name="LEADER_WHATSAPP"
                    className="form-control"
                    placeholder="Masukan Nomor WhatsApp Ketua Tim"
                    required
                  />
                </div>
                <div className="input-box">
                  <label htmlFor="LEADER_EMAIL" className="form-label">
                    Alamat Email Ketua Tim
                  </label>
                  <label>
                    <p>
                      Notes : Dimohon untuk mengisi email dengan benar,
                      pengiriman LOA akan dikirim melalui email address ketua
                      tim yang di isi.
                    </p>
                  </label>
                  <input
                    type="email"
                    id="LEADER_EMAIL"
                    name="LEADER_EMAIL"
                    className="form-control"
                    placeholder="Masukan Alamat Email Ketua Tim"
                    required
                  />
                </div>
              </div>
              {/* BIODATA END */}

              {/* DATA SEKOLAH START */}
              <h1 className="text-sm md:text-lg lg:text-5xl">DATA SEKOLAH</h1>
              <span className="garis-bawah"></span>
              <div className="user-details">
                <div className="input-box">
                  <label htmlFor="NAMA_SEKOLAH" className="form-label">
                    Nama Sekolah/Universitas
                  </label>
                  <label>
                    <p>
                      Notes : Masukan nama sekolah dengan format sesuai urutan
                      nama ketua dan anggota tim asal sekolah masing - masing,
                      dengan format seperti berikut :
                    </p>
                    <h6>SMA CERIA</h6>
                    <h6>HAPPY HIGH SCHOOL</h6>
                    <h6>SMA TADIKA MESRA</h6>
                  </label>
                  <textarea
                    id="NAMA_SEKOLAH"
                    name="NAMA_SEKOLAH"
                    className="form-control"
                    placeholder="Masukan Nama Sekolah Ketua & Anggota Tim"
                    required
                    value={selectedNamaSekolah}
                    onChange={handleInputNameSchoolChange}
                  ></textarea>
                  <p>
                    {selectedNamaSekolah.length} / {maxSchoolChars} karakter
                  </p>
                </div>
                <div className="input-box">
                  <label htmlFor="PROVINCE" className="form-label">
                    Provinsi
                  </label>
                  <input
                    type="text"
                    id="PROVINCE"
                    name="PROVINCE"
                    className="form-control"
                    placeholder="Masukan Provinsi Anda"
                    required
                  />
                </div>
              </div>
              {/* DATA SEKOLAH END */}

              {/* DETAIL PROJECT START */}
              <div>
                <h1 className="text-sm md:text-lg lg:text-5xl">
                  DETAIL PROYEK
                </h1>
                <span className="garis-bawah"></span>
              </div>
              <div className="user-details">
                <div className="input-box">
                  <label htmlFor="PROJECT_TITLE" className="form-label">
                    Judul Proyek
                    <p>
                      Notes : Dimohon untuk mengisi data judul dengan BENAR,
                      data yang masuk sudah tidak bisa ada perubahan!
                    </p>
                  </label>
                  <textarea
                    id="PROJECT_TITLE"
                    name="PROJECT_TITLE"
                    className="form-control"
                    placeholder="Masukkan Judul Proyek Anda"
                    required
                    value={selectedMaxProject}
                    onChange={handleInputProjectChange}
                  ></textarea>
                  <p>
                    {selectedMaxProject.length} / {maxProjectChars} karakter
                  </p>
                </div>

                <div className="input-box">
                  <label htmlFor="CATEGORIES" className="form-label">
                    Kategori
                  </label>
                  <select
                    id="CATEGORIES"
                    name="CATEGORIES"
                    className="form-control"
                    required
                  >
                    <option value="">--Pilih Kategori--</option>
                    <option value="Sustainability Development">
                      Sustainability Development
                    </option>
                    <option value="Life Sciences">Life Sciences</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Education">Education</option>
                    <option value="Environmental">Environmental</option>
                    <option value="Technology">Technology</option>
                  </select>
                </div>

                <div className="input-box">
                  <label htmlFor="YES_NO" className="form-label">
                    Apakah judul proyek pernah berpartisipasi dalam kompetisi
                    penemuan dan inovasi sebelumnya?
                  </label>
                  <select
                    id="YES_NO"
                    name="YES_NO"
                    className="form-control"
                    required
                  >
                    <option value="">--Pilih--</option>
                    <option value="Yes">Ya</option>
                    <option value="No">Tidak</option>
                  </select>
                </div>

                <div className="input-box">
                  <label
                    htmlFor="JUDUL_PERNAH_BERPATISIPASI"
                    className="form-label"
                  >
                    Jika judul proyek pernah mengikuti kompetisi invensi dan
                    inovasi lainnya, mohon tuliskan nama kompetisinya
                  </label>
                  <textarea
                    id="JUDUL_PERNAH_BERPATISIPASI"
                    name="JUDUL_PERNAH_BERPATISIPASI"
                    className="form-control"
                    placeholder="Masukan Nama Kompetisinya"
                  ></textarea>
                  <div className="mt-5" id="form_alerts"></div>
                </div>

                <div className="input-box invisible">
                  <label htmlFor="CATEGORY_PRICE" className="form-label">
                    Registration Price
                  </label>
                  <input
                    type="text"
                    id="CATEGORY_PRICE"
                    name="CATEGORY_PRICE"
                    className="form-control"
                    value={categoryPrice}
                    readOnly
                    placeholder="Harga akan muncul berdasarkan kategori yang dipilih"
                  />
                </div>
              </div>
              {/* DETAIL PROJECT END */}

              {/* GENERAL INFORMATION START */}
              <div>
                <h1 className="text-sm md:text-lg lg:text-5xl">
                  INFORMASI UMUM
                </h1>
                <span className="garis-bawah"></span>
              </div>
              <div className="user-details">
                <div className="input-box">
                  <label htmlFor="COMPLETE_ADDRESS" className="form-label">
                    Alamat Lengkap
                  </label>
                  <label>
                    <p>
                      Mohon tuliskan alamat lengkap (Nama Jalan, Nomor Rumah,
                      RT&amp;RW, Kecamatan, Kabupaten, Kota, Provinsi, Kode Pos)
                    </p>
                  </label>
                  <textarea
                    id="COMPLETE_ADDRESS"
                    name="COMPLETE_ADDRESS"
                    className="form-control"
                    placeholder="Masukkan Alamat Lengkap Anda"
                    required
                  ></textarea>
                </div>
                <div className="input-box">
                  <label htmlFor="INFORMATION_RESOURCES" className="form-label">
                    Sumber Informasi Kompetisi NRTC 2026
                  </label>
                  <select
                    id="INFORMATION_RESOURCES"
                    name="INFORMATION_RESOURCES"
                    className="form-control"
                    required
                  >
                    <option value="">--Pilih Sumber Informasi--</option>
                    <option value="NRTC Website">NRTC Website</option>
                    <option value="IYSA Instagram">IYSA Instagram</option>
                    <option value="NRTC Instagram">NRTC Instagram</option>
                    <option value="Supervisor/School">Supervisor/School</option>
                    <option value="IYSA Facebook">IYSA Facebook</option>
                    <option value="IYSA Linkedin">IYSA Linkedin</option>
                    <option value="IYSA Website">IYSA Website</option>
                    <option value="IYSA Email">IYSA Email</option>
                    <option value="NRTC Email">NRTC Email</option>
                    <option value="Acara Sebelumnya">Acara Sebelumnya</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>
                <div className="input-box">
                  <label htmlFor="FILE" className="form-label">
                    Jika Anda mendapatkan pendaftaran gratis dari acara
                    sebelumnya atau kegiatan kunjungan sekolah sebelumnya, harap
                    lampirkan bukti dokumentasi
                  </label>
                  <input
                    type="url"
                    id="FILE"
                    name="FILE"
                    className="form-control"
                    placeholder="Upload Link File Drive"
                  />
                </div>
              </div>
              {/* GENERAL INFORMATION END */}

              <div className="button">
                <input type="submit" value="SUBMIT" />
              </div>
            </form>

            {isLoading && (
              <div className="overlay-loader">
                <div className="loader"></div>
                <div>
                  {statusMessage && (
                    <p className="status-message">{statusMessage}</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default IndonesiaOffline;
