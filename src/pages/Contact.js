import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import contactImg from '../assets/Tanvox ContactUs.png';
import emailjs from '@emailjs/browser';
import '../index.css';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', message: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  const infoRef = useRef(null);
  const formRef = useRef(null);
  const faqRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#proposal') {
      setTimeout(() => {
        const el = document.getElementById('proposal');
        if (el) {
          const yOffset = -120;
          const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 500);
    }
  }, [location]);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    // Hero Entrance
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

    // Subtle floating animation for image
    gsap.to(imageRef.current, {
      y: 15,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // --- ScrollTrigger Animations ---

    // Info Cards Reveal
    const infoCards = infoRef.current.querySelectorAll('.bg-white');
    gsap.fromTo(infoCards,
      { opacity: 0, y: 40, x: -30 },
      {
        opacity: 1, y: 0, x: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: infoRef.current,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );

    // Form Reveal
    gsap.fromTo(formRef.current,
      { opacity: 0, scale: 0.95, y: 50 },
      {
        opacity: 1, scale: 1, y: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );

    // FAQ Items Reveal
    const faqs = faqRef.current.querySelectorAll('.bg-white');
    gsap.fromTo(faqs,
      { opacity: 0, x: 50 },
      {
        opacity: 1, x: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: faqRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse"
        }
      }
    );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Form data to send:', formData);
  //   setFormStatus('Message sent successfully! We will get back to you soon.');
  //   setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  //   setTimeout(() => setFormStatus(''), 6000);
  // };



  const handleSubmit = (e) => {
    e.preventDefault();

    setFormStatus("Sending...");

    emailjs.send(
      "service_1vew3sn",        // ✅ NEW
      "template_qyol5qf",       // ✅ NEW
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: formData.message,
      },
      "KXOyuHwCtgrumF6aj"       // ✅ NEW
    )
      .then(() => {
        setFormStatus("Message sent successfully!");
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        });
        setTimeout(() => setFormStatus(''), 4000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setFormStatus("Failed to send message.");
        setTimeout(() => setFormStatus(''), 4000);
      });
  };

  const office = {
    city: "Hyderabad",
    address: "3rd Floor JQ Chambers, 4-50/5, Gachibowli - Miyapur Rd, Hyderabad, Telangana",
    phone: "+91 9676507387",
    email: "info@tanvox.in"
  };

  const faqs = [
    { question: "What services do you offer?", answer: "Custom software development, mobile apps, web development, cloud solutions, UI/UX design, and DevOps." },
    { question: "How long does a project take?", answer: "Simple apps take 4-8 weeks, while complex enterprise solutions can take 4-8 months." },
    { question: "Do you provide ongoing support?", answer: "Absolutely. We offer comprehensive maintenance and 24/7 technical support packages." },
    { question: "What is your pricing model?", answer: "We offer fixed-priced projects, dedicated team models, and hourly-based billing depending on your needs." }
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
              <h1 ref={titleRef} className="text-3xl md:text-5xl font-black mb-8 leading-[1] tracking-tighter">
                Get In <br />
                <span className="text-gradient">Touch</span>
              </h1>

              <p ref={textRef} className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-lg mb-10">
                Ready to start your next project? Contact us today.
                We're here to help you turn your ideas into reality.
                Whether you have a question, a project in mind, or need expert guidance,
                our team is ready to assist you with the right solutions.
                <br /><br />
                Reach out to us and let's build something great together.
              </p>

            </div>

            {/* Hero Image */}
            <div className="relative order-2 lg:order-1">
              <div ref={imageRef} className="relative z-10 overflow-hidden group hover:-translate-y-2 transition-transform duration-700">
                <img
                  fetchPriority="high"
                  src={contactImg}
                  alt="Contact Tanvox Team"
                  className="w-full h-auto rounded-[32px] transition-all duration-700 object-cover scale-[1.02] mix-blend-multiply bg-transparent"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Light Content wrapper */}
      <div className="bg-[#f8fafc] text-gray-900 relative rounded-t-[3rem] z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.3)] pt-10 pb-10 border-t border-gray-100">

        {/* Info & Form Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-6 max-w-6xl">
            {/* 1. Map & Address Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
              {/* Map */}
              <div className="lg:col-span-1 w-full h-[300px] lg:h-auto min-h-[300px] rounded-[32px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 relative group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1814107272626!2d78.3628605!3d17.4510292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4f6b6b9c38fa97e5%3A0x141b9e14f528a714!2sTanvox%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1770119685368!5m2!1sen!2sin"
                  width="100%" height="100%" style={{ border: 0 }} loading="lazy" title="Office Location"
                  className="absolute inset-0"
                />
                <div className="absolute inset-0 bg-blue-600/5 pointer-events-none group-hover:bg-transparent transition-all"></div>
              </div>

              {/* Company Address */}
              <div ref={infoRef} className="lg:col-span-1 h-full">
                <div className="bg-white shadow-[0_10px_40px_rgba(0,0,0,0.3)] p-10 rounded-[32px] border border-gray-100 hover:border-blue-500/50 transition-all group h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-black mb-8 tracking-tight text-gray-900">Our <span className="text-blue-600">Office</span></h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform animate-float border border-blue-500/20">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{office.address}</p>
                    </div>
                    <div className="flex gap-4 items-center">
                      <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform animate-float animation-delay-500 border border-blue-500/20">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </div>
                      <p className="text-gray-900 text-sm font-bold">{office.phone}</p>
                    </div>
                    <div className="flex gap-4 items-center">
                      <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform animate-float animation-delay-1000 border border-blue-500/20">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      </div>
                      <p className="text-gray-900 text-sm font-bold">{office.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Send Us A Message Form */}
            <div ref={formRef} id="proposal" className="w-full relative h-full">
                <div className="bg-white shadow-[0_10px_40px_rgba(0,0,0,0.3)] p-8 lg:p-10 rounded-[32px] border border-gray-100 relative h-full flex flex-col justify-center">
                  <h2 className="text-3xl font-black mb-8 tracking-tight text-gray-900">Send Us a <span className="text-gradient">Message</span></h2>

                  {formStatus && (
                    <div className="bg-blue-900/30 border border-blue-800 text-blue-400 p-4 rounded-xl mb-8 animate-pulse text-sm font-bold">
                      {formStatus}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-600 ml-4">Full Name *</label>
                        <input
                          required name="name" value={formData.name} onChange={handleChange} minLength="2" maxLength="30" pattern="^[A-Za-z]+( [A-Za-z]+)*$" title="Name must be 2-30 characters, contain only letters, and have no multiple spaces"
                          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 focus:bg-white transition-all text-gray-900"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-600 ml-4">Email Address *</label>
                        <input
                          required type="email" name="email" value={formData.email} onChange={handleChange} pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" title="Valid email format required (e.g., name@domain.com) without spaces"
                          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 focus:bg-white transition-all text-gray-900"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-600 ml-4">Mobile Number *</label>
                        <input
                          required name="phone" type="tel" value={formData.phone} onChange={handleChange} minLength="10" maxLength="10" pattern="^[6-9]\d{9}$" title="Mobile number must be exactly 10 digits starting with 6, 7, 8, or 9 (no spaces or special chars)"
                          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 focus:bg-white transition-all text-gray-900"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-600 ml-4">Company</label>
                        <input
                          name="company" value={formData.company} onChange={handleChange}
                          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 focus:bg-white transition-all text-gray-900"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-600 ml-4">Project Details *</label>
                      <textarea
                        required name="message" value={formData.message} onChange={handleChange} rows="4"
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 focus:bg-white transition-all resize-none text-gray-900"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-blue-600 text-white font-black text-lg rounded-xl hover:bg-blue-500 transition-all shadow-[0_0_30px_rgba(37,99,235,0.2)] hover:scale-[1.02] active:scale-95"
                    >
                      Send Proposal
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>

        {/* FAQ Section */}
        <section ref={faqRef} className="py-16 bg-[#f8fafc] border-t border-gray-100">
          <div className="container mx-auto px-6">
            <div className="text-center mb-24">
              <h2 className="text-3xl md:text-5xl font-black mb-4 text-gray-900">Common <span className="text-gradient">Queries</span></h2>
              <p className="text-gray-600">Find quick answers to your project concerns.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white shadow-[0_10px_40px_rgba(0,0,0,0.3)] p-10 rounded-[32px] border border-gray-100 hover:border-blue-500/50 transition-all cursor-default group hover:-translate-y-1">
                  <h3 className="text-xl font-bold mb-4 text-blue-600 tracking-tight uppercase text-xs">Q: {faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">A: {faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Contact;
