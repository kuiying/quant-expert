import React, { useState } from 'react';

type Lang = 'zh' | 'en';

export default function App() {
  const [lang, setLang] = useState<Lang>('zh');

  const t = {
    zh: {
      badge: 'BC Research · 跨市场量化套利与交易系统架构',
      title: '陈 波 (Bo Chen)',
      subtitle: '资深量化系统架构师 ｜ 跨市场套利策略合伙人 ｜ 跨国商务与风控专家',
      desc: '18年+ 境内外衍生品实战与软件工程研发经验。上海交通大学软件工程研修（国家高级软件工程师）、西南交通大学学士。曾获 2016 中国金融衍生品100人论坛“金骥奖”优秀专业人才，受聘为中国人民大学汉青研究院特约主讲嘉宾。',
      ctaPrimary: '预约策略路演 / 资金合作',
      ctaSecondary: '查看套利引擎实证数据',
      stats: [
        { label: '连续运行验证周期', val: '152 天', sub: '2026 实盘架构连续跟踪' },
        { label: '期内累计净收益率', val: '+16.74%', sub: '基准规模 $100,000 → $116,736.86' },
        { label: '日度盈利胜率', val: '71.0%', sub: '最佳单日 +$956.24' },
        { label: '单日最大回撤', val: '-0.53%', sub: '最差单日 -$533.57（严苛风控）' },
      ],
      sec1Title: '核心旗舰系统：BC Research 跨市场自动对冲套利引擎',
      sec1Sub: '打通链上永续合约（HyperLiquid）与传统衍生品经纪商（MT5）的毫秒级双向对冲与资金费率/价差套利架构',
      curveTitle: '累计净值收益曲线 (Cumulative PnL - USD)',
      curveFormula: '每日净收益归因公式：Venue Realized (已实现价差) - Fees (双边手续费) + MT5 (对冲端盈亏) + Funding (资金费率)',
      matrixTitle: '多资产跨平台自动对冲进程矩阵 (Bot + Hedger 异步解耦架构)',
      colSymbol: '标的资产',
      colClass: '资产类别',
      colMode: '执行架构',
      colLev: '动态杠杆/风控',
      colStatus: '系统状态',
      sec2Title: 'MQL5 全球商业级量化策略矩阵 (MetaTrader 5)',
      sec2Sub: '11年+ MQL5 认证开发者，面向全球机构与交易员交付高可靠性 EA 与风控系统（全 5.0 星满分评价 / 89+ 专业版部署）',
      sec3Title: '多市场量化工程与跨国复合履历',
      sec3Sub: '兼具底层代码工程实现、多品种策略研发与欧洲（阿姆斯特丹）跨国商务管理视野',
      contactTitle: '合作模式与联系通道',
      contactSub: '面向私募基金、家族办公室、实业资方及出海企业开放以下三种深度合作模式：',
      modes: [
        {
          title: '01 / 策略资金合作与专户孵化 (SMA / 自营分润)',
          detail: '依托成熟的跨市场套利与国内 30+ 商品期货 CTA 自动化系统，支持资方账户 API 托管运行与实时净值看板监控，源码本地加密部署，按约定回撤红线与业绩提成共赢。'
        },
        {
          title: '02 / 量化投资经理 / 交易系统架构师',
          detail: '全流程负责多资产（股指/商品/外汇/海外衍生品）量化策略研发、Python/SQL/C++ 行情与回测底座建设、多账户智能订单路由及事前事中风控体系搭建。'
        },
        {
          title: '03 / 跨国商务拓展与汇率/大宗商品套保顾问',
          detail: '结合上海磁浮（10年对德西门子/克虏伯技术主管）与泛鼎国际（欧洲区商务经理）经验，提供欧洲市场开拓、跨境供应链优化及欧元/美元汇率与原材料期权期货套期保值方案。'
        }
      ]
    },
    en: {
      badge: 'BC Research · Cross-Venue Quant Arbitrage & Execution Architecture',
      title: 'Bo Chen (陈波)',
      subtitle: 'Senior Quant System Architect | Arbitrage Strategy Partner | Cross-Border BD Lead',
      desc: '18+ years of experience in global derivatives trading and software engineering. SJTU Software Engineering Executive Program (Senior Software Engineer) & SWJTU B.Sc. Winner of the 2016 China Financial Derivatives "Golden Steed Award" & Guest Lecturer at RUC Hanqing Institute.',
      ctaPrimary: 'Inquire for Capital & Strategy Partnership',
      ctaSecondary: 'Explore Arbitrage Engine Metrics',
      stats: [
        { label: 'Verified Run Period', val: '152 Days', sub: 'Continuous Live-Architecture Tracking' },
        { label: 'Cumulative Net Return', val: '+16.74%', sub: '$100,000 Base → $116,736.86 NAV' },
        { label: 'Daily Winning Rate', val: '71.0%', sub: 'Best Day: +$956.24' },
        { label: 'Max Daily Drawdown', val: '-0.53%', sub: 'Worst Day: -$533.57 (Strict Risk Control)' },
      ],
      sec1Title: 'Flagship Engine: BC Research Cross-Venue Arbitrage System',
      sec1Sub: 'Automated low-latency spread & funding rate arbitrage bridging On-Chain Perpetuals (HyperLiquid) and Traditional Brokers (MT5)',
      curveTitle: 'Cumulative Net PnL Curve ($100k Base Portfolio)',
      curveFormula: 'Daily Net Attribution: Venue Realized - Trading Fees + MT5 Hedge Leg + Funding Rate Income',
      matrixTitle: 'Multi-Asset Automated Hedging Matrix (Decoupled Bot + Hedger Processes)',
      colSymbol: 'Instrument',
      colClass: 'Asset Class',
      colMode: 'Execution Mode',
      colLev: 'Leverage & Risk',
      colStatus: 'Engine Status',
      sec2Title: 'MQL5 Commercial Quantitative Suite (MetaTrader 5)',
      sec2Sub: '11+ Years Verified MQL5 Developer delivering production-grade EAs globally (5.0/5.0 Star Rating & 89+ Demo Deployments)',
      sec3Title: 'Quantitative Engineering & Global Leadership Track Record',
      sec3Sub: 'Bridging low-level execution code, multi-asset portfolio management, and European (Amsterdam) cross-border business leadership',
      contactTitle: 'Partnership Models & Direct Contact',
      contactSub: 'Open for institutional collaboration across private funds, family offices, corporate prop desks, and global enterprises:',
      modes: [
        {
          title: '01 / Capital Allocation & Prop Incubation (SMA / Profit Split)',
          detail: 'Deploy proven market-neutral cross-venue arbitrage and 30+ commodity CTA systems via API with real-time web attribution dashboards and strict drawdown guardrails.'
        },
        {
          title: '02 / Quantitative PM & Execution System Architect',
          detail: 'End-to-end alpha research, Python/C++/SQL data infrastructure, multi-account order routing bridges, and automated pre/in-trade risk management.'
        },
        {
          title: '03 / European BD & FX/Commodity Hedging Advisory',
          detail: 'Leveraging 10 years at Shanghai Maglev (Siemens/ThyssenKrupp technical lead) and European BD Manager role at Fanding International to empower global supply chain & FX risk management.'
        }
      ]
    }
  }[lang];

  const arbitrageAssets = [
    { sym: 'XYZ_GOLD / XAUUSD', cls: lang === 'zh' ? '贵金属跨市场套利' : 'Precious Metals Arb', mode: 'HL Perp ↔ MT5 Hedge', lev: '5x–20x Dynamic', status: 'Active / Monitored' },
    { sym: 'XYZ_SILVER / XAGUSD', cls: lang === 'zh' ? '白银期现/跨平台套利' : 'Silver Cross-Venue', mode: 'HL Perp ↔ MT5 Hedge', lev: '5x–15x Dynamic', status: 'Active / Monitored' },
    { sym: 'EURUSD / USDJPY / GBPUSD', cls: lang === 'zh' ? '主流外汇价差与费率对冲' : 'G10 FX Spread & Funding', mode: 'Dual Async Bot+Hedger', lev: '20x–30x Auto-Rebalance', status: 'Running (Live)' },
    { sym: 'SP500 / JP225 / NVDA', cls: lang === 'zh' ? '全球股指与美股映射套利' : 'Global Indices & Equities', mode: 'Cross-Market Neutral', lev: '5x Conservative', status: 'Active / Monitored' },
    { sym: 'XYZ_CL (WTI Crude)', cls: lang === 'zh' ? '能源大宗商品跨市对冲' : 'Energy Commodities', mode: 'Spread Mean-Reversion', lev: '5x Conservative', status: 'Active / Monitored' },
    { sym: 'DOMESTIC 30+ CTA (TB)', cls: lang === 'zh' ? '国内30+商品期货多周期CTA' : '30+ Domestic Futures CTA', mode: 'TradeBlazer Automated', lev: 'Dynamic Pos-Sizing', status: 'Production Ready' },
  ];

  const mqlProducts = [
    {
      name: 'Turtle Multi Pro',
      price: '$149 USD',
      rating: '★★★★★ 5.0',
      tag: 'Multi-Currency & Commodity Trend EA',
      desc: lang === 'zh'
        ? '基于改进型海龟交易法则的多品种、多周期全自动组合交易系统，内置波动率头寸调整（ATR）与账户级联动风控模块。'
        : 'Advanced multi-symbol portfolio trend-following EA featuring ATR volatility position sizing and account-wide drawdown protection.'
    },
    {
      name: 'Gold Quant Expert',
      price: '$149 USD',
      rating: '★★★★★ 5.0',
      tag: 'XAUUSD Specialized Quant Engine',
      desc: lang === 'zh'
        ? '专为黄金（XAUUSD）微观波动特征打造的量化交易系统，融合动量突破与均值回归过滤算法，严格控制盈亏比与滑点损耗。'
        : 'Quantitative execution system engineered specifically for Gold (XAUUSD) microstructure, combining momentum breakout filters with strict slippage control.'
    },
    {
      name: 'Turtle Trading Pro',
      price: '$49 USD',
      rating: '★★★★★ 5.0',
      tag: 'Classic Systematic CTA Execution',
      desc: lang === 'zh'
        ? '标准化趋势追踪自动执行工具，具备科学加减仓体系与震荡行情过滤器，有效规避趋势末端利润回吐。'
        : 'Streamlined systematic trend-tracking engine with dynamic pyramiding and choppy-market volatility filters.'
    }
  ];

  const milestones = [
    {
      period: '2019.11 – Present',
      role: lang === 'zh' ? 'BC Research 独立量化工作室 ｜ 创始人 & 系统架构师' : 'BC Research Quant Studio | Founder & Lead Architect',
      org: lang === 'zh' ? '同步任：泛鼎国际集团 · 欧洲区商务经理 (2024–至今) / 上海契胜科技 · 部门经理 (2019–2024)' : 'Concurrent: Europe BD Manager @ Fanding Intl (2024–Present) / Dept Manager @ Qisheng Tech',
      detail: lang === 'zh'
        ? '独立完成 HyperLiquid ↔ MT5 跨市场全自动套利系统（Bot+Hedger解耦架构与Web实时归因看板）及 MQL5 全球商业化策略矩阵研发；同时统筹欧洲区（阿姆斯特丹等）跨境供应链商务拓展与跨币种汇率风险研究。'
        : 'Architected the automated HyperLiquid ↔ MT5 cross-venue arbitrage engine and MQL5 global product suite, while leading European cross-border supply chain BD and FX exposure analysis.'
    },
    {
      period: '2011.03 – 2019.10',
      role: lang === 'zh' ? '金融产品负责人 / 资深金融衍生品分析师 & 量化研发' : 'Financial Product Lead & Senior Derivatives Quant Analyst',
      org: lang === 'zh' ? '上海丛鑫咨询有限公司 & 北京慢点富投资上海分公司' : 'Shanghai Congxin Consulting & Mandianfu Investment (Shanghai)',
      detail: lang === 'zh'
        ? '主导研发《国内30+商品期货趋势追踪自动交易系统(TB)》、《国际期货智能跟单与风控桥接系统》及《股票多空量化决策系统》；获2016中国金融衍生品100人论坛“金骥奖”，受聘为中国人民大学汉青研究院金融梦工厂特约主讲嘉宾。'
        : 'Developed 30+ commodity CTA systems (TradeBlazer), low-latency multi-account order routing bridges, and equity multi-factor decision systems. Awarded the 2016 "Golden Steed Award".'
    },
    {
      period: '2001.04 – 2012.05',
      role: lang === 'zh' ? '国际项目部技术主管 & 跨市场量化交易员' : 'International Technical Lead & Cross-Market Quant Trader',
      org: lang === 'zh' ? '上海磁浮交通发展有限公司 (2001–2011) / 上海梵汇投资 (2006–2012)' : 'Shanghai Maglev Transportation Dev. Co. & Fanhui Investment',
      detail: lang === 'zh'
        ? '10年深度参与上海磁浮国际合作项目，负责与德国西门子（Siemens）、蒂森克虏伯（ThyssenKrupp）联合体的技术谈判与国产化落地（获2011年度优秀员工）；并行构建境内外证券、期货及外汇数据库与程序化交易策略。'
        : '10 years leading technical localization with German consortiums (Siemens & ThyssenKrupp) at Shanghai Maglev (2011 Outstanding Employee), alongside building cross-market statistical arbitrage and automated trading databases.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-600 flex items-center justify-center font-bold text-slate-950 text-lg shadow-lg shadow-emerald-500/20">
              BC
            </div>
            <div>
              <span className="font-bold tracking-tight text-white text-base">BC Research</span>
              <span className="hidden sm:inline-block ml-2 text-xs px-2 py-0.5 rounded bg-slate-800 text-emerald-400 border border-slate-700">
                Quant & Arbitrage
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-6 text-sm">
            <a href="#arbitrage" className="hidden md:inline text-slate-300 hover:text-emerald-400 transition">
              {lang === 'zh' ? '套利引擎' : 'Arbitrage Engine'}
            </a>
            <a href="#products" className="hidden md:inline text-slate-300 hover:text-emerald-400 transition">
              {lang === 'zh' ? 'MQL5 策略库' : 'MQL5 Suite'}
            </a>
            <a href="#track" className="hidden md:inline text-slate-300 hover:text-emerald-400 transition">
              {lang === 'zh' ? '工程履历' : 'Track Record'}
            </a>
            <a href="#contact" className="hidden md:inline text-slate-300 hover:text-emerald-400 transition">
              {lang === 'zh' ? '合作联系' : 'Contact'}
            </a>
            <button
              onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
              className="px-3 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-slate-700 text-xs font-semibold transition cursor-pointer"
            >
              {lang === 'zh' ? 'EN / English' : '中文 / ZH'}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-14 pb-16 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{t.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            {t.title}
          </h1>
          <p className="text-lg sm:text-xl text-emerald-400 font-medium mb-4">
            {t.subtitle}
          </p>
          <p className="max-w-3xl text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
            {t.desc}
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition"
            >
              {t.ctaPrimary}
            </a>
            <a
              href="#arbitrage"
              className="px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm transition"
            >
              {t.ctaSecondary}
            </a>
          </div>

          {/* 4 Key Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.stats.map((st, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 transition"
              >
                <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">{st.label}</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mb-1">{st.val}</div>
                <div className="text-xs text-slate-400">{st.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1: Flagship Arbitrage Engine & Equity Curve */}
      <section id="arbitrage" className="py-16 border-b border-slate-800/80 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{t.sec1Title}</h2>
            <p className="text-slate-400 text-sm sm:text-base">{t.sec1Sub}</p>
          </div>

          {/* Interactive SVG Cumulative PnL Chart */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 mb-8 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
              <div>
                <h3 className="text-lg font-bold text-white">{t.curveTitle}</h3>
                <p className="text-xs text-slate-400 mt-1">{t.curveFormula}</p>
              </div>
              <div className="flex items-center space-x-3 text-xs">
                <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-semibold">
                  NET PNL: +$16,736.86 (+16.74%)
                </span>
                <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  WIN DAYS: 71% (152d)
                </span>
              </div>
            </div>

            {/* Pure SVG recreation of the 152-day smooth upward equity curve */}
            <div className="w-full overflow-hidden rounded-lg bg-slate-950 p-4 border border-slate-800/80">
              <svg viewBox="0 0 800 220" className="w-full h-48 sm:h-56">
                <defs>
                  <linearGradient id="pnlGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Horizontal grid lines */}
                <line x1="50" y1="30" x2="780" y2="30" stroke="#1e293b" strokeDasharray="4 4" />
                <line x1="50" y1="85" x2="780" y2="85" stroke="#1e293b" strokeDasharray="4 4" />
                <line x1="50" y1="140" x2="780" y2="140" stroke="#1e293b" strokeDasharray="4 4" />
                <line x1="50" y1="190" x2="780" y2="190" stroke="#334155" />

                {/* Y-axis labels */}
                <text x="10" y="34" fill="#64748b" fontSize="11">$15k+</text>
                <text x="10" y="89" fill="#64748b" fontSize="11">$10k</text>
                <text x="15" y="144" fill="#64748b" fontSize="11">$5k</text>
                <text x="20" y="194" fill="#64748b" fontSize="11">$0</text>

                {/* X-axis labels */}
                <text x="90" y="212" fill="#64748b" fontSize="11">Jul 2026</text>
                <text x="250" y="212" fill="#64748b" fontSize="11">Aug 2026</text>
                <text x="415" y="212" fill="#64748b" fontSize="11">Sep 2026</text>
                <text x="580" y="212" fill="#64748b" fontSize="11">Oct 2026</text>
                <text x="720" y="212" fill="#64748b" fontSize="11">Nov 2026</text>

                {/* Area under curve */}
                <path
                  d="M 50 190 L 75 182 L 105 184 L 135 175 L 170 172 L 205 162 L 240 155 L 275 142 L 310 132 L 345 115 L 380 112 L 415 104 L 450 102 L 485 80 L 520 78 L 555 60 L 590 52 L 625 45 L 660 48 L 695 38 L 735 34 L 780 26 L 780 190 Z"
                  fill="url(#pnlGrad)"
                />
                {/* Smooth upward cumulative PnL line */}
                <path
                  d="M 50 190 L 75 182 L 105 184 L 135 175 L 170 172 L 205 162 L 240 155 L 275 142 L 310 132 L 345 115 L 380 112 L 415 104 L 450 102 L 485 80 L 520 78 L 555 60 L 590 52 L 625 45 L 660 48 L 695 38 L 735 34 L 780 26"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3"
                />
                <circle cx="780" cy="26" r="4.5" fill="#10b981" />
              </svg>
            </div>
          </div>

          {/* Multi-Asset Execution Matrix Table */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
              <h3 className="text-base font-bold text-white">{t.matrixTitle}</h3>
              <span className="text-xs text-emerald-400 font-mono">127.0.0.1:8050 · Real-time Margin & Spread Guard</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 text-xs uppercase bg-slate-950/50">
                    <th className="py-3.5 px-6">{t.colSymbol}</th>
                    <th className="py-3.5 px-6">{t.colClass}</th>
                    <th className="py-3.5 px-6">{t.colMode}</th>
                    <th className="py-3.5 px-6">{t.colLev}</th>
                    <th className="py-3.5 px-6">{t.colStatus}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/70">
                  {arbitrageAssets.map((item, i) => (
                    <tr key={i} className="hover:bg-slate-800/40 transition">
                      <td className="py-3.5 px-6 font-mono font-semibold text-white">{item.sym}</td>
                      <td className="py-3.5 px-6 text-slate-300">{item.cls}</td>
                      <td className="py-3.5 px-6 font-mono text-xs text-cyan-400">{item.mode}</td>
                      <td className="py-3.5 px-6 text-slate-400 text-xs">{item.lev}</td>
                      <td className="py-3.5 px-6">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                          ● {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: MQL5 Commercial Quant Products */}
      <section id="products" className="py-16 border-b border-slate-800/80 bg-slate-900/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{t.sec2Title}</h2>
            <p className="text-slate-400 text-sm sm:text-base">{t.sec2Sub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mqlProducts.map((prod, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="px-2.5 py-1 rounded bg-slate-800 text-cyan-400 font-medium">
                      {prod.tag}
                    </span>
                    <span className="text-amber-400 font-bold">{prod.rating}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{prod.name}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">{prod.desc}</p>
                </div>
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-lg font-extrabold text-emerald-400">{prod.price}</span>
                  <span className="text-xs text-slate-400">MetaTrader 5 Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Career & Engineering Track Record */}
      <section id="track" className="py-16 border-b border-slate-800/80 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{t.sec3Title}</h2>
            <p className="text-slate-400 text-sm sm:text-base">{t.sec3Sub}</p>
          </div>

          <div className="space-y-6">
            {milestones.map((ms, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white">{ms.role}</h3>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 mt-1 sm:mt-0 w-fit">
                    {ms.period}
                  </span>
                </div>
                <div className="text-xs text-cyan-400 font-medium mb-3">{ms.org}</div>
                <p className="text-sm text-slate-300 leading-relaxed">{ms.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Partnership & Contact */}
      <section id="contact" className="py-16 bg-slate-900/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{t.contactTitle}</h2>
            <p className="text-slate-400 text-sm sm:text-base">{t.contactSub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {t.modes.map((m, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
                <h3 className="text-base font-bold text-emerald-400 mb-3">{m.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{m.detail}</p>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950/40 border border-emerald-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-wider text-emerald-400 font-semibold mb-1">
                Direct Communication · Shanghai Pudong & Amsterdam
              </div>
              <div className="text-2xl font-bold text-white mb-2">
                {lang === 'zh' ? '欢迎私募合伙人、资方及企业高管直接联系' : 'Connect Directly for Strategy Demo & Partnership'}
              </div>
              <div className="text-sm text-slate-300 space-y-1">
                <div>📧 Email: <a href="mailto:aares@126.com" className="text-emerald-400 underline">aares@126.com</a></div>
                <div>📱 Tel / WeChat: <span className="text-white font-mono">+86 136-5179-3509</span></div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:aares@126.com?subject=Quant%20Strategy%20%26%20Partnership%20Inquiry"
                className="px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition"
              >
                {lang === 'zh' ? '发送合作邮件 (aares@126.com)' : 'Send Email Now'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800/80 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4">
          © {new Date().getFullYear()} Bo Chen (BC Research). Built for Institutional Quantitative Trading, Cross-Venue Arbitrage & Global Risk Management.
        </div>
      </footer>
    </div>
  );
}
