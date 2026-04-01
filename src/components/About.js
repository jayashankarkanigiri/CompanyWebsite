import React from 'react';
import Button from './Button';

const About = () => {
  const features = [
    {
      title: "Expert Team",
      description: "50+ skilled developers with expertise in cutting-edge technologies",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: "Agile Methodology",
      description: "Iterative development process ensuring flexibility and rapid delivery",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Quality Assurance",
      description: "Rigorous testing processes to ensure robust and reliable solutions",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support to keep your business running smoothly",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-red-400">Tanvox Technologies</span>
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              We are a team of passionate developers and designers dedicated to creating innovative software solutions that drive business growth and digital transformation.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With over a decade of experience in the industry, we've helped hundreds of businesses leverage technology to achieve their goals and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button>Learn More About Us</Button>
              <button className="border-2 border-red-400 text-red-400 px-6 py-3 rounded-lg hover:bg-red-400 hover:text-white transition-all duration-300 font-semibold">
                View Case Studies
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 slide-in-right">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-red-900/10 to-blue-900/10 backdrop-blur-sm rounded-xl p-6 border border-red-900/20 card-hover fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-red-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center fade-in">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="flex flex-col items-center">
                <img
                  src={globalIcon}
                  alt="Serving Globally"
                  className="w-10 h-10 mb-3"
                />
                <div className="text-black font-semibold">Serving Globally</div>
              </div>
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2">20+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2">50+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
