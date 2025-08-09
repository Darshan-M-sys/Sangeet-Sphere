import React from "react";
import "./about.css";

export default function Service() {
  return (
    <div className="service-page">
      <h1>Our Services</h1>
      <p>
        At <strong>SangeetSphere</strong>, we offer an immersive music experience combining the best of
        Kannada, Hindi, and Telugu songs. Our platform is designed to bring music lovers closer to the
        sounds they cherish.
      </p>

      <div className="service-list">
        <div className="service-item">
          <h2>🎵 Vast Song Library</h2>
          <p>Access thousands of songs across Kannada, Hindi, and Telugu languages — from classics to new releases.</p>
        </div>

        <div className="service-item">
          <h2>🔍 Easy Search & Play</h2>
          <p>Quickly find your favorite songs or explore by genre, artist, or mood with our intuitive search.</p>
        </div>

        <div className="service-item">
          <h2>🎧 Personalized Playlists</h2>
          <p>Create and save playlists tailored to your taste, so you can enjoy music anytime, anywhere.</p>
        </div>

        <div className="service-item">
          <h2>📱 Cross-Device Support</h2>
          <p>Listen on desktop or mobile seamlessly, with responsive design and smooth playback.</p>
        </div>

        <div className="service-item">
          <h2>⚙️ User-Friendly Interface</h2>
          <p>Experience a clean, modern UI that makes music discovery fun and effortless.</p>
        </div>
      </div>
    </div>
  );
}
