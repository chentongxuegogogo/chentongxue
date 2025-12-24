"use client";

import { useState, useEffect } from "react";
import { DrinkSelector } from "@/components/home/DrinkSelector";
import { SplashScreen } from "@/components/home/SplashScreen";
import { siteData } from "@/data/content";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  
  // Use session storage to show splash only once per session
  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");
    if (hasSeenSplash) {
      setShowSplash(false);
    }
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
    sessionStorage.setItem("hasSeenSplash", "true");
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && (
          <SplashScreen onComplete={handleSplashComplete} />
        )}
      </AnimatePresence>

      <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-[#fafafa]">
        {!showSplash && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full flex flex-col items-center"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900 mb-4">
                {siteData.profile.name}
              </h1>
              <p className="text-lg text-gray-500 max-w-lg mx-auto">
                {siteData.profile.bio}
              </p>
            </motion.div>

            <DrinkSelector />

            <footer className="fixed bottom-6 w-full text-center text-xs text-gray-400">
              <p>© {new Date().getFullYear()} {siteData.profile.name}. All rights reserved.</p>
              <a 
                href={siteData.profile.xhsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-red-500 transition-colors mt-2 inline-block"
              >
                Xiaohongshu
              </a>
            </footer>
          </motion.div>
        )}
      </main>
    </>
  );
}
