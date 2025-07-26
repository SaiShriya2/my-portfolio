import React from "react";
import "./Landing.css";

export default function Landing({ fadeOut, onViewProfile }) {
  return (
    <section className={`landing-bg${fadeOut ? " fade-out" : ""}`}>
      {/* Animated floating white blobs */}
      <div className="landing-blob blob1"></div>
      <div className="landing-blob blob2"></div>
      <div className="landing-blob blob3"></div>

      <div className="landing-widget">
        <div className="widget-profile-pic">
          <img src="src\assets\profile.jpg" alt="Sai Shriya Lingala" />
        </div>
        <div className="widget-content">
          <div className="widget-role">Software Engineer</div>
          <div className="widget-name">Sai Shriya Lingala</div>
          <div className="widget-headline">
            Turning Ideas into Scalable, Low-Code Solutions with Data and Azure.
          </div>
          <button className="widget-btn" onClick={onViewProfile}>
            View Profile
          </button>
        </div>
      </div>
    </section>
  );
}
