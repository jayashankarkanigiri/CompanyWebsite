import React from 'react';

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, requirements, and challenges to create a comprehensive project roadmap.",
      details: ["Requirements gathering", "Market research", "Technical feasibility", "Project planning"]
    },
    {
      number: "02",
      title: "Design & Prototyping",
      description: "Our design team creates intuitive user interfaces and experiences with interactive prototypes for your approval.",
      details: ["UI/UX design", "Wireframing", "Interactive prototypes", "Design systems"]
    },
    {
      number: "03",
      title: "Development & Implementation",
      description: "We build your solution using agile methodologies, ensuring regular updates and transparent communication throughout.",
      details: ["Clean code development", "Version control", "Regular sprints", "Code reviews"]
    },
    {
      number: "04",
      title: "Testing & Quality Assurance",
      description: "Rigorous testing ensures your software is bug-free, secure, and performs optimally under all conditions.",
      details: ["Unit testing", "Integration testing", "Performance testing", "Security audits"]
    },
    {
      number: "05",
      title: "Deployment & Launch",
      description: "We handle the complete deployment process, ensuring a smooth transition from development to production.",
      details: ["Production setup", "Data migration", "Go-live support", "Performance monitoring"]
    },
    {
      number: "06",
      title: "Support & Maintenance",
      description: "Our relationship doesn't end at launch. We provide ongoing support and maintenance to ensure continued success.",
      details: ["24/7 monitoring", "Regular updates", "Bug fixes", "Feature enhancements"]
    }
  ];

  return (
    <section id="process" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How We <span className="text-red-400">Work</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our proven development process ensures successful project delivery and exceptional results
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-400 to-blue-400 hidden lg:block"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-full lg:w-5/12">
                  <div className="bg-gradient-to-br from-red-900/10 to-blue-900/10 backdrop-blur-sm rounded-xl p-8 border border-red-900/20 card-hover">
                    <div className="flex items-center mb-4">
                      <span className="text-4xl font-bold text-red-400 mr-4">{step.number}</span>
                      <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-gray-400 text-sm">
                          <svg className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="hidden lg:block w-2/12"></div>
                
                <div className="w-full lg:w-5/12 flex justify-center lg:justify-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-blue-400 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center fade-in">
          <button className="bg-gradient-to-r from-red-400 to-blue-400 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;
