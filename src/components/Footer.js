import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logo from "../assets/tx-logo.jpeg";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Removed buggy GSAP ScrollTrigger logic which made the Footer occasionally invisible on SPA routing
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); // As an extra safe measure for route navigation if desired, though normally handled in App/Router
  }, [location.pathname]);

  const footerServicesRow1 = [
    { name: "Web Development", href: "/services/web-development" },
    { name: "Mobile Apps", href: "/services/mobile-app-development" },
    { name: "Cloud Solutions", href: "/services/cloud-services" },
    { name: "SAP Engineering", href: "/services/sap-engineering" },
  ];

  const footerServicesRow2 = [
    { name: "Salesforce", href: "/services/salesforce" },
    { name: "Security & Compliance", href: "/services/security" },
    { name: "UI/UX Design", href: "/services/ui-ux-design" },
    { name: "Custom Software", href: "/services/custom-software" },
  ];

  // Links removed in favor of services focus directly

  const socialLinks = [
    { name: "LinkedIn", icon: "in", href: "https://www.linkedin.com/company/tanvox-technologies/" },
    { name: "Instagram", icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ), href: "https://www.instagram.com/tanvox_technologies?igsh=MXRxMGtncHNrem84MA==" },
    { name: "Facebook", icon: "f", href: "https://www.facebook.com/share/1a3pcCH8kK/" },
    { name: "Twitter", icon: "X", href: "https://x.com/tanvox2025" },
  ];

  return (
    <footer ref={footerRef} className="relative bg-gray-950 border-t border-white/5 overflow-hidden">
      {/* Background Overlay */}
      <div className="bg-mesh opacity-20 absolute inset-0 -z-10"></div>
      
      <div className="container mx-auto px-6 py-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2 footer-col">
            <img
              src={logo}
              alt="Tanvox Tech Logo"
              className="h-14 mb-8 object-contain rounded-2xl p-2.5 bg-white hover:scale-105 transition-transform duration-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] shadow-2xl cursor-pointer"
              onClick={() => navigate('/')}
            />

            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-sm">
              Building future-ready software solutions that drive business
              growth and digital transformation.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-5">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.name}
                  className="w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-300 transition-colors"
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col px-4 lg:col-span-1 hidden lg:block"></div>

          {/* Links Columns */}
          <div className="footer-col px-4 lg:col-span-1">
            <h4 className="text-white text-xl font-black mb-8 tracking-tight uppercase text-xs text-blue-600">
              Elite Capabilities
            </h4>
            <ul className="space-y-4 text-gray-400">
              {footerServicesRow1.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white hover:translate-x-2 inline-block transition-all duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col px-4 lg:col-span-1">
            <h4 className="text-white text-xl font-black mb-8 tracking-tight uppercase text-xs text-blue-500 opacity-0 hidden md:block">
              More
            </h4>
            <ul className="space-y-4 text-gray-400 mt-0 md:mt-14">
              {footerServicesRow2.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white hover:translate-x-2 inline-block transition-all duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom border-t border-white/5 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm font-medium">
            © 2025 Tanvox Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-sm text-gray-400 font-medium">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              Systems Operational
            </span>
            <span className="text-gray-400">|</span>
            <span>v2.0.4-Premium</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
