import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import contactImg from '../assets/UpdatedContactUs.png';
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
        { opacity: 0, x: 100, scale: 0.9, rotate: -5 },
        { opacity: 1, x: 0, scale: 1, rotate: 0, duration: 1.5 },
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
    const infoCards = infoRef.current.querySelectorAll('.glass-card');
    gsap.fromTo(infoCards,
      { opacity: 0, y: 40, x: -30 },
      {
        opacity: 1, y: 0, x: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: infoRef.current,
          start: "top 85%",
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
        }
      }
    );

    // FAQ Items Reveal
    const faqs = faqRef.current.querySelectorAll('.glass-card');
    gsap.fromTo(faqs,
      { opacity: 0, x: 50 },
      {
        opacity: 1, x: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: faqRef.current,
          start: "top 85%",
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

    setFormStatus("Sending... ⏳");

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
        setFormStatus("✅ Message sent successfully!");
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setFormStatus("❌ Failed to send message");
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
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="bg-mesh opacity-10"></div>
        <div className="grid-bg absolute inset-0 opacity-50"></div>

        {/* Glow Orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>



        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT SIDE - TEXT */}
            <div className="max-w-xl">
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

            {/* Right Side - Form */}
            <div ref={formRef} className="relative">
              <div className="absolute -inset-10 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-[100px] rounded-[32px]"></div>
              <div ref={imageRef} className="relative z-10 shadow-2xl rounded-[32px] overflow-hidden group hover:-translate-y-2 transition-transform duration-700">
                <img
                  src={contactImg}
                  alt="Contact Tanvox Team"
                  className="w-full h-auto rounded-[32px] shadow-[0_30px_60px_rgba(0,0,0,0.12)] transition-all duration-700 object-cover scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Light Content wrapper */}
      <div className="bg-white text-gray-900 relative rounded-t-[3rem] z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] pt-10 pb-10 border-t border-gray-100">

        {/* Info & Form Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              {/* Left Side - Info Cards */}
              <div ref={infoRef} className="space-y-8">
                <div className="bg-white shadow-[0_10px_40px_rgba(0,0,0,0.05)] p-10 rounded-[32px] border border-gray-100 hover:border-blue-500/30 transition-all group">
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

                {/* Map Glimpse */}
                <div className="h-[300px] rounded-[32px] overflow-hidden border border-gray-200 relative group shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1814107272626!2d78.3628605!3d17.4510292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4f6b6b9c38fa97e5%3A0x141b9e14f528a714!2sTanvox%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1770119685368!5m2!1sen!2sin"
                    width="100%" height="100%" style={{ border: 0 }} loading="lazy" title="Office Location"
                  />
                  <div className="absolute inset-0 bg-blue-600/5 pointer-events-none group-hover:bg-transparent transition-all"></div>
                </div>
              </div>

              {/* Contact Form */}
              <div ref={formRef} id="proposal" className="relative">
                <div className="bg-white shadow-[0_10px_40px_rgba(0,0,0,0.05)] p-12 rounded-[48px] border border-gray-100 relative">
                  <h2 className="text-3xl font-black mb-10 tracking-tight text-gray-900">Send Us a <span className="text-gradient">Message</span></h2>

                  {formStatus && (
                    <div className="bg-blue-50 border border-blue-100 text-blue-600 p-6 rounded-2xl mb-10 animate-pulse text-sm font-bold">
                      {formStatus}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-4">Full Name *</label>
                        <input
                          required name="name" value={formData.name} onChange={handleChange} placeholder="John Doe"
                          className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 focus:bg-white transition-all text-gray-900 placeholder:text-gray-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-4">Email Address *</label>
                        <input
                          required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com"
                          className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 focus:bg-white transition-all text-gray-900 placeholder:text-gray-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-4">Phone Number</label>
                        <input
                          name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXX XXX XXXX"
                          className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 focus:bg-white transition-all text-gray-900 placeholder:text-gray-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-4">Company</label>
                        <input
                          name="company" value={formData.company} onChange={handleChange} placeholder="Company Name"
                          className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 focus:bg-white transition-all text-gray-900 placeholder:text-gray-400"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-4">Project Details *</label>
                      <textarea
                        required name="message" value={formData.message} onChange={handleChange} rows="5" placeholder="Tell us about your project or inquiry..."
                        className="w-full bg-gray-50 border border-gray-200 rounded-3xl px-6 py-4 outline-none focus:border-blue-500 focus:bg-white transition-all resize-none text-gray-900 placeholder:text-gray-400"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-6 bg-blue-600 text-white font-black text-xl rounded-[24px] hover:bg-blue-500 transition-all shadow-[0_0_50px_rgba(37,99,235,0.2)] hover:scale-[1.02] active:scale-95"
                    >
                      Send Proposal
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section ref={faqRef} className="py-24 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-6">
            <div className="text-center mb-24">
              <h2 className="text-3xl md:text-5xl font-black mb-4 text-gray-900">Common <span className="text-gradient">Queries</span></h2>
              <p className="text-gray-600">Find quick answers to your project concerns.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white shadow-[0_10px_40px_rgba(0,0,0,0.05)] p-10 rounded-[32px] border border-gray-100 hover:border-blue-500/30 transition-all cursor-default group hover:-translate-y-1">
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
