import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
  FaStar,
  FaQuoteLeft,
  FaHospitalSymbol,
  FaCheckCircle
} from "react-icons/fa";

/* =========================
   CONSTANTS & DATA
   ========================= */
const PHONE = "+918588831732";
const EMAIL = "admin.maatulyahospital@gmail.com";

const TESTIMONIALS = [
  { name: "Ramesh Kumar", text: "Excellent emergency care. Doctors responded immediately and saved valuable time.", rating: 5, role: "Emergency Patient" },
  { name: "Priya Sharma", text: "Best maternity care in Baghpat. Staff was very supportive throughout delivery.", rating: 5, role: "Mother" },
  { name: "Amit Verma", text: "Affordable treatment and transparent billing. Highly recommended hospital.", rating: 4, role: "Local Resident" },
  { name: "Sneh Lata", text: "The diagnostics wing is very advanced. Got my reports in 2 hours.", rating: 5, role: "Diagnostic Services" },
  { name: "Rajesh Tyagi", text: "Cleanest hospital environment in the Ghaziabad region. Very professional.", rating: 5, role: "Regular Patient" }
];

/* =========================
   COMPONENT
   ========================= */
/* =========================
   FOOTER COMPONENT
   ========================= */
/**
 * MAA TULYA PREMIUM FOOTER
 * Theme: Light / Minimalist / Medical Professional
 */
