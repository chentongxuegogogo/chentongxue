"use client";

import { Navigation } from "@/components/layout/Navigation";
import { siteData } from "@/data/content";
import { motion } from "framer-motion";
import { Camera, BookOpen, ExternalLink, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function LifePage() {
  const { photography, articles } = siteData;

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <header className="mb-20">
            <span className="text-red-600 font-bold tracking-widest uppercase text-sm mb-2 block">Life & Passion</span>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight">
              Captured & <br/>Written.
            </h1>
          </header>

          {/* Photography Section */}
          <section className="mb-24">
            <div className="flex items-end justify-between mb-8 border-b border-gray-100 pb-4">
              <div className="flex items-center gap-2">
                <Camera className="text-red-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">Photography</h2>
              </div>
              <span className="text-sm text-gray-400">Selected Works</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {photography.map((photo) => (
                <div key={photo.id} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-gray-100 mb-4">
                    <img 
                      src={photo.coverImage} 
                      alt={photo.title}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                        {photo.title}
                      </h3>
                      <p className="text-gray-500 text-sm mt-1">{photo.location} • {photo.date}</p>
                    </div>
                    <ArrowUpRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-red-500" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Articles Section */}
          <section>
            <div className="flex items-end justify-between mb-8 border-b border-gray-100 pb-4">
              <div className="flex items-center gap-2">
                <BookOpen className="text-red-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">Articles</h2>
              </div>
              <span className="text-sm text-gray-400">Thoughts & Tutorials</span>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {articles.map((article) => (
                <a 
                  key={article.id} 
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-6 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-2">
                        {article.title}
                      </h3>
                      <div className="flex gap-3 text-sm text-gray-500">
                        <span>{article.date}</span>
                        {article.tags.map(tag => (
                          <span key={tag} className="px-2 py-0.5 bg-gray-200 rounded-full text-xs text-gray-700">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ExternalLink className="text-gray-400 group-hover:text-red-500 transition-colors" size={20} />
                  </div>
                </a>
              ))}
            </div>
          </section>

        </motion.div>
      </main>
    </div>
  );
}
