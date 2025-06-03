import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Something went wrong. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <div className="contact-header">
          <h1 className="contact-title text-success">Contact Us</h1>
          <p className="contact-subtitle">
            Send us your questions, feedback, or suggestions.
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label className="form-label">Name</label>
            <input 
              type="text" 
              name="user_name" 
              className="form-control" 
              required 
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Email</label>
            <input 
              type="email" 
              name="user_email" 
              className="form-control" 
              required 
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea 
              name="message" 
              rows="5" 
              className="form-control" 
              required
            ></textarea>
          </div>
          
          <button type="submit" className="submit-btn bg-success">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;