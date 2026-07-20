import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { PERSONAL_INFO } from '../../utils/constants';
import { SectionTitle } from '../common/SectionTitle';
import { Card } from '../common/Card';
import { SocialLinks } from '../common/SocialLinks';
import { ContactForm } from './ContactForm';

export const Contact = () => {
  const whatsappUrl = `https://wa.me/${PERSONAL_INFO.phone.replace(/[^0-9]/g, '')}`;
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}`;

  const contactDetails = [
    {
      icon: SiGmail,
      title: "Direct Gmail",
      value: PERSONAL_INFO.email,
      link: gmailUrl,
      color: "text-rose-400"
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      value: "Chat on WhatsApp",
      link: whatsappUrl,
      color: "text-emerald-400"
    },
    {
      icon: FaPhoneAlt,
      title: "Phone",
      value: PERSONAL_INFO.phone,
      link: `tel:${PERSONAL_INFO.phone}`,
      color: "text-purple-400"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: PERSONAL_INFO.location,
      link: null,
      color: "text-pink-400"
    }
  ];

  return (
    <section id="contact" className="py-24 relative z-10 bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Get in Touch"
          title="Contact Me"
          subtitle="Have a project idea, job opportunity, or just want to connect? Send a message below."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <Card className="h-full space-y-6 flex flex-col justify-between p-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-100 mb-2">Let's build something awesome together!</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  I'm available for full-time roles, contract work, and technical advisory. Feel free to reach out via the form or direct contact channels.
                </p>
              </div>

              {/* Full Name Display */}
              <div className="p-4 rounded-2xl glass-card border border-blue-500/30 bg-blue-500/5 text-slate-100 font-extrabold text-base flex items-center gap-3 shadow-md">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse flex-shrink-0" />
                <span className="tracking-wide text-slate-100">{PERSONAL_INFO.name}</span>
              </div>

              <div className="space-y-4">
                {contactDetails.map((detail, idx) => {
                  const Icon = detail.icon;
                  return (
                    <div key={idx} className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl glass-panel ${detail.color} text-xl flex-shrink-0`}>
                        <Icon />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                          {detail.title}
                        </span>
                        {detail.link ? (
                          <a
                            href={detail.link}
                            target={detail.link.startsWith('http') ? "_blank" : undefined}
                            rel={detail.link.startsWith('http') ? "noopener noreferrer" : undefined}
                            className="text-slate-100 hover:text-cyan-400 font-medium text-sm transition-colors"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <span className="text-slate-100 font-medium text-sm">{detail.value}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-3">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  Follow & Connect
                </span>
                <SocialLinks />
              </div>
            </Card>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <Card className="p-8">
              <ContactForm />
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
