"use client";

import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      message: { value: string };
    };

    const name = target.name.value;
    const email = target.email.value;
    const message = target.message.value;

    const subject = encodeURIComponent(
      `Portfolio Contact: Message from ${name}`,
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );

    window.location.href = `mailto:vasanthakumartech@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.infoSide}>
          <h2 className={`text-gradient ${styles.title}`}>Get In Touch</h2>
          <p className={styles.description}>
            I am currently open to new opportunities and freelance projects.
            Whether you have a question or just want to say hi, I will try my
            best to get back to you!
          </p>

          <div className={styles.contactDetails}>
            <div className={styles.detailItem}>
              <span className={styles.label}>Email</span>
              <a
                href="mailto:vasanthakumartech@gmail.com"
                className={styles.value}
              >
                vasanthakumartech@gmail.com
              </a>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.label}>Phone</span>
              <a href="tel:+919788145142" className={styles.value}>
                +91-9788145142
              </a>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.label}>Location</span>
              <span className={styles.value}>India</span>
            </div>
          </div>
        </div>

        <div className={styles.formSide}>
          <form
            className={`glass-panel ${styles.form}`}
            onSubmit={handleSubmit}
          >
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.inputLabel}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={styles.input}
                required
                placeholder="John Doe"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.inputLabel}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={styles.input}
                required
                placeholder="john@example.com"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.inputLabel}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className={styles.textarea}
                required
                placeholder="Your message here..."
                rows={5}
              ></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
