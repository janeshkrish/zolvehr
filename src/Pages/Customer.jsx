import React, { useEffect, useState, useRef } from 'react'
import './CSS/Customer.css'
import person1 from '../Components/assets/person1.png'
import person2 from '../Components/assets/person2.png'
import person3 from '../Components/assets/person3.png'
import { Navbar } from '../Components/Navbar/Navbar.jsx'
import { FaStar, FaRegStar } from 'react-icons/fa'
import { FaQuoteLeft } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { ArrowRightOutlined } from '@ant-design/icons'
import su1 from '../Components/assets/su1.avif'
import su2 from '../Components/assets/su2.avif'
import su3 from '../Components/assets/su3.avif'
import su4 from '../Components/assets/su4.avif'
import su5 from '../Components/assets/su5.avif'
import su6 from '../Components/assets/su6.avif'
import { Footer } from '../Components/Footer/Footer.jsx'
import { Row, Col } from 'antd';
import logos from '../Components/assets/logos.js'

const customers = [
  {
    text: "One of the best Digital Automation tools for HRMS requirement.",
    name: "Vinayak D",
    role: "Senior Talent Acquisition Specialist",
    rating: 4,
    image: person1,
  },
  {
    text: "Smooth app with the light interface. It is easy to use and flexible.",
    name: "Ansul G",
    role: "Talent Success Specialist",
    rating: 4,
    image: person2,
  },
  {
    text: "Very easy to operate application with a supportive Technical Staff",
    name: "Pranshu",
    role: "Senior Officer HR",
    rating: 5,
    image: person3,
  }
];

const successStories = [
  {
    id: 1,
    image: su1,
    description: 'Astute Corporate Services Saved 50% Payroll Time with greytHR',
    title: 'Astute Corporate Services',
  },
  {
    id: 2,
    image: su2,
    description: 'Hillson Shoes - walking the path to HR transformation with greytHR',
    title: 'Hillson Shoes',
  },
  {
    id: 3,
    image: su3,
    description: 'Saves 50% Time in HR Operations with greytHR',
    title: 'Fusion Hyundai',
  },
  {
    id: 4,
    image: su4,
    description: 'A mining giant entering the modern era of people management',
    title: 'KCCL',
  },
  {
    id: 5,
    image: su5,
    description: 'Saves 50% Time in HR Operations with greytHR',
    title: 'Enerlife Pvt Ltd',
  },
  {
    id: 6,
    image: su6,
    description: 'construction group achieves resource optimization and easier compliance',
    title: 'Kalyani Developers',
  }
];

const stats = [
  { value: 30000, label: 'Customers' },
  { value: 3000000, label: 'Employees' },
  { value: 25, label: 'Countries' },
];

export const Customer = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0]);
  const statRef = useRef();
  const hasAnimated = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % customers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateStats();
          hasAnimated.current = true;
        } else {
          resetStats();
          hasAnimated.current = false;
        }
      },
      { threshold: 0.6 }
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => {
      if (statRef.current) observer.unobserve(statRef.current);
    };
  }, []);

  const animateStats = () => {
    stats.forEach((stat, i) => {
      let start = 0;
      const end = stat.value;
      const increment = end / 100;
      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(interval);
        }
        setAnimatedStats((prev) => {
          const updated = [...prev];
          updated[i] = Math.floor(start);
          return updated;
        });
      }, 20);
    });
  };

  const resetStats = () => {
    setAnimatedStats([0, 0, 0]);
  };

  const handleMouseMove = (e) => {
    const shapes = document.querySelectorAll(".decorative-shape");
    shapes.forEach(shape => {
      const speed = shape.dataset.speed || 1;
      const x = (window.innerWidth / 2 - e.pageX) / 100;
      const y = (window.innerHeight / 2 - e.pageY) / 100;
      shape.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
  };

  return (
    <div className="customer-page">
      <Navbar />

      <section className="customer-hero">
        <div className="overlay">
          <h1 className="hero-title">Customer</h1>
          <p className="hero-breadcrumb"><Link to="/" className='homebtn1'>Home</Link> &nbsp; &gt; &nbsp; Customer</p>
        </div>
        <div className="hero-curve" />
      </section>

      <section className="stats-section" ref={statRef}>
        <div className="stats-container">
          {stats.map((item, index) => (
            <div className="stats-box" key={index}>
              <h2 className="stats-value">
                {animatedStats[index].toLocaleString()}+
              </h2>
              <p className="stats-label">{item.label}</p>
              {index !== stats.length - 1 && <div className='divider' />}
            </div>
          ))}
        </div>
      </section>
       
      <section className="testimonial-wrapper" onMouseMove={handleMouseMove}>
        <div className="decorative-shape shape-circle" data-speed="2"></div>
        <div className="decorative-shape shape-half" data-speed="1.5"></div>
        <div className="decorative-shape shape-quarter" data-speed="1.2"></div>

        <div className="testimonial-image-wrapper">
          <div className="testimonial-image">
            <img src={customers[activeIndex].image} alt={customers[activeIndex].name} />
          </div>
        </div>

        <div className="testimonial-content">
          <div className="quote-circle"><FaQuoteLeft /></div>
          <p className="testimonial-text">
            {customers[activeIndex].text}
          </p>
          <p className="testimonial-name">{customers[activeIndex].name}</p>
          <p className="testimonial-role">{customers[activeIndex].role}</p>
          <div className="stars">
            {[...Array(5)].map((_, i) =>
              i < customers[activeIndex].rating
                ? <FaStar key={i} color="#06A3DA" />
                : <FaRegStar key={i} color="#ccc" />
            )}
          </div>
          <div className="testimonial-dots">
            {customers.map((_, i) => (
              <span
                key={i}
                className={`dot ${i === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="success-section">
        <h2 className="section-heading">Customer Success Stories</h2>
        <div className="section-label">Gain insights from businesses similar to yours</div>
        <div className="case-cards">
        {successStories.map((success) => (
          <div className="case-card" key={success.id}>
            <img src={success.image} alt={success.title} className="case-img" />
            <p className="case-title">{success.title}</p>
            <div className="case-footer">
              <h3 className="case-decription">{success.description}</h3>
              <ArrowRightOutlined className="arrow-icon" />
            </div>
          </div>
        ))}
      </div>
      </section>
      <div className="company-logo-container">
      <Row gutter={[24, 24]} justify="center">
        {logos.map((logo, index) => (
          <Col key={index} xs={12} sm={8} md={6} lg={4} xl={3}>
            <div className="logo-wrapper">
              <img src={logo} alt={`Company logo ${index + 1}`} className="logo-img" />
            </div>
          </Col>
        ))}
      </Row>
    </div>
      <section className="cta-banner-rounded">
         <div className="cta-left">
           <h3>Discuss business needs, find out pricing or get a demo. We would love to talk.</h3>
         </div>
        <div className="cta-right">
        <Link to='/freetrial'><button className="consulting-btn-rounded">
        Request a Demo <span>→</span>
        </button>
        </Link>
     </div>
      </section>
      <Footer />
    </div>
  );
};
