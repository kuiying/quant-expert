import { motion } from "motion/react";
import { ArrowRight, Activity, ShieldCheck, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center px-4 py-2 rounded-full border border-blue-900/30 bg-blue-900/10 backdrop-blur-sm mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
          <span className="text-sm font-medium text-blue-200 tracking-wide uppercase">
            MQL5 Official Certified · 1,200+ Days Stable Uptime
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6"
        >
          Let <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-200 to-blue-500">Algorithms</span> Define Wealth
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 max-w-2xl mx-auto text-xl md:text-2xl text-slate-400 font-light leading-relaxed"
        >
          The ultimate tool for professional investors. Built on deep learning and high-frequency trading architecture to lock in absolute returns in a volatile market.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#pricing"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(37,99,235,0.4)]"
          >
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
            <span className="relative flex items-center">
              Start Free Trial Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <a
            href="#products"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-slate-300 bg-slate-900/80 border border-slate-800 rounded-lg hover:bg-slate-800 hover:text-white transition-all backdrop-blur-sm"
          >
            Explore Flagship Strategies
          </a>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-800/50 pt-10"
        >
          {[
            { label: "Millisecond Execution", value: "< 5ms", icon: Zap },
            { label: "Max Drawdown", value: "4.2%", icon: ShieldCheck },
            { label: "Annualized Return", value: "42.8%", icon: Activity },
            { label: "Active Live Accounts", value: "8,500+", icon: Activity },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <stat.icon className="h-6 w-6 text-slate-500 mb-3" />
              <span className="text-3xl font-mono font-bold text-slate-200">{stat.value}</span>
              <span className="text-sm text-slate-500 mt-1 uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
