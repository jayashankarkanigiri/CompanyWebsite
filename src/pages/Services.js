import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import servicesImg from '../assets/TanvoxServices3.png';
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
          end: "bottom 30%",
          scrub: 3
        }
      }
    );

    // Process Cards Sequential Stagger
    const steps = processRef.current.querySelectorAll('.process-card');
    gsap.fromTo(steps,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.25, scrollTrigger: { trigger: processRef.current, start: "top 75%", toggleActions: "play reverse play reverse" } }
    );

    const processImages = processRef.current.querySelectorAll('.group\\/img');
    gsap.fromTo(processImages,
      { opacity: 0, scale: 0.8, x: (i) => i % 2 === 0 ? 50 : -50 },
      { opacity: 1, scale: 1, x: 0, duration: 1.2, stagger: 0.25, ease: 'back.out(1.5)', scrollTrigger: { trigger: processRef.current, start: "top 75%", toggleActions: "play reverse play reverse" } }
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
    <div className="min-h-screen bg-[#f8fafc] text-gray-900 overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden">
        {/* Background Effects */}
        <div className="bg-mesh opacity-10"></div>
        <div className="grid-bg absolute inset-0 opacity-50"></div>

        {/* Glow Orbs Removed */}



        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Text Content */}
            <div className="max-w-2xl order-1 lg:order-2">
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

            {/* Hero Image */}
            <div className="relative order-2 lg:order-1">
              <div ref={imageRef} className="relative z-10 overflow-hidden group hover:-translate-y-2 transition-transform duration-700">
                <img
                  fetchPriority="high"
                  src={servicesImg}
                  alt="Tanvox Services Overview"
                  className="w-full h-auto transition-all duration-700 object-cover scale-[1.02] mix-blend-multiply bg-transparent"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Light Content wrapper */}
      <div className="bg-[#f8fafc] text-gray-900 relative rounded-t-[3rem] z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.3)] pt-10 pb-10 border-t border-gray-100">

        {/* Services Grid */}
        <section ref={gridRef} className="py-8 md:py-16 relative bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl font-black mb-4 text-gray-900">Elite <span className="text-gradient">Capabilities</span></h2>
                <p className="text-gray-600">Precision engineering combined with creative design to build products that users love.</p>
              </div>

              <div className="flex flex-wrap gap-3 bg-white p-2 rounded-2xl shadow-sm opacity-0 hidden">
              </div>
            </div>

            <div className="scroller-container py-4 relative">
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

              <div className="scroller-content flex gap-6 lg:gap-8">
                {[...filteredServices, ...filteredServices, ...filteredServices].map((service, index) => (
                  <div
                    key={index}
                    onClick={() => navigate(`/services/${service.id}`)}
                    className={`elite-card bg-white shadow-[0_10px_40px_rgba(0,0,0,0.3)] group p-6 rounded-[32px] hover:-translate-y-1 flex flex-col h-full transition-all duration-500 border border-gray-100 hover:border-blue-500/50 cursor-pointer sm:cursor-pointer min-w-[280px] max-w-[280px] shrink-0 ${index >= filteredServices.length ? 'hide-on-mobile' : ''}`}
                  >
                    <div className="w-full h-32 bg-gradient-to-b from-blue-500/10 to-transparent rounded-2xl flex items-center justify-center mb-6 overflow-hidden relative group-hover:bg-blue-500/20 transition-colors duration-500 text-blue-600 animate-float">
                      <img src={service.image} alt={service.title} loading="lazy" className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-400 transition-colors">
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
          </div>
        </section>

        {/* Process Section */}
        <section ref={processRef} className="py-8 md:py-16 relative bg-[#f8fafc]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-24">
              <h2 className="text-2xl md:text-5xl font-black text-gray-900">Our <span className="text-gradient">Process</span></h2>
            </div>

            <div className="relative max-w-5xl mx-auto">
              {/* Background Line */}
              <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-1 bg-white -translate-x-1/2 rounded-full z-0"></div>
              {/* Animated Drawing Line */}
              <div className="timeline-line absolute left-8 md:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-blue-500 to-purple-500 -translate-x-1/2 origin-top scale-y-0 rounded-full z-0"></div>

              <div className="space-y-12 md:space-y-24 mt-12 pb-12">
                {process.map((item, index) => (
                  <div key={index} className={`relative flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-1 md:gap-0 group ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>

                    {/* Content Box */}
                    <div className={`w-full md:w-[45%] process-card opacity-0 pl-12 md:pl-0 pr-4 md:pr-0 mt-2 md:mt-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="p-0 bg-transparent shadow-none border-none md:p-8 md:bg-white md:shadow-[0_10px_40px_rgba(0,0,0,0.3)] md:rounded-[32px] md:border md:border-gray-100 hover:border-blue-500/50 transition-all duration-500 relative">

                        {/* Connecting Arrow for Desktop */}
                        <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 ${index % 2 === 0 ? '-right-5' : '-left-5'}`}>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700 group-hover:text-blue-500 transition-colors">
                            {index % 2 === 0 ? <polyline points="15 18 9 12 15 6" /> : <polyline points="9 18 15 12 9 6" />}
                          </svg>
                        </div>

                        {/* Watermark Step Number Removed */}

                        <div className="relative z-10">
                          <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-3 text-gray-900 group-hover:text-blue-400 transition-colors tracking-tight">{item.title}</h3>
                          <p className="text-sm md:text-base text-gray-600 leading-relaxed font-medium">{item.description}</p>
                        </div>

                      </div>
                    </div>

                    {/* Image Box */}
                    <div className="flex w-full md:w-[45%] items-start justify-start md:justify-center pl-3 md:pl-0 pr-4 md:pr-8 py-2 md:py-8 mt-1 md:mt-0">
                      <div className="relative group/img text-left md:text-center w-full">
                        {/* Glow bg removed */}
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          className="relative z-10 w-[140px] md:w-full md:max-w-[280px] h-auto object-contain group-hover/img:-translate-y-2 transition-transform duration-500 bg-transparent mx-0 md:mx-auto"
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
        <section ref={techRef} className="py-8 md:py-16 bg-white border-y border-gray-100 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-3xl font-black text-gray-900">Modern <span className="text-gradient">Tech Stack</span></h2>
            </div>

            <div className="scroller-container py-4 relative">
              {/* Fade gradients */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

              <div className="scroller-content !grid grid-cols-2 gap-3 sm:gap-4 md:!flex md:gap-6 w-full">
                {[...technologies, ...technologies].map((tech, index) => (
                  <div
                    key={index}
                    className={`bg-white shadow-[0_4px_15px_rgba(0,0,0,0.05)] md:shadow-[0_10px_40px_rgba(0,0,0,0.3)] p-4 md:p-6 rounded-2xl md:rounded-[32px] flex flex-col items-center justify-center border border-gray-100 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 group cursor-pointer shrink-0 !min-w-0 !max-w-none md:!min-w-[220px] md:!max-w-[220px] ${index >= technologies.length ? 'hide-on-mobile' : ''}`}
                  >
                    <div className="h-16 md:h-32 flex items-center justify-center mb-3 md:mb-6 transition-transform duration-500 group-hover:scale-110 w-full">
                      {tech.image ? (
                        <img src={tech.image} alt={tech.name} loading="lazy" className="h-full w-full object-contain filter group-hover:brightness-110" />
                      ) : (
                        <div className="w-12 h-12 md:w-20 md:h-20 bg-gray-100 rounded-2xl flex items-center justify-center">
                          <span className="text-gray-400 font-bold text-xs md:text-base">Logo</span>
                        </div>
                      )}
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-gray-900 group-hover:text-blue-500 transition-colors text-center">{tech.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


      </div>
    </div>
  );
};

export default Services;
