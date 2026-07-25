import React from 'react';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-container container">
        <div className="hero-content">
          <div className="badge">
            <span>✨ Digital Solutions That Drive Growth</span>
          </div>
          <h1 className="hero-title">
            Empowering Brands with <span className="gradient-text">Modern Web Development</span>
          </h1>
          <p className="hero-description">
            NorthPeak Digital creates high-performing, scalable, and responsive web applications engineered to convert visitors into long-term clients.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Get Started <FaArrowRight />
            </a>
            <a href="#portfolio" className="btn btn-secondary">
              View Our Work
            </a>
          </div>

          <div className="hero-highlights">
            <div className="highlight-item">
              <FaCheckCircle className="check-icon" /> Fast Performance
            </div>
            <div className="highlight-item">
              <FaCheckCircle className="check-icon" /> SEO Optimized
            </div>
            <div className="highlight-item">
              <FaCheckCircle className="check-icon" /> 100% Responsive
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-card shadow-card">
            <div className="card-header-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="card-body-preview">
              <h3>Custom Digital Solutions</h3>
              <p>Designed for conversion & speed.</p>
              <div className="stat-grid">
                <div className="stat-box">
                  <h4>99%</h4>
                  <p>Client Satisfaction</p>
                </div>
                <div className="stat-box">
                  <h4>3x</h4>
                  <p>Faster Speed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
