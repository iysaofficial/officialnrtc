const Video = () => {
  return (
    <>
      <section className="after-event-section" id="after-event">
        <div className="after-event-container">
          <div className="after-event-heading">
            <h1 className="section-header text-black">After Movie NRTC 2026</h1>
          </div>
          <div className="after-event-row">
            <div className="tes-vidio">
              <iframe
                className="mt-5"
                width="100%"
                height="415"
                src="https://www.youtube.com/embed/myaDGUzUt6s?si=rrJ93FBls7pKXz7V"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            <div className="tes-p">
              <br />
              <br />
              <p>
                Empat kompetisi bergengsi yang diselenggarakan oleh IYSA bekerja
                sama dengan Fakultas Matematika dan Ilmu Pengetahuan Alam
                Universitas Indonesia, yaitu NSIF (National Science and
                Invention Fair), ISIF (International Science and Invention
                Fair), NRTC (National Research Teacher Competition), dan IRTC
                (International Research Teacher Competition) kembali sukses
                dilaksanakan pada tahun 2026 ini.
              </p>
              <p>
                Tahun ini merupakan penyelenggaraan tahun ke-2 untuk NSIF, tahun
                ke-7 untuk ISIF, serta tahun ke-5 untuk NRTC dan IRTC.
                Antusiasme peserta terus meningkat, dengan total 774 tim
                berpartisipasi dalam kompetisi online maupun offline.
              </p>
              <br />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Video;
