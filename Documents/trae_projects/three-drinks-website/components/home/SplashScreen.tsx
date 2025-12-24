"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// ==========================================
// 🔧 配置区域 (Configuration)
// ==========================================
export const BOOT_CONFIG = {
  text: "你好，我是陈芳林，一名Ai训练师", // 启动页文案
  bgColor: "bg-neutral-900", // 背景色 (Tailwind class)
  textColor: "text-white",   // 文字颜色
  animationDuration: 2.5,    // 书写动画时长 (秒)
  holdDuration: 1.0,         // 写完后停留时长 (秒)
  totalDuration: 4.0,        // 兜底总时长 (秒)
};

export const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [skip, setSkip] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // 1. Check for reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isReduced = mediaQuery.matches;

    // 2. Calculate timings
    // If reduced motion, we just fade in text (0.8s) -> hold (0.8s) -> exit
    const totalTime = isReduced 
      ? 2000 
      : (BOOT_CONFIG.animationDuration + BOOT_CONFIG.holdDuration + 0.5) * 1000;

    // 3. Timer to auto-dismiss
    const timer = setTimeout(() => {
      onComplete();
    }, totalTime);

    // 4. Handle Skip (Esc key)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleSkip();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setSkip(true);
    // Give a tiny buffer for the exit animation
    setTimeout(onComplete, 100);
  };

  if (!isMounted) return null;

  return (
    <motion.div
      className={`fixed inset-0 z-[100] flex items-center justify-center ${BOOT_CONFIG.bgColor}`}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      {/* Skip Button */}
      <button 
        onClick={handleSkip}
        className="absolute top-8 right-8 text-white/30 hover:text-white/80 transition-colors text-sm uppercase tracking-widest flex items-center gap-2"
        aria-label="Skip animation"
      >
        <span>Skip</span>
        <X size={16} />
      </button>

      <div className="relative overflow-hidden px-8 max-w-4xl text-center">
        <motion.h1
          className={`text-3xl md:text-5xl font-light leading-relaxed select-none ${BOOT_CONFIG.textColor}`}
          style={{
            fontFamily: '"Kaiti SC", "STKaiti", "KaiTi", "楷体", "Xingkai SC", cursive, serif',
            letterSpacing: "0.15em",
          }}
          initial={{ 
            clipPath: "inset(0 100% 0 0)", // Start hidden (masked from right)
            opacity: 1 
          }}
          animate={{ 
            clipPath: "inset(0 0% 0 0)",   // Reveal to full
            opacity: 1
          }}
          transition={{ 
            duration: BOOT_CONFIG.animationDuration, 
            ease: "easeInOut", // Smooth handwriting flow
            delay: 0.2
          }}
          aria-label={BOOT_CONFIG.text}
        >
          {BOOT_CONFIG.text}
        </motion.h1>
        
        {/* Shimmer overlay for "wet ink" effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-full h-full"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ 
            duration: BOOT_CONFIG.animationDuration + 0.5, 
            ease: "easeInOut",
            delay: 0.1 
          }}
        />
      </div>
      
      {/* Screen Reader Only Text */}
      <span className="sr-only">{BOOT_CONFIG.text}</span>
    </motion.div>
  );
};
