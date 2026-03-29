export default function Footer() {
  return (
    <footer className="bg-[#020817] border-t border-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <span className="text-2xl font-bold text-white tracking-tighter">
              QUANT<span className="text-blue-500">EXPERT</span>
            </span>
            <p className="mt-2 text-sm text-slate-500 max-w-xs">
              Let algorithms define wealth. The ultimate quantitative tool for professional investors.
            </p>
          </div>
          
          <div className="flex space-x-8">
            <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
              Strategy Docs
            </a>
            <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
              MQL5 Market
            </a>
            <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-900/50 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
          <p>
            &copy; {new Date().getFullYear()} QuantExpert Technologies. All rights reserved.
          </p>
          <p className="mt-4 md:mt-0 max-w-2xl text-right">
            Risk Warning: Trading Forex and CFDs carries a high level of risk and may not be suitable for all investors. Past performance is not indicative of future results.
          </p>
        </div>
      </div>
    </footer>
  );
}
