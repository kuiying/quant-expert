import { motion } from "motion/react";
import logo from "../logo.png";

export default function Navbar() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-8 py-6"
    >
      <div className="max-w-7xl mx-auto flex items-center">
        <a href="/" className="flex items-center gap-3 group">
          <div className="relative overflow-hidden rounded-xl shadow-lg shadow-blue-900/20 border border-slate-800/50 group-hover:border-blue-500/50 transition-colors bg-[#020817]">
            <img 
              src={logo} 
              alt="Quant Expert Logo" 
              className="h-14 w-14 object-cover"
              onError={(e) => {
                // Fallback if logo.png is not yet uploaded
                (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=QE&background=020817&color=3b82f6&size=128&font-size=0.4";
              }}
            />
          </div>
          <span className="text-xl font-bold text-white tracking-wide hidden sm:block">
            Quant<span className="text-blue-500">Expert</span>
          </span>
        </a>
      </div>
    </motion.header>
  );
}
