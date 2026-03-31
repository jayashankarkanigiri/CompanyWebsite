import React, { useState, useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logo from "../assets/tx-logo.jpeg";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState('');
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Column reveal stagger
      const cols = footerRef.current.querySelectorAll('.footer-col');
      gsap.fromTo(cols, 
        { 
          opacity: 0, 
          y: 40,
          scale: 0.95
        }, 
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
          }
        }
      );

      // Bottom bar reveal
      gsap.fromTo(footerRef.current.querySelector('.footer-bottom'),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 95%",
          }
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      setSubscriptionStatus('Please enter your email address');
      return;
    }
    setSubscriptionStatus('Thank you for subscribing!');
    setEmail('');
    setTimeout(() => setSubscriptionStatus(''), 5000);
  };

  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
    services: [
      { name: "Web Development", href: "/services" },
      { name: "Mobile Apps", href: "/services" },
      { name: "Cloud Solutions", href: "/services" },
      { name: "SAP", href: "/services" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "GDPR", href: "#" },
    ],
  };

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
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">

          {/* Brand/Newsletter */}
          <div className="lg:col-span-2 footer-col">
            <img
              src={logo}
              alt="Tanvox Tech Logo"
              className="h-14 mb-8 object-contain rounded-2xl p-2.5 border border-white/10 bg-white/5 hover:scale-110 transition-transform duration-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] shadow-2xl"
            />

            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-sm">
              Building future-ready software solutions that drive business
              growth and digital transformation.
            </p>

            <div className="glass-card p-6 rounded-3xl border border-white/5 bg-white/[0.02] mb-10">
              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                Stay Updated
              </h4>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3 bg-gray-900/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button type="submit" className="bg-blue-600 px-8 py-3 rounded-xl text-white font-bold hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                  Join
                </button>
              </form>
              {subscriptionStatus && (
                <div className="mt-3 text-xs text-blue-400 font-bold ">{subscriptionStatus}</div>
              )}
            </div>

            {/* Social Icons */}
            <div className="flex space-x-5">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white hover:bg-white/10 hover:border-blue-500 hover:scale-110 transition-all duration-300 group shadow-lg"
                >
                  <span className="text-lg font-bold group-hover:text-blue-400">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="footer-col px-4">
            <h4 className="text-white text-xl font-black mb-8 tracking-tight uppercase text-xs text-blue-500">
              Company
            </h4>
            <ul className="space-y-4 text-gray-400">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white hover:translate-x-2 inline-block transition-all duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col px-4">
            <h4 className="text-white text-xl font-black mb-8 tracking-tight uppercase text-xs text-purple-500">
              Services
            </h4>
            <ul className="space-y-4 text-gray-400">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white hover:translate-x-2 inline-block transition-all duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col px-4">
            <h4 className="text-white text-xl font-black mb-8 tracking-tight uppercase text-xs text-accent">
              Legal
            </h4>
            <ul className="space-y-4 text-gray-400">
              {footerLinks.legal.map((link, index) => (
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
        <div className="footer-bottom border-t border-white/5 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm font-medium">
            © 2025 Tanvox Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-sm text-gray-500 font-medium">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              Systems Operational
            </span>
            <span className="text-gray-800">|</span>
            <span>v2.0.4-Premium</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
