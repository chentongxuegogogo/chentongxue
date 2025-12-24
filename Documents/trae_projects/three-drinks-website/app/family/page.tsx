"use client";

import { Navigation } from "@/components/layout/Navigation";
import { motion } from "framer-motion";

export default function FamilyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      <main className="max-w-2xl mx-auto px-6 pt-40 pb-24 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="w-16 h-16 mx-auto bg-sky-100 rounded-full flex items-center justify-center mb-8">
            <span className="text-2xl">💧</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-light text-slate-800 mb-8 tracking-tight">
            Family & Quiet Moments
          </h1>
          
          <div className="prose prose-slate mx-auto text-slate-500 leading-loose">
            <p>
              Some things are kept offline, treasured in the quiet spaces between pixels.
            </p>
            <p>
              This space is dedicated to the people who make life flow like water—essential, 
              transparent, and life-giving.
            </p>
          </div>

          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-50">
             {/* Abstract visual placeholders for "privacy" */}
             {[1, 2, 3, 4].map((i) => (
               <div key={i} className="aspect-square bg-slate-200 rounded-lg animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
             ))}
          </div>
          
          <p className="mt-8 text-xs text-slate-400 uppercase tracking-widest">
            Private Collection
          </p>

        </motion.div>
      </main>
    </div>
  );
}
