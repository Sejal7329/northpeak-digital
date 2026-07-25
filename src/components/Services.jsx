import React from 'react';
import { 
  FaCode, 
  FaPaintBrush, 
  FaMobileAlt, 
  FaSearch, 
  FaChartLine, 
  FaCloud 
} from 'react-icons/fa';
import './Services.css';

const servicesData = [
  {
    icon: <FaCode />,
    title: 'Web Development',
    description: 'Custom, fast, and scalable websites built with modern frameworks tailored to your business needs.'
  },
  {
    icon: <FaPaintBrush />,
    title: 'UI/UX Design',
    description: 'Intuitive and engaging user interfaces designed to maximize visitor engagement and conversion.'
  },
  {
    icon: <FaMobileAlt />,
    title: 'Mobile App Development',
    description: 'Cross-platform mobile applications that provide seamless experiences across iOS and Android.'
  },
  {
    icon: <FaSearch />,
    title: 'SEO Optimization',
    description: 'Data-driven search engine strategies designed to boost your search rankings and organic traffic.'
  },
  {
    icon: <FaChartLine />,
    title: 'Digital Marketing',
    description: 'Targeted marketing strategies aimed at amplifying brand reach and generating qualified leads.'
  },
  {
    icon: <FaCloud />,
    title: 'Cloud Solutions',
    description: 'Secure deployment, cloud hosting, and infrastructure setup to keep your site fast and resilient.'
  }
];

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-container container">
        <div className="section-header">
          <span className="section-subtitle">What We Offer</span>
          <h2 className="section-title">Services Built for Scalability</h2>
          <p className="section-description">
            We provide end-to-end digital solutions designed to help your business stand out and thrive online.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};