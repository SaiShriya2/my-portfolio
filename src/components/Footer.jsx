import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div>
          © {new Date().getFullYear()} Sai Shriya Lingala. All rights reserved.
        </div>
        <div>
          <a href="mailto:saishriyalingala@gmail.com">Email</a>
          <a href="https://github.com/SaiShriya2" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
