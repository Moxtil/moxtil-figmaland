"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaUser,
  FaTag,
  FaCommentDots,
} from "react-icons/fa";
import { FiArrowUpRight, FiCheckCircle } from "react-icons/fi"; // Swapped to stable, crisp feather variant icons

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Identification signature is required";
    if (!form.email.trim()) {
      newErrors.email = "Routing email address is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email.trim())
    ) {
      newErrors.email = "Invalid email path structure";
    }
    if (!form.subject.trim()) newErrors.subject = "Transmission subject is required";
    if (!form.message.trim()) newErrors.message = "Core message logs are required";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000); // Safely auto-dismiss status badge
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const panelVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 90, damping: 18 } 
    },
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20 relative">
      {/* Background Ambience Aura Underlays */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        className="flex flex-col lg:flex-row items-stretch justify-center gap-8 w-full relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* =========================================================
            LEFT COLUMN: SECURE COMMS GATEWAY (FORM INTERFACE)
           ========================================================= */}
        <motion.div
          variants={panelVariants}
          className="lg:w-1/2 w-full relative p-8 rounded-[28px] bg-slate-950/40 border border-white/5 backdrop-blur-2xl
                     flex flex-col justify-between transition-all duration-300 hover:border-purple-500/20"
        >
          {/* Vector Canvas Corner Targets */}
          <div className="absolute top-0 left-0 w-1.5 h-1.5 border-l border-t border-cyan-400 opacity-30" />
          <div className="absolute top-0 right-0 w-1.5 h-1.5 border-r border-t border-cyan-400 opacity-30" />

          <div>
            <div className="flex items-center justify-between border-b border-white/[0.04] pb-5 mb-6">
              <h2 className="text-2xl font-bold tracking-tight text-white">Secure Gateway Uplink</h2>
              <span className="text-[10px] font-mono font-bold tracking-widest text-purple-400 bg-purple-400/10 px-2.5 py-0.5 rounded border border-purple-400/20 uppercase">
                COMMS_READY
              </span>
            </div>

            <AnimatePresence>
              {submitted && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3 text-sm text-emerald-400 overflow-hidden"
                >
                  <FiCheckCircle size={18} className="shrink-0" />
                  <p>Transmission successful. Logs successfully routed to support matrix arrays.</p>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold tracking-wider uppercase text-slate-400 flex items-center gap-2" htmlFor="name">
                    <FaUser className="text-purple-400" size={12} /> Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/60 border text-sm text-white font-sans placeholder:text-slate-600 outline-none transition-all duration-300 focus:ring-1
                      ${errors.name ? "border-red-500/50 focus:ring-red-500/20" : "border-white/5 focus:border-purple-500/40 focus:ring-purple-500/20"}`}
                    placeholder="Operator identification"
                  />
                  {errors.name && <p className="text-red-400 text-xs font-mono">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold tracking-wider uppercase text-slate-400 flex items-center gap-2" htmlFor="email">
                    <FaEnvelope className="text-purple-400" size={12} /> Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/60 border text-sm text-white font-sans placeholder:text-slate-600 outline-none transition-all duration-300 focus:ring-1
                      ${errors.email ? "border-red-500/50 focus:ring-red-500/20" : "border-white/5 focus:border-purple-500/40 focus:ring-purple-500/20"}`}
                    placeholder="routing@domain.com"
                  />
                  {errors.email && <p className="text-red-400 text-xs font-mono">{errors.email}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono font-bold tracking-wider uppercase text-slate-400 flex items-center gap-2" htmlFor="subject">
                  <FaTag className="text-purple-400" size={12} /> Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-slate-950/60 border text-sm text-white font-sans placeholder:text-slate-600 outline-none transition-all duration-300 focus:ring-1
                    ${errors.subject ? "border-red-500/50 focus:ring-red-500/20" : "border-white/5 focus:border-purple-500/40 focus:ring-purple-500/20"}`}
                  placeholder="Routing index topic"
                />
                {errors.subject && <p className="text-red-400 text-xs font-mono">{errors.subject}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono font-bold tracking-wider uppercase text-slate-400 flex items-center gap-2" htmlFor="message">
                  <FaCommentDots className="text-purple-400" size={12} /> Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-slate-950/60 border text-sm text-white font-sans placeholder:text-slate-600 outline-none resize-none transition-all duration-300 focus:ring-1
                    ${errors.message ? "border-red-500/50 focus:ring-red-500/20" : "border-white/5 focus:border-purple-500/40 focus:ring-purple-500/20"}`}
                  placeholder="Write your system transmission string details here..."
                ></textarea>
                {errors.message && <p className="text-red-400 text-xs font-mono">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="cursor-pointer mt-6 w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 
                           text-white text-sm font-semibold rounded-xl shadow-lg shadow-purple-500/10 transition-all duration-300 active:scale-[0.99]
                           flex items-center justify-center gap-2 group/btn"
              >
                <span>Transmit Stream</span>
                <FiArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </button>
            </form>
          </div>
        </motion.div>

        {/* =========================================================
            RIGHT COLUMN: RADAR MAP & METADATA (LOCATION INTERFACE)
           ========================================================= */}
        <motion.div
          variants={panelVariants}
          className="lg:w-1/2 w-full relative p-8 rounded-[28px] bg-slate-950/40 border border-white/5 backdrop-blur-2xl
                     flex flex-col gap-6 justify-between transition-all duration-300 hover:border-cyan-500/20"
        >
          <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-r border-b border-cyan-400 opacity-30" />
          <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-l border-b border-cyan-400 opacity-30" />

          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-wide text-white">Geospatial Operations</h3>
            
            <div className="w-full h-[230px] rounded-xl overflow-hidden border border-white/5 relative bg-slate-950">
              <iframe
                src="https://maps.google.com/maps?q=Istanbul,Turkey&t=k&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) opacity(0.75)" }}
                allowFullScreen
                loading="lazy"
                title="Geospatial Coordinates"
              ></iframe>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm pt-4 border-t border-white/[0.04]">
            <div className="flex items-start gap-3.5 group/item">
              <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover/item:text-cyan-400 transition-colors">
                <FaMapMarkerAlt size={14} />
              </div>
              <div className="space-y-0.5">
                <p className="text-[10px] font-mono font-bold tracking-wider text-slate-500 uppercase">HQ Coordinates</p>
                <p className="text-slate-300 font-medium">Istanbul, Turkey</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 group/item">
              <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover/item:text-cyan-400 transition-colors">
                <FaEnvelope size={14} />
              </div>
              <div className="space-y-0.5">
                <p className="text-[10px] font-mono font-bold tracking-wider text-slate-500 uppercase">Routing Endpoint</p>
                <p className="text-slate-300 font-medium break-all">support@example.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 group/item">
              <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover/item:text-cyan-400 transition-colors">
                <FaPhoneAlt size={14} />
              </div>
              <div className="space-y-0.5">
                <p className="text-[10px] font-mono font-bold tracking-wider text-slate-500 uppercase">Secure Uplink Line</p>
                <p className="text-slate-300 font-medium">+90 555 555 5555</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 group/item">
              <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover/item:text-cyan-400 transition-colors">
                <FaClock size={14} />
              </div>
              <div className="space-y-0.5">
                <p className="text-[10px] font-mono font-bold tracking-wider text-slate-500 uppercase">Uptime Windows</p>
                <p className="text-slate-300 font-medium">Mon - Fri: 09:00 - 18:00</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}