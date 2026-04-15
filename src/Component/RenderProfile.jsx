// React Router hooks for navigation and accessing passed state
import { useLocation, useNavigate, Link } from "react-router-dom";

// Framer Motion for animation
import { motion } from "framer-motion";

// Icons from react-icons library
import { FaArrowLeft, FaBriefcase, FaClock, FaPhoneAlt, FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaChevronRight, FaMapMarkerAlt } from "react-icons/fa";

export default function RenderProfile() {
  // useLocation lets us access data passed via <Link state={{ doc }}> from another page
  const location = useLocation();

  // useNavigate lets us programmatically go back or move to another route
  const navigate = useNavigate();

  // Extract the "doc" object from location.state (doctor info passed from previous page)
  const { doc } = location.state || {};

  return (
    <>
      {/* motion.div adds entry animation (fade + slide up) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}   // start hidden and slightly down
        animate={{ opacity: 1, y: 0 }}    // animate to visible and normal position
        className="max-w-6xl mx-auto px-6 py-20"
      >
      {/* Back button: navigates to previous page */}
      <button
        onClick={() => navigate(-1)} // go back one step in history
        className="flex items-center gap-3 text-[#3B3486] font-black uppercase text-[10px] tracking-widest mb-12 hover:text-green-600 transition-all"
      >
        <FaArrowLeft /> Back to Medical Team
      </button>

      {/* Main profile card layout */}
      <div className="grid lg:grid-cols-2 gap-16 bg-white p-12 rounded-[4rem] shadow-2xl border border-slate-50">
        
        {/* Left side: doctor image */}
        <div className="relative group overflow-hidden rounded-[3rem]">
          <img
            src={doc?.img}   // doctor image
            alt={doc?.name}  // alt text for accessibility
            className="w-full h-[550px] object-cover shadow-lg group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Right side: doctor details */}
        <div className="flex flex-col justify-center">
          {/* Specialty */}
          <span className="text-green-600 font-black text-[10px] uppercase tracking-widest mb-4">
            {doc?.specialty}
          </span>

          {/* Name */}
          <h1 className="text-5xl font-black text-[#3B3486] mb-4 tracking-tighter">
            {doc?.name}
          </h1>

          {/* Degree */}
          <p className="text-lg font-bold text-slate-400 mb-8">{doc?.degree}</p>

          {/* Experience and Availability cards */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            {/* Experience */}
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
              <FaBriefcase className="text-green-500 mb-2" />
              <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest">
                Experience
              </p>
              <p className="font-black text-[#3B3486]">{doc?.experience}</p>
            </div>

            {/* Shift Timing */}
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
              <FaClock className="text-blue-500 mb-2" />
              <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest">
                Shift Timing
              </p>
              <p className="font-black text-[#3B3486] text-xs">
                {doc?.availability}
              </p>
            </div>
          </div>

          {/* Bio */}
          <p className="text-slate-500 leading-relaxed font-medium mb-12">
            {doc?.bio}
          </p>

          {/* Contact options */}
          <div className="flex flex-col gap-4">
            {/* Phone call button */}
            <a
              href={`tel:${doc?.phone}`} // click-to-call
              className="flex items-center justify-center gap-4 bg-[#3B3486] text-white py-6 rounded-2xl font-black uppercase text-[12px] tracking-widest shadow-xl shadow-purple-900/20 hover:bg-green-600 transition-all text-center"
            >
              <FaPhoneAlt className="animate-pulse" />
              Contact for Appointment
            </a>

            {/* WhatsApp button */}
            <a
              href={`https://wa.me/${doc?.phone?.replace("+", "")}`} // WhatsApp link
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-4 border-2 border-slate-100 text-[#3B3486] py-5 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-slate-50 transition-all text-center"
            >
              <FaWhatsapp className="text-xl text-green-500" />
              Message on WhatsApp
            </a>
          </div>
        </div>
      </div>
      </motion.div>
      
      {/* Footer Component */}
      <Footer />
    </>
  );
}

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