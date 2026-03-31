import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import servicesImg from '../assets/UpdatedServices.png';
import webDevImg from '../assets/web_development.png';
import mobileAppImg from '../assets/mobile_app_development.png';
import cloudImg from '../assets/cloud_services.png';
import sapImg from '../assets/sap_image.png';
import salesforceImg from '../assets/salesforce.png';
import securityImg from '../assets/security.png';
import reliabilityImg from '../assets/reliability.png';
import discoveryImg from '../assets/discovery.png';
import strategyImg from '../assets/Strategy.png';
import designImg from '../assets/design.png';
import developmentImg from '../assets/development.png';
import testingImg from '../assets/testing.png';
import cicdImg from '../assets/cicd.png';
import securityProcessImg from '../assets/security_process.png';
import reliabilityProcessImg from '../assets/reliability_process.png';
import uiuxImg from '../assets/UIUX.png';
import customDevImg from '../assets/CustomDeve.png';
import reactImg from '../assets/react.png';
import nodeImg from '../assets/node.png';
import pythonImg from '../assets/python.png';
import awsImg from '../assets/aws.png';
import dockerImg from '../assets/docker_fixed.png';
import mongodbImg from '../assets/mongodb_fixed.png';
import postgresqlImg from '../assets/postgresql_fixed.png';
import typescriptImg from '../assets/typescript_fixed.png';
import graphqlImg from '../assets/graphql_fixed.png';
import angularImg from '../assets/angular_fixed.png';
import vueImg from '../assets/vue_fixed.png';
import '../index.css';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  const gridRef = useRef(null);
  const processRef = useRef(null);
  const techRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    // Hero Entrance
    tl.fromTo(titleRef.current,
      { opacity: 0, y: 70 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.2 }
    )
      .fromTo(textRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.8"
      )
      .fromTo(imageRef.current,
        { opacity: 0, x: 80, scale: 0.95 },
        { opacity: 1, x: 0, scale: 1, duration: 1.5 },
        "-=1.2"
      );

    // Subtle floating animation for image
    gsap.to(imageRef.current, {
      y: 10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // --- ScrollTrigger Animations ---

    // Service Grid Stagger
    const cards = gridRef.current.querySelectorAll('.elite-card');
    gsap.fromTo(cards,
      { opacity: 0, x: -100 },
      {
        opacity: 1, x: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse"
        }
      }
    );

    // Timeline Path Drawing
    gsap.fromTo('.timeline-line',
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: processRef.current,
          start: "top 60%",
          end: "bottom 80%",
          scrub: 1
        }
      }
    );

    // Process Cards Sequential Stagger
    const steps = processRef.current.querySelectorAll('.process-card');
    gsap.fromTo(steps,
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0,
        duration: 0.8,
        stagger: 0.25,
        scrollTrigger: {
          trigger: processRef.current,
          start: "top 75%",
        }
      }
    );

    // Tech Stack Cards
    const techCards = techRef.current.querySelectorAll('.glass-card');
    gsap.fromTo(techCards,
      { opacity: 0, scale: 0.9, y: 20 },
      {
        opacity: 1, scale: 1, y: 0,
        duration: 0.6,
        stagger: 0.05,
        scrollTrigger: {
          trigger: techRef.current,
          start: "top 90%",
        }
      }
    );

    // Final CTA Reveal
    gsap.fromTo(ctaRef.current,
      { opacity: 0, scale: 0.98, y: 50 },
      {
        opacity: 1, scale: 1, y: 0,
        duration: 1.2,
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

  const services = [
    {
      id: "web-development",
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with cutting-edge technologies.",
      category: "development",
      image: webDevImg
    },
    {
      id: "mobile-app-development",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      category: "mobile",
      image: mobileAppImg
    },
    {
      id: "cloud-services",
      title: "Cloud Services & DevOps",
      description: "Scalable cloud infrastructure and migration services to optimize your operations.",
      category: "cloud",
      image: cloudImg
    },
    {
      id: "sap-engineering",
      title: "SAP Engineering",
      description: "Analyzing business needs, configuring and implementing SAP software solutions.",
      category: "enterprise",
      image: sapImg
    },
    {
      id: "salesforce",
      title: "Salesforce",
      description: "Custom Salesforce solutions to streamline your sales, service, and marketing operations.",
      category: "enterprise",
      image: salesforceImg
    },
    {
      id: "security",
      title: "Security & Compliance",
      description: "Enterprise-grade security measures to protect your digital assets and ensure regulatory compliance.",
      category: "enterprise",
      image: securityImg
    },
    {
      id: "reliability",
      title: "Site Reliability Engineering",
      description: "Robust architectures and automation for maximum uptime, performance, and scalability.",
      category: "cloud",
      image: reliabilityImg
    },
    {
      id: "ui-ux-design",
      title: "UI/UX Design",
      description: "Intuitive, stunning, and user-centric interfaces crafted to elevate digital experiences.",
      category: "design",
      image: uiuxImg
    },
    {
      id: "custom-software",
      title: "Custom Software Development",
      description: "Bespoke digital solutions tailored exactly to your unique business requirements.",
      category: "development",
      image: customDevImg
    }
  ];

  const process = [
    { step: "01", title: "Discovery", description: "Deep dive into your business needs and objectives.", image: discoveryImg },
    { step: "02", title: "Strategy", description: "Defining the technology stack and architecture roadmap.", image: strategyImg },
    { step: "03", title: "Design", description: "Crafting intuitive user interfaces and experiences.", image: designImg },
    { step: "04", title: "Development", description: "Agile engineering with continuous integration.", image: developmentImg },
    { step: "05", title: "QA & Testing", description: "Rigorous automated and manual quality assurance.", image: testingImg },
    { step: "06", title: "CI/CD", description: "Continuous integration and continuous deployment pipelines.", image: cicdImg },
    { step: "07", title: "Security", description: "Ensuring robust data protection and application security.", image: securityProcessImg },
    { step: "08", title: "Reliability", description: "Maximum uptime and performance scaling.", image: reliabilityProcessImg }
  ];

  const technologies = [
    { name: "React", image: reactImg },
    { name: "Node.js", image: nodeImg },
    { name: "Python", image: pythonImg },
    { name: "AWS", image: awsImg },
    { name: "Docker", image: dockerImg },
    { name: "MongoDB", image: mongodbImg },
    { name: "PostgreSQL", image: postgresqlImg },
    { name: "TypeScript", image: typescriptImg },
    { name: "GraphQL", image: graphqlImg },
    { name: "Angular", image: angularImg },
    { name: "Vue", image: vueImg },
    { name: "Kubernetes", image: null }
  ];

  const filteredServices = selectedCategory === 'all'
    ? services
    : services.filter(service => service.category === selectedCategory);

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
            <div className="max-w-2xl">
              <h1 ref={titleRef} className="text-3xl md:text-5xl font-black mb-8 leading-[1] tracking-tighter">
                Our <br />
                <span className="text-gradient">Services</span>
              </h1>

              <p ref={textRef} className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-10">
                Comprehensive software development services designed to transform your business and drive digital innovation.
                We provide end-to-end technology solutions tailored to your business needs, from concept to deployment.
                Our team builds scalable, secure, and high-performance applications that help businesses grow in the digital era.
                <br /><br />
                With expertise in custom software, web and mobile development, cloud integration, and automation,
                we deliver user-focused solutions with seamless performance and future-ready architecture.
              </p>

            </div>

            {/* RIGHT SIDE - IMAGE */}
            <div className="relative">
              <div className="absolute -inset-10 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-[100px] rounded-[32px]"></div>
              <div ref={imageRef} className="relative z-10 shadow-2xl rounded-[32px] overflow-hidden group hover:-translate-y-2 transition-transform duration-700">
                <img
                  src={servicesImg}
                  alt="Tanvox Services Visualization"
                  className="w-full h-auto rounded-[32px] shadow-[0_30px_60px_rgba(0,0,0,0.12)] object-cover scale-[1.02]"
                />

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Light Content wrapper */}
      <div className="bg-white text-gray-900 relative rounded-t-[3rem] z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] pt-10 pb-10 border-t border-gray-100">

        {/* Services Grid */}
        <section ref={gridRef} className="py-32 relative bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl font-black mb-4 text-gray-900">Elite <span className="text-gradient">Capabilities</span></h2>
                <p className="text-gray-600">Precision engineering combined with creative design to build products that users love.</p>
              </div>

              <div className="flex flex-wrap gap-3 bg-white p-2 rounded-2xl border border-gray-100 shadow-sm">
                {['all', 'development', 'design', 'mobile', 'cloud', 'enterprise'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-6 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${selectedCategory === cat
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {filteredServices.map((service, index) => (
                <div
                  key={index}
                  onClick={() => navigate(`/services/${service.id}`)}
                  className="elite-card bg-white shadow-[0_10px_40px_rgba(0,0,0,0.05)] group p-6 rounded-[32px] hover:-translate-y-1 flex flex-col h-full transition-all duration-500 border border-gray-100 hover:border-blue-500/30 cursor-pointer sm:cursor-pointer"
                >
                  <div className="w-full h-32 bg-gradient-to-b from-blue-500/10 to-transparent rounded-2xl flex items-center justify-center mb-6 overflow-hidden border border-blue-500/20 relative group-hover:bg-blue-500/20 transition-colors duration-500 text-blue-600 animate-float">
                    <img src={service.image} alt={service.title} className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-xs">
                    {service.description}
                  </p>
                  <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Learn More</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section ref={processRef} className="py-32 relative bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-24">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900">Our <span className="text-gradient">Process</span></h2>
            </div>

            <div className="relative max-w-5xl mx-auto">
              {/* Background Line */}
              <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-1 bg-gray-200 -translate-x-1/2 rounded-full z-0"></div>
              {/* Animated Drawing Line */}
              <div className="timeline-line absolute left-8 md:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-blue-500 to-purple-500 -translate-x-1/2 origin-top scale-y-0 rounded-full z-0"></div>

              <div className="space-y-12 md:space-y-24 mt-12 pb-12">
                {process.map((item, index) => (
                  <div key={index} className={`relative flex flex-col md:flex-row items-center justify-between group ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>

                    {/* Center Node */}
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 bg-white border-4 border-gray-100 rounded-full z-10 flex items-center justify-center text-blue-600 font-black shadow-sm group-hover:border-blue-500/30 group-hover:scale-110 transition-all duration-500">
                      {index + 1}
                    </div>

                    {/* Content Box */}
                    <div className={`w-full md:w-[45%] process-card opacity-0 pl-24 md:pl-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="p-8 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.05)] rounded-[32px] border border-gray-100 hover:border-blue-500/30 transition-all duration-500 relative">

                        {/* Connecting Arrow for Desktop */}
                        <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 ${index % 2 === 0 ? '-right-5' : '-left-5'}`}>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-gray-200 group-hover:text-blue-600 transition-colors">
                            {index % 2 === 0 ? <polyline points="15 18 9 12 15 6" /> : <polyline points="9 18 15 12 9 6" />}
                          </svg>
                        </div>

                        {/* Watermark Step Number */}
                        <div className={`text-[120px] font-black text-gray-100 absolute -top-12 group-hover:text-blue-500/10 transition-colors z-0 ${index % 2 === 0 ? 'right-6' : 'left-6'} pointer-events-none select-none leading-none`}>
                          0{index + 1}
                        </div>

                        <div className="relative z-10">
                          <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                          <p className="text-gray-600 leading-relaxed font-medium">{item.description}</p>
                        </div>

                      </div>
                    </div>

                    {/* Image side - replaces the empty spacer */}
                    <div className="hidden md:flex w-[45%] items-center justify-center p-8">
                      <div className="relative group/img">
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover/img:opacity-100 transition-opacity duration-500"></div>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="relative z-10 w-full max-w-[280px] h-auto object-contain rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] group-hover/img:-translate-y-2 transition-transform duration-500 bg-transparent"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section ref={techRef} className="py-32 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-3xl font-black text-gray-900">Modern <span className="text-gradient">Tech Stack</span></h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white shadow-[0_10px_40px_rgba(0,0,0,0.05)] p-6 rounded-[24px] flex flex-col items-center justify-center border border-gray-100 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-3 group cursor-pointer"
                >
                  <div className="h-32 md:h-36 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 w-full">
                    {tech.image ? (
                      <img
                        src={tech.image}
                        alt={tech.name}
                        className="w-28 h-28 md:w-32 md:h-32 object-contain animate-float"
                        style={{ animationDelay: `${index * 0.15}s` }}
                      />
                    ) : (
                      <div className="w-28 h-28 md:w-32 md:h-32 flex items-center justify-center bg-gray-50 rounded-2xl text-blue-600 font-black text-3xl animate-float border border-gray-100" style={{ animationDelay: `${index * 0.15}s` }}>
                        K8
                      </div>
                    )}
                  </div>
                  <div className="text-[13px] font-black tracking-widest text-gray-500 group-hover:text-blue-600 transition-colors uppercase">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>


      </div>
    </div>
  );
};

export default Services;
