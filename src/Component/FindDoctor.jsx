import React, { useState, useMemo, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSearch,
  FaArrowLeft,
  FaPhoneAlt,
  FaUserMd,
  FaChevronRight,
  FaStar,
  FaBriefcase,
  FaClock,
  FaCheckCircle,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

/**
 * ============================================================================
 * 1. ACTUAL DOCTOR DATABASE (THE CORE 7)
 * ============================================================================
 */
const DOCTORS_DATABASE = [
  {
    id: 1,
    name: "Dr. Rahul Ramteke",
    specialty: "Cardiology",
    degree: "MBBS, MD, DM (Cardiology)",
    experience: "15+ Years",
    rating: 4.9,
    availability: "9:00 AM - 5:00 PM",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800",
    bio: "Senior Consultant in Interventional Cardiology with expertise in complex coronary interventions.",
    phone: "+918445741993",
  },
  {
    id: 2,
    name: "Dr. Anjali Singh",
    specialty: "Maternity",
    degree: "MBBS, MS (Obstetrics & Gynaecology)",
    experience: "12+ Years",
    rating: 4.8,
    availability: "10:00 AM - 4:00 PM",
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800",
    bio: "Specializing in high-risk pregnancies, infertility treatments, and laparoscopic surgeries.",
    phone: "+918445741993",
  },
  {
    id: 3,
    name: "Dr. Vikram Sethi",
    specialty: "Orthopaedics",
    degree: "MBBS, MS (Ortho), Fellow in Joint Replacement",
    experience: "18+ Years",
    rating: 5.0,
    availability: "11:00 AM - 6:00 PM",
    img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800",
    bio: "Dedicated to joint reconstruction and sports medicine, performing over 500+ knee replacements annually.",
    phone: "+918445741993",
  },
  {
    id: 4,
    name: "Dr. Sameer Khan",
    specialty: "Neurology",
    degree: "MD, DM (Neurology)",
    experience: "10+ Years",
    rating: 4.7,
    availability: "9:30 AM - 3:30 PM",
    img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800",
    bio: "Focuses on stroke management, epilepsy, and neuro-muscular disorders.",
    phone: "+918445741993",
  },
  {
    id: 5,
    name: "Dr. Priya Sharma",
    specialty: "Pediatrics",
    degree: "MBBS, DCH, MD (Pediatrics)",
    experience: "9+ Years",
    rating: 4.9,
    availability: "10:00 AM - 7:00 PM",
    img: "https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&w=800",
    bio: "Expert in newborn care and childhood developmental disorders.",
    phone: "+918445741993",
  },
  {
    id: 6,
    name: "Dr. Amit Gupta",
    specialty: "Emergency",
    degree: "MBBS, MEM (Emergency Medicine)",
    experience: "11+ Years",
    rating: 4.8,
    availability: "24/7 (On Call)",
    img: "https://images.unsplash.com/photo-1622902046580-2b47f47f0871?auto=format&fit=crop&w=800",
    bio: "Head of Trauma and Emergency, specializing in critical care and life support.",
    phone: "+918445741993",
  },
  {
    id: 7,
    name: "Dr. Neha Verma",
    specialty: "General Medicine",
    degree: "MBBS, MD (General Medicine)",
    experience: "14+ Years",
    rating: 4.6,
    availability: "8:00 AM - 2:00 PM",
    img: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&w=800",
    bio: "Comprehensive care for chronic lifestyle diseases like Diabetes and Hypertension.",
    phone: "+918445741993",
  },
];

const SPECIALTIES = [
  "All",
  "Cardiology",
  "Maternity",
  "Orthopaedics",
  "Neurology",
  "Pediatrics",
  "Emergency",
  "General Medicine",
];

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
              Baghpat's premier healthcare destination, providing
              multi-speciality medical services with a focus on clinical
              excellence and patient safety.
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
              {["Home", "Doctors", "Services", "About Us", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      to={`/${link.toLowerCase().replace(" ", "-")}`}
                      className="text-slate-500 hover:text-green-600 font-bold text-sm transition-colors flex items-center gap-2 group"
                    >
                      <FaChevronRight className="text-[8px] opacity-0 group-hover:opacity-100 transition-all" />
                      {link}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Column 3: Medical Departments */}
          <div className="lg:col-span-2 md:col-span-4">
            <h4 className="text-[#3B3486] font-black uppercase text-[10px] tracking-[0.3em] mb-8">
              Specialties
            </h4>
            <ul className="space-y-4 text-sm font-bold text-slate-500">
              <li className="hover:text-[#3B3486] cursor-pointer">
                Cardiology
              </li>
              <li className="hover:text-[#3B3486] cursor-pointer">
                Maternity & NICU
              </li>
              <li className="hover:text-[#3B3486] cursor-pointer">
                Orthopaedics
              </li>
              <li className="hover:text-[#3B3486] cursor-pointer">Neurology</li>
              <li className="hover:text-[#3B3486] cursor-pointer">
                General Surgery
              </li>
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
                <p className="text-slate-400 text-[10px] font-bold mb-8">
                  {ADDRESS}
                </p>
                <a
                  href={`https://wa.me/${PHONE.replace("+", "")}`}
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
            <Link
              to="/privacy"
              className="text-slate-400 text-[9px] font-black uppercase tracking-widest hover:text-[#3B3486]"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-slate-400 text-[9px] font-black uppercase tracking-widest hover:text-[#3B3486]"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function FindDoctor() {
  const [activeSpecialty, setActiveSpecialty] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const filteredDoctors = useMemo(() => {
    return DOCTORS_DATABASE.filter((doc) => {
      const specialtyMatch =
        activeSpecialty === "All" || doc.specialty === activeSpecialty;
      const searchMatch = doc.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return specialtyMatch && searchMatch;
    });
  }, [activeSpecialty, searchTerm]);

  return (
    <div className="bg-slate-50 min-h-screen pt-[calc(var(--nav-height)+20px)] flex flex-col">
      <Helmet>
        <title>Our Specialists | Maa Tulya Hospital</title>
      </Helmet>

      <div className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <section className="px-6 py-20 text-center">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-6xl md:text-9xl font-black text-[#3B3486] mb-8 tracking-tighter">
                  Expert <span className="text-green-600 italic">Doctors.</span>
                </h1>
                <p className="text-slate-400 font-bold max-w-xl mx-auto uppercase text-[10px] tracking-[0.3em] leading-loose">
                  Clinical excellence in every department. Call now to book your
                  consultation.
                </p>
              </div>
            </section>

            {/* STICKY FILTER */}
            <section
              className="px-6 mb-24 sticky z-40"
              style={{ top: "calc(var(--nav-height) + 12px)" }}
            >
              <div className="max-w-7xl mx-auto">
                <div className="bg-white/80 backdrop-blur-3xl border border-white p-4 rounded-[3.5rem] shadow-2xl flex flex-col lg:flex-row items-center gap-6">
                  <div className="flex flex-wrap justify-center gap-2">
                    {SPECIALTIES.map((spec) => (
                      <button
                        key={spec}
                        onClick={() => setActiveSpecialty(spec)}
                        className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all 
                            ${activeSpecialty === spec ? "bg-[#3B3486] text-white" : "bg-slate-50 text-slate-400 hover:bg-slate-100"}`}
                      >
                        {spec}
                      </button>
                    ))}
                  </div>
                  <div className="relative flex-grow">
                    <FaSearch className="absolute left-7 top-1/2 -translate-y-1/2 text-slate-300" />
                    <input
                      type="text"
                      placeholder="Search doctor name..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-16 pr-8 py-4 bg-slate-100 rounded-full outline-none font-bold text-slate-700"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* DOCTOR CARDS */}
            <section className="px-6 mb-40">
              <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                {filteredDoctors.map((doc) => (
                  <motion.div
                    layout
                    key={doc.id}
                    className="bg-white rounded-[3rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col"
                  >
                    <div
                      className="h-96 overflow-hidden relative cursor-pointer"
                      onClick={() => setSelectedDoctor(doc)}
                    >
                      <img
                        src={doc.img}
                        alt={doc.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full text-[9px] font-black text-[#3B3486] uppercase tracking-widest">
                        {doc.specialty}
                      </div>
                    </div>

                    <div className="p-10 flex flex-col flex-grow">
                      <h3 className="text-2xl font-black text-[#3B3486] mb-2">
                        {doc.name}
                      </h3>
                      <p className="text-slate-400 text-xs font-bold mb-8">
                        {doc.degree}
                      </p>

                      <div className="mt-auto space-y-4">
                        <a
                          href={`tel:${doc.phone}`}
                          className="flex items-center justify-center gap-3 w-full bg-slate-50 text-[#3B3486] py-4 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-[#3B3486] hover:text-white transition-all shadow-sm"
                        >
                          <FaPhoneAlt size={12} /> Contact for Appointment
                        </a>
                        <Link
                          to="/profile/Render_Profile"
                          state={{ doc }}
                          className="flex items-center justify-center gap-3 w-full border-2 border-slate-100 text-[#3B3486] py-4 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-slate-50 transition-all text-center"
                        >
                          <FaUserMd size={12} />
                          View Clinical Profile
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </motion.div>
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
}
