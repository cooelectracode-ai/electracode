import React from 'react';

export default function Footer() {
  return (
    <footer>
        <div className="footer-content">
            <div className="footer-section">
                <h3>ElectraCode</h3>
                <p>Empowering electronics engineering students with industry-focused learning and real-world skills.</p>
            </div>
            <div className="footer-section">
                <h3>Learn</h3>
                <ul>
                    <li>VLSI Design</li>
                    <li>Embedded Systems</li>
                    <li>HDL Programming</li>
                    <li>Digital Design</li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Company</h3>
                <ul>
                    <li><a href="/about">About Us</a></li>
                    <li>Careers</li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Follow Us</h3>
                <ul>
                    <li><a href="https://www.linkedin.com/company/electracode-private-limited/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="https://www.instagram.com/electra_code?igsh=ZWh0NzQ0M3pmbXQy" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                </ul>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; 2026 ElectraCode. All rights reserved.</p>
        </div>
    </footer>
  );
}
