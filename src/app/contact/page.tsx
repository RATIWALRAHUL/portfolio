"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  AtSign,
  Send,
  Globe,
  MessageCircle,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import styles from "./Contact.module.css";

const socials = [
  { icon: AtSign, href: "mailto:geetamanish9591@gmail.com", label: "Email" },
  { icon: Send, href: "https://twitter.com", label: "Twitter / X" },
  { icon: Globe, href: "https://behance.net", label: "Behance" },
  { icon: MessageCircle, href: "https://dribbble.com", label: "Dribbble" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address (e.g. name@domain.com).";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter a brief message describing your project.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <main id="main-content" className={styles.contactPage}>
      {/* Left Column (Light Panel) */}
      <section className={styles.leftCol} aria-labelledby="contact-heading">
        <div className={styles.leftHeader}>
          <p className="eyebrow">Get in touch</p>
          <h1 id="contact-heading" className={styles.headline}>Let&apos;s connect</h1>
          <p className={styles.subtext}>
            Have an exciting project, a new venture, or an opportunity for collaboration?
            Fill out the form below or reach out directly.
          </p>
        </div>

        {/* Screen Reader Live Region for Form Status */}
        <div className="srOnly" aria-live="polite">
          {isSubmitted
            ? "Your message has been sent successfully."
            : Object.keys(errors).length > 0
            ? `There are ${Object.keys(errors).length} errors in the contact form.`
            : ""}
        </div>

        {isSubmitted ? (
          <div className={styles.successCard} role="status">
            <h2 className={styles.successHeading}>
              <CheckCircle2 size={24} aria-hidden="true" /> Message Sent!
            </h2>
            <p className={styles.successText}>
              Thank you, <strong>{formData.name}</strong>. Your note has landed
              safely in my inbox. I will get back to you shortly.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className={styles.resetBtn}
            >
              Send another message →
            </button>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.inputGroup}>
              <label htmlFor="contact-name" className={styles.inputLabel}>
                Your Name <span aria-hidden="true">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma"
                className={styles.inputUnderline}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <span id="name-error" className={styles.errorText} role="alert">
                  {errors.name}
                </span>
              )}
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="contact-email" className={styles.inputLabel}>
                Your Email <span aria-hidden="true">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="rahul@example.com"
                className={styles.inputUnderline}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <span id="email-error" className={styles.errorText} role="alert">
                  {errors.email}
                </span>
              )}
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="contact-message" className={styles.inputLabel}>
                Your Message <span aria-hidden="true">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your product requirements, timeline, or idea..."
                className={`${styles.inputUnderline} ${styles.textareaUnderline}`}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <span id="message-error" className={styles.errorText} role="alert">
                  {errors.message}
                </span>
              )}
            </div>

            <button type="submit" className={styles.submitBtn}>
              Send Message <ArrowUpRight size={18} aria-hidden="true" />
            </button>
          </form>
        )}

        {/* Direct contact links & socials */}
        <div className={styles.directLinks} aria-label="Direct contact channels">
          <a
            href="mailto:geetamanish9591@gmail.com"
            className={styles.contactRow}
            aria-label="Send email to geetamanish9591@gmail.com"
          >
            <Mail size={16} color="var(--accent-orange)" aria-hidden="true" />
            <span>geetamanish9591@gmail.com</span>
          </a>
          <a
            href="tel:+916367473542"
            className={styles.contactRow}
            aria-label="Call +91-6367473542"
          >
            <Phone size={16} color="var(--accent-orange)" aria-hidden="true" />
            <span>+91-6367473542</span>
          </a>
          <div className={styles.contactRow}>
            <MapPin size={16} color="var(--accent-orange)" aria-hidden="true" />
            <span>Jaipur, India</span>
          </div>

          <div className={styles.socialRow} aria-label="Social media profiles">
            {socials.map(({ icon: Icon, href, label }, i) => (
              <a
                key={i}
                href={href}
                className={styles.socialBtn}
                aria-label={`Geeta Bisht on ${label}`}
                target="_blank"
                rel="noreferrer"
              >
                <Icon size={16} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Right Column (Dark Panel #0d0d0d) */}
      <section className={styles.rightCol} aria-label="Collaboration overview">
        <div className={styles.rightContent}>
          <h2 className={styles.rightHeadline}>
            Let&apos;s work <br /> together
          </h2>

          <div className={styles.detailsList}>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Direct Inquiries &amp; Projects</span>
              <a
                href="mailto:geetamanish9591@gmail.com"
                className={styles.detailValue}
                aria-label="Email inquiries to geetamanish9591@gmail.com"
              >
                geetamanish9591@gmail.com
              </a>
            </div>

            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Phone / WhatsApp</span>
              <a
                href="tel:+916367473542"
                className={styles.detailValue}
                aria-label="Direct telephone line +91-6367473542"
              >
                +91-6367473542
              </a>
            </div>

            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Location</span>
              <span className={styles.detailValue}>
                Jaipur, Rajasthan, India (IST / UTC +05:30)
              </span>
            </div>
          </div>
        </div>

        {/* Giant Bleeding Outlined Wordmark */}
        <div className={styles.giantWordmarkWrap} aria-hidden="true">
          <span className={styles.giantWordmark}>GEETA BISHT</span>
        </div>
      </section>
    </main>
  );
}
