import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Portfolio.css';

const projectsData = [
  {
    id: 1,
    title: 'FinTech Dashboard',
    category: 'Web App',
    description: 'A real-time financial tracking platform built with React and interactive charts.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    tags: ['React', 'Chart.js', 'Tailwind']
  },
  {
    id: 2,
    title: 'Nexus E-Commerce',
    category: 'E-Commerce',
    description: 'A fast, high-converting online storefront with seamless payment integration.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    tags: ['React', 'Node.js', 'Stripe']
  },
  {
    id: 3,
    title: 'Aura Health App',
    category: 'Mobile & Web',
    description: 'An intuitive mental health tracking platform featuring custom daily analytics.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
    tags: ['React', 'Firebase', 'UI/UX']
  },
  {
    id: 4,
    title: 'Pulse SaaS Platform',
    category: 'SaaS App',
    description: 'An automated workflow management system engineered for remote teams.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80',
    tags: ['React', 'REST API', 'CSS Grid']
  },
  {
    id: 5,
    title: 'Urban Spaces Landing',
    category: 'Real Estate',
    description: 'A modern real estate platform showcasing virtual property tours and listings.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80',
    tags: ['React', 'Framer Motion', 'SEO']
  },
  {
    id: 6,
    title: 'Verve Logistics',
    category: 'Enterprise',
    description: 'A comprehensive supply chain management dashboard optimized for mobile browsers.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
    tags: ['React', 'TypeScript', 'WebSockets']
  }
];

export default function Portfolio () {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-container container">
        <div className="section-header">
          <span className="section-subtitle">Our Work</span>
          <h2 className="section-title">Featured Client Projects</h2>
          <p className="section-description">
            Explore a few of our recent digital projects engineered for high performance and design excellence.
          </p>
        </div>

        <div className="portfolio-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="portfolio-card">
              <div className="portfolio-img-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                  width="600"
                  height="400"
                />
                <span className="portfolio-badge">{project.category}</span>
              </div>
              <div className="portfolio-content">
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-description">{project.description}</p>
                
                <div className="portfolio-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                  ))}
                </div>

                <div className="portfolio-links">
                  <a href="#portfolio" className="portfolio-link" aria-label={`View live demo of ${project.title}`}>
                    Live Demo <FaExternalLinkAlt />
                  </a>
                  <a href="#portfolio" className="portfolio-link code-link" aria-label={`View code repository for ${project.title}`}>
                    Code <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

