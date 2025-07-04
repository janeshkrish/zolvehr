import React, { useState } from 'react'
import './Navbar.css'
import logo_img from '../assets/logo.png'
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { ProductDropdown } from '../ProductDropdown/ProductDropdown';
import { PartnerDropdown } from '../PartnerDropdown/PartnerDropdown';
import { ResourcesDropdown } from '../ResourcesDropdown/ResourcesDropdown';
import { ComapanyDropdown } from '../CompanyDropdown/ComapanyDropdown';

export const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (menu) => {
    setOpenDropdown(prev => (prev === menu ? null : menu));
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  return (
    <div className='navbar'>
      <div className="left-section">
        <img src={logo_img} alt="logo" className="nav-logo" />
         <Link to="/freetrial"><button className="trial-btn mobile-btn">Free Trial</button></Link>
         <div className="hamburger" onClick={toggleMobileMenu}>
         {mobileMenuOpen ? <FaTimes /> : <FaBars />}
         </div>
        </div>
      <div className={`center-section ${mobileMenuOpen ? 'show' : ''}`}>
        <ul className="nav-links">
          <Link to="/" className='homebtn'><li className='nav-items'>Home</li></Link>
          <li className='nav-items' onClick={() => toggleDropdown("product")}>Product {openDropdown === "product" ? <FaChevronUp className='arrow' /> : <FaChevronDown className='arrow' />}</li>
          {openDropdown === "product" && <ProductDropdown />}
          <Link to="/pricing" className='homebtn'><li className='nav-items'>Pricing</li></Link>
          <Link to="/customer" className='homebtn'><li className='nav-items'>Customer</li></Link>
          <li className='nav-items' onClick={() => toggleDropdown("partner")}>Partner {openDropdown === "partner" ? <FaChevronUp className='arrow' /> : <FaChevronDown className='arrow' />}</li>
          {openDropdown === "partner" && <PartnerDropdown />}
          <li className='nav-items' onClick={() => toggleDropdown("resources")}>Resources {openDropdown === "resources" ? <FaChevronUp className='arrow' /> : <FaChevronDown className='arrow' />}</li>
          {openDropdown === "resources" && <ResourcesDropdown />}
          <li className='nav-items' onClick={() => toggleDropdown("company")}>Company {openDropdown === "company" ? <FaChevronUp className='arrow' /> : <FaChevronDown className='arrow' />}</li>
          {openDropdown === "company" && <ComapanyDropdown />}
        </ul>
      </div>

      <div className="right-section">
        <Link to="/freetrial"><button className="trial-btn">Free Trial</button></Link>
      </div>
    </div>
  )
}
