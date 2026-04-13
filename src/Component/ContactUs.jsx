import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaChevronRight,
  FaShieldAlt,
  FaUserEdit,
  FaPaperPlane
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

/**
 * CONTACT US - ENTERPRISE EDITION
 * Features: Dynamic Math Captcha, WhatsApp API Integration, Form Reset Logic
 * Total Lines: 250+ (Optimized for SEO and Performance)
 */

const CONTACT_CONFIG = {
  phones: ["+91 8588831732", "+91 9873754555"],
  whatsappNumber: "918588831732",
  email: "admin.maatulyahospital@gmail.com",
  address: "Plot No. 12, Sector 9, Dwarka, New Delhi",
  mapSrc: "https://www.google.com/maps?q=Baghpat%20Uttar%20Pradesh&output=embed",
  socials: [
    { icon: <FaFacebookF />, link: "#", label: "Facebook" },
    { icon: <FaInstagram />, link: "#", label: "Instagram" },
    { icon: <FaLinkedinIn />, link: "#", label: "LinkedIn" },
    { icon: <FaSquareXTwitter />, link: "#", label: "Twitter" },
  ]
};

const FAQ_DATA = [
  { q: "What are the visiting hours?", a: "General visiting hours are from 10:00 AM to 1:00 PM and 5:00 PM to 8:00 PM daily." },
  { q: "Do you offer emergency services?", a: "Yes, our Trauma and Emergency department is operational 24/7 with a dedicated ambulance service." },
  { q: "How can I book an appointment?", a: "You can book via this form, WhatsApp, or by calling our emergency lines directly." }
];

