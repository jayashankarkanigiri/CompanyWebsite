import React, { useState } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      company: "TechStart Inc.",
      content: "Tanvox Technologies transformed our business with their innovative software solutions. Their team's expertise and dedication exceeded our expectations.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      position: "CTO, DataFlow Systems",
      company: "DataFlow Systems",
      content: "Working with Tanvox was a game-changer for our company. They delivered a complex project on time and within budget with exceptional quality.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      position: "Product Manager, InnovateCo",
      company: "InnovateCo",
      content: "The team at Tanvox Technologies understood our vision perfectly and brought it to life. Their attention to detail and technical excellence is unmatched.",
      rating: 5,
      avatar: "ER"
    },
    {
      name: "David Kim",
      position: "Founder, CloudBase",
      company: "CloudBase",
      content: "Tanvox's cloud solutions helped us scale our infrastructure seamlessly. Their ongoing support and maintenance have been invaluable to our growth.",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Lisa Thompson",
      position: "Director of Operations, GlobalTech",
      company: "GlobalTech",
      content: "From discovery to deployment, Tanvox Technologies demonstrated professionalism and expertise. They're now our trusted technology partner.",
      rating: 5,
      avatar: "LT"
    }
  ];

  const partners = [
    { name: "TechCorp", logo: "TC" },
    { name: "DataFlow", logo: "DF" },
    { name: "CloudBase", logo: "CB" },
    { name: "InnovateCo", logo: "IC" },
    { name: "GlobalTech", logo: "GT" },
    { name: "StartUpHub", logo: "SH" }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-red-400">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            <div className="bg-gradient-to-br from-red-900/10 to-blue-900/10 backdrop-blur-sm rounded-2xl p-12 border border-red-900/20 fade-in">
              <div className="flex items-center mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed italic">
                "{testimonials[activeIndex].content}"
              </p>
              
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  {testimonials[activeIndex].avatar}
                </div>
                <div>
                  <div className="text-gray-900 font-bold text-lg">
                    {testimonials[activeIndex].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[activeIndex].position}
                  </div>
                  <div className="text-red-400 text-sm">
                    {testimonials[activeIndex].company}
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-red-400 text-white p-3 rounded-full hover:bg-red-500 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-red-400 text-white p-3 rounded-full hover:bg-red-500 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? 'bg-red-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="fade-in">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Trusted by Leading Companies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-red-900/10 to-blue-900/10 backdrop-blur-sm rounded-xl p-6 border border-red-900/20 flex items-center justify-center card-hover fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-400/20 to-blue-400/20 rounded-full flex items-center justify-center text-red-400 font-bold text-xl mx-auto mb-2">
                    {partner.logo}
                  </div>
                  <div className="text-gray-700 text-sm font-medium">
                    {partner.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center fade-in">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2">85%</div>
              <div className="text-gray-600">Return Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2">200+</div>
              <div className="text-gray-600">Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
