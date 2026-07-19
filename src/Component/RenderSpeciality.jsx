import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaPhoneAlt,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaChevronRight,
  FaMapMarkerAlt,
  FaStethoscope,
  FaBaby,
  FaBone,
  FaHeartbeat,
  FaBrain,
  FaTint,
  FaUserMd,
  FaLungs,
  FaMicroscope,
  FaXRay,
  FaSyringe,
  FaShieldAlt,
} from "react-icons/fa";

const SPECIALITY_DETAILS = {
  "internal-medicine": {
    title: "Internal Medicine",
    icon: FaStethoscope,
    stats: "Chronic Care",
    summary:
      "Preventive, diagnostic, and therapeutic services for adult diseases with personalized attention.",
    description:
      "Our internal medicine team delivers long-term care for common and complex adult conditions, with a strong focus on prevention, early diagnosis, and continued follow-up.",
    highlights: [
      "Comprehensive chronic disease management",
      "Routine screening and wellness checkups",
      "Seamless coordination with diagnostics and specialists",
    ],
    image:
      "https://images.unsplash.com/photo-1576091160550-2173f6f6d1f3?auto=format&fit=crop&w=1200&q=80",
  },
  "obstetrics-gynaecology": {
    title: "Obstetrics & Gynaecology",
    icon: FaBaby,
    stats: "Maternal Health",
    summary:
      "Comprehensive care for every woman, from routine checkups to high-risk pregnancies.",
    description:
      "We provide compassionate obstetric and gynecological care for mothers, adolescents, and women at every stage of life, including advanced maternal monitoring.",
    highlights: [
      "Antenatal and postnatal care",
      "High-risk pregnancy support",
      "Minimal intervention delivery planning",
    ],
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
  },
  "paediatrics-neonatology": {
    title: "Paediatrics & Neonatology",
    icon: FaSyringe,
    stats: "Newborn Care",
    summary:
      "Focusing on your child’s health journey — from vaccinations to expert disease management.",
    description:
      "Our pediatric care combines preventive medicine with advanced neonatal support, helping children grow with confidence and comfort.",
    highlights: [
      "Vaccination and growth monitoring",
      "Neonatal intensive support",
      "Pediatric emergency care",
    ],
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80",
  },
  orthopaedics: {
    title: "Orthopaedics",
    icon: FaBone,
    stats: "Joint Replacement",
    summary:
      "Specialized care for fractures, arthritis, and sports injuries with advanced surgical expertise.",
    description:
      "Our orthopaedics unit provides surgical and non-surgical care for bone, joint, tendon, and spine conditions using modern diagnostic tools.",
    highlights: [
      "Fracture and trauma treatment",
      "Joint and spine rehabilitation",
      "Sports injury management",
    ],
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=1200&q=80",
  },
  cardiology: {
    title: "Cardiology",
    icon: FaHeartbeat,
    stats: "Heart Rhythm",
    summary:
      "Advanced cardiac diagnostics and treatment to help patients manage heart conditions.",
    description:
      "From diagnostics to post-treatment support, our cardiology department offers expert care for heart rhythm, circulation, and cardiac wellness.",
    highlights: [
      "ECG and echocardiography",
      "Heart failure and rhythm care",
      "Preventive cardiac screening",
    ],
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80",
  },
  neurology: {
    title: "Neurology",
    icon: FaBrain,
    stats: "Neuroimaging",
    summary:
      "Care for disorders of the brain, spine, and nervous system using state-of-the-art tech.",
    description:
      "Our neurology team supports patients with neurological diseases using imaging, consultation, and coordinated treatment pathways.",
    highlights: [
      "Headache and seizure evaluation",
      "Stroke and nerve disorder care",
      "Advanced neurodiagnostics",
    ],
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1200&q=80",
  },
  gastroenterology: {
    title: "Gastroenterology",
    icon: FaTint,
    stats: "Digestive Health",
    summary:
      "Diagnosis and treatment of digestive and liver diseases using minimally invasive procedures.",
    description:
      "We manage a wide range of digestive disorders with careful evaluation, treatment planning, and advanced endoscopic support.",
    highlights: [
      "Liver and gut disease management",
      "Endoscopy and diagnostic screening",
      "Personalized dietary guidance",
    ],
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
  },
  urology: {
    title: "Urology",
    icon: FaUserMd,
    stats: "Kidney Care",
    summary:
      "Expert management of kidney diseases and urinary tract disorders with advanced care.",
    description:
      "Our urology services cover kidney, bladder, and urinary tract conditions with accurate diagnosis and evidence-based treatment.",
    highlights: [
      "Stone disease and urinary care",
      "Prostate and bladder evaluation",
      "Minimally invasive procedures",
    ],
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80",
  },
  dermatology: {
    title: "Dermatology",
    icon: FaUserMd,
    stats: "Clinical Skincare",
    summary:
      "Providing expert skincare and cosmetic treatments using the latest advancements.",
    description:
      "Our dermatology services address skin health concerns with advanced treatment plans and aesthetic care options.",
    highlights: [
      "Acne and allergy treatment",
      "Skin wellness consultations",
      "Cosmetic and procedural care",
    ],
    image:
      "https://images.unsplash.com/photo-1576091160550-2173f6f6d1f3?auto=format&fit=crop&w=1200&q=80",
  },
  "ent-specialist": {
    title: "ENT Specialist",
    icon: FaLungs,
    stats: "Sinus & Hearing",
    summary:
      "Specialized treatment for hearing loss, sinus issues, and throat infections.",
    description:
      "We address ear, nose, and throat concerns with specialized evaluation, treatment, and surgical consultation as needed.",
    highlights: [
      "ENT diagnostics and treatment",
      "Sinus and hearing support",
      "Throat and airway care",
    ],
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1200&q=80",
  },
  radiology: {
    title: "Radiology",
    icon: FaXRay,
    stats: "24/7 Imaging",
    summary:
      "Precision tools such as CT, MRI, and ultrasound for timely and accurate diagnosis.",
    description:
      "Our radiology services support fast and accurate diagnosis through advanced imaging and expert interpretation.",
    highlights: [
      "CT, MRI, and ultrasound",
      "Rapid imaging turnaround",
      "Detailed diagnostic reporting",
    ],
    image:
      "https://images.unsplash.com/photo-1576091160550-2173f6f6d1f3?auto=format&fit=crop&w=1200&q=80",
  },
  pathology: {
    title: "Pathology",
    icon: FaMicroscope,
    stats: "NABL Accredited",
    summary:
      "Accurate test results from standard labs to ensure prompt treatment decisions.",
    description:
      "Our pathology services provide dependable laboratory diagnosis and reporting that supports coordinated patient care.",
    highlights: [
      "Accurate laboratory testing",
      "Rapid report turnaround",
      "Integrated care support",
    ],
    image:
      "https://images.unsplash.com/photo-1579165466991-467135ad3110?auto=format&fit=crop&w=1200&q=80",
  },
};

