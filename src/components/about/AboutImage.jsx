import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaAward, FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaCheckCircle, FaServer, FaCode, FaMobileAlt, FaRobot } from 'react-icons/fa';
import { PERSONAL_INFO } from '../../utils/constants';

export const AboutImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative w-full max-w-md mx-auto space-y-4 lg:sticky lg:top-24"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20 pointer-events-none" />

      {/* Main Image Frame */}
      <div className="relative glass-panel rounded-3xl p-3 border border-slate-700/80 overflow-hidden shadow-2xl">
        <img
          src={PERSONAL_INFO.aboutImage || PERSONAL_INFO.profileImage}
          alt={PERSONAL_INFO.name}
          loading="lazy"
          className="w-full h-72 sm:h-80 object-cover rounded-2xl"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop";
          }}
        />
      </div>

      {/* Floating Info Stat Cards */}
      <div className="grid grid-cols-2 gap-3">
        <div className="glass-card p-3 rounded-2xl border border-blue-500/30 flex items-center gap-3">
          <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 text-lg">
            <FaAward />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-100 block">1+ Years</span>
            <span className="text-[10px] text-slate-400">Engineering</span>
          </div>
        </div>

        <div className="glass-card p-3 rounded-2xl border border-purple-500/30 flex items-center gap-3">
          <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 text-lg">
            <FaLaptopCode />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-100 block">4+ Projects</span>
            <span className="text-[10px] text-slate-400">Production</span>
          </div>
        </div>
      </div>

      {/* Developer Profile Snapshot Card */}
      <div className="glass-card p-4 rounded-2xl border border-slate-800 space-y-3">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Quick Profile</span>
          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open for Hire
          </span>
        </div>

        <div className="space-y-2 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-400 text-xs flex-shrink-0" />
            <span>{PERSONAL_INFO.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaGraduationCap className="text-purple-400 text-xs flex-shrink-0" />
            <span>B.Tech CSE (AI) • PSCMRCET (7.82 GPA)</span>
          </div>
          <div className="flex items-center gap-2">
            <FaBriefcase className="text-cyan-400 text-xs flex-shrink-0" />
            <span>Software Trainee @ B2B Infotech</span>
          </div>
        </div>
      </div>

      {/* Core Technology Pillars Card */}
      <div className="glass-card p-4 rounded-2xl border border-slate-800 space-y-2.5">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block border-b border-slate-800/80 pb-2">
          Core Pillars
        </span>
        <div className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-200">
          <div className="flex items-center gap-1.5 p-2 rounded-xl bg-slate-900/60 border border-slate-800">
            <FaServer className="text-blue-400 text-xs" />
            <span>Spring Boot</span>
          </div>
          <div className="flex items-center gap-1.5 p-2 rounded-xl bg-slate-900/60 border border-slate-800">
            <FaCode className="text-cyan-400 text-xs" />
            <span>React & Node</span>
          </div>
          <div className="flex items-center gap-1.5 p-2 rounded-xl bg-slate-900/60 border border-slate-800">
            <FaMobileAlt className="text-purple-400 text-xs" />
            <span>Flutter Apps</span>
          </div>
          <div className="flex items-center gap-1.5 p-2 rounded-xl bg-slate-900/60 border border-slate-800">
            <FaRobot className="text-pink-400 text-xs" />
            <span>AI & Python</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutImage;
