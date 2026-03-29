import { motion } from "motion/react";
import { Star, Shield, Award, CheckCircle } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", profit: 4000 },
  { name: "Feb", profit: 5500 },
  { name: "Mar", profit: 4800 },
  { name: "Apr", profit: 7200 },
  { name: "May", profit: 8500 },
  { name: "Jun", profit: 11000 },
  { name: "Jul", profit: 10500 },
  { name: "Aug", profit: 14000 },
  { name: "Sep", profit: 16500 },
  { name: "Oct", profit: 15000 },
  { name: "Nov", profit: 19000 },
  { name: "Dec", profit: 24000 },
];

export default function TrustSignals() {
  return (
    <section className="py-24 bg-[#020817] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Chart */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-transparent blur-2xl rounded-full z-0"></div>
            <div className="relative z-10 bg-slate-900/40 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white">Quant Expert Yield Curve</h3>
                  <p className="text-sm text-slate-500">Live Account Performance (USD)</p>
                </div>
                <div className="text-right">
                  <span className="block text-2xl font-mono font-bold text-[#10b981]">+42.8%</span>
                  <span className="text-xs text-slate-500 uppercase">YTD Return</span>
                </div>
              </div>
              
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                    <XAxis dataKey="name" stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#475569" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value/1000}k`} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#fff' }}
                      itemStyle={{ color: '#3b82f6' }}
                    />
                    <Area type="monotone" dataKey="profit" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorProfit)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>

          {/* Right: Trust Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-slate-900/80 border border-slate-800 rounded-full px-4 py-2 mb-6">
              <Award className="h-5 w-5 text-blue-400" />
              <span className="text-sm font-medium text-slate-300">Top 1% Strategy on MQL5 Official Market</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Let the data speak,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-slate-500">trust built on real profitability.</span>
            </h2>
            
            <p className="text-lg text-slate-400 mb-10 leading-relaxed font-light">
              Our strategy models not only excel in backtesting but have also withstood extreme market conditions across thousands of live accounts. Every trade is filtered through strict risk control.
            </p>

            <div className="space-y-6">
              {/* Review 1 */}
              <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-blue-400 text-blue-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-500">2 days ago</span>
                </div>
                <p className="text-slate-300 text-sm italic mb-4">
                  "This is the most stable EA I've ever used. During NFP releases, its risk control perfectly avoids violent fluctuations, while accurately capturing profits when trends are clear."
                </p>
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-400 mr-3">
                    AL
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Alex L.</p>
                    <p className="text-xs text-slate-500">Professional Trader · Licensed User</p>
                  </div>
                </div>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center space-x-3">
                  <Shield className="h-8 w-8 text-slate-500" />
                  <div>
                    <p className="text-sm font-medium text-white">Fund Security</p>
                    <p className="text-xs text-slate-500">Hard Stop-Loss Protection</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-8 w-8 text-slate-500" />
                  <div>
                    <p className="text-sm font-medium text-white">100% Automated</p>
                    <p className="text-xs text-slate-500">No Manual Intervention Required</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
