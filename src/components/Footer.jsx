// Footer.jsx
import React from 'react';
import '../styles/Footer.css'; // optional CSS for styling

function Footer() {
  return (
    <footer className="footer">
      <p class="mt-5">© {new Date().getFullYear()} Klifford Orquillas. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
