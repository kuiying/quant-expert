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
      <main className="relative z-10">
        <Hero />
        <Products />
        <TrustSignals />
      </main>
      <Footer />
    </div>
  );
}
