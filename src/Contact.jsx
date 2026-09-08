import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaClock, 
  FaUser, 
  FaPaperPlane,
  FaArrowUp 
} from 'react-icons/fa';

function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Function to send messages via EmailJS (configured using .env variables)
  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus('');

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setLoading(false);
      setStatus('Message sent successfully! ✨');

      formRef.current.reset();

      setTimeout(() => {
        setStatus('');
      }, 3000);
    })
    .catch((error) => {
      setLoading(false);
      setStatus('Failed to send message. Please try again.');

      console.error(error);

      setTimeout(() => {
        setStatus('');
      }, 3000);
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        
        {/* Main Glass Card Wrapper */}
        <div className="contact-main-card">
          
          {/* 1. Left Side Information */}
          <div className="contact-left">
            <span className="subtitle-glow">GET IN TOUCH</span>
            <h1 className="contact-title">
              Let’s Build Something Amazing <span className="gradient-text">Together!</span>
            </h1>
            <p className="contact-desc">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            {/* Info Cards Grid */}
            <div className="info-list">
              <div className="info-card">
                <div className="info-icon"><FaEnvelope /></div>
                <div className="info-text">
                  <p className="info-val">niranjanjranjan007@gmail.com</p>
                  <span className="info-lbl">Email</span>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon"><FaPhoneAlt /></div>
                <div className="info-text">
                  <p className="info-val">+91 7736203647</p>
                  <span className="info-lbl">Phone</span>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon"><FaMapMarkerAlt /></div>
                <div className="info-text">
                  <p className="info-val">Kerala, India</p>
                  <span className="info-lbl">Location</span>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon"><FaClock /></div>
                <div className="info-text">
                  <p className="info-val">Available for Freelance & Full-time</p>
                  <span className="info-lbl">Availability</span>
                </div>
              </div>
            </div>

            <p className="tagline-purple">Let's connect and create something extraordinary!</p>
          </div>

          {/* 2. Middle Form Card */}
          <div className="contact-form-wrapper">
            <div className="form-header">
              <h3>Send Me a Message</h3>
              <FaPaperPlane className="plane-icon" />
            </div>

            {/* Form Ref and onSubmit added */}
            <form ref={formRef} onSubmit={sendEmail} className="contact-form">
              <div className="form-row-2">
                <div className="input-group">
                  <FaUser className="field-icon" />
                  <input type="text" name="user_name" placeholder="Your Name" required />
                </div>
                <div className="input-group">
                  <FaEnvelope className="field-icon" />
                  <input type="email" name="user_email" placeholder="Your Email" required />
                </div>
              </div>

              <div className="input-group">
                <FaPaperPlane className="field-icon" />
                <input type="text" name="subject" placeholder="Subject" required />
              </div>

              <div className="input-group">
                <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
              </div>

              <button
                type="submit"
                className={`glow-submit-btn ${
                  status.includes('successfully')
                    ? 'status-success'
                    : status.includes('Failed')
                    ? 'status-error'
                    : ''
                }`}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="loading-spinner"></span>
                    Sending...
                  </>
                ) : status ? (
                  status
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

        {/* 3. Footer Bar */}
        <div className="footer-bar">
          <p>©️ {new Date().getFullYear()} <span className="highlight-name">NIRANJAN PP</span>. All Rights Reserved.</p>
          <p className="footer-center">AI Enthusiast</p>
          <button className="back-to-top" onClick={scrollToTop}>
            Back to Top <FaArrowUp />
          </button>
        </div>

      </div>
    </section>
  );
}

export default Contact;