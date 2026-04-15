import React, { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp,
  FaChevronRight, FaMapMarkerAlt, FaStethoscope, FaBaby,
  FaBone, FaHeartbeat, FaBrain, FaLungs, FaMicroscope,
  FaUserMd, FaXRay, FaTint, FaSyringe, FaArrowRight, FaShieldAlt
} from "react-icons/fa";

// Constants to match footer requirements
const PHONE = "+918588831732";
const EMAIL = "admin.maatulyahospital@gmail.com";
const ADDRESS = "Plot No. 12, Sector 9, Baghpat, Uttar Pradesh";

const SPECIALITIES_DATA = [
  { title: "Internal Medicine", icon: <FaStethoscope />, stats: "Chronic Care", text: "Preventive, diagnostic, and therapeutic services for adult diseases with personalized attention." },
  { title: "Obstetrics & Gynaecology", icon: <FaBaby />, stats: "Maternal Health", text: "Comprehensive care for every woman, from routine checkups to high-risk pregnancies." },
  { title: "Paediatrics & Neonatology", icon: <FaSyringe />, stats: "Newborn Care", text: "Focusing on your child’s health journey — from vaccinations to expert disease management." },
  { title: "Orthopaedics", icon: <FaBone />, stats: "Joint Replacement", text: "Specialized care for fractures, arthritis, and sports injuries with advanced surgical expertise." },
  { title: "Cardiology", icon: <FaHeartbeat />, stats: "Heart Rhythm", text: "Advanced cardiac diagnostics and treatment to help patients manage heart conditions." },
  { title: "Neurology", icon: <FaBrain />, stats: "Neuroimaging", text: "Care for disorders of the brain, spine, and nervous system using state-of-the-art tech." },
  { title: "Gastroenterology", icon: <FaTint />, stats: "Digestive Health", text: "Diagnosis and treatment of digestive and liver diseases using minimally invasive procedures." },
  { title: "Urology", icon: <FaUserMd />, stats: "Kidney Care", text: "Expert management of kidney diseases and urinary tract disorders with advanced care." },
  { title: "Dermatology", icon: <FaUserMd />, stats: "Clinical Skincare", text: "Providing expert skincare and cosmetic treatments using the latest advancements." },
  { title: "ENT Specialist", icon: <FaLungs />, stats: "Sinus & Hearing", text: "Specialized treatment for hearing loss, sinus issues, and throat infections." },
  { title: "Radiology", icon: <FaXRay />, stats: "24/7 Imaging", text: "Precision tools such as CT, MRI, and ultrasound for timely and accurate diagnosis." },
  { title: "Pathology", icon: <FaMicroscope />, stats: "NABL Accredited", text: "Accurate test results from standard labs to ensure prompt treatment decisions." },
];

const SpecialtyCard = memo(({ item, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05, duration: 0.6 }}
    whileHover={{ y: -10 }}
    className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
  >
    {/* Subtle Background Pattern */}
    <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-10 transition-opacity">
        {item.icon}
    </div>
    
    <div className="w-14 h-14 bg-slate-50 text-[#3B3486] rounded-2xl flex items-center justify-center text-2xl mb-8 group-hover:bg-green-600 group-hover:text-white transition-all duration-500 shadow-inner">
      {item.icon}
    </div>

    <div className="mb-2">
        <span className="text-[10px] font-black uppercase tracking-widest text-green-600 mb-1 block">
            {item.stats}
        </span>
        <h3 className="text-xl font-black text-[#3B3486] leading-tight">{item.title}</h3>
    </div>

    <p className="text-slate-400 text-sm leading-relaxed mb-8">
      {item.text}
    </p>

    <Link to="/contact" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-[#3B3486] transition-colors">
      View Details <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
    </Link>
  </motion.article>
));

export default function Specialities() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(#3B3486 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#3B3486]">Multi-Speciality Care</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-black text-[#3B3486] tracking-tighter mb-8 leading-none">
            Centres of <br/> <span className="text-green-600">Clinical Integrity.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-slate-400 font-medium text-lg leading-relaxed mb-12">
            Maa Tulya Hospital integrates advanced diagnostic systems with 
            compassionate nursing to provide a standard of excellence recognized 
            across the region.
          </p>
        </div>
      </section>

      {/* --- GRID SECTION --- */}
      <section className="py-32 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {SPECIALITIES_DATA.map((item, index) => (
              <SpecialtyCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* --- WRITE TO US (BENTO STYLE) --- */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
            <div className="bg-[#3B3486] rounded-[3.5rem] p-12 lg:p-20 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-96 h-96 bg-green-600/10 rounded-full blur-[100px] -mr-48 -mt-48" />
                
                <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8">
                            Patient-Centric <br /> Philosophy.
                        </h2>
                        <div className="space-y-6">
                            {[
                                { title: "Clinical Transparency", icon: <FaShieldAlt /> },
                                { title: "24/7 Trauma Support", icon: <FaStethoscope /> },
                                { title: "Post-Operative Care", icon: <FaHeartbeat /> }
                            ].map((point, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-green-400">
                                        {point.icon}
                                    </div>
                                    <span className="font-bold text-lg">{point.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[2.5rem]">
                        <h3 className="text-2xl font-black mb-4">Contact Our Desk</h3>
                        <p className="text-slate-300 font-medium mb-10">Have a clinical question or need to schedule a surgery? Our team is available 24/7.</p>
                        <div className="grid gap-4">
                            <button className="bg-green-600 hover:bg-white hover:text-[#3B3486] transition-all py-5 rounded-2xl font-black uppercase text-[10px] tracking-widest">
                                Get In Touch
                            </button>
                            <button className="border border-white/20 hover:bg-white/10 transition-all py-5 rounded-2xl font-black uppercase text-[10px] tracking-widest">
                                Health Packages
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- INTEGRATED FOOTER --- */}
      <footer className="bg-white border-t border-slate-100 pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 mb-20">
            {/* Column 1 */}
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

            {/* Column 2 */}
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

            {/* Column 3 */}
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

            {/* Column 4 */}
            <div className="lg:col-span-4">
              <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="text-[#3B3486] font-black uppercase text-[10px] tracking-widest mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> 
                    Emergency Desk
                  </h4>
                  <a href={`tel:${PHONE}`} className="text-2xl font-black text-[#3B3486] hover:text-green-600 transition-colors block mb-2">
                    {PHONE}
                  </a>
                  <p className="text-slate-400 text-[10px] font-bold mb-8">{ADDRESS}</p>
                  <a href={`https://wa.me/${PHONE.replace('+', '')}`} className="flex items-center justify-center gap-3 bg-green-600 text-white py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-[#3B3486] transition-all shadow-lg">
                    <FaWhatsapp size={16} /> WhatsApp Support
                  </a>
                </div>
                <div className="absolute -bottom-10 -right-10 text-slate-100 opacity-50 pointer-events-none">
                  <FaMapMarkerAlt size={120} />
                </div>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
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
    </main>
  );
}