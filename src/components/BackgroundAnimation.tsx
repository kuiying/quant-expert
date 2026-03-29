import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function BackgroundAnimation() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Generate random particles
  const particles = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Deep space gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#020817] to-[#020817]"></div>

      {/* Particle Matrix */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-blue-400/20"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
            delay: p.delay,
          }}
        />
      ))}

      {/* SVG K-Line Flowing Curves */}
      <svg
        className="absolute w-full h-full opacity-20 mix-blend-screen"
        preserveAspectRatio="none"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0" />
            <stop offset="50%" stopColor="#2563eb" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Curve 1 */}
        <motion.path
          d="M 0 800 Q 250 700 500 800 T 1000 600"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        />
        
        {/* Curve 2 */}
        <motion.path
          d="M 0 900 Q 300 950 600 850 T 1000 700"
          fill="none"
          stroke="url(#lineGradient2)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: 1 }}
        />

        {/* Abstract K-lines (Candlesticks) */}
        {Array.from({ length: 20 }).map((_, i) => {
          const x = i * 50 + 25;
          const yBase = 600 + Math.sin(i * 0.5) * 100;
          const height = Math.random() * 60 + 20;
          const isUp = Math.random() > 0.5;
          const color = isUp ? "#10b981" : "#ef4444"; // Green/Red
          
          return (
            <motion.g key={`kline-${i}`} opacity="0.3">
              {/* Wick */}
              <line x1={x} y1={yBase - height/2 - 10} x2={x} y2={yBase + height/2 + 10} stroke={color} strokeWidth="1" />
              {/* Body */}
              <rect x={x - 3} y={yBase - height/2} width="6" height={height} fill={color} />
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}
