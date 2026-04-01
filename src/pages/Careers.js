import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import careersImg from '../assets/TanvoxCareers2.png';
import '../index.css';

gsap.registerPlugin(ScrollTrigger);

const Careers = () => {
  const navigate = useNavigate();
  const [expandedJob, setExpandedJob] = useState(null);
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  const benefitsRef = useRef(null);
  const openingsRef = useRef(null);
  const cultureRef = useRef(null);
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
      y: 15,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // --- ScrollTrigger Animations ---

    // Benefits Reveal
    const benefitCards = benefitsRef.current.querySelectorAll('.bg-white');
    gsap.fromTo(benefitCards,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );

    // Openings Stagger
    const jobCards = openingsRef.current.querySelectorAll('.bg-white');
    gsap.fromTo(jobCards,
      { opacity: 0, x: -30 },
      {
        opacity: 1, x: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: openingsRef.current,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );

    // Culture Sections
    const cultureItems = cultureRef.current.querySelectorAll('.bg-white');
    gsap.fromTo(cultureItems,
      { opacity: 0, y: 60, scale: 0.95 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: cultureRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse"
        }
      }
    );

    // Final CTA Reveal
    gsap.fromTo(ctaRef.current,
      { opacity: 0, y: 80, scale: 0.98 },
      {
        opacity: 1, y: 0, scale: 1,
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

  const jobs = [
    {
      id: 1,
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "We are looking for an experienced Full Stack Developer to join our team and help build amazing user interfaces.",
      requirements: [
        "0-2+ years of experience with React/Next.js",
        "Strong understanding of modern JavaScript",
        "Experience with Python, Django",
        "Knowledge of responsive design principles",
        "Experience with state management (Redux, Zustand, etc.)"
      ],
      benefits: ["Competitive salary", "Health insurance", "Flexible work hours", "Remote work options", "Professional development budget"]
    },
    {
      id: 2,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Hybrid",
      type: "Full-time",
      description: "Join our backend team to build scalable and robust server-side applications.",
      requirements: [
        "0-2+ years of experience with DevOps",
        "Strong knowledge of databases",
        "Strong experience with CI/CD tools",
        "Experience with cloud services (AWS, Azure)",
        "Understanding of microservices architecture"
      ],
      benefits: ["Competitive salary", "Health insurance", "Flexible work hours", "Remote work options", "Professional development budget"]
    },
    {
      id: 3,
      title: "QA Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "We are looking for a detail-oriented QA Engineer to ensure the quality and reliability of our web and mobile applications.",
      requirements: [
        "0–2 years of experience in Software Quality Assurance",
        "Experience in manual/automated testing",
        "Familiarity with tracking tools like Jira",
        "Good analytical and problem-solving skills"
      ],
      benefits: ["Competitive salary", "Health insurance", "Flexible work hours", "Remote work options", "Professional development budget"]
    }
  ];

  const benefits = [
    {
      title: "Health & Wellness", description: "Comprehensive health insurance and wellness programs.", icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      )
    },
    {
      title: "Flexible Work", description: "Remote and hybrid options with flexible hours.", icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      )
    },
    {
      title: "Professional Growth", description: "Annual budget for courses and certifications.", icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      )
    },
    {
      title: "Team Culture", description: "Regular team events, hackathons, and collaboration.", icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    }
  ];

  const toggleJobExpansion = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  const handleApplyClick = (jobTitle) => {
    const slug = jobTitle === 'General Application'
      ? 'general'
      : jobTitle.toLowerCase().replace(/\s+/g, '-');
    navigate(`/careers/apply/${slug}`);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-900 overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden">
        {/* Background Effects */}
        <div className="bg-mesh opacity-40"></div>
        <div className="grid-bg absolute inset-0"></div>

        {/* Glow Orbs Removed */}



        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Text Content */}
            <div className="max-w-2xl order-1 lg:order-2">
              <h1 ref={titleRef} className="text-2xl md:text-4xl font-black mb-6 leading-[1.1] tracking-tighter">
                Join Our <br />
                <span className="text-gradient">Team</span>
              </h1>

              <p ref={textRef} className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-10">
                Build your career with a team that values innovation, growth, and work-life balance.
                Be part of a dynamic team where creativity meets technology.
                We empower our people to learn, grow, and make meaningful impact through real-world projects and continuous innovation.
                <br /><br />
                At our core, we believe in collaboration, flexibility, and creating an environment
                where talent thrives and ideas turn into reality.
              </p>

            </div>

            {/* Hero Image */}
            <div className="relative order-2 lg:order-1">
              <div ref={imageRef} className="relative z-10 overflow-hidden group hover:-translate-y-2 transition-transform duration-700">
                <img
                  fetchPriority="high"
                  src={careersImg}
                  alt="Tanvox Future Careers"
                  className="w-full h-auto transition-all duration-700 object-cover scale-[1.02] mix-blend-multiply bg-transparent"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Light Content wrapper */}
      <div className="bg-[#f8fafc] text-gray-900 relative rounded-t-[3rem] z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.3)] pt-10 pb-10">

        {/* Why Join Us */}
        <section ref={benefitsRef} className="py-8 md:py-16 relative bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-20 text-center text-gray-900">Why <span className="text-gradient">Join Us</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white shadow-[0_10px_30px_rgba(0,0,0,0.3)] p-10 rounded-[32px] hover:bg-white transition-all duration-300 border border-gray-100 hover:border-blue-500/50 group hover:-translate-y-2">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 group-hover:scale-110 transition-transform animate-float text-blue-600 border border-blue-500/20">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-400 transition-colors uppercase tracking-tighter">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Openings */}
        <section ref={openingsRef} className="py-8 md:py-16 relative bg-[#f8fafc]" id="openings">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black mb-4 text-gray-900">Current <span className="text-gradient">Openings</span></h2>
              <p className="text-gray-600">Join a team that pushes boundaries and delivers quality at scale.</p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {jobs.map((job, index) => (
                <div key={job.id} className="bg-white shadow-[0_10px_30px_rgba(0,0,0,0.3)] rounded-[32px] overflow-hidden border border-gray-100 hover:border-blue-500/50 transition-all">
                  <div className="p-8 cursor-pointer hover:bg-white" onClick={() => toggleJobExpansion(job.id)}>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-3 tracking-tight">{job.title}</h3>
                        <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest text-gray-600">
                          <span className="flex items-center gap-2">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                              <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                              <path d="M9 22v-4h6v4" />
                              <path d="M8 6h.01" />
                              <path d="M16 6h.01" />
                              <path d="M12 6h.01" />
                              <path d="M12 10h.01" />
                              <path d="M12 14h.01" />
                              <path d="M16 10h.01" />
                              <path d="M16 14h.01" />
                              <path d="M8 10h.01" />
                              <path d="M8 14h.01" />
                            </svg>
                            {job.department}
                          </span>
                          <span className="flex items-center gap-2">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                              <circle cx="12" cy="10" r="3" />
                            </svg>
                            {job.location}
                          </span>
                          <span className="flex items-center gap-2">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                              <circle cx="12" cy="12" r="10" />
                              <polyline points="12 6 12 12 16 14" />
                            </svg>
                            {job.type}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">View Details</span>
                        <div className={`w-8 h-8 rounded-full bg-white flex items-center justify-center transform transition-transform ${expandedJob === job.id ? 'rotate-180' : ''}`}>
                          <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {expandedJob === job.id && (
                    <div className="px-8 pb-10 pt-4 border-t border-gray-100 bg-white/50">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                          <h4 className="text-xs font-black uppercase tracking-widest text-blue-600 mb-4">The Role</h4>
                          <p className="text-gray-600 leading-relaxed mb-6">{job.description}</p>

                          <h4 className="text-xs font-black uppercase tracking-widest text-blue-600 mb-4">Requirements</h4>
                          <ul className="space-y-3">
                            {job.requirements.map((req, i) => (
                              <li key={i} className="text-gray-600 text-sm flex gap-3">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 mt-1 shrink-0">
                                  <polyline points="9 18 15 12 9 6" />
                                </svg>
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-xs font-black uppercase tracking-widest text-purple-600 mb-4">Perks & Benefits</h4>
                          <ul className="grid grid-cols-1 gap-3 mb-8">
                            {job.benefits.map((benefit, i) => (
                              <li key={i} className="text-gray-600 text-sm flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span> {benefit}</li>
                            ))}
                          </ul>
                          <button onClick={() => handleApplyClick(job.title)} className="inline-block px-10 py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-500 transition-all shadow-xl hover:shadow-blue-500/20 active:scale-95">Apply For This Position</button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Culture */}
        <section ref={cultureRef} className="py-8 md:py-16 relative bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20 text-center">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900">Our <span className="text-gradient">Culture</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white shadow-[0_10px_30px_rgba(0,0,0,0.3)] p-10 rounded-[32px] border border-gray-100 hover:border-blue-500/50 transition-all hover:-translate-y-2 hover:bg-white">
                <h3 className="text-2xl font-bold mb-4 text-blue-600 tracking-tight">Innovation & Learning</h3>
                <p className="text-gray-600 leading-relaxed">We foster a culture of continuous learning and innovation. Regular hackathons and tech talks keep us ahead of the curve.</p>
              </div>
              <div className="bg-white shadow-[0_10px_30px_rgba(0,0,0,0.3)] p-10 rounded-[32px] border border-gray-100 hover:border-purple-500/50 transition-all hover:-translate-y-2 hover:bg-white">
                <h3 className="text-2xl font-bold mb-4 text-purple-600 tracking-tight">Work-Life Balance</h3>
                <p className="text-gray-600 leading-relaxed">Flexible hours and remote-first policies ensure our team stays creative and energized without burnout.</p>
              </div>
              <div className="bg-white shadow-[0_10px_30px_rgba(0,0,0,0.3)] p-10 rounded-[32px] border border-gray-100 hover:border-blue-500/50 transition-all hover:-translate-y-2 hover:bg-white">
                <h3 className="text-2xl font-bold mb-4 text-blue-600 tracking-tight">Collaboration</h3>
                <p className="text-gray-600 leading-relaxed">An open-door policy where every voice matters. We build as a unified front, sharing successes together.</p>
              </div>
              <div className="bg-white shadow-[0_10px_30px_rgba(0,0,0,0.3)] p-10 rounded-[32px] border border-gray-100 hover:border-purple-500/50 transition-all hover:-translate-y-2 hover:bg-white">
                <h3 className="text-2xl font-bold mb-4 text-purple-600 tracking-tight">Clear Career Paths</h3>
                <p className="text-gray-600 leading-relaxed">Structured growth plans and mentorship ensure you are never stagnant in your professional journey.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Ready to Join Us Removed */}


      </div>
    </div>
  );
};

export default Careers;
