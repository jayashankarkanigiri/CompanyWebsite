import React from 'react';

const Technologies = () => {
  const techCategories = [
    {
      title: "Frontend Development",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      technologies: ["React", "Vue.js", "Angular", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Backend Development",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      technologies: ["Node.js", "Python", "Java", "C#", "Go", "Ruby"]
    },
    {
      title: "Mobile Development",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic", "Xamarin"]
    },
    {
      title: "Cloud & DevOps",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Jenkins"]
    },
    {
      title: "Database Technologies",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "Cassandra"]
    },
    {
      title: "AI & Machine Learning",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI", "Hugging Face", "MLflow"]
    }
  ];

  const allTechnologies = [
    "JavaScript", "TypeScript", "React", "Vue.js", "Angular", "Next.js", "Node.js", "Python", "Java", "C#", "Go", "Ruby", "React Native", "Flutter", "Swift", "Kotlin", "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Jenkins", "PostgreSQL", "MongoDB", "MySQL", "Redis", "TensorFlow", "PyTorch", "Machine Learning", "AI"
  ];

  return (
    <section id="technologies" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technologies <span className="text-red-400">We Master</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We stay at the forefront of technology trends to deliver cutting-edge solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-red-900/10 to-blue-900/10 backdrop-blur-sm rounded-xl p-8 border border-red-900/20 card-hover fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-red-400 mb-4">
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-red-900/20 text-red-400 rounded-full text-sm border border-red-900/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-red-900/20 to-blue-900/20 rounded-2xl p-12 border border-red-900/30 fade-in">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 text-white">
              Our Technology Stack
            </h3>
            <p className="text-gray-300">
              We leverage the best tools and frameworks to build robust, scalable solutions
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {allTechnologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-red-900/30 to-blue-900/30 text-white rounded-lg text-sm border border-red-900/40 hover:border-red-400 transition-colors duration-300"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center fade-in">
          <div>
            <div className="text-3xl font-bold text-red-400 mb-2">50+</div>
            <div className="text-gray-400">Technologies</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-400 mb-2">15+</div>
            <div className="text-gray-400">Frameworks</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-400 mb-2">10+</div>
            <div className="text-gray-400">Cloud Platforms</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-400 mb-2">24/7</div>
            <div className="text-gray-400">Learning & Updating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
