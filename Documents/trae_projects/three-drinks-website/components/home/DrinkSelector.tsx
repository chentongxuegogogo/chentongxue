"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Coffee, GlassWater, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

type DrinkType = "coffee" | "coke" | "water";

interface DrinkOption {
  id: DrinkType;
  label: string;
  subLabel: string; // The "meaning" (Work/Life/Family)
  description: string;
  icon: React.ReactNode;
  color: string; // Accent color class
  route: string;
}

const drinks: DrinkOption[] = [
  {
    id: "coffee",
    label: "Coffee",
    subLabel: "Work",
    description: "Professional projects, resume, and career journey.",
    icon: <Coffee className="w-8 h-8" />,
    color: "text-amber-700",
    route: "/work",
  },
  {
    id: "coke",
    label: "Coke",
    subLabel: "Life",
    description: "Photography, writing, and personal interests.",
    icon: <Zap className="w-8 h-8" />,
    color: "text-red-600",
    route: "/life",
  },
  {
    id: "water",
    label: "Water",
    subLabel: "Family",
    description: "Gentle moments, privacy, and essential bonds.",
    icon: <GlassWater className="w-8 h-8" />,
    color: "text-sky-400",
    route: "/family",
  },
];

export const DrinkSelector = () => {
  const [hovered, setHovered] = useState<DrinkType | null>(null);
  const router = useRouter();

  const handleSelect = (route: string) => {
    // Simple transition logic - in a real app, maybe wait for animation
    router.push(route);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 h-[60vh] md:h-[500px]">
        {drinks.map((drink) => {
          const isHovered = hovered === drink.id;
          const isBlur = hovered !== null && hovered !== drink.id;

          return (
            <motion.div
              key={drink.id}
              className={cn(
                "relative group cursor-pointer overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 flex flex-col justify-between transition-colors duration-300 shadow-sm hover:shadow-xl",
                isBlur ? "opacity-40 blur-[2px] scale-95" : "opacity-100 scale-100"
              )}
              onMouseEnter={() => setHovered(drink.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => handleSelect(drink.route)}
              whileHover={{ scale: 1.02 }}
              animate={{
                scale: isBlur ? 0.95 : 1,
                opacity: isBlur ? 0.5 : 1,
                filter: isBlur ? "blur(4px)" : "blur(0px)",
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Background Accent Gradient */}
              <div
                className={cn(
                  "absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-10 rounded-bl-full transition-all duration-500",
                  drink.id === "coffee" && "from-amber-200 to-amber-500",
                  drink.id === "coke" && "from-red-200 to-red-500",
                  drink.id === "water" && "from-sky-200 to-sky-500",
                  isHovered ? "scale-150 opacity-20" : "scale-100"
                )}
              />

              <div className="relative z-10">
                <div
                  className={cn(
                    "mb-6 p-3 w-fit rounded-xl bg-gray-50 transition-colors duration-300",
                    isHovered ? "bg-white shadow-md" : "",
                    drink.color
                  )}
                >
                  {drink.icon}
                </div>
                <h3 className="text-3xl font-light tracking-tight text-gray-900 mb-2">
                  {drink.label}
                </h3>
                <span className={cn("text-sm font-medium uppercase tracking-widest", drink.color)}>
                  {drink.subLabel}
                </span>
              </div>

              <div className="relative z-10">
                <p className="text-gray-500 leading-relaxed">
                  {drink.description}
                </p>
                <motion.div
                  className={cn("mt-4 h-0.5 w-0 bg-current transition-all duration-500", drink.color)}
                  animate={{ width: isHovered ? "100%" : "0%" }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
      
      <div className="mt-12 text-center md:hidden text-gray-400 text-sm">
        Tap a card to explore
      </div>
    </div>
  );
};