export default function ContactUs() {
  // 1. STATE MANAGEMENT
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    captcha: ""
  });
  
  const [captchaNums, setCaptchaNums] = useState({ a: 0, b: 0 });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // 2. CAPTCHA LOGIC
  const generateCaptcha = useCallback(() => {
    setCaptchaNums({
      a: Math.floor(Math.random() * 9) + 1,
      b: Math.floor(Math.random() * 9) + 1
    });
  }, []);

  useEffect(() => {
    generateCaptcha();
  }, [generateCaptcha]);

  // 3. HANDLERS
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Validation: Math Check
    const expectedSum = captchaNums.a + captchaNums.b;
    if (parseInt(formData.captcha) !== expectedSum) {
      alert(`Security check failed. ${captchaNums.a} + ${captchaNums.b} is not ${formData.captcha}.`);
      generateCaptcha();
      setFormData(prev => ({ ...prev, captcha: "" }));
      setIsLoading(false);
      return;
    }

    // Success Sequence
    try {
      const text = `*New Inquiry: Maa Tulya Hospital*%0A%0A` +
                   `*Name:* ${formData.name}%0A` +
                   `*Email:* ${formData.email}%0A` +
                   `*Phone:* ${formData.phone}%0A` +
                   `*Message:* ${formData.message}`;
      
      const whatsappUrl = `https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${text}`;
      
      // Artificial delay for UX "Processing" feel
      await new Promise(resolve => setTimeout(resolve, 800));
      
      window.open(whatsappUrl, "_blank");

      // Reset everything
      setFormData({ name: "", email: "", phone: "", message: "", captcha: "" });
      setIsSubmitted(true);
      generateCaptcha();
      
      setTimeout(() => setIsSubmitted(false), 6000);
    } catch (error) {
      console.error("Submission error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="bg-[#fcfcfd] text-gray-900 overflow-hidden selection:bg-purple-100">
      <Helmet>
        <title>Contact Us | Maa Tulya Hospital - 24/7 Support Dwarka</title>
        <meta name="description" content="Reach out to Maa Tulya Hospital. Our medical team is available 24/7 for appointments and emergency care in Dwarka." />
      </Helmet>

      {/* --- SECTION 1: ANIMATED HERO --- */}
      <section className="relative py-28 bg-[#3B3486] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-widest uppercase mb-6">
              Connect With Us
            </span>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter">
              Get In <span className="text-green-400">Touch.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-purple-100 font-light leading-relaxed">
              Have a question or need medical assistance? Our dedicated patient 
              support team is ready to guide you through every step.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 2: THE INTERACTION HUB --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-20">
          
          {/* LEFT COLUMN: INFO & MAP */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-[#3B3486] mb-6">Contact Information</h2>
              <p className="text-gray-500 leading-relaxed mb-10">
                Visit our facility for high-quality medical care or use the contact 
                details below for remote inquiries.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-white shadow-soft rounded-2xl flex items-center justify-center text-[#3B3486] text-xl group-hover:bg-[#3B3486] group-hover:text-white transition-all">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Call Us</h4>
                    {CONTACT_CONFIG.phones.map(p => <p key={p} className="text-lg font-bold text-[#3B3486]">{p}</p>)}
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-white shadow-soft rounded-2xl flex items-center justify-center text-[#3B3486] text-xl group-hover:bg-[#3B3486] group-hover:text-white transition-all">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Email</h4>
                    <p className="text-lg font-bold text-[#3B3486]">{CONTACT_CONFIG.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-white shadow-soft rounded-2xl flex items-center justify-center text-[#3B3486] text-xl group-hover:bg-[#3B3486] group-hover:text-white transition-all">
                    <FaClock />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Availability</h4>
                    <p className="text-lg font-bold text-[#3B3486]">24 Hours / 7 Days a Week</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* MAP CONTAINER */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative rounded-[40px] overflow-hidden border border-slate-200 shadow-2xl bg-white p-2"
            >
              <iframe
                title="Google Maps Location"
                src={CONTACT_CONFIG.mapSrc}
                className="w-full h-[420px] rounded-[35px]"
                loading="lazy"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-[#3B3486] p-4 rounded-2xl text-white flex items-center gap-4 shadow-xl">
                <FaMapMarkerAlt className="text-green-400 text-2xl" />
                <span className="text-xs font-medium">{CONTACT_CONFIG.address}</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: SMART FORM */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white border border-slate-100 p-10 md:p-16 rounded-[60px] shadow-2xl shadow-purple-900/5 relative"
            >
              <div className="mb-12">
                <h3 className="text-3xl font-bold text-[#3B3486] mb-2 flex items-center gap-3">
                  Quick Inquiry <FaUserEdit className="text-green-500" />
                </h3>
                <p className="text-gray-400">Average response time: &lt; 15 minutes</p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase ml-2">Name</label>
                    <input 
                      required name="name" value={formData.name} onChange={handleChange}
                      type="text" placeholder="John Doe"
                      className="w-full bg-slate-50 border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-[#3B3486] transition-all outline-none font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase ml-2">Email</label>
                    <input 
                      required name="email" value={formData.email} onChange={handleChange}
                      type="email" placeholder="john@example.com"
                      className="w-full bg-slate-50 border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-[#3B3486] transition-all outline-none font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase ml-2">Phone Number</label>
                  <input 
                    required name="phone" value={formData.phone} onChange={handleChange}
                    type="tel" placeholder="+91 00000 00000"
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-[#3B3486] transition-all outline-none font-medium"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase ml-2">Your Message</label>
                  <textarea 
                    required name="message" value={formData.message} onChange={handleChange}
                    rows="4" placeholder="How can we help you today?"
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-[#3B3486] transition-all outline-none font-medium resize-none"
                  ></textarea>
                </div>

                {/* CAPTCHA ENGINE */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-4">
                  <div className="flex items-center gap-4 bg-slate-50 border border-slate-200 px-8 py-4 rounded-3xl group">
                    <FaShieldAlt className="text-[#3B3486] group-hover:rotate-12 transition-transform" />
                    <span className="text-lg font-black text-[#3B3486] tracking-widest italic">
                      {captchaNums.a} + {captchaNums.b} =
                    </span>
                    <input 
                      required name="captcha" value={formData.captcha} onChange={handleChange}
                      type="number" 
                      className="w-20 bg-white border-2 border-slate-200 rounded-xl px-2 py-2 text-center font-bold text-[#3B3486] focus:border-[#3B3486] outline-none transition-colors" 
                    />
                  </div>
                  
                  <button 
                    disabled={isLoading}
                    type="submit"
                    className={`w-full md:w-auto px-16 py-5 rounded-full font-black text-sm uppercase tracking-widest shadow-xl flex items-center justify-center gap-4 transition-all
                      ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#3B3486] text-white hover:bg-green-600 hover:scale-105 active:scale-95 shadow-purple-900/20'}`}
                  >
                    {isLoading ? "Processing..." : "Submit Inquiry"} 
                    <FaPaperPlane className={isLoading ? "animate-pulse" : ""} />
                  </button>
                </div>

                {/* SUCCESS NOTIFICATION */}
                <AnimatePresence>
                  {isSubmitted && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                      className="p-6 bg-green-50 border border-green-200 rounded-3xl flex items-center gap-5"
                    >
                      <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-green-200">
                        <FaWhatsapp className="text-2xl" />
                      </div>
                      <div>
                        <h4 className="font-bold text-green-800">Request Dispatched!</h4>
                        <p className="text-xs text-green-600 font-medium">Form has been reset. Opening WhatsApp for secure chat...</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: FAQ STRIP --- */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#3B3486] mb-4">Common Questions</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {FAQ_DATA.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[40px] shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                <h4 className="text-lg font-bold text-[#3B3486] mb-4">{item.q}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER: CONSISTENT BRANDING --- */}
      <footer className="bg-white border-t border-slate-100 pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Upper Footer: Branding & Quick Actions */}
          <div className="grid lg:grid-cols-12 gap-16 mb-20">
            
            {/* Column 1: Brand Personality */}
            <div className="lg:col-span-4">
              <a href="/" className="inline-block mb-8">
                <h3 className="text-2xl font-black text-[#3B3486] tracking-tighter">
                  MAA TULYA <span className="text-green-600">HOSPITAL</span>
                </h3>
              </a>
              <p className="text-slate-400 font-medium leading-relaxed mb-8 max-w-sm">
                Baghpat's premier healthcare destination, providing multi-speciality medical 
                services with a focus on clinical excellence and patient safety.
              </p>
              <div className="flex gap-4">
                {[FaFacebook, FaInstagram].map((Icon, i) => (
                  <a 
                    key={i} 
                    href="#" 
                    className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-[#3B3486] hover:bg-green-600 hover:text-white transition-all shadow-sm"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="lg:col-span-2 md:col-span-4">
              <h4 className="text-[#3B3486] font-black uppercase text-[10px] tracking-[0.3em] mb-8">
                Quick Links
              </h4>
              <ul className="space-y-4">
                {["Home", "Doctors", "Services", "About Us", "Contact"].map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-slate-500 hover:text-green-600 font-bold text-sm transition-colors flex items-center gap-2 group"
                    >
                      <FaChevronRight className="text-[8px] opacity-0 group-hover:opacity-100 transition-all" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Medical Departments */}
            <div className="lg:col-span-2 md:col-span-4">
              <h4 className="text-[#3B3486] font-black uppercase text-[10px] tracking-[0.3em] mb-8">
                Specialties
              </h4>
              <ul className="space-y-4 text-sm font-bold text-slate-500">
                <li className="hover:text-[#3B3486] cursor-pointer">Cardiology</li>
                <li className="hover:text-[#3B3486] cursor-pointer">Maternity & NICU</li>
                <li className="hover:text-[#3B3486] cursor-pointer">Orthopaedics</li>
                <li className="hover:text-[#3B3486] cursor-pointer">Neurology</li>
                <li className="hover:text-[#3B3486] cursor-pointer">General Surgery</li>
              </ul>
            </div>

            {/* Column 4: High-Conversion Contact Card */}
            <div className="lg:col-span-4">
              <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="text-[#3B3486] font-black uppercase text-[10px] tracking-widest mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> 
                    Emergency Desk
                  </h4>
                  <a 
                    href={`tel:+918588831732`} 
                    className="text-2xl font-black text-[#3B3486] hover:text-green-600 transition-colors block mb-2"
                  >
                    +918588831732
                  </a>
                  <p className="text-slate-400 text-[10px] font-bold mb-8">Plot No. 12, Sector 9, Baghpat, Uttar Pradesh</p>
                  <a 
                    href={`https://wa.me/918588831732`} 
                    className="flex items-center justify-center gap-3 bg-green-600 text-white py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-[#3B3486] transition-all shadow-lg"
                  >
                    <FaWhatsapp size={16} /> WhatsApp Support
                  </a>
                </div>
                {/* Subtle background decoration */}
                <div className="absolute -bottom-10 -right-10 text-slate-100 opacity-50">
                  <FaMapMarkerAlt size={120} />
                </div>
              </div>
            </div>

          </div>

          {/* Lower Footer: Legals & Attribution */}
          <div className="pt-10 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">
              © 2026 Maa Tulya Hospital — Clinical Integrity & Trust
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-slate-400 text-[9px] font-black uppercase tracking-widest hover:text-[#3B3486]">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 text-[9px] font-black uppercase tracking-widest hover:text-[#3B3486]">
                Terms of Use
              </a>
            </div>
          </div>

        </div>
      </footer>
    </main>
  );
}