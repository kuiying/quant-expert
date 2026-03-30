import { motion } from "motion/react";
import { CheckCircle2, TrendingUp, Cpu, Network, ShieldAlert, Clock, Zap } from "lucide-react";

export default function Products() {
  const products = [
    {
      name: "Turtle Pro",
      badge: "Classic Evolved",
      description: "The evolved version of the classic Turtle strategy, designed for medium-to-long-term trend tracking, filtering market noise to capture major market movements.",
      price: "$99/mo",
      features: [
        { icon: TrendingUp, text: "Dynamic Trend Tracking Algorithm" },
        { icon: ShieldAlert, text: "Intelligent Dynamic Stop-Loss" },
        { icon: Clock, text: "Suitable for Mid/Long-term Holding" },
        { icon: CheckCircle2, text: "Supports Major Forex & Commodities" },
      ],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=2070",
      cta: "Get Turtle Pro",
      link: "https://www.mql5.com/en/market/product/168850?source=Site+Profile+Seller",
      highlight: false,
    },
    {
      name: "Quant Expert",
      badge: "Flagship Core",
      description: "The core flagship quantitative expert, integrating deep learning and multi-factor models for millisecond high-frequency execution, capturing arbitrage opportunities 24/7.",
      price: "$299/mo",
      features: [
        { icon: Cpu, text: "Neural Network Prediction Engine" },
        { icon: Zap, text: "Millisecond HFT Architecture" },
        { icon: Network, text: "Multi-factor Quantitative Model" },
        { icon: CheckCircle2, text: "24/7 Cross-asset Arbitrage" },
      ],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2034",
      cta: "Upgrade to Quant Expert",
      link: "https://www.mql5.com/en/market/product/166498?source=Site+Profile+Seller",
      highlight: true,
    },
  ];

  return (
    <section id="products" className="py-24 bg-[#030b20] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Quantitative Weapon</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light">
            Whether you are a steady trend follower or a high-frequency trader pursuing ultimate efficiency, we have an algorithmic model to match your ambition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative rounded-2xl overflow-hidden border ${
                product.highlight ? "border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.15)]" : "border-slate-800"
              } bg-slate-900/50 backdrop-blur-xl flex flex-col`}
            >
              {/* Image Header */}
              <div className="h-48 md:h-64 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-[#030b20] via-[#030b20]/60 to-transparent z-10"></div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
                />
                <div className="absolute top-6 left-6 z-20">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider ${
                    product.highlight ? "bg-blue-500/20 text-blue-400 border border-blue-500/30" : "bg-slate-800 text-slate-300 border border-slate-700"
                  }`}>
                    {product.badge}
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 z-20">
                  <h3 className="text-3xl font-bold text-white">{product.name}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-grow flex flex-col">
                <p className="text-slate-400 mb-8 leading-relaxed min-h-[80px]">
                  {product.description}
                </p>

                <ul className="space-y-4 mb-10 flex-grow">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-slate-300">
                      <feature.icon className={`h-5 w-5 mr-4 ${product.highlight ? "text-blue-400" : "text-slate-500"}`} />
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-lg font-medium text-center transition-all ${
                    product.highlight
                      ? "bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                      : "bg-slate-800 text-white hover:bg-slate-700"
                  }`}
                >
                  {product.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