function Footer() {
  const PHONE = "+918588831732";
  const EMAIL = "admin.maatulyahospital@gmail.com";
  const ADDRESS = "Plot No. 12, Sector 9, Baghpat, Uttar Pradesh";

  return (
    <footer className="bg-white border-t border-slate-100 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Upper Footer: Branding & Quick Actions */}
        <div className="grid lg:grid-cols-12 gap-16 mb-20">
          
          {/* Column 1: Brand Personality */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-8">
              <h3 className="text-2xl font-black text-[#3B3486] tracking-tighter">
                MAA TULYA <span className="text-green-600">HOSPITAL</span>
              </h3>
            </Link>
            <p className="text-slate-400 font-medium leading-relaxed mb-8 max-w-sm">
              Baghpat's premier healthcare destination, providing multi-speciality medical 
              services with a focus on clinical excellence and patient safety.
            </p>
            <div className="flex gap-4">
              {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
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
                  <Link 
                    to={`/${link.toLowerCase().replace(" ", "-")}`} 
                    className="text-slate-500 hover:text-green-600 font-bold text-sm transition-colors flex items-center gap-2 group"
                  >
                    <FaChevronRight className="text-[8px] opacity-0 group-hover:opacity-100 transition-all" />
                    {link}
                  </Link>
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
                  href={`tel:${PHONE}`} 
                  className="text-2xl font-black text-[#3B3486] hover:text-green-600 transition-colors block mb-2"
                >
                  {PHONE}
                </a>
                <p className="text-slate-400 text-[10px] font-bold mb-8">{ADDRESS}</p>
                <a 
                  href={`https://wa.me/${PHONE.replace('+', '')}`} 
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
            <Link to="/privacy" className="text-slate-400 text-[9px] font-black uppercase tracking-widest hover:text-[#3B3486]">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-slate-400 text-[9px] font-black uppercase tracking-widest hover:text-[#3B3486]">
              Terms of Use
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default function AboutUs() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-move testimonials every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-[#fcfcfd] text-gray-900 overflow-hidden">
      <Helmet>
        <title>About Us | Maa Tulya Hospital - Best Care in Baghpat</title>
        <meta name="description" content="Maa Tulya Hospital is the leading multi-speciality healthcare provider in Baghpat, Ghaziabad, and Delhi NCR." />
      </Helmet>

      {/* --- HERO SECTION --- */}
      <section className="relative py-24 bg-[#3B3486] text-white overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-green-500/10 skew-x-12 translate-x-20 hidden md:block" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="text-center md:text-left md:max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Healing with <br />
              <span className="text-green-400 font-extrabold">Heart & Science</span>
            </h1>
            <p className="mt-6 text-purple-100 text-lg leading-relaxed">
              Serving Baghpat, Ghaziabad, and Delhi NCR with a mission to make 
              premium healthcare accessible, affordable, and compassionate for every family.
            </p>
            <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
               <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
                  <FaCheckCircle className="text-green-400" /> <span>24/7 Emergency</span>
               </div>
               <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
                  <FaCheckCircle className="text-green-400" /> <span>Expert Doctors</span>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- WHO WE ARE: BENTO STYLE --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 bg-white p-10 md:p-16 rounded-[40px] shadow-sm border border-slate-100"
          >
            <h2 className="text-3xl font-bold text-[#3B3486] mb-6">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Maa Tulya Hospital was established with a singular vision: to bring metropolitan medical 
              standards to the doorstep of Baghpat. We believe that distance should never be a 
              barrier to life-saving care.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              From advanced diagnostics to high-risk maternity care, our facility is equipped 
              with the latest technology and a team of specialists dedicated to clinical excellence.
            </p>
          </motion.div>

          <div className="bg-green-600 rounded-[40px] p-10 text-white flex flex-col justify-center relative overflow-hidden">
             <FaHospitalSymbol className="absolute -bottom-10 -right-10 text-[200px] opacity-10 rotate-12" />
             <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
             <ul className="space-y-4 text-green-50">
                <li className="flex items-start gap-3 italic">"Trusted by over 50,000+ local residents for transparent billing and expert care."</li>
             </ul>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS: AUTO-MOVING SLIDER --- */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Patient Stories</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto mt-4" />
          </div>

          <div className="relative h-[450px] md:h-[350px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-white rounded-[50px] p-10 md:p-16 shadow-xl shadow-purple-900/5 text-center flex flex-col items-center justify-center border border-slate-100"
              >
                <FaQuoteLeft className="text-green-500/20 text-5xl mb-6" />
                <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed">
                  "{TESTIMONIALS[activeTestimonial].text}"
                </p>
                <div className="mt-8">
                  <p className="font-bold text-[#3B3486] text-xl">{TESTIMONIALS[activeTestimonial].name}</p>
                  <p className="text-green-600 text-xs font-bold uppercase tracking-widest mt-1">
                    {TESTIMONIALS[activeTestimonial].role}
                  </p>
                  <div className="flex justify-center mt-3 text-yellow-400 gap-1">
                    {[...Array(TESTIMONIALS[activeTestimonial].rating)].map((_, i) => <FaStar key={i} />)}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-3 mt-10">
            {TESTIMONIALS.map((_, i) => (
              <button 
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`h-2.5 transition-all rounded-full ${activeTestimonial === i ? 'w-10 bg-green-500' : 'w-2.5 bg-slate-300'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- VISIT US: MODERN SPLIT DESIGN --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#3B3486]">Visit Our Facility</h2>
          <p className="text-gray-500 mt-2">Strategically located to serve Baghpat & Delhi NCR</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Contact Details Column */}
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: <FaMapMarkerAlt />, title: "Location", detail: "Plot No. 12, Sector 9, Baghpat, UP", color: "bg-blue-50 text-blue-600" },
              { icon: <FaPhoneAlt />, title: "Emergency Call", detail: PHONE, color: "bg-green-50 text-green-600" },
              { icon: <FaEnvelope />, title: "Official Email", detail: EMAIL, color: "bg-purple-50 text-purple-600" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ x: 10 }}
                className="flex items-center p-6 bg-white rounded-3xl border border-slate-100 shadow-sm"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl mr-5 ${item.color}`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-1">{item.title}</h4>
                  <p className="text-gray-800 font-bold">{item.detail}</p>
                </div>
              </motion.div>
            ))}

            <a 
              href={`tel:${PHONE}`}
              className="block w-full py-5 bg-[#3B3486] text-white text-center rounded-3xl font-bold shadow-lg shadow-purple-900/20 mt-6 hover:bg-[#2d2769] transition-colors"
            >
              Contact Emergency Desk
            </a>
          </div>

          {/* Map Column - Exact requested design */}
          <div className="lg:col-span-3">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
              <iframe
                title="Maa Tulya Hospital location"
                src="https://www.google.com/maps?q=Baghpat%20Uttar%20Pradesh&output=embed"
                className="h-[420px] w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}