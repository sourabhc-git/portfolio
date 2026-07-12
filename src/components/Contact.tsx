import React from 'react';
import '../assets/styles/Contact.scss';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <div className="contact-card">
            <a href="mailto:chaudharisourabh97@gmail.com" className="contact-item">
              <EmailIcon />
              <span>chaudharisourabh97@gmail.com</span>
            </a>
            <a href="tel:+19808601155" className="contact-item">
              <PhoneIcon />
              <span>+1 (980) 860-1155</span>
            </a>
            <Button
              component="a"
              href="Sourabh_Chaudhari_Resume.pdf"
              download
              variant="contained"
              endIcon={<DownloadIcon />}
              className="resume-button"
            >
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;