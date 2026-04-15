import React, { useState, useEffect, useRef, memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowDown, IoMdCall, IoMdMail } from "react-icons/io";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const SocialIcon = memo(({ Icon, href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-1.5 bg-white hover:bg-green-100 border border-green-200 rounded-full transition-all transform hover:scale-110 shadow-sm text-green-700"
    aria-label={label}
  >
    <Icon size={14} />
  </a>
));

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const scrolledRef = useRef(false);
  const navigate = useNavigate();
  const EMERGENCY_NUMBER = "8445741993";

  // STABLE SCROLL ENGINE: Prevents jitter by preserving a single listener and avoiding repeated state updates
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (!scrolledRef.current && offset > 120) {
        scrolledRef.current = true;
        setScrolled(true);
      } else if (scrolledRef.current && offset < 60) {
        scrolledRef.current = false;
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Specialities", path: "/speciality"},
    { label: "Find a Doctor", path: "/find_a_doctor" },
    { label: "Contact Us", path: "/contactUs" },
    { label: "Blogs and News", path: "/Blogs_and_News" },
  ];

  return (
    <>
      {/* 1. GHOST WRAPPER: Keeps a stable page offset while the fixed header transforms */}
      <div className="w-full h-[130px] md:h-[130px]" />

      <header className="w-full fixed top-0 left-0 z-50 font-serif">
        
        {/* 2. TOP INFO BAR (Hides on Scroll) */}
        <div className={`bg-gradient-to-r from-blue-50 via-white to-blue-50 border-b border-blue-100 transition-all duration-500 overflow-hidden ${scrolled ? 'max-h-0 opacity-0' : 'max-h-20 opacity-100'}`}>
          <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 py-2">
            <div className="flex gap-4 md:gap-6 items-center text-xs md:text-sm font-sans">
              <a href="tel:01146528024" className="flex items-center gap-2 text-gray-700 hover:text-green-700 transition-colors">
                <IoMdCall className="text-green-700" /> <span className="hidden sm:inline">011 4652 8024</span>
              </a>
              <a href="mailto:admin@maatulyahospital.com" className="hidden lg:flex items-center gap-2 text-gray-700 hover:text-blue-700">
                <IoMdMail className="text-blue-600" /> admin.maatulyahospital@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
               <SocialIcon Icon={FaFacebookF} href="#" label="Facebook" />
               <SocialIcon Icon={FaSquareXTwitter} href="#" label="Twitter" />
               <SocialIcon Icon={FaInstagram} href="#" label="Instagram" />
            </div>
          </div>
        </div>

        {/* 3. THE MORPHING NAV (Responsive Desktop/Tablet) */}
        <div className={`transition-all duration-700 ease-in-out ${scrolled ? 'pt-3 px-4 md:px-10' : 'pt-0 px-0'}`}>
          <nav className={`
            mx-auto transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] will-change-transform
            ${scrolled 
              ? "bg-white/95 backdrop-blur-xl shadow-2xl border border-white/40 py-2 rounded-[60px] max-w-[1300px]" 
              : "bg-white py-4 w-full rounded-none border-b border-gray-100"}
          `}>
            <div className="flex items-center justify-between px-6 md:px-12">
              
              {/* BRANDING ENGINE */}
              <div onClick={() => {navigate("/"); setMobileOpen(false);}} className="flex items-center gap-3 md:gap-4 cursor-pointer group">
                <img 
                  src="/hosp_logo.webp" 
                  alt="Maa Tulya Logo" 
                  className={`transition-all duration-700 object-contain transform-gpu ${scrolled ? "h-11 md:h-14" : "h-14 md:h-20"} w-auto`} 
                />
                <div className="flex flex-col justify-center">
                  <h1 className={`font-black text-[#3B3486] leading-[0.9] transition-all duration-700 tracking-tighter ${scrolled ? "text-xl md:text-3xl" : "text-2xl md:text-5xl"}`}>
                    MAA TULYA
                  </h1>
                  <span className={`font-bold text-green-600 uppercase transition-all duration-700 ${scrolled ? "text-[10px] md:text-[14px] tracking-[3px]" : "text-[12px] md:text-[18px] tracking-[5px] mt-1"}`}>
                    HOSPITAL
                  </span>
                </div>
              </div>

              {/* DESKTOP/TABLET MENU (Hidden on small mobile) */}
              <div className="hidden lg:flex items-center gap-8">
                {navLinks.map((link, i) => (
                  <div key={i} className="relative group" onMouseEnter={() => setOpenDropdown(i)} onMouseLeave={() => setOpenDropdown(null)}>
                    <Link to={link.path} className="text-[16px] xl:text-[17px] font-bold text-gray-800 hover:text-green-700 flex items-center gap-1 transition-colors relative pb-1">
                      {link.label}
                      {link.subLinks && <IoIosArrowDown className={`transition-transform duration-500 ${openDropdown === i ? 'rotate-180' : ''}`} />}
                    </Link>
                    
                    {link.subLinks && openDropdown === i && (
                      <div className="absolute top-[100%] left-0 bg-white shadow-2xl rounded-2xl border border-gray-100 py-3 min-w-[240px] animate-slideUp z-60">
                        {link.subLinks.map((s, j) => (
                          <Link key={j} to={s.path} className="block px-6 py-3 hover:bg-green-50 text-gray-700 font-semibold hover:text-green-700 transition-all border-l-4 border-transparent hover:border-green-600">
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <a href={`tel:${EMERGENCY_NUMBER}`} className="group flex items-center px-6 py-2.5 rounded-full text-white font-bold transition-all duration-500 hover:scale-105 shadow-lg bg-gradient-to-r from-red-600 to-orange-500">
                  <img src="./public/emergency.webp" alt="Ambulance" className="h-6 w-6 mr-3 group-hover:animate-bounce" />
                  <div className="flex flex-col leading-none">
                    <span className="text-[9px] opacity-90 uppercase font-black">Emergency</span>
                    <span className="text-base font-sans tracking-tight">{EMERGENCY_NUMBER}</span>
                  </div>
                </a>
              </div>

              {/* MOBILE/TABLET BURGER TRIGGER */}
              <button 
                className="lg:hidden relative w-10 h-10 flex items-center justify-center z-[210] focus:outline-none" 
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                <div className="flex flex-col gap-1.5 w-8">
                  <span className={`h-1.5 w-full rounded-full transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-3 bg-red-600' : 'bg-[#3B3486]'}`} />
                  <span className={`h-1.5 w-full rounded-full transition-all duration-300 ${mobileOpen ? 'opacity-0' : 'bg-[#3B3486]'}`} />
                  <span className={`h-1.5 w-full rounded-full transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-3 bg-red-600' : 'bg-[#3B3486]'}`} />
                </div>
              </button>
            </div>
          </nav>
        </div>

        {/* 4. PREMIUM MOBILE PORTAL (The Slide-out Drawer) */}
        <div className={`fixed inset-0 z-[200] lg:hidden transition-all duration-500 ease-in-out ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-md" onClick={() => setMobileOpen(false)} />
          
          {/* Drawer Body */}
          <div className={`absolute right-0 top-0 h-full w-[85%] sm:w-[60%] bg-white shadow-[-20px_0_60px_rgba(0,0,0,0.2)] p-8 flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            
            {/* Drawer Header */}
            <div className="flex items-center gap-4 mb-10 pb-6 border-b">
              <img src="/hosp_logo.webp" alt="Maa Tulya" className="h-16 w-auto" />
              <div className="flex flex-col">
                <span className="text-2xl font-black text-[#3B3486]">MAA TULYA</span>
                <span className="text-[12px] tracking-[4px] text-green-600 font-bold uppercase">HOSPITAL</span>
              </div>
            </div>

            {/* Nav Links with Touch targets */}
            <div className="flex flex-col gap-2 overflow-y-auto pr-2">
              {navLinks.map((l, i) => (
                <div key={i}>
                  <div 
                    onClick={() => {
                      if(!l.subLinks) { navigate(l.path); setMobileOpen(false); }
                      else { setOpenDropdown(openDropdown === i ? null : i); }
                    }}
                    className={`flex justify-between items-center py-4 px-4 rounded-2xl transition-all active:scale-[0.97] ${openDropdown === i ? 'bg-green-50 text-green-700' : 'text-gray-800 active:bg-gray-50'}`}
                  >
                    <span className="text-xl font-bold tracking-tight">{l.label}</span>
                    {l.subLinks && <IoIosArrowDown className={`text-xl transition-transform duration-300 ${openDropdown === i ? 'rotate-180' : ''}`} />}
                  </div>
                  
                  {l.subLinks && openDropdown === i && (
                    <div className="ml-6 py-2 flex flex-col gap-2 animate-slideUp">
                      {l.subLinks.map((sub, j) => (
                        <Link key={j} to={sub.path} onClick={() => setMobileOpen(false)} className="text-lg text-gray-500 font-bold py-3 border-l-4 border-green-200 pl-6">
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Footer (Emergency) */}
            <div className="mt-auto pt-8 flex flex-col gap-4">
              <a href={`tel:${EMERGENCY_NUMBER}`} className="flex items-center justify-center gap-4 bg-red-600 text-white p-5 rounded-3xl font-bold shadow-xl animate-emergencyPulse">
                <img src="/emergency.webp" alt="Ambulance" className="h-10 w-10" />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-black opacity-80 tracking-widest leading-none mb-1">24/7 Helpline</p>
                  <p className="text-2xl tracking-tighter leading-none font-sans">{EMERGENCY_NUMBER}</p>
                </div>
              </a>
              <div className="flex justify-between items-center px-4">
                 <div className="flex gap-4">
                    <FaWhatsapp className="text-2xl text-green-500" />
                    <FaInstagram className="text-2xl text-pink-500" />
                 </div>
                 <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Baghpat, UP</span>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          header nav { backface-visibility: hidden; transform: translateZ(0); }
          .animate-slideUp { animation: slideUp 0.4s cubic-bezier(0.23, 1, 0.32, 1) forwards; }
          @keyframes slideUp { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes emergencyPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.03); box-shadow: 0 10px 40px rgba(220, 38, 38, 0.3); } }
          .animate-emergencyPulse { animation: emergencyPulse 2s infinite ease-in-out; }
        `}</style>
      </header>
    </>
  );
}

export default Navbar;