function Footer() {
  const PHONE = "+919045818999";
  const ADDRESS = "Baghpat-Baraut Road, near Bandhan Bank, Baghpat, 250609";

  return (
    <footer className="bg-white border-t border-slate-100 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-8">
              <h3 className="text-2xl font-black text-[#3B3486] tracking-tighter">
                MAA TULYA <span className="text-green-600">HOSPITAL</span>
              </h3>
            </Link>
            <p className="text-slate-400 font-medium leading-relaxed mb-8 max-w-sm">
              Baghpat&apos;s premier healthcare destination, providing multi-speciality medical services with a focus on clinical excellence and patient safety.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: FaFacebookF, url: "https://www.facebook.com/people/Maa-Tulya-Hospital/pfbid08nd9X8hRUPa6YYWv6VgNWHodyCFR5YnGdSZK3iCZnxvRfbtzeA5aQXLN49D3K5wcl/" },
                { Icon: FaInstagram, url: "https://www.instagram.com/maa_tulya_hospital?igsh=eXVnZG1hYmFpYncx" },
                { Icon: FaLinkedinIn, url: "https://www.linkedin.com/" },
              ].map(({ Icon, url }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-[#3B3486] hover:bg-green-600 hover:text-white transition-all shadow-sm"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 md:col-span-4">
            <h4 className="text-[#3B3486] font-black uppercase text-[10px] tracking-[0.3em] mb-8">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Specialities", to: "/speciality" },
                { label: "Doctors", to: "/find_a_doctor" },
                { label: "Contact", to: "/contactUs" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-slate-500 hover:text-green-600 font-bold text-sm transition-colors flex items-center gap-2 group">
                    <FaChevronRight className="text-[8px] opacity-0 group-hover:opacity-100 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 md:col-span-4">
            <h4 className="text-[#3B3486] font-black uppercase text-[10px] tracking-[0.3em] mb-8">
              Specialties
            </h4>
            <ul className="space-y-4 text-sm font-bold text-slate-500">
              {[
                { label: "Cardiology", to: "/speciality/cardiology" },
                { label: "Maternity & NICU", to: "/speciality/obstetrics-gynaecology" },
                { label: "Orthopaedics", to: "/speciality/orthopaedics" },
                { label: "Neurology", to: "/speciality/neurology" },
                { label: "General Surgery", to: "/speciality" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="block text-slate-500 hover:text-[#3B3486] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

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
                <a href={`https://wa.me/${PHONE.replace("+", "")}`} className="flex items-center justify-center gap-3 bg-green-600 text-white py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-[#3B3486] transition-all shadow-lg">
                  <FaWhatsapp size={16} /> WhatsApp Support
                </a>
              </div>
              <div className="absolute -bottom-10 -right-10 text-slate-100 opacity-50">
                <FaMapMarkerAlt size={120} />
              </div>
            </div>
          </div>
        </div>

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

export default function RenderSpeciality() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const detail = SPECIALITY_DETAILS[slug] || SPECIALITY_DETAILS["internal-medicine"];
  const Icon = detail.icon;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto px-6 py-20"
      >
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-3 text-[#3B3486] font-black uppercase text-[10px] tracking-widest mb-12 hover:text-green-600 transition-all"
        >
          <FaArrowLeft /> Back to Specialities
        </button>

        <div className="grid lg:grid-cols-2 gap-16 bg-white p-10 lg:p-12 rounded-[4rem] shadow-2xl border border-slate-50 overflow-hidden">
          <div className="relative overflow-hidden rounded-[3rem]">
            <img
              src={detail.image}
              alt={detail.title}
              className="w-full h-full min-h-[480px] object-cover shadow-lg"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#3B3486]/40 to-transparent" />
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-green-600 font-black text-[10px] uppercase tracking-widest mb-4">
              {detail.stats}
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-[#3B3486] mb-4 tracking-tighter">
              {detail.title}
            </h1>
            <p className="text-slate-500 leading-relaxed font-medium mb-8">
              {detail.description}
            </p>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 text-[#3B3486] flex items-center justify-center text-2xl shadow-inner">
                <Icon />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400 font-black">
                  Specialty Focus
                </p>
                <p className="font-black text-[#3B3486]">{detail.summary}</p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-4xl p-6 border border-slate-100 mb-8">
              <h2 className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-black mb-4">
                What we offer
              </h2>
              <ul className="space-y-3">
                {detail.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-600 font-medium">
                    <FaShieldAlt className="text-green-500 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href={`tel:${"+919045818999"}`}
                className="flex items-center justify-center gap-4 bg-[#3B3486] text-white py-5 rounded-2xl font-black uppercase text-[11px] tracking-widest shadow-xl shadow-purple-900/20 hover:bg-green-600 transition-all text-center"
              >
                <FaPhoneAlt className="animate-pulse" />
                Book an Appointment
              </a>
              <a
                href="https://wa.me/919045818999"
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

      <Footer />
    </>
  );
}
