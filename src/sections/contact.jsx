import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const fromRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setfrom] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = ({ target: { name, value } }) => {
    setfrom({ ...form, [name]: value });
  };

  //   service_icc2ofp

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    try {
        await emailjs.send("service_icc2ofp", "template_l5kpy2h",{
            from_name: form.name,
            to_name: "Taha Lokhandwala",
            from_email: form.email,
            to_email: "thewebcrafts3@gmail.com",
            message: form.message
        },"MIkvi38GgyJT3jav7"
    );
        setLoading(false);
        alert("Thank you, Your message has been sent.");
        setfrom({
            name: "",
            email: "",
            message: "",
        })
    } catch (error) {
        setLoading(false);
        console.log(error);
        alert("Something went wrong, please try again.");
    }
    
  };
  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.avif"
          alt="terminal background"
          className="absolute insei-o min-h-screen"
        />
        <div className="contact-container">
          <h3 className="head-text">Contact Me</h3>
          <p className="text-lg text-white-600 mt-3">
            whether you're lookking to build a new website or have an idea for a
            project, improve your existing platfrom, or bring a unique project
            to life, I'm here to help.
          </p>
          <form
            ref={fromRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={form.name}
                className="field-input"
                placeholder="John Doe"
                required
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={form.email}
                className="field-input"
                placeholder="johndoe@gmail"
                required
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Your Message</span>
              <textarea
                name="message"
                onChange={handleChange}
                value={form.message}
                className="field-input"
                placeholder="Hi, Im intrested in ..."
                required={5}
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
