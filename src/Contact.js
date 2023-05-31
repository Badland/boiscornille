import React from "react";
import { css } from "emotion";

function Contact() {
  return (
    <div className={contact}>
      <h1>Contact Us</h1>
      <p>Phone: 555-555-5555</p>
      <p>Email: info@mywebsite.com</p>
    </div>
  );
}

const contact = css`
  padding: 1.5rem;
`;

export default Contact;
