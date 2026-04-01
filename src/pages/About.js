import React, { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import aboutUsImg from "../assets/TanvoxAbout4.png";
import '../index.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  const storyRef = useRef(null);
  const teamRef = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    // Hero Entrance Animations
    tl.fromTo(titleRef.current,
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.2 }
    )
      .fromTo(textRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.8"
      )
      .fromTo(imageRef.current,
        { opacity: 0, scale: 0.9, x: -200 },
        { opacity: 1, scale: 1, x: 0, duration: 1.8, ease: 'power3.out' },
        "-=1.2"
      );

    // Subtle floating animation for the hero image
    gsap.to(imageRef.current, {
      y: 15,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // --- ScrollTrigger Animations ---

    // Story Section Reveal
    if (storyRef.current) {
      const storyItems = storyRef.current.querySelectorAll('.bg-white');
      gsap.fromTo(storyItems,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0,
          duration: 1,
          stagger: 0.3,
          scrollTrigger: {
            trigger: storyRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse"
          }
        }
      );
    }


    // Team Section Staggered Reveal
    if (teamRef.current) {
      const teamMembers = teamRef.current.querySelectorAll('.bg-white');
      gsap.fromTo(teamMembers,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: teamRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse"
          }
        }
      );
    }

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);


  const team = [
    { name: "Sare Chinna Venkata Subbaiah", role: "CEO", description: "Driving strategic vision and technological excellence." },
    { name: "Veera Bangaru", role: "CFO", description: "Financial expert ensuring sustainable growth" },
    { name: "Dattimola Naveen", role: "CTO", description: "Technical architect of cutting-edge solutions" },
    { name: "Kalvacherla Akhil", role: "COO", description: "Operations expert driving efficiency and growth" },
    { name: "Harshavardhan Lalam", role: "CMO", description: "Marketing strategist building brand excellence" }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-900 overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden">
        {/* Background Effects */}
        <div className="bg-mesh opacity-10"></div>
        <div className="grid-bg absolute inset-0 opacity-50"></div>

        {/* Glow Orbs */}
        {/* Glow orbs removed */}

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Text Content */}
            <div className="max-w-2xl order-1 lg:order-2">
              <h1 ref={titleRef} className="text-3xl md:text-5xl font-black mb-8 leading-[1.1] tracking-tighter">
                About <br />
                <span className="text-gradient">Tanvox Technologies</span>
              </h1>

              <div ref={textRef} className="space-y-6 text-xl text-gray-600 leading-relaxed">
                <p>
                  We are a team of passionate developers and designers dedicated to creating innovative software solutions
                  that drive business growth and digital transformation.
                </p>
                <p>
                  With over a decade of experience, we've helped hundreds of businesses leverage technology to achieve their goals,
                  turning complex technical challenges into scalable digital assets.
                </p>
                <p className="text-gray-700 font-medium border-l-4 border-blue-600 pl-6 italic quote">
                  "Our journey is built on innovation, integrity, and the relentless pursuit of excellence."
                </p>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative order-2 lg:order-1">
              <div ref={imageRef} className="relative z-10 overflow-hidden group hover:-translate-y-2 transition-transform duration-700">
                <img
                  fetchPriority="high"
                  src={aboutUsImg}
                  alt="Tanvox Team Collaboration"
                  className="w-full h-auto transition-all duration-700 object-cover scale-[1.02] mix-blend-multiply bg-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Light Content wrapper */}
      <div className="bg-[#f8fafc] text-gray-900 relative rounded-t-[3rem] z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.3)] pt-10 pb-10">

        {/* Story & Evolution */}
        <section ref={storyRef} className="py-16 relative bg-[#f8fafc] border-y border-gray-100 overflow-hidden">

          {/* Animated Background Icons Left */}
          <div className="hidden lg:block absolute left-10 top-20 animate-float opacity-30 text-blue-500">
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </div>
          <div className="hidden lg:block absolute left-24 bottom-20 animate-float animation-delay-1000 opacity-20 text-[#ba3131]">
            <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
              <rect x="9" y="9" width="6" height="6" />
              <line x1="9" y1="1" x2="9" y2="4" />
              <line x1="15" y1="1" x2="15" y2="4" />
              <line x1="9" y1="20" x2="9" y2="23" />
              <line x1="15" y1="20" x2="15" y2="23" />
              <line x1="20" y1="9" x2="23" y2="9" />
              <line x1="20" y1="14" x2="23" y2="14" />
              <line x1="1" y1="9" x2="4" y2="9" />
              <line x1="1" y1="14" x2="4" y2="14" />
            </svg>
          </div>

          {/* Animated Background Icons Right */}
          <div className="hidden lg:block absolute right-16 top-24 animate-float animation-delay-500 opacity-20 text-[#1a12ba]">
            <svg width="68" height="68" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <ellipse cx="12" cy="5" rx="9" ry="3" />
              <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            </svg>
          </div>
          <div className="hidden lg:block absolute right-10 bottom-24 animate-float animation-delay-1500 opacity-30 text-blue-400">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-black mb-8 text-gray-900">Our <span className="text-gradient">Story</span></h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-12">
                Founded in 2025, Tanvox Technologies started with a bold vision to transform businesses through technology.
                We began as a small team of passionate developers with big dreams and a commitment to excellence.
                Today, our team of experts delivers scalable, secure, and future-ready solutions worldwide.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
                <div className="bg-white shadow-[0_10px_40px_rgba(0,0,0,0.3)] p-8 rounded-3xl border border-gray-100 hover:border-blue-500/50 transition-all hover:-translate-y-1 group">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform animate-float border border-blue-500/10">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                      <path d="M9 12H4s.55-3.03 2-4.5c1.62-1.62 5-2.5 5-2.5" />
                      <path d="M12 15v5s3.03-.55 4.5-2c1.62-1.62 2.5-5 2.5-5" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-400 transition-colors">The Startup Era</h4>
                  <p className="text-gray-600 text-sm">Born from a passion for coding and problem-solving in a fast-paced digital landscape.</p>
                </div>
                <div className="bg-white shadow-[0_10px_40px_rgba(0,0,0,0.3)] p-8 rounded-3xl border border-gray-100 hover:border-purple-500/50 transition-all hover:-translate-y-1 group">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform animate-float animation-delay-500 border border-purple-500/10">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-purple-400 transition-colors">Global Horizon</h4>
                  <p className="text-gray-600 text-sm">Expanding our reach and technical expertise to serve enterprise-level clients globally.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section ref={teamRef} className="py-32">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900">
                Visionary <span className="text-gradient">Leaders</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {team.map((member, index) => (
                <div key={index} className="bg-white shadow-[0_10px_40px_rgba(0,0,0,0.3)] p-8 rounded-[32px] text-center transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-blue-500/50 group relative overflow-hidden flex flex-col h-full">
                  <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-blue-600 to-purple-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-blue-500 font-black text-2xl mx-auto mb-6 border border-gray-200 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white transition-all duration-500">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <h3 className="text-xl font-black mb-2 tracking-tight text-gray-900">{member.name}</h3>
                  <div className="text-blue-400 text-xs font-bold mb-4 uppercase tracking-widest">{member.role}</div>
                  <p className="text-gray-600 text-sm leading-relaxed mt-auto">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;


