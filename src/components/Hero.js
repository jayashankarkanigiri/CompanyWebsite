import React, { useEffect, useRef } from 'react';
import Button from './Button';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const moveX = (clientX - innerWidth / 2) * 0.01;
      const moveY = (clientY - innerHeight / 2) * 0.01;
      
      heroRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-blue-900/20"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl parallax-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl parallax-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl parallax-medium"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto" ref={heroRef}>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in">
          <span className="block text-white mb-2">Building Future-Ready</span>
          <span className="block text-red-400">Software Solutions</span>
        </h1>
        
        <p
  className="text-xl md:text-2xl text-[#0a0f2c] mb-8 max-w-3xl mx-auto fade-in"
  style={{ animationDelay: "0.2s" }}
>
  Transform your business with cutting-edge technology and innovative software development
</p>

        
        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in" style={{ animationDelay: '0.4s' }}>
          <Button className="text-lg px-8 py-4">
            Start Your Project
          </Button>
          <button className="border-2 border-red-400 text-red-400 px-8 py-4 rounded-lg hover:bg-red-400 hover:text-white transition-all duration-300 text-lg font-semibold">
            View Our Work
          </button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">500+</div>
            <div className="text-gray-400">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">50+</div>
            <div className="text-gray-400">Expert Developers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">98%</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
