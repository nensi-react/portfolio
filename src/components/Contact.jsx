import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ArrowUpRight,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";

import "./Contact.css";

const SERVICE_ID = "service_27dfhkt";
const TEMPLATE_ID = "template_h1nfvkh";
const PUBLIC_KEY = "i3gG9w_I18wIJ0B4X";

export default function Contact() {
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (loading) return;

    setLoading(true);
    setStatus("");
    setStatusType("");

    console.log("Contact form submitted");

    try {
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.from_name.trim(),
          from_email: form.from_email.trim(),
          message: form.message.trim(),
        },
        {
          publicKey: PUBLIC_KEY,
        }
      );

      console.log("EmailJS response:", response);

      setStatus(
        "Thank you! Your message has been sent successfully. I'll get back to you soon."
      );
      setStatusType("success");

      setForm({
        from_name: "",
        from_email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);

      setStatus(
        error?.text
          ? `Unable to send message: ${error.text}`
          : "Sorry, your message could not be sent. Please try again."
      );

      setStatusType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <p style={{ color: "red" }}>
        NEW CONTACT COMPONENT
      </p>

      <div className="container contact-grid">
        <div className="contact-copy">
          <span className="eyebrow">GET IN TOUCH</span>

          <h2 className="section-heading">
            Let's Build Something <span>Great</span>
          </h2>

          <p className="section-description">
            Have a website idea or a project in mind?
            Send me a message and let's discuss what you need.
          </p>

          <a
            className="btn btn-primary"
            href="#contact-form"
          >
            Send Message <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="contact-form-card" id="contact-form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="from_name">Your Name</label>
            <input
              id="from_name"
              type="text"
              name="from_name"
              placeholder="Enter your name"
              value={form.from_name}
              onChange={handleChange}
              autoComplete="name"
              required
            />

            <label htmlFor="from_email">Your Email</label>
            <input
              id="from_email"
              type="email"
              name="from_email"
              placeholder="Enter your email"
              value={form.from_email}
              onChange={handleChange}
              autoComplete="email"
              required
            />

            <label htmlFor="message">
              Project Details / Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell me about your project..."
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
            />

            <button
              className="btn btn-primary contact-submit"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
              <ArrowUpRight size={16} />
            </button>

            {status && (
              <p
                className={`contact-status ${statusType}`}
                role="status"
                aria-live="polite"
              >
                {status}
              </p>
            )}
          </form>

          <div className="contact-links">
            <a
              href="https://github.com/nensi-react"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>

            <a href="mailto:nensimangroliya29@gmail.com">
              <Mail size={18} />
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
