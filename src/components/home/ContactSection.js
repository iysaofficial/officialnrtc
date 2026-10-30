import React, { useEffect } from "react";

const ContactSection = () => {
  useEffect(() => {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzdgUOy_s6zjJQTgqXQ7GX3H1_w6TvWq1hsBZgH0mSREWt3qXCKA34-qo74-jfDVbHE/exec";

    const form = document.forms.namedItem("contact");

    if (form) {
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await fetch(scriptURL, {
            method: "POST",
            body: new FormData(form),
          });
          alert("Message sent successfully!");
          form.reset();
        } catch (error) {
          console.error("Error:", error);
          alert("Failed to send Message.");
        }
      };

      form.addEventListener("submit", handleSubmit);

      return () => {
        form.removeEventListener("submit", handleSubmit);
      };
    }
  }, []);

  return (
    <div id="conts" className="contact">
      <div className="container">
        <div className="contact-box">
          <div className="box">
            <h1>Kontak</h1>
            <div className="form-contact">
              <form action="" method="POST" name="contact">
                <input type="hidden" name="Event" value="NRTC" readOnly />
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <input
                          type="text"
                          name="Name"
                          placeholder="Nama"
                          required
                          autoComplete="off"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        <input
                          type="email"
                          name="Email"
                          placeholder="Email"
                          required
                          autoComplete="off"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        <textarea
                          name="Message"
                          cols={30}
                          rows={10}
                          placeholder="Pesan"
                          required
                        ></textarea>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        <button
                          type="submit"
                          value="send"
                          className="btn-contact btn btn-primary"
                        >
                          Kirim
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

