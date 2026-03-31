import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import '../index.css';

const Apply = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formStatus, setFormStatus] = useState("idle");

  // Format the job title based on the URL parameter
  const jobTitle = id && id !== 'general'
    ? id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : 'General Application';

  useEffect(() => {
    gsap.fromTo(".apply-hero",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
    gsap.fromTo(".apply-form-box",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power3.out" }
    );
    window.scrollTo(0, 0);
  }, []);

  // const handleApplicationSubmit = (e) => {
  //   e.preventDefault();
  //   setFormStatus("submitting");
  //   setTimeout(() => setFormStatus("success"), 2000);
  // };

  const handleApplicationSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("submitting");

    const form = e.target.elements;

    const formData = {
      fullName: form.fullName.value,
      email: form.email.value,
      phone: form.phone.value,
      linkedin: form.linkedin.value,
      portfolio: form.portfolio.value,
      passedOutYear: form.passedOutYear.value,
      experienceType: form.experienceType.value,
      resume: form.resume.value,
      coverLetter: form.coverLetter.value,
      jobTitle: jobTitle
    };

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbxLaEq_LBXnr0dZSNKdL5nyJ14ZEgQuw_NoF0lZXIISzOrnUwgyExS2fm5LT3Dj_U7d/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );

      const text = await res.text();
      console.log("Response:", text);

      setFormStatus("success");
    } catch (error) {
      console.error(error);
      alert("Error submitting form");
      setFormStatus("idle");
    }
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-24 relative overflow-hidden text-gray-900">

      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-blue-50 to-transparent z-0"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute top-40 -left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">

        {/* Back Button */}
        <button onClick={() => navigate('/careers')} className="mb-10 flex items-center gap-2 text-gray-500 hover:text-blue-600 font-bold transition-colors group z-20 relative">
          <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center shadow-sm border border-gray-200 group-hover:scale-110 transition-transform">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </div>
          Back to Careers
        </button>

        <div className="apply-hero text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 text-gray-900">Join Our <span className="text-gradient">Team</span></h1>
          <p className="text-xl md:text-2xl text-gray-600 font-medium tracking-tight">Position: <span className="text-blue-600 font-black bg-blue-50 shadow-sm border border-blue-100 px-5 py-2 rounded-full text-lg ml-2">{jobTitle}</span></p>
        </div>

        <div className="apply-form-box bg-white rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden border border-gray-100 p-8 md:p-16">

          {formStatus === "success" ? (
            <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-8 shadow-sm border border-green-100">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <h4 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Application Successfully Sent!</h4>
              <p className="text-xl text-gray-600 max-w-lg mx-auto mb-12 leading-relaxed">Thank you for applying to Tanvox Technologies. Our recruitment team will review your profile and reach out to you shortly.</p>
              <button
                onClick={() => navigate('/careers')}
                className="mx-auto px-10 py-5 bg-blue-600 text-white font-black text-lg rounded-2xl hover:bg-blue-500 transition-colors shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 active:scale-95 flex items-center gap-3"
              >
                Return to Careers
              </button>
            </div>
          ) : (
            <form onSubmit={handleApplicationSubmit} className="space-y-8">
              <h3 className="text-2xl font-black text-gray-900 mb-8 tracking-tight border-b border-gray-100 pb-4">Personal Information</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3 text-left">
                  <label className="text-sm font-bold text-gray-600 tracking-wide uppercase">Full Name <span className="text-blue-500">*</span></label>
                  <input type="text" name="fullName" required className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 transition-all outline-none font-medium text-gray-900 placeholder:text-gray-400" placeholder="e.g. John Doe" />
                </div>
                <div className="space-y-3 text-left">
                  <label className="text-sm font-bold text-gray-600 tracking-wide uppercase">Email Address <span className="text-blue-500">*</span></label>
                  <input type="email" name="email" required className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 transition-all outline-none font-medium text-gray-900 placeholder:text-gray-400" placeholder="john@example.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3 text-left">
                  <label className="text-sm font-bold text-gray-600 tracking-wide uppercase">Phone Number <span className="text-blue-500">*</span></label>
                  <input type="tel" name="phone" required className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 transition-all outline-none font-medium text-gray-900 placeholder:text-gray-400" placeholder="+91 9876543210" />
                </div>
                <div className="space-y-3 text-left">
                  <label className="text-sm font-bold text-gray-600 tracking-wide uppercase">LinkedIn Profile URL</label>
                  <input type="url" name="linkedin" className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 transition-all outline-none font-medium text-gray-900 placeholder:text-gray-400" placeholder="https://linkedin.com/in/username" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-3 text-left">
                  <label className="text-sm font-bold text-gray-600 tracking-wide uppercase">Portfolio Link (Optional)</label>
                  <input type="url" name="portfolio" className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 transition-all outline-none font-medium text-gray-900 placeholder:text-gray-400" placeholder="https://yourportfolio.com" />
                </div>
                <div className="space-y-3 text-left">
                  <label className="text-sm font-bold text-gray-600 tracking-wide uppercase">Passed Out Year <span className="text-blue-500">*</span></label>
                  <input type="text" name="passedOutYear" required className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 transition-all outline-none font-medium text-gray-900 placeholder:text-gray-400" placeholder="e.g. 2023" />
                </div>
              </div>

              <div className="space-y-3 text-left pt-2 pb-4 border-b border-gray-100">
                <label className="text-sm font-bold text-gray-600 tracking-wide uppercase block mb-4">Experience Level <span className="text-blue-500">*</span></label>
                <div className="flex items-center gap-8">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" name="experienceType" value="Fresher" required className="w-5 h-5 text-blue-600 focus:ring-blue-500 border-gray-300" />
                    <span className="text-gray-800 font-bold group-hover:text-blue-600 transition-colors">Fresher</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" name="experienceType" value="Experienced" required className="w-5 h-5 text-blue-600 focus:ring-blue-500 border-gray-300" />
                    <span className="text-gray-800 font-bold group-hover:text-blue-600 transition-colors">Experienced</span>
                  </label>
                </div>
              </div>

              <div className="space-y-3 text-left pt-6">
                <label className="text-sm font-bold text-gray-600 tracking-wide uppercase">Resume/CV Drive Link <span className="text-blue-500">*</span></label>
                <input type="url" name="resume" required className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 transition-all outline-none font-medium text-gray-900 placeholder:text-gray-400" placeholder="https://drive.google.com/..." />
              </div>

              <div className="space-y-3 text-left pt-6">
                <label className="text-sm font-bold text-gray-600 tracking-wide uppercase">Cover Letter Drive Link (Optional)</label>
                <input type="url" name="coverLetter" className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 transition-all outline-none font-medium text-gray-900 placeholder:text-gray-400" placeholder="https://drive.google.com/..." />
              </div>

              <div className="pt-8">
                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full py-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-black text-xl rounded-2xl hover:shadow-[0_20px_40px_rgba(79,70,229,0.3)] transition-all flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formStatus === "submitting" ? (
                    <>
                      <svg className="animate-spin h-6 w-6 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Transmitting Application...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>
      </div>
    </div>
  );
};

export default Apply;
