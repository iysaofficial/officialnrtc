export const Faq = (props) => {
  return (
    <>
      <section id="faqs" className="faq-section">
        <div id="faq" className="faq container">
          <h2 class="text-center mb-3">FAQ</h2>

          <div className="row">
            <div className="faq-title text-center">
              <h2>Setelah Mendaftar</h2>
            </div>

            <div className="col-md-12">
              <div className="faq" id="accordion">
                {data.map((item, i) => (
                  <div className="card">
                    <div className="card-header" id="faqHeading-1">
                      <div className="mb-0">
                        <h5
                          className="faq-title"
                          data-bs-toggle="collapse"
                          data-bs-target={item.datatarget}
                          data-aria-expanded="true"
                          data-aria-controls="faqCollapse-1"
                        >
                          <span className="badge">{item.no}</span>
                          {item.question}
                        </h5>
                      </div>
                    </div>
                    <div
                      id={item.id}
                      class="collapse"
                      aria-labelledby="faqHeading-1"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="faq-title text-center pb-3">
              <br />
              <br />
              <h2>Selama event berlangsung</h2>
            </div>

            <div className="col-md-12">
              <div className="faq" id="accordion">
                {data2.map((item, i) => (
                  <div className="card">
                    <div className="card-header" id="faqHeading-1">
                      <div className="mb-0">
                        <h5
                          className="faq-title"
                          data-bs-toggle="collapse"
                          data-bs-target={item.datatarget}
                          data-aria-expanded="true"
                          data-aria-controls="faqCollapse-during-1"
                        >
                          <span className="badge">{item.no}</span>
                          {item.question}
                        </h5>
                      </div>
                    </div>
                    <div
                      id={item.id}
                      class="collapse"
                      aria-labelledby="faqHeading-1"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="faq-title text-center pb-3">
              <br />
              <br />
              <h2>Setelah Acara</h2>
            </div>

            <div className="col-md-12">
              <div className="faq" id="accordion">
                {data3.map((item, i) => (
                  <div className="card">
                    <div className="card-header" id="faqHeading-1">
                      <div className="mb-0">
                        <h5
                          className="faq-title"
                          data-bs-toggle="collapse"
                          data-bs-target={item.datatarget}
                          data-aria-expanded="true"
                          data-aria-controls="faqCollapse-After-2"
                        >
                          <span className="badge">{item.no}</span>
                          {item.question}
                        </h5>
                      </div>
                    </div>
                    <div
                      id={item.id}
                      class="collapse"
                      aria-labelledby="faqHeading-1"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Faq;

const data = [
  {
    no: "1",
    datatarget: "#faqCollapse-1",
    id: "faqCollapse-1",
    question: "Minsa, kapan kami akan mendapatkan LoA kami? Ke mana akan dikirim?",
    answer:
      "Setelah kami menerima pendaftaran Anda, kami akan mengirimkan email konfirmasi dalam waktu 1X24 jam, dan untuk LoA kami akan mengirimkannya ke alamat email ketua tim dalam waktu 3X24 jam setelah pendaftaran.",
  },
  {
    no: "2",
    datatarget: "#faqCollapse-2",
    id: "faqCollapse-2",
    question:
      "Minsa, saya sudah mendaftar satu minggu yang lalu, tetapi mengapa saya belum menerima LoA dan Invoice?",
    answer:
      "Coba periksa folder spam pada email ketua tim Anda, mungkin email dari tim IYSA masuk ke folder spam.",
  },
  {
    no: "3",
    datatarget: "#faqCollapse-3",
    id: "faqCollapse-3",
    question: "Di mana Anda mengunggah file kompetisi?",
    answer:
      "Tautan drive untuk mengunggah file dan tautan untuk mengunggah bukti pembayaran akan disertakan dalam faktur. Anda akan mendapatkan faktur seperti ini",
  },
  {
    no: "4",
    datatarget: "#faqCollapse-4",
    id: "faqCollapse-4",
    question:
      "Saya ingin membayar biaya pendaftaran tetapi mengapa saya tidak dapat menemukan fakturnya? dan kemana pembayarannya ditransfer?",
    answer:
      "Ayo, apakah Anda sudah membaca LoA sampai selesai? Karena kami akan mengirimkan invoice bersama LoA tim Anda, pastikan Anda sudah membaca email dari kami sampai selesai ya! Untuk pembayaran, Anda dapat melakukan transfer ke rekening yang tertera pada invoice. Pastikan Anda membayar sesuai dengan nominal yang tertera di invoice, ya!.",
  },
  {
    no: "5",
    datatarget: "#faqCollapse-5",
    id: "faqCollapse-5",
    question:
      "Minsa, saya sudah membayar biaya pendaftaran. Di mana saya bisa mengunggah bukti pembayaran?",
    answer:
      "Jika sudah melakukan pembayaran, Anda bisa mengunggah buktinya ke link yang tertera di invoice, dan pastikan Anda mengisi dan mengunggah bukti transfer dengan benar agar panitia bisa mencatatnya dengan benar pula.",
  },
  {
    no: "6",
    datatarget: "#faqCollapse-6",
    id: "faqCollapse-6",
    question: "Kapan tanda terima akan dikirimkan kepada kami?",
    answer:
      "Kami akan mengirimkan tanda terima pembayaran dalam waktu maksimal 7 hari kerja ke email ketua tim, setelah Anda mengunggah bukti pembayaran!",
  },
  {
    no: "7",
    datatarget: "#faqCollapse-7",
    id: "faqCollapse-7",
    question:
      "Minsa, satu minggu lagi untuk penjurian, kenapa saya belum menerima jadwal presentasi tim saya?",
    answer:
      "Jadwal presentasi peserta secara online akan kami kirimkan selambat-lambatnya 2 hari sebelum penjurian berlangsung ke grup whatsapp dan juga email ketua tim. Pastikan Anda rajin mengecek informasi yang kami berikan di grup whatsapp dan juga email ya!.",
  },
];

const data2 = [
  {
    no: "1",
    datatarget: "#faqCollapse-during-1",
    id: "faqCollapse-during-1",
    question: "Kapan jadwal presentasi akan diberikan oleh panitia?",
    answer:
      "Jadwal presentasi akan kami berikan paling lambat 2 hari sebelum penjurian berlangsung atau bisa juga lebih awal, dan akan kami kirimkan melalui grup WA dan juga email ketua tim.",
  },
  {
    no: "2",
    datatarget: "#faqCollapse-during-2",
    id: "faqCollapse-during-2",
    question:
      "Aplikasi apa yang digunakan untuk presentasi online? Zoom, Google Meet, atau yang lainnya?",
    answer:
      "Untuk penjurian online, kami selalu menggunakan aplikasi Zoom dan pastikan aplikasi Zoom Anda sudah diperbarui.",
  },
  {
    no: "3",
    datatarget: "#faqCollapse-during-3",
    id: "faqCollapse-during-3",
    question: "Kapan tautan zoom akan diberikan oleh panitia?",
    answer:
      "Kami akan memberikan tautan Zoom pada hari penjurian, dan kami akan mengirimkannya secara berkala ke grup sesuai dengan waktu presentasi tim Anda.",
  },
  {
    no: "4",
    datatarget: "#faqCollapse-during-4",
    id: "faqCollapse-during-4",
    question: "berapa banyak akun zoom yang dapat bergabung dan apa yang harus saya tetapkan sebagai nama saya",
    answer:
      'Anda dapat masuk ke Zoom dengan maksimal 5 akun peserta, dan semua akun Zoom harus mengikuti format nama yang telah kami sediakan, yaitu "Nomor Ruangan_Nama Ketua Tim_Nama Institusi.',
  },
  {
    no: "5",
    datatarget: "#faqCollapse-during-5",
    id: "faqCollapse-during-5",
    question: "berapa lama para peserta akan melakukan presentasi?",
    answer:
      "Anda akan diberikan waktu 15 menit untuk 1 sesi presentasi yang akan dibagi menjadi 2, yaitu 7 menit awal untuk presentasi dan 8 menit akhir untuk sesi tanya jawab dengan dewan juri.",
  },
  {
    no: "6",
    datatarget: "#faqCollapse-during-6",
    id: "faqCollapse-during-6",
    question: "Berapa banyak juri yang akan datang ke stan peserta offline?",
    answer:
      "Sama seperti penjurian online, akan ada 2 juri yang menilai setiap tim. Dan setelah dinilai kalian akan diberikan stiker sebagai tanda bahwa booth kalian telah dinilai, pastikan kalian mendapatkan 2 stiker.",
  },
  {
    no: "7",
    datatarget: "#faqCollapse-during-7",
    id: "faqCollapse-during-7",
    question: "Dapatkah kami merapikan stan kami setelah dinilai?",
    answer:
      "Anda bisa mulai merapikan booth ketika semua tim sudah selesai dinilai, jadi jika sudah selesai menilai Anda bisa mengunjungi booth peserta lain terlebih dahulu.",
  },
];

const data3 = [
  {
    no: "1",
    datatarget: "#faqCollapse-After-1",
    id: "faqCollapse-After-1",
    question: "Kapan para pemenang akan diumumkan?",
    answer:
      "Pengumuman pemenang diadakan pada hari terakhir setiap acara, Anda dapat mengecek tanggalnya pada jadwal yang tertera di Buku Panduan.",
  },
  {
    no: "2",
    datatarget: "#faqCollapse-After-2",
    id: "faqCollapse-After-2",
    question: "Di mana kita bisa melihat hasil kemenangan?",
    answer:
      "Anda dapat memeriksa hasil akhir di situs web resmi acara yang Anda ikuti.",
  },
  {
    no: "3",
    datatarget: "#faqCollapse-After-3",
    id: "faqCollapse-After-3",
    question: "Kapan sertifikat elektronik akan dikirimkan?",
    answer:
      "IYSA TIDAK mengirimkan E-Certificate kepada peserta Nasional atau Peserta Indonesia yang mengikuti event online. Peserta Nasional Online hanya akan menerima sertifikat dalam bentuk cetak/hardcopy yang nantinya akan dikirimkan bersama medali melalui ekspedisi JNE.",
  },
  {
    no: "4",
    datatarget: "#faqCollapse-After-4",
    id: "faqCollapse-After-4",
    question: "Kapan pengiriman sertifikat peserta secara online?",
    answer:
      "Sertifikat akan dikirimkan selambat-lambatnya satu bulan setelah pengumuman pemenang. Anda dapat mengecek secara berkala resi pengiriman yang kami kirimkan di grup Whatsapp apakah sertifikat Anda sudah terkirim atau belum.",
  },
  {
    no: "5",
    datatarget: "#faqCollapse-After-5",
    id: "faqCollapse-After-5",
    question: "Di mana kami bisa mendapatkan sertifikat supervisor?",
    answer:
      "Anda dapat melihat dan mengunduh sertifikat supervisor di situs web resmi acara yang Anda ikuti.",
  },
  {
    no: "6",
    datatarget: "#faqCollapse-After-6",
    id: "faqCollapse-After-6",
    question: "Bagaimana cara melakukan penggandaan medali?",
    answer:
      "Bagaimana cara melakukan penggandaan medali?.",
  },
];
