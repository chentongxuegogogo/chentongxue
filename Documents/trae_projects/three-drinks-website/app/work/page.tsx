"use client";

import { Navigation } from "@/components/layout/Navigation";
import { siteData } from "@/data/content";
import { motion } from "framer-motion";
import { Download, ExternalLink, Briefcase, GraduationCap, Code } from "lucide-react";

export default function WorkPage() {
  const { resume } = siteData;

  return (
    <div className="min-h-screen bg-[#FDFBF7]"> {/* Warm/Coffee background */}
      <Navigation />
      
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-2 text-amber-700 font-medium tracking-widest uppercase text-sm">
            <Briefcase size={16} />
            <span>Work & Experience</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-8">
            Professional Journey
          </h1>
          
          <div className="prose prose-stone mb-12 text-stone-600">
            <p className="text-lg leading-relaxed">{siteData.profile.tagline}</p>
          </div>

          {/* Highlights */}
          <section className="mb-16">
            <h2 className="text-xl font-bold text-stone-900 mb-6 border-b border-stone-200 pb-2">Highlights</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {resume.highlights.map((item, i) => (
                <li key={i} className="bg-white p-4 rounded-lg border border-stone-100 shadow-sm text-stone-700">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Experience */}
          <section className="mb-16">
            <h2 className="text-xl font-bold text-stone-900 mb-6 border-b border-stone-200 pb-2">Experience</h2>
            <div className="space-y-8">
              {resume.experience.map((exp, i) => (
                <div key={i} className="relative border-l-2 border-stone-200 pl-6 pb-2">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-stone-300" />
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                    <h3 className="text-lg font-semibold text-stone-900">{exp.role}</h3>
                    <span className="text-sm text-stone-500 font-mono">{exp.period}</span>
                  </div>
                  <div className="text-stone-800 font-medium mb-3">{exp.company}</div>
                  <ul className="list-disc list-inside space-y-1 text-stone-600 text-sm">
                    {exp.description.map((desc, j) => (
                      <li key={j}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education & Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <section>
              <div className="flex items-center gap-2 mb-6 border-b border-stone-200 pb-2">
                <GraduationCap size={20} className="text-stone-400" />
                <h2 className="text-xl font-bold text-stone-900">Education</h2>
              </div>
              {resume.education.map((edu, i) => (
                <div key={i} className="mb-4">
                  <h3 className="font-semibold text-stone-900">{edu.school}</h3>
                  <p className="text-stone-600">{edu.degree}</p>
                  <p className="text-sm text-stone-400">{edu.year}</p>
                </div>
              ))}
            </section>

            <section>
              <div className="flex items-center gap-2 mb-6 border-b border-stone-200 pb-2">
                <Code size={20} className="text-stone-400" />
                <h2 className="text-xl font-bold text-stone-900">Skills</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {resume.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-stone-100 text-stone-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Download CTA */}
          <div className="mt-12 p-8 bg-stone-900 text-stone-100 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Want the full version?</h3>
              <p className="text-stone-400 text-sm">Download my resume in PDF format.</p>
            </div>
            <a 
              href={resume.pdfUrl} 
              className="flex items-center gap-2 bg-white text-stone-900 px-6 py-3 rounded-xl font-bold hover:bg-stone-200 transition-colors"
              download
            >
              <Download size={18} />
              Download PDF
            </a>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
