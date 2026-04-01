// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { handleHashNavigation } from '../utils/smoothScroll';

// import Tanvox from '../assets/TANVOX_IMG-BG.png';

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);

//     // Handle hash navigation on route change
//     handleHashNavigation();

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [location]); // Re-run when location changes

//   const navLinks = [
//     { href: '/', text: 'Home' },
//     { href: '/about#hero', text: 'About Us' },
//     { href: '/services#hero', text: 'Services' },
//     { href: '/careers#hero', text: 'Careers' },
//     { href: '/contact#hero', text: 'Contact' }
//   ];

//   return (
//     <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'navbar-scrolled' : ''}`}>
//       <div className="container mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center">
//             <Link to="/" >
//               <img style={{ width: '120px',height: '50px'}} src={Tanvox} alt="Tanvox" className="h-12" />
//             </Link>
//           </div>

//           <div className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.href}
//                 to={link.href}
//                 className={`${
//                   location.pathname === link.href 
//                     ? 'text-dark-red' 
//                     : 'text-gray-text hover:text-navy-blue'
//                 } transition-colors duration-200`}
//               >
//                 {link.text}
//               </Link>
//             ))}
//             {/* <Button>Get Started</Button> */}
//           </div>

//           <button
//             className="md:hidden text-dark-red"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               {mobileMenuOpen ? (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               )}
//             </svg>
//           </button>
//         </div>

//         {mobileMenuOpen && (
//           <div className="md:hidden mt-4 pb-4">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.href}
//                 to={link.href}
//                 className={`block py-2 ${
//                   location.pathname === link.href 
//                     ? 'text-dark-red' 
//                     : 'text-gray-text hover:text-navy-blue'
//                 } transition-colors duration-200`}
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 {link.text}
//               </Link>
//             ))}
//             <div className="mt-4">
//               {/* <Button className="w-full">Get Started</Button> */}
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { handleHashNavigation } from "../utils/smoothScroll";
import Tanvox from "../assets/tx-logo.jpeg";

import { gsap } from "gsap";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleHashNavigation();

    // GSAP Mount Animation
    const tl = gsap.timeline();
    tl.fromTo(
      ".nav-container",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power4.out" }
    )
      .fromTo(
        ".nav-logo",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.5"
      );

    return () => {
      window.removeEventListener("scroll", handleScroll);
      tl.kill();
    };
  }, [location]);

  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About Us" },
    { href: "/services", text: "Services" },
    { href: "/careers", text: "Careers" },
    { href: "/contact", text: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 nav-container ${scrolled
        ? "bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm"
        : "bg-white/80 backdrop-blur-md border-b border-gray-200"
        }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center space-x-3 nav-logo group">
          <img
            src={Tanvox}
            alt="Tanvox Logo"
            className="h-10 md:h-20 object-contain rounded-lg transition-transform duration-500"
          />
          <div className="flex flex-col ml-1">
            <span className="text-2xl md:text-4xl font-black tracking-tight text-gradient leading-none">
              Tanvox
            </span>
            <span className="text-[10px] md:text-base font-bold tracking-widest uppercase text-gradient leading-tight pt-0 md:pt-1">
              Technologies
            </span>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-8 font-bold">

          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={`nav-link text-lg transition-colors duration-300 tracking-wide ${location.pathname === link.href
                ? "text-[#1a12ba] font-bold"
                : "text-gray-700 hover:text-[#1a12ba]"
                }`}
            >
              {link.text}
            </Link>
          ))}

        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-gray-900 text-2xl"
          aria-label="Toggle Mobile Menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-xl px-6 pb-6 pt-2 animate-fade-in-up">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="block py-4 px-2 text-xl text-gray-700 font-bold hover:text-blue-600 border-b border-gray-100 last:border-0"
              onClick={() => {
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              {link.text}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;