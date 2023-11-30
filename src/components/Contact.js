const Contact = () => {
  return (
    <div id="conts" class="contact">
      <div class="container">
        <div class="contact-box">
          <div class="box">
            <h1>Contact Us</h1>
            <div class="form-contact">
              <form action="https://formspree.io/f/xdorzyyd" method="POST">
                <table>
                  <tr>
                    <td>
                      <input
                        type="text"
                        name="First Name"
                        placeholder="First Name"
                        required
                        autocomplete="off"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="Lash Name"
                        placeholder="Last Name"
                        autocomplete="off"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        autocomplete="off"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <textarea
                        name="text"
                        cols="30"
                        rows="10"
                        placeholder="Message"
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
                        Send
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
