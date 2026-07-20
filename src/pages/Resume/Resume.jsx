import React from 'react';
import { ResumeSEO } from '../../seo';
import { Container } from '../../components/common/Container';
import { Section } from '../../components/common/Section';
import { SectionTitle } from '../../components/common/SectionTitle';
import { PERSONAL_INFO } from '../../utils/constants';
import { EXPERIENCES } from '../../data/experience';
import { EDUCATION } from '../../data/education';
import { Button } from '../../components/common/Button';
import { downloadResume } from '../../utils/helpers';
import { FaDownload, FaBriefcase, FaGraduationCap } from 'react-icons/fa';

export const Resume = () => {
  return (
    <>
      <ResumeSEO />
      <Section className="pt-32 pb-20">
        <Container size="md">
          <SectionTitle
            badge="Curriculum Vitae"
            title="Official Resume"
            subtitle="Software Engineering summary, professional experience, education, and technical capabilities."
          />

          <div className="glass-card p-6 sm:p-10 rounded-3xl border border-slate-800 space-y-8 shadow-2xl my-8">
            {/* Resume Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <h1 className="text-3xl font-extrabold text-slate-100">{PERSONAL_INFO.name}</h1>
                <p className="text-sm font-semibold text-blue-400 mt-1">{PERSONAL_INFO.title}</p>
                <p className="text-xs text-slate-400 mt-1">{PERSONAL_INFO.email} • {PERSONAL_INFO.phone} • {PERSONAL_INFO.location}</p>
              </div>

              <Button
                variant="primary"
                size="md"
                icon={FaDownload}
                onClick={downloadResume}
              >
                Download PDF
              </Button>
            </div>

            {/* Professional Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">Professional Summary</h2>
              <p className="text-sm text-slate-300 leading-relaxed">{PERSONAL_INFO.bio}</p>
            </div>

            {/* Experience */}
            <div className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <FaBriefcase className="text-blue-400" />
                <span>Professional Experience</span>
              </h2>

              <div className="space-y-4">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.id} className="glass-panel p-4 rounded-xl border border-slate-800 space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-base font-bold text-slate-100">{exp.company}</h3>
                        <span className="text-xs text-blue-400 font-semibold">{exp.role}</span>
                      </div>
                      <span className="text-xs font-mono text-slate-400">{exp.duration}</span>
                    </div>
                    <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                      {exp.achievements.slice(0, 3).map((ach, i) => (
                        <li key={i}>{ach}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <FaGraduationCap className="text-purple-400" />
                <span>Education</span>
              </h2>

              <div className="space-y-3">
                {EDUCATION.map((edu) => (
                  <div key={edu.id} className="glass-panel p-4 rounded-xl border border-slate-800 flex justify-between items-center">
                    <div>
                      <h3 className="text-sm font-bold text-slate-100">{edu.degree} - {edu.field}</h3>
                      <span className="text-xs text-slate-400">{edu.institution}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono text-emerald-400 font-bold block">{edu.grade}</span>
                      <span className="text-[11px] font-mono text-slate-400">{edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Resume;
