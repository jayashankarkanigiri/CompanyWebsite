import React, { useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import homeBackground from '../assets/TanvoxHome6.png';
import highLevelImg from '../assets/high_level.png';
import lowLevelImg from '../assets/low_level.png';
import systemArchImg from '../assets/system_architecture.png';
import solutionArchImg from '../assets/solution_architecture.png';
import mvpArchImg from '../assets/mvp_architecture.png';
import principalArchImg from '../assets/principal_architecture.png';
import '../index.css';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);

  // Section Refs
  const archRef = useRef(null);
  const leadersRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);

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
      .fromTo(buttonsRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 },
        "-=1.0"
      )
      .fromTo(imageRef.current,
        { opacity: 0, scale: 0.9, x: -200 },
        { opacity: 1, scale: 1, x: 0, duration: 1.8, ease: 'power3.out' },
        "-=1.2"
      );

    // Subtle floating animation for the hero image
    gsap.to(imageRef.current, {
      y: 20,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // --- ScrollTrigger Animations ---

    // Architecture Stagger
    if (archRef.current) {
      gsap.to(archRef.current.querySelector('.timeline-line'), {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: archRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1
        }
      });

      const archCards = archRef.current.querySelectorAll('.arch-card');
      gsap.fromTo(archCards,
        { opacity: 0, x: (i) => i % 2 === 0 ? -30 : 30 },
        {
          opacity: 1, x: 0, duration: 0.8, stagger: 0.3,
          scrollTrigger: { trigger: archRef.current, start: "top 70%", toggleActions: "play reverse play reverse" }
        }
      );
      
      const archImages = archRef.current.querySelectorAll('.group\\/img');
      gsap.fromTo(archImages,
        { opacity: 0, scale: 0.8, x: (i) => i % 2 === 0 ? 50 : -50 },
        {
          opacity: 1, scale: 1, x: 0, duration: 1, stagger: 0.3, ease: 'back.out(1.5)',
          scrollTrigger: { trigger: archRef.current, start: "top 70%", toggleActions: "play reverse play reverse" }
        }
      );
    }


    // Leaders Stagger
    const leaderCards = leadersRef.current.querySelectorAll('.bg-white');
    gsap.fromTo(leaderCards,
      { opacity: 0, y: 60, scale: 0.95 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 1.5,
        stagger: 0.25,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: leadersRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse"
        }
      }
    );

    // Testimonials Reveal
    const testimonialCards = testimonialsRef.current.querySelectorAll('.bg-white');
    gsap.fromTo(testimonialCards,
      { opacity: 0, scale: 0.9, x: 30 },
      {
        opacity: 1, scale: 1, x: 0,
        duration: 1.2,
        stagger: 0.3,
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: "top 75%",
          toggleActions: "play reverse play reverse"
        }
      }
    );

    // CTA Section Deep Reveal
    gsap.fromTo(ctaRef.current,
      { opacity: 0, y: 100, scale: 0.95 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 90%",
        }
      }
    );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  const architectures = [
    { title: "High Level Architecture", image: highLevelImg },
    { title: "Low Level Architecture", image: lowLevelImg },
    { title: "System Architecture", image: systemArchImg },
    { title: "Solution Architecture", image: solutionArchImg },
    { title: "MVP Architecture", image: mvpArchImg },
    { title: "Principal Architecture", image: principalArchImg }
  ];

  const team = [
    { name: "Sare Chinna Venkata Subbaiah", role: "CEO", description: "Driving strategic vision and technological excellence." },
    { name: "Veera Bangaru", role: "CFO", description: "Financial expert ensuring sustainable growth" },
    { name: "Dattimola Naveen", role: "CTO", description: "Technical architect of cutting-edge solutions" },
    { name: "Kalvacherla Akhil", role: "COO", description: "Operations expert driving efficiency and growth" },
    { name: "Harshavardhan Lalam", role: "CMO", description: "Marketing strategist building brand excellence" }
  ];

  const testimonials = [
    { name: "Amaroju Rajkumar", content: "Exceptional service and innovative solutions that transformed our business." },
    { name: "Dachepally Prashanth", content: "Professional team that delivers on time and exceeds expectations." },
    { name: "Abdul hussain", content: "Outstanding technical expertise and customer support." },
    { name: "Sarah Jenkins", content: "We couldn't be happier with the outcome. Highly recommend their services." },
    { name: "Michael Chen", content: "Their attention to detail and proactive approach made all the difference." },
    { name: "Priya Sharma", content: "A reliable partner for scaling our infrastructure. Excellent communication throughout." }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-900 overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Effects */}
        <div className="bg-mesh opacity-10"></div>
        <div className="grid-bg absolute inset-0 opacity-50"></div>

        {/* Animated Glow Orbs Removed for Performance */}


        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="max-w-2xl order-1 lg:order-2">
              <h1 ref={titleRef} className="text-3xl md:text-5xl font-black mb-6 leading-[1.1] tracking-tighter">
                Innovating <br />
                <span className="text-gradient">The Future.</span>
              </h1>

              <p ref={textRef} className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
                We bridge the gap between complex challenges and elegant software solutions.
                Powering your business with scalable, secure, and modern digital architectures.
                Our expert engineers craft bespoke web, mobile, and enterprise platforms that drive innovation, accelerate growth, and deliver flawless user experiences at a global scale.
              </p>

              <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-5">
                <button
                  onClick={() => navigate("/contact#proposal")}
                  className="px-10 py-5 bg-gradient-to-r from-[#1a12ba] to-[#ba3131] text-white rounded-2xl font-black text-lg transition-all duration-300 shadow-[0_0_30px_rgba(186,49,49,0.3)] hover:shadow-[0_0_40px_rgba(26,18,186,0.5)] hover:-translate-y-1 hover:opacity-90"
                >
                  Get Started
                </button>
                <button
                  onClick={() => navigate("/services")}
                  className="px-10 py-5 bg-transparent border border-gray-200 shadow-sm rounded-2xl font-bold text-lg hover:border-blue-500/50 text-gray-900 hover:text-blue-400 transition-all duration-300"
                >
                  Explore Services
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-3xl rounded-[32px]"></div>
              <div ref={imageRef} className="relative z-10 overflow-hidden group hover:-translate-y-2 transition-transform duration-700">
                  <img
                    fetchPriority="high"
                    decoding="async"
                    src={homeBackground}
                    alt="Modern Tech"
                    className="w-full h-auto object-cover scale-[1.02] mix-blend-multiply bg-transparent"
                  />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Light Content wrapper */}
      <div className="bg-[#f8fafc] text-gray-900 relative rounded-t-[3rem] z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.3)] pt-10">

        {/* Architecture Section */}
        <section ref={archRef} className="py-16 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-2xl md:text-5xl font-black mb-4 text-gray-900">
                Development <span className="text-gradient">Architecture</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                The Architecture we follows in End to End Production.
              </p>
            </div>

            <div className="relative max-w-5xl mx-auto">
              {/* Background Line */}
              <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-1 bg-white -translate-x-1/2 rounded-full z-0"></div>
              {/* Animated Drawing Line */}
              <div className="timeline-line absolute left-8 md:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-blue-500 to-purple-500 -translate-x-1/2 origin-top scale-y-0 rounded-full z-0"></div>

              <div className="space-y-12 md:space-y-24 mt-12 pb-12">
                {architectures.map((item, index) => (
                  <div key={index} className={`relative flex flex-col md:flex-row items-center justify-between group ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} w-full`}>

                    {/* Mobile ONLY Card */}
                    <div className="md:hidden w-full pl-16 pr-4 py-3 arch-card opacity-0 group">
                      <div className="bg-white shadow-[0_4px_15px_rgba(0,0,0,0.05)] p-4 rounded-xl flex flex-col items-center justify-center border border-gray-100 relative">
                        {/* Connecting Point Indicator removed per user request */}

                        <div className="h-16 flex items-center justify-center mb-2 w-full group/img relative">
                          <img src={item.image} alt={item.title} loading="lazy" className="h-full w-full object-contain mix-blend-multiply group-hover/img:-translate-y-2 transition-transform duration-500" />
                        </div>
                        <h3 className="text-sm font-black text-gray-900 text-center uppercase tracking-tight">{item.title}</h3>
                      </div>
                    </div>

                    {/* Desktop Content Box */}
                    <div className={`hidden md:block w-full md:w-[45%] arch-card opacity-0 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="p-8 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.3)] rounded-[32px] border border-gray-100 hover:border-blue-500/50 transition-all duration-500 relative">

                        {/* Connecting Arrow for Desktop */}
                        <div className={`absolute top-1/2 -translate-y-1/2 ${index % 2 === 0 ? '-right-5' : '-left-5'}`}>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 group-hover:text-blue-500 transition-colors">
                            {index % 2 === 0 ? <polyline points="15 18 9 12 15 6" /> : <polyline points="9 18 15 12 9 6" />}
                          </svg>
                        </div>

                        <div className="relative z-10">
                          <h3 className="text-2xl font-black mb-3 text-gray-900 group-hover:text-blue-400 transition-colors tracking-tight uppercase">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Image Box */}
                    <div className="hidden md:flex w-full md:w-[45%] items-center justify-center pr-8 py-8">
                      <div className="relative group/img w-full text-center">
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          className="relative z-10 w-full max-w-[280px] h-auto object-contain group-hover/img:-translate-y-2 transition-transform duration-500 bg-transparent mix-blend-multiply mx-auto"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section ref={leadersRef} className="py-16 bg-[#f8fafc] border-y border-gray-100">
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
                  <div className="text-blue-600 text-xs font-bold mb-4 uppercase tracking-widest">{member.role}</div>
                  <p className="text-gray-600 text-sm leading-relaxed mt-auto">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section ref={testimonialsRef} className="py-16 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black mb-4 text-gray-900">
                Client <span className="text-gradient">Success</span>
              </h2>
            </div>

            <div className="scroller-container py-4 relative">
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#f8fafc] to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#f8fafc] to-transparent z-10 pointer-events-none"></div>

              <div className="scroller-content flex gap-8">
                {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                  <div key={`review-${index}`} className={`bg-white shadow-[0_10px_40px_rgba(0,0,0,0.3)] p-10 rounded-3xl relative overflow-hidden group hover:border-blue-500/50 flex flex-col justify-between transition-all duration-300 border border-gray-100 min-w-[300px] max-w-[300px] shrink-0 cursor-pointer ${index >= testimonials.length ? 'hide-on-mobile' : ''}`}>
                    <div className="absolute -top-5 -right-5 text-9xl text-gray-800 font-serif group-hover:text-blue-500/20 transition-colors">"</div>
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-500">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-700 mb-8 italic text-lg leading-relaxed relative z-10 line-clamp-4">
                      "{testimonial.content}"
                    </p>
                    <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                    <div className="text-blue-600 font-medium text-sm">Customer / Partner</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section Removed */}


      </div>
    </div>
  );
};

export default Home;



