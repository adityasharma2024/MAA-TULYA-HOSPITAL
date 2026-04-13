// React Router hooks for navigation and accessing passed state
import { useLocation, useNavigate } from "react-router-dom";

// Framer Motion for animation
import { motion } from "framer-motion";

// Icons from react-icons library
import { FaArrowLeft, FaBriefcase, FaClock, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function RenderProfile() {
  // useLocation lets us access data passed via <Link state={{ doc }}> from another page
  const location = useLocation();

  // useNavigate lets us programmatically go back or move to another route
  const navigate = useNavigate();

  // Extract the "doc" object from location.state (doctor info passed from previous page)
  const { doc } = location.state || {};

  return (
    // motion.div adds entry animation (fade + slide up)
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
  );
}