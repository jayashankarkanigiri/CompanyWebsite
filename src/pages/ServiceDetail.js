import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../index.css';

// Import assets
import webDevImg from '../assets/web_development.png';
import mobileAppImg from '../assets/mobile_app_development.png';
import cloudImg from '../assets/cloud_services.png';
import sapImg from '../assets/sap_image.png';
import salesforceImg from '../assets/salesforce.png';
import securityImg from '../assets/security.png';
import reliabilityImg from '../assets/reliability.png';
import uiuxImg from '../assets/UIUX.png';
import customDevImg from '../assets/CustomDeve.png';

gsap.registerPlugin(ScrollTrigger);

const serviceData = {
  "web-development": {
    title: "Web Development",
    subtitle: "Next-Generation Web Digital Experiences",
    description: "We build modern, responsive, and blazing-fast web applications using cutting-edge technologies like React, Node.js, and modern CSS frameworks. Our solutions are designed to scale, offering seamless user experiences across all devices and platforms.",
    image: webDevImg,
    benefits: [
      "Custom Architecture Design",
      "Progressive Web Apps (PWAs)",
      "SEO-Optimized Rendering",
      "Enterprise-grade Security"
    ],
    accentColor: "from-blue-500 to-cyan-500"
  },
  "mobile-app-development": {
    title: "Mobile App Development",
    subtitle: "Native & Cross-Platform Excellence",
    description: "Deliver exceptional mobile experiences to your users with our custom mobile app development services. Whether it's iOS, Android, or cross-platform solutions like React Native, we build applications that are performant, secure, and beautiful.",
    image: mobileAppImg,
    benefits: [
      "Native iOS & Android Apps",
      "Cross-Platform Solutions",
      "Intuitive UX/UI Design",
      "App Store Optimization"
    ],
    accentColor: "from-purple-500 to-pink-500"
  },
  "cloud-services": {
    title: "Cloud Services & DevOps",
    subtitle: "Scalable Infrastructure & DevOps",
    description: "Accelerate your digital transformation with our comprehensive cloud services. We help businesses migrate, manage, and optimize their infrastructure on major cloud platforms like AWS, Azure, and Google Cloud, ensuring maximum uptime and efficiency.",
    image: cloudImg,
    benefits: [
      "Cloud Migration & Architecture",
      "DevOps Automation",
      "Serverless Deployments",
      "24/7 Monitoring & Support"
    ],
    accentColor: "from-cyan-500 to-teal-500"
  },
  "sap-engineering": {
    title: "SAP Engineering",
    subtitle: "Enterprise Resource Planning & Integration",
    description: "Streamline your business operations with our expert SAP engineering services. We analyze your complex business needs to configure, implement, and maintain robust SAP software solutions that drive enterprise-wide efficiency and data synchronization.",
    image: sapImg,
    benefits: [
      "SAP S/4HANA Implementation",
      "Custom Module Configuration",
      "Legacy System Integration",
      "Business Intelligence Analytics"
    ],
    accentColor: "from-blue-600 to-indigo-600"
  },
  "salesforce": {
    title: "Salesforce Development",
    subtitle: "Customer Relationship Management at Scale",
    description: "Enhance your customer relationships and streamline sales operations with tailored Salesforce solutions. From initial setup and custom Apex development to complex integrations with third-party tools, we empower your CRM strategy.",
    image: salesforceImg,
    benefits: [
      "Sales & Service Cloud Setup",
      "Custom Apex Development",
      "Third-party API Integration",
      "Workflow Automation"
    ],
    accentColor: "from-blue-400 to-indigo-500"
  },
  "security": {
    title: "Security & Compliance",
    subtitle: "Fortifying Your Digital Assets",
    description: "We implement robust enterprise-grade security protocols to protect your applications from vulnerabilities. Our solutions stay ahead of emerging threats while ensuring adherence to industry regulations and compliance standards.",
    image: securityImg,
    benefits: [
      "Vulnerability Assessments",
      "End-to-End Encryption",
      "Identity & Access Management",
      "Regulatory Compliance (SOC2, GDPR)"
    ],
    accentColor: "from-emerald-500 to-green-600"
  },
  "reliability": {
    title: "Site Reliability Engineering",
    subtitle: "Maximizing Uptime & Performance",
    description: "Our Site Reliability Engineering (SRE) approach guarantees that your applications remain highly available and performant at scale. We combine software engineering with IT operations to build robust and scalable systems.",
    image: reliabilityImg,
    benefits: [
      "Automated Incident Management",
      "Load Balancing & Auto-Scaling",
      "Continuous Monitoring & Alerts",
      "Disaster Recovery & Redundancy"
    ],
    accentColor: "from-blue-600 to-blue-800"
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    subtitle: "User-Centric Digital Experiences",
    description: "We craft intuitive, engaging, and stunning interfaces that focus on the user journey. From wireframing to pixel-perfect prototypes, our design team ensures your application not only looks incredible but is functionally seamless.",
    image: uiuxImg,
    benefits: [
      "User Research & Personas",
      "Wireframing & Prototyping",
      "Interactive Interface Design",
      "Usability Testing & Optimization"
    ],
    accentColor: "from-pink-500 to-rose-500"
  },
  "custom-software": {
    title: "Custom Software Development",
    subtitle: "Bespoke Solutions for Unique Challenges",
    description: "Off-the-shelf software doesn't always fit. We build custom, end-to-end software solutions tailored specifically to your exact business rules, workflows, and long-term scaling requirements.",
    image: customDevImg,
    benefits: [
      "Requirements Analysis & Architecture",
      "End-to-End Bespoke Development",
      "Legacy System Modernization",
      "Seamless API Integrations"
    ],
    accentColor: "from-indigo-500 to-violet-500"
  }
};

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = serviceData[id];

  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    if (!data) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Hero Text Animations
    const titleElements = heroRef.current.querySelectorAll('.animate-text');
    tl.fromTo(titleElements, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, delay: 0.1 }
    );

    // Hero Image Reveal
    tl.fromTo(imageRef.current,
      { opacity: 0, scale: 0.9, rotateX: 10 },
      { opacity: 1, scale: 1, rotateX: 0, duration: 1.2 },
      "-=0.5"
    );

    // Subtle floating hook for image
    gsap.to(imageRef.current, {
      y: -15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    // Content Block Scroll Animation
    gsap.fromTo(contentRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        }
      }
    );

    // Benefits List Stagger
    const listItems = listRef.current.querySelectorAll('li');
    gsap.fromTo(listItems,
      { opacity: 0, x: -30 },
      {
        opacity: 1, x: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: listRef.current,
          start: "top 85%"
        }
      }
    );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [data, id]);

  if (!data) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center text-gray-900 pt-32 pb-32">
        <h1 className="text-4xl font-black mb-4">Service Not Found</h1>
        <button onClick={() => navigate('/services')} className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-colors">
          Return to Services
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-900 overflow-hidden pb-32 pt-20">
      {/* Back Button Overlay */}
      <div className="fixed top-28 left-6 md:left-12 z-50">
        <button 
          onClick={() => navigate('/services')}
          className="w-12 h-12 rounded-full bg-white border border-gray-100 shadow-md flex items-center justify-center text-gray-900 hover:bg-white hover:scale-110 transition-all duration-300 group"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-20 pb-20 px-6 min-h-[60vh] flex items-center">
        {/* Background glow specific to category */}
        {/* Glow orbs removed for performance */}
        
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="max-w-3xl">
              <div className="animate-text inline-block px-4 py-2 border border-gray-100 rounded-full font-bold text-sm tracking-widest uppercase mb-6 bg-white shadow-sm text-gray-700">
                Technology Detail
              </div>
              <h1 className="animate-text text-5xl md:text-7xl font-black mb-6 leading-tight">
                {data.title}
              </h1>
              <p className="animate-text text-xl md:text-2xl text-gray-600 font-light mb-8 max-w-xl">
                {data.subtitle}
              </p>
            </div>

            <div className="relative perspective-1000">
              <div ref={imageRef} className="relative bg-white p-8 rounded-[40px] border border-gray-100 shadow-[0_30px_60px_rgba(0,0,0,0.5)] flex items-center justify-center">
                <div className={`absolute inset-0 bg-gradient-to-br ${data.accentColor} opacity-10 rounded-[40px] mix-blend-overlay`}></div>
                <img 
                  src={data.image} 
                  alt={data.title}
                  className="w-full h-auto object-contain max-h-[300px] relative z-10 drop-shadow-2xl hover:scale-110 transition-transform duration-700" 
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Content Details Layer */}
      <div className="container mx-auto px-6 relative z-20">
        <div ref={contentRef} className="bg-white text-gray-900 rounded-[40px] border border-gray-100 p-10 md:p-16 shadow-[0_30px_60px_rgba(0,0,0,0.5)] flex flex-col lg:flex-row gap-16 relative overflow-hidden -mt-10 lg:-mt-24">
          
          {/* subtle pattern inside white block */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/30 rounded-bl-full z-0"></div>

          <div className="lg:w-3/5 relative z-10">
            <h2 className="text-3xl font-black text-gray-900 mb-6">Overview</h2>
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              {data.description}
            </p>
            
            <div className="mt-12">
              <button 
                onClick={() => navigate('/contact#proposal')}
                className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors duration-300 shadow-xl"
              >
                Discuss Your Project
              </button>
            </div>
          </div>

          <div className="lg:w-2/5 relative z-10 w-full">
            <div className={`p-8 rounded-3xl bg-gradient-to-br ${data.accentColor} text-white shadow-xl h-full`}>
              <h3 className="text-2xl font-black mb-8">Key Capabilities</h3>
              <ul ref={listRef} className="space-y-6">
                {data.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-4 text-lg font-bold">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 shadow-inner">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
  );
};

export default ServiceDetail;
