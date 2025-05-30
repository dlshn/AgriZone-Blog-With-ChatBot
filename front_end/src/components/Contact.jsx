// src/pages/Contact.js
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
         process.env.REACT_APP_EMAILJS_SERVICE_ID,     // 🔁 Replace with your actual ID
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,    // 🔁 Replace with your actual ID
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY      // 🔁 Replace with your actual public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset(); // clear form
        },
        (error) => {
          alert("Something went wrong. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <>
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="text-success text-center mb-4">Contact Us</h1>
          <p className="fs-5 text-center">
            We'd love to hear from you! Send us your questions, feedback, or suggestions.
          </p>
          <form ref={form} onSubmit={sendEmail} className="p-4 shadow rounded bg-light">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" name="user_name" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" name="user_email" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea name="message" rows="5" className="form-control" required></textarea>
            </div>
            <button type="submit" className="btn btn-success w-100">Send</button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
