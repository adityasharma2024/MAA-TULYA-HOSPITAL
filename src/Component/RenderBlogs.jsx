import React, { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  FaCalendarAlt, FaArrowLeft, FaUserMd, FaHeartbeat, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaChevronRight, FaWhatsapp
} from "react-icons/fa";

/* =======================================================
   REUSABLE COMPONENTS (used above)
   Aggressive animations included in each component.
   ======================================================= */

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

/**
 * ============================================================================
 * RENDER BLOGS COMPONENT
 * ============================================================================
 * This component renders the full blog post detail view.
 * It receives the post data via React Router's location.state.
 */

export default function RenderBlogs() {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract the post from location.state
  const { post } = location.state || {};

  // If no post, redirect back to blogs
  useEffect(() => {
    if (!post) {
      navigate("/Blogs_and_News");
    }
  }, [post, navigate]);

  if (!post) {
    return null; // or a loading spinner
  }

  return (
    <div className="bg-slate-50 min-h-screen pt-[calc(var(--nav-height)+20px)] flex flex-col font-sans">
      <Helmet>
        <title>{post.title} | Maa Tulya Hospital</title>
      </Helmet>

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="max-w-5xl mx-auto px-6 py-20"
      >
        <button
          onClick={() => navigate("/Blogs_and_News")}
          className="flex items-center gap-3 text-[#3B3486] font-black uppercase text-[10px] tracking-[0.3em] mb-12 group hover:text-green-600 transition-colors"
        >
          <FaArrowLeft className="group-hover:-translate-x-2 transition-transform" /> Back to Newsroom
        </button>

        <div className="relative rounded-[4rem] overflow-hidden mb-16 shadow-2xl h-[300px] md:h-[500px]">
          <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-12">
            <div>
              <span className="bg-green-500 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-6xl font-black text-white tracking-tighter leading-tight">
                {post.title}
              </h1>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-8 mb-10 pb-10 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#3B3486] rounded-full flex items-center justify-center text-white">
                  <FaUserMd />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Author</p>
                  <p className="text-sm font-bold text-[#3B3486]">{post.author}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <FaCalendarAlt />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Published</p>
                  <p className="text-sm font-bold text-[#3B3486]">{post.date}</p>
                </div>
              </div>
            </div>

            <div
              className="prose prose-slate prose-lg max-w-none text-slate-600 font-medium leading-loose
                prose-h2:text-[#3B3486] prose-h2:font-black prose-h2:text-4xl prose-h2:tracking-tighter
                prose-h3:text-green-600 prose-h3:font-black prose-li:marker:text-green-500"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          <aside className="lg:col-span-4 space-y-8">
            <div className="bg-[#3B3486] p-10 rounded-[3rem] text-white relative overflow-hidden group">
              <FaHeartbeat className="absolute -bottom-10 -right-10 text-[12rem] text-white/5 group-hover:scale-110 transition-transform duration-1000" />
              <h4 className="text-2xl font-black mb-4 relative z-10 leading-tight">Contact Maa Tulya Emergency</h4>
              <p className="text-white/60 text-sm mb-10 relative z-10">Our 24/7 trauma center is always ready to assist you in Baghpat.</p>
              <a href="tel:8445741993" className="block w-full bg-green-500 text-center py-5 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-white hover:text-[#3B3486] transition-all relative z-10 shadow-xl shadow-black/20">
                Call Helpline
              </a>
            </div>
          </aside>
        </div>
      </motion.article>
      <Footer />
    </div>
  );
}