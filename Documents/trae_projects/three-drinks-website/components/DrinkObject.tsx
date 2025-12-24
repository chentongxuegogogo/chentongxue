"use client";
import React from "react";

type DrinkType = "coffee" | "coke" | "water";

export default function DrinkObject({ type, size = "lg" }: { type: DrinkType; size?: "sm" | "lg" }) {
  const cupSize = size === "sm" ? "w-20 h-28" : "w-32 h-40";
  const liquidHeight = type === "water" ? "h-[78%]" : type === "coffee" ? "h-[85%]" : "h-[90%]";
  const liquidColor =
    type === "coffee"
      ? "bg-[linear-gradient(to_top,#0a0503_0%,#2a1810_50%,#5d3a29_100%)] shadow-[inset_0_0_20px_rgba(0,0,0,0.6)]"
      : type === "coke"
      ? "bg-[linear-gradient(to_top,#2b0000_0%,#7f1d1d_60%,#991b1b_100%)] shadow-[inset_0_0_15px_rgba(0,0,0,0.4)]"
      : "bg-gradient-to-t from-sky-200/30 to-transparent";

  return (
    <div className={`relative ${cupSize} bg-white/10 rounded-b-3xl overflow-hidden border-l border-r border-b-4 border-white/30 shadow-[inset_0_-10px_15px_rgba(255,255,255,0.1),0_10px_20px_rgba(0,0,0,0.05)]`}> 
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* Enhanced Reflection */}
        <div className="absolute top-0 left-2 w-5 h-full bg-gradient-to-r from-white/10 to-white/5 blur-[4px]"></div>
        <div className="absolute top-3 left-3 w-1 h-16 bg-white/30 rounded-full blur-[1px]"></div>
      </div>

      <div className={`absolute bottom-0 w-full ${liquidHeight} ${liquidColor} rounded-b-[1.3rem] z-0`}>
         {/* Coffee Crema/Foam */}
         {type === "coffee" && (
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[linear-gradient(90deg,#8d7b68,#c4a484,#8d7b68)] opacity-80 blur-[0.5px]"></div>
         )}
      </div>

      {type === "coffee" && (
        <>
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="absolute z-10 bg-gradient-to-br from-white/40 via-white/10 to-white/5 backdrop-blur-[3px] rounded border-t border-l border-white/60 border-r border-b border-white/20 shadow-sm ice-cube"
              style={{
                width: `${24 - i * 2}px`,
                height: `${24 - i * 2}px`,
                top: `${8 + i * 6}px`,
                left: `${12 + i * 12}px`,
              }}
            />
          ))}
        </>
      )}

      {type === "coke" && (
        <>
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="bubble"
              style={{ left: `${8 + (i % 6) * 12}%`, animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </>
      )}

      {type === "water" && (
        <div className="absolute w-[120%] left-1/2 -translate-x-1/2 top-[22%] h-4 bg-sky-100/30 rounded-full blur-[2px] wave"></div>
      )}
    </div>
  );
}

