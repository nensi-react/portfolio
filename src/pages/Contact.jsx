import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const SERVICE_ID = "service_27dfhkt";
const TEMPLATE_ID = "template_h1nfvkh";
const PUBLIC_KEY = "i3gG9w_I18wIJ0B4X";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    project: "Website Development",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setStatus("");
    setStatusType("");
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (loading) return;

    setLoading(true);
    setStatus("");

    try {
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name.trim(),
          from_email: form.email.trim(),
          project: form.project,
          message: form.message.trim(),
        },
        {
          publicKey: PUBLIC_KEY,
        }
      );

      console.log("EmailJS response:", response);

      setStatus(
        "Message sent successfully! Thank you for contacting me."
      );
      setStatusType("success");

      setForm({
        name: "",
        email: "",
        project: "Website Development",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);

      setStatus(
        `Email could not be sent: ${
          error?.text || error?.message || "Please check your EmailJS settings."
        }`
      );
      setStatusType("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="contact-page section">
      <div className="container">
        <p className="eyebrow">CONTACT / LET'S TALK</p>

        <h1 className="contact-heading">
          Have a good idea?
          <br />
          <span>Let's build it.</span>
        </h1>

        <div className="contact-grid">
          <div className="contact-info">
            <h2>Let's start a conversation.</h2>

            <p>
              Have a website idea, a frontend project or a question?
              Share a few details and let's discuss your requirements.
            </p>

            <div className="contact-detail">
              <span className="contact-icon">@</span>
              <div>
                <small>EMAIL</small>
                <p>nensimangroliya29@gmail.com</p>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-icon">↗</span>
              <div>
                <small>GITHUB</small>
                <a
                  href="https://github.com/nensi-react"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/nensi-react
                </a>
              </div>
            </div>

            <div className="contact-note">
              <span>✳</span>
              <p>
                Clear requirements make it easier to plan a project,
                estimate the timeline and discuss the budget.
              </p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-heading">
              <h2>Tell me about your project.</h2>
              <p>Fields marked * are required.</p>
            </div>

            <label htmlFor="name">Your name *</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              autoComplete="name"
              required
            />

            <label htmlFor="email">Email address *</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              autoComplete="email"
              required
            />

            <label htmlFor="project">What do you need?</label>
            <select
              id="project"
              name="project"
              value={form.project}
              onChange={handleChange}
            >
              <option>Website Development</option>
              <option>React Application</option>
              <option>Dashboard UI</option>
              <option>Website Redesign</option>
              <option>Other</option>
            </select>

            <label htmlFor="message">Project details *</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Describe your idea, features and goals..."
              rows={5}
              required
            />

            <button
              className="button button-dark contact-submit"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit message ↗"}
            </button>

            {status && (
              <p
                className={`form-success ${statusType}`}
                role="status"
                aria-live="polite"
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}