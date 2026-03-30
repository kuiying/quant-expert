/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import BackgroundAnimation from "./components/BackgroundAnimation";
import Hero from "./components/Hero";
import Products from "./components/Products";
import TrustSignals from "./components/TrustSignals";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#020817] text-slate-300 font-sans selection:bg-blue-500/30 selection:text-white">
      <BackgroundAnimation />
      
      {/* Header / Logo */}
      <header className="absolute top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center">
          <span className="text-2xl font-bold text-white tracking-tighter uppercase">
            Quant<span className="text-blue-500">Expert</span>
          </span>
        </div>
      </header>

      <main className="relative z-10">
        <Hero />
        <Products />
        <TrustSignals />
      </main>
      <Footer />
    </div>
  );
}
