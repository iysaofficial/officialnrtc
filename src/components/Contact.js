import { useEffect } from "react";
const Contact = () => {
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

      // cleanup listener
      return () => {
          form.removeEventListener("submit", handleSubmit);
      };
      }
  }, []);
  return (
    <div id="conts" class="contact">
      <div class="container">
        <div class="contact-box">
          <div class="box">
            <h1>Kontak</h1>
            <div class="form-contact">
              <form action="" method="POST" name="contact">
                <table>
                  <input type="hidden" name="Event" value="NRTC" readOnly />
                  <tr>
                    <td>
                      <input
                        type="text"
                        name="Name"
                        placeholder="Nama"
                        required
                        autocomplete="off"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <input
                        type="email"
                        name="Email"
                        placeholder="Email"
                        required
                        autocomplete="off"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <textarea
                        name="Message"
                        cols="30"
                        rows="10"
                        placeholder="Pesan"
                        required
                      ></textarea>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <button
                        type="submit"
                        value="send"
                        onclick="return confirm"
                        className="btn-contact btn btn-primary"
                      >
                        Kirim
                      </button>
                    </td>
                  </tr>
                </table>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
