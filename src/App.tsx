import { useState } from 'react';

type Lang = 'zh' | 'en';

export default function App() {
  const [lang, setLang] = useState<Lang>('zh');

  const t = {
    zh: {
      navArb: '跨市场套利引擎',
      navRwa: 'Web3 RWA 供应链金融',
      navMql: 'MQL5 策略库',
      navTrack: '跨国与工程履历',
      navContact: '合作联系',
      badge1: '双核驱动 I：跨市场量化套利 (HyperLiquid ↔ MT5)',
      badge2: '双核驱动 II：Web3 RWA 链上仓单固收 & 跨境数智金流架构',
      title: '陈 波 (Robert / Bo Chen)',
      subtitle: '跨市场量化系统架构师 ｜ Web3 RWA 数字金融推进人 ｜ 欧洲区跨境商务负责人',
      desc: '18年+ 境内外衍生品量化研发与跨国商务管理经验。西南交通大学交通运输学士、上海交通大学软件工程学院高级软件工程师研修。现任百亿级跨境供应链龙头【泛鼎国际】欧洲区商务经理及集团数字金融（Web3/RWA）战略核心推进人；独立研发 BC Research 跨市场自动套利系统；曾任上海磁浮国际项目部对德技术主管（10年），荣获 2016 中国金融衍生品100人论坛“金骥奖”，受聘为中国人民大学汉青研究院特约主讲嘉宾。',
      ctaPrimary: '预约策略路演 / RWA 与资金合作',
      ctaRwa: '查看 Web3 RWA 链上仓单架构',
      ctaArb: '查看量化套利实证净值',
      stats: [
        { label: '量化套利实证收益 (152天)', val: '+16.74%', sub: '$100,000 基准 → 净赚 +$16,736.86', color: 'emerald' },
        { label: '日胜率 & 极低回撤', val: '71% / -0.53%', sub: '最佳 +$956.24 ｜ 最差 -$533.57', color: 'emerald' },
        { label: 'RWA 链上仓单固收票息', val: '8.0% p.a.', sub: '90天短久期 ｜ ≤80%成本质押率 + 银行担保', color: 'cyan' },
        { label: '供应链实物资产底座', val: '60+ 海外仓', sub: '150亿+跨境营收 ｜ 75万+㎡自营监管仓', color: 'cyan' },
      ],
      sec1Tag: 'ENGINE 01 · ALPHA & MARKET NEUTRALITY',
      sec1Title: 'BC Research：跨市场全自动对冲套利引擎 (HyperLiquid ↔ MT5)',
      sec1Sub: '打通链上永续合约（DEX）与传统衍生品经纪商（MT5）的毫秒级异步双向对冲，捕捉跨市场基差回归与资金费率（Funding Rate）双重收益',
      curveTitle: '累计净值收益曲线 (Cumulative PnL - $100,000 基准组合)',
      curveFormula: '每日净收益归因公式：Venue Realized (链上已实现盈亏) - Fees (手续费) + MT5 (传统对冲端盈亏) + Funding (资金费率净收入)',
      matrixTitle: '多资产跨平台自动对冲进程矩阵 (Bot + Hedger 异步解耦架构)',
      colSymbol: '标的资产',
      colClass: '资产类别与策略',
      colMode: '执行架构',
      colLev: '动态杠杆与风控',
      colStatus: '系统状态',
      rwaTag: 'ENGINE 02 · WEB3 RWA & PAYFI INFRASTRUCTURE',
      rwaTitle: '数智金流与 Web3.0 链上仓单票据 (RWA 供应链金融架构)',
      rwaSub: '基于 150亿+ 跨境供应链与 60+ 自营海外仓实物资产，构建从“稳定币秒级清结算”、“智能合约数字孪生”到“RWA 仓单资产证券化”的战略闭环',
      trilogy: [
        {
          step: 'STEP 01 · SETTLEMENT LAYER',
          title: '结算层：跨国数智金流通道',
          desc: '绕过传统 SWIFT 高延迟与高摩擦枷锁，结合合规稳定币（USDT/USDC/CNHC）与数字人民币（e-CNY）实现跨境运费与货款秒级清算，叠加量化汇率对冲引擎锁定贸易利润。'
        },
        {
          step: 'STEP 02 · GOVERNANCE LAYER',
          title: '治理层：Web3 + AI 物理资产孪生',
          desc: '自研 WMS 仓储系统直连中台风控与链上中立登记平台（TradeTrust · ERC-721），将海外仓入库、电子围栏冻结、线上巡库与智能合约放款全链路确权存证，突破跨国管理带宽瓶颈。'
        },
        {
          step: 'STEP 03 · CAPITAL LAYER',
          title: '资本层：RWA 链上仓单资产证券化',
          desc: '“货在海外仓，仓单即资产”。将高流动性品牌消费品海外仓单转化为链上可验证固定收益票据，盘活沉睡库存，推动企业从传统物流（10-15x PE）向数字贸易基建（30-50x 估值）跃迁。'
        }
      ],
      rwaBoxTitle: '标杆产品架构：短久期、实物仓单质押 + 持牌数字银行担保链上票据',
      rwaPillars: [
        {
          title: '01 / 双重安全垫 (LTV ≤ 80%)',
          desc: '以高周转刚需家居消费品为质押物，按【到岸成本价】与市场价孰低计量并打8折授信；终端零售价约为到岸成本2倍，整存整取锁仓。'
        },
        {
          title: '02 / 五道风控关口闭环',
          desc: '覆盖【贷前三重准入 → 成本估值授信 → 自营海外仓物理隔离与RFID冻结 → 贷后盯市巡库 → ≤2周快速变现处置】全生命周期。'
        },
        {
          title: '03 / 四层递进还款保障',
          desc: '第一层：品牌终端销售回款；第二层：名义货主代垫；第三层：海外仓监管方快速处置质押物；第四层：离岸持牌数字银行出具担保函兜底偿付。'
        },
        {
          title: '04 / 五层链上证据可反查',
          desc: '基于中立区块链登记平台（TradeTrust · ERC-721），任一 Token 均可反查对应债权合同、WMS仓单、财产保单、担保函及链上稳定币流水。'
        }
      ],
      hybridTitle: '💡 机构级创新资管方案：RWA 固收安全垫 + 跨市场量化套利增强 (80/20 组合)',
      hybridDesc: '针对家族办公室与企业闲置稳定币（USDT/USDC）：以 80% 仓位配置【8% p.a. 实物仓单+银行担保 RWA 票据】锁定本金安全垫，20% 仓位配置【BC Research 跨市场套利引擎】，构建低回撤、目标综合年化 12%～15%+ 的增强型数字资产组合。',
      hybridBtn: '索取组合尽调材料 →',
      sec2Title: 'MQL5 全球商业级量化策略矩阵 (MetaTrader 5)',
      sec2Sub: '11年+ MQL5 认证开发者，面向全球机构与交易员交付高可靠性 EA 与风控系统（全 5.0 星满分评价 / 89+ 专业版试用部署）',
      sec3Title: '多市场量化工程与跨国商务复合履历',
      sec3Sub: '兼具底层代码工程实现、Web3 RWA 产品设计、多品种策略研发与欧洲（阿姆斯特丹）跨国商务管理视野',
      contactTitle: '合作模式与直接联系通道',
      contactSub: '面向持牌私募基金、Web3 机构与家族办公室、实业资方及跨国出海集团开放三类深度合作：',
      modes: [
        {
          title: '01 / 量化套利专户孵化 & 策略合伙人 (SMA / 分润)',
          color: 'text-emerald-400',
          detail: '依托成熟的 BC Research 跨市场套利引擎与国内 30+ 商品期货 CTA 系统，支持资方账户 API 托管与实时净值归因监控，按约定回撤红线与业绩分成共赢。'
        },
        {
          title: '02 / Web3 RWA 链上仓单固收认购 & 结构化资管',
          color: 'text-cyan-400',
          detail: '为合格机构投资人对接实物海外仓单质押+持牌数字银行担保的短久期稳定币固收票据（8% p.a.），或定制“80% RWA 固收 + 20% 量化套利”稳健增强组合。'
        },
        {
          title: '03 / 跨国供应链数智金流 & 汇率/大宗套保顾问',
          color: 'text-amber-400',
          detail: '结合上海磁浮（10年对德技术主管）与泛鼎国际（欧洲区商务经理）经验，赋能出海企业欧洲渠道开拓、稳定币跨境清结算架构及欧元/美元汇率套期保值。'
        }
      ],
      contactBannerTitle: '欢迎私募合伙人、Web3 机构资方及企业高管直接联系',
      sendEmailBtn: '发送合作邮件 (aares@126.com)'
    },
    en: {
      navArb: 'Arbitrage Engine',
      navRwa: 'Web3 RWA & PayFi',
      navMql: 'MQL5 Suite',
      navTrack: 'Track Record',
      navContact: 'Contact',
      badge1: 'Dual-Core I: Cross-Venue Quant Arbitrage (HyperLiquid ↔ MT5)',
      badge2: 'Dual-Core II: Web3 RWA Tokenized Warehouse Notes & PayFi',
      title: "Bo 'Robert' Chen (陈波)",
      subtitle: 'Cross-Venue Quant Architect | Web3 RWA FinTech Strategist | Europe Cross-Border BD Lead',
      desc: '18+ years in derivatives quant engineering and global business leadership. SWJTU B.Sc. & SJTU Software Engineering Executive Program. Currently Europe BD Manager & Web3/RWA Digital Finance Strategist at Fanding International (RMB 15B+ global supply chain leader), and Founder of BC Research Quant Studio. Former Technical Lead at Shanghai Maglev (Siemens/ThyssenKrupp consortium, 10 yrs), 2016 "Golden Steed Award" winner, and Guest Lecturer at RUC Hanqing Institute.',
      ctaPrimary: 'Inquire for Quant & RWA Partnership',
      ctaRwa: 'Explore Web3 RWA Architecture',
      ctaArb: 'View Quant Arbitrage Track Record',
      stats: [
        { label: 'Quant Arb Net Return (152d)', val: '+16.74%', sub: '$100k Base → +$16,736.86 Net PnL', color: 'emerald' },
        { label: 'Win Rate & Max Daily DD', val: '71% / -0.53%', sub: 'Best: +$956.24 | Worst: -$533.57', color: 'emerald' },
        { label: 'RWA Warehouse Note Coupon', val: '8.0% p.a.', sub: '90-Day Tenor | ≤80% LTV + Digital Bank Guarantee', color: 'cyan' },
        { label: 'Physical Supply Chain Backing', val: '60+ Warehouses', sub: 'RMB 15B+ Revenue | 750k+ sqm Self-Operated WMS', color: 'cyan' },
      ],
      sec1Tag: 'ENGINE 01 · ALPHA & MARKET NEUTRALITY',
      sec1Title: 'BC Research: Automated Cross-Venue Arbitrage Engine (HyperLiquid ↔ MT5)',
      sec1Sub: 'Asynchronous dual-leg execution bridging On-Chain Perpetuals and Traditional Brokers, capturing cross-market spread convergence and funding rate alpha',
      curveTitle: 'Cumulative Net PnL Curve ($100,000 Base Portfolio)',
      curveFormula: 'Daily Net Attribution: Venue Realized - Trading Fees + MT5 Hedge Leg + Funding Rate Income',
      matrixTitle: 'Multi-Asset Automated Hedging Matrix (Decoupled Bot + Hedger Processes)',
      colSymbol: 'Instrument',
      colClass: 'Asset Class',
      colMode: 'Execution Mode',
      colLev: 'Leverage & Risk',
      colStatus: 'Engine Status',
      rwaTag: 'ENGINE 02 · WEB3 RWA & PAYFI INFRASTRUCTURE',
      rwaTitle: 'Web3.0 Tokenized Warehouse Receipt Notes & Digital Trade Finance',
      rwaSub: 'Transforming RMB 15B+ cross-border supply chain and 60+ self-operated overseas warehouses into institutional-grade RWA fixed-income products',
      trilogy: [
        {
          step: 'STEP 01 · SETTLEMENT LAYER',
          title: '01 / PayFi & Stablecoin Settlement',
          desc: 'Bypassing traditional SWIFT bottlenecks via compliant stablecoins (USDT/USDC/CNHC) and e-CNY for near-instant cross-border freight & trade settlement, paired with algorithmic FX hedging.'
        },
        {
          step: 'STEP 02 · GOVERNANCE LAYER',
          title: '02 / Web3 + AI Digital Twin',
          desc: 'Integrating proprietary WMS with mid-office risk engines and on-chain registry (TradeTrust · ERC-721) for verifiable inventory custody, smart-contract escrow, and AI-driven global dispatch.'
        },
        {
          step: 'STEP 03 · CAPITAL LAYER',
          title: '03 / RWA Warehouse Tokenization',
          desc: 'Tokenizing high-turnover overseas warehouse receipts into short-duration on-chain fixed-income notes, unlocking working capital and re-rating enterprise valuation from traditional logistics to FinTech infrastructure.'
        }
      ],
      rwaBoxTitle: 'Benchmark Architecture: Short-Duration, Physical Inventory-Backed & Bank-Guaranteed RWA Note',
      rwaPillars: [
        {
          title: '01 / Double Safety Cushion (LTV ≤ 80%)',
          desc: 'Backed by high-turnover consumer goods valued at landed cost (typically ~50% of retail price) with a strict ≤80% LTV cap and full lock-up custody.'
        },
        {
          title: '02 / 5-Stage Risk Control Loop',
          desc: 'End-to-end risk gates: Triple Pre-Loan KYC/SKU Screening → Conservative Valuation → Self-Operated WMS Freeze → Mark-to-Market → ≤2-Week Liquidation.'
        },
        {
          title: '03 / 4-Tier Repayment Waterfall',
          desc: 'Tier 1: Brand sales cashflow; Tier 2: Title-holder advance; Tier 3: Warehouse collateral liquidation; Tier 4: Licensed offshore digital bank guarantee.'
        },
        {
          title: '04 / 5-Layer On-Chain Registry',
          desc: 'Registered on neutral blockchain infrastructure (TradeTrust · ERC-721), enabling full auditability across WMS receipts, legal pledges, insurance, and stablecoin flows.'
        }
      ],
      hybridTitle: '💡 Institutional Hybrid Solution: 80% RWA Fixed-Income Floor + 20% Quant Arbitrage Alpha',
      hybridDesc: 'Designed for Family Offices & Web3 Treasuries: Allocate 80% to Bank-Guaranteed RWA Warehouse Notes (8% p.a. floor) + 20% to BC Research Market-Neutral Arbitrage Engine, targeting 12%–15%+ blended APY with principal protection.',
      hybridBtn: 'Request Deck & DD →',
      sec2Title: 'MQL5 Commercial Quantitative Suite (MetaTrader 5)',
      sec2Sub: '11+ Years Verified MQL5 Developer delivering production-grade EAs globally (5.0/5.0 Star Rating & 89+ Demo Deployments)',
      sec3Title: 'Quantitative Engineering & Global Leadership Track Record',
      sec3Sub: 'Bridging low-level execution code, Web3 RWA structured finance, and European (Amsterdam) cross-border business leadership',
      contactTitle: 'Partnership Models & Direct Contact',
      contactSub: 'Open for institutional collaboration across private funds, Web3 family offices, corporate prop desks, and global enterprises:',
      modes: [
        {
          title: '01 / Quant Arbitrage SMA & Strategy Partner',
          color: 'text-emerald-400',
          detail: 'Deploy proven market-neutral cross-venue arbitrage and 30+ commodity CTA systems via API with real-time web attribution dashboards and strict drawdown guardrails.'
        },
        {
          title: '02 / Web3 RWA Warehouse Note & Hybrid Yield',
          color: 'text-cyan-400',
          detail: 'Connect qualified institutional investors with inventory-backed, bank-guaranteed RWA notes (8% p.a. in USDT/USDC) or customized 80/20 RWA + Quant hybrid portfolios.'
        },
        {
          title: '03 / Global Supply Chain PayFi & FX Hedging',
          color: 'text-amber-400',
          detail: 'Leveraging 10 years at Shanghai Maglev and European BD leadership at Fanding International to empower global supply chain expansion, PayFi settlement, and FX hedging.'
        }
      ],
      contactBannerTitle: 'Connect Directly for Strategy Demo, RWA Deck & Partnership',
      sendEmailBtn: 'Send Email Now'
    }
  }[lang];

  const arbitrageAssets = [
    { sym: 'XYZ_GOLD / XAUUSD', cls: lang === 'zh' ? '黄金跨市场价差与费率套利' : 'Precious Metals Gold Arb', mode: 'HL Perp ↔ MT5 Hedge', lev: '5x–20x Dynamic', status: 'Active / Monitored' },
    { sym: 'XYZ_SILVER / XAGUSD', cls: lang === 'zh' ? '白银期现/跨平台对冲套利' : 'Silver Cross-Venue Arb', mode: 'HL Perp ↔ MT5 Hedge', lev: '5x–15x Dynamic', status: 'Active / Monitored' },
    { sym: 'EURUSD / USDJPY / GBPUSD', cls: lang === 'zh' ? '主流外汇跨平台价差与跨境汇率对冲' : 'G10 FX Spread & Cross-Border Hedge', mode: 'Dual Async Bot+Hedger', lev: '20x–30x Auto-Rebalance', status: 'Running (Live)' },
    { sym: 'SP500 / JP225 / NVDA', cls: lang === 'zh' ? '全球股指与美股映射市场中性套利' : 'Global Indices & Equities', mode: 'Cross-Market Neutral', lev: '5x Conservative', status: 'Active / Monitored' },
    { sym: 'XYZ_CL (WTI Crude)', cls: lang === 'zh' ? '能源大宗商品跨市均值回归对冲' : 'Energy Commodities Arb', mode: 'Spread Mean-Reversion', lev: '5x Conservative', status: 'Active / Monitored' },
    { sym: 'DOMESTIC 30+ CTA (TB)', cls: lang === 'zh' ? '国内30+商品期货多周期自动化CTA' : '30+ Domestic Futures CTA', mode: 'TradeBlazer Automated', lev: 'Dynamic Pos-Sizing', status: 'Production Ready' },
  ];

  const mqlProducts = [
    {
      name: 'Turtle Multi Pro',
      price: '$149 USD',
      rating: '★★★★★ 5.0',
      tag: 'Multi-Asset Portfolio EA',
      desc: lang === 'zh'
        ? '基于改进型海龟法则的多品种、多周期全自动组合交易系统，内置 ATR 波动率头寸调整与账户级联动回撤保护模块。'
        : 'Advanced multi-symbol portfolio trend-following EA featuring ATR volatility position sizing and account-wide drawdown protection.'
    },
    {
      name: 'Gold Quant Expert',
      price: '$149 USD',
      rating: '★★★★★ 5.0',
      tag: 'XAUUSD Quant Engine',
      desc: lang === 'zh'
        ? '专为黄金（XAUUSD）微观波动特征打造的量化交易系统，融合动量突破与均值回归过滤算法，严格控制盈亏比与滑点损耗。'
        : 'Quantitative execution system engineered specifically for Gold (XAUUSD) microstructure, combining momentum breakout filters with strict slippage control.'
    },
    {
      name: 'Turtle Trading Pro',
      price: '$49 USD',
      rating: '★★★★★ 5.0',
      tag: 'Systematic CTA Execution',
      desc: lang === 'zh'
        ? '标准化趋势追踪自动执行工具，具备科学加减仓体系与震荡行情过滤器，有效规避趋势末端利润回吐。'
        : 'Streamlined systematic trend-tracking engine with dynamic pyramiding and choppy-market volatility filters.'
    }
  ];

  const milestones = [
    {
      period: '2019.06 – Present',
      role: lang === 'zh' ? '泛鼎国际集团 · 欧洲区商务经理 / 数字金融战略推进人 & BC Research 创始人' : 'Europe BD Manager & Web3/RWA Strategist @ Fanding Intl | Founder of BC Research',
      org: lang === 'zh' ? '泛鼎国际集团 (2024.06–至今) ｜ 上海契胜科技有限公司 · 智慧零售部部门经理 (2019.06–2024.06)' : 'Fanding International Group (2024–Present) | Dept Manager @ Shanghai Qisheng Tech (2019–2024)',
      detail: lang === 'zh'
        ? '主导推进《泛鼎集团数字战略升级三部曲》及基于海外仓实物资产的 Web3.0 链上仓单质押票据（RWA）架构落地，统筹欧洲区（荷兰阿姆斯特丹等核心枢纽）跨境供应链商务拓展与汇率对冲；此前任契胜科技智慧零售部部门经理，负责大型数字化项目全流程交付；并行独立研发 HyperLiquid ↔ MT5 跨市场自动套利系统及 MQL5 全球五星商业化策略矩阵。'
        : "Spearheading Fanding Group's Web3/RWA Digital Strategy Trilogy and tokenized overseas warehouse receipt note architecture, while leading European cross-border supply chain BD. Previously served 5 years as Dept Manager at Qisheng Tech. Concurrently architected the automated HyperLiquid ↔ MT5 cross-venue arbitrage system."
    },
    {
      period: '2011.03 – 2019.10',
      role: lang === 'zh' ? '总经理助理 / 金融产品负责人 & 资深衍生品量化分析师' : 'GM Assistant, Financial Product Lead & Senior Derivatives Quant Analyst',
      org: lang === 'zh' ? '上海丛鑫咨询有限公司 & 北京慢点富投资管理有限公司上海分公司' : 'Shanghai Congxin Consulting & Mandianfu Investment (Shanghai)',
      detail: lang === 'zh'
        ? '统筹金融产品要素设计、风控流程制定与多资产数据库建设；主导研发《国内30+商品期货趋势追踪自动交易系统(TB平台)》、《国际期货智能跟单与风控桥接系统》及《股票多空量化决策系统》；荣获 2016 中国金融衍生品100人论坛“金骥奖”优秀专业人才，受聘为中国人民大学汉青研究院金融梦工厂特约主讲嘉宾。'
        : 'Led financial product design and multi-asset database construction; developed 30+ commodity CTA systems (TradeBlazer), low-latency multi-account order routing bridges, and equity multi-factor decision systems. Awarded the 2016 "Golden Steed Award" and appointed Guest Lecturer at RUC Hanqing Institute.'
    },
    {
      period: '2001.04 – 2012.05',
      role: lang === 'zh' ? '国际项目部技术主管 & 跨市场量化交易员' : 'International Project Technical Lead & Cross-Market Quant Trader',
      org: lang === 'zh' ? '上海磁浮交通发展有限公司 (2001.04–2011.02) ｜ 上海梵汇投资管理有限公司 (2006–2012)' : 'Shanghai Maglev Transportation Dev. Co. (2001–2011) | Shanghai Fanhui Investment',
      detail: lang === 'zh'
        ? '10年深度参与上海磁浮示范线国际合作项目，负责与德国蒂森克虏伯（ThyssenKrupp）、西门子（Siemens）联合体的技术谈判与磁浮技术国产化落地（获评 2011 年度优秀员工，具备英语及德语跨文化工作能力）；并行构建境内外证券、期货及外汇基础行情数据库，开展跨市场统计分析与程序化策略研发执行。'
        : 'Spent 10 years leading technical localization with German consortiums (ThyssenKrupp & Siemens) at Shanghai Maglev (named 2011 Outstanding Employee; proficient in English & German), while building cross-market statistical databases and automated trading strategies.'
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
                Quant Arbitrage &amp; RWA FinTech
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-6 text-sm">
            <a href="#arbitrage" className="hidden md:inline text-slate-300 hover:text-emerald-400 transition">
              {t.navArb}
            </a>
            <a href="#rwa" className="hidden md:inline text-cyan-400 hover:text-cyan-300 font-medium transition">
              {t.navRwa}
            </a>
            <a href="#products" className="hidden md:inline text-slate-300 hover:text-emerald-400 transition">
              {t.navMql}
            </a>
            <a href="#track" className="hidden md:inline text-slate-300 hover:text-emerald-400 transition">
              {t.navTrack}
            </a>
            <a href="#contact" className="hidden md:inline text-slate-300 hover:text-emerald-400 transition">
              {t.navContact}
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
          <div className="flex flex-wrap gap-2 mb-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>{t.badge1}</span>
            </div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <span>{t.badge2}</span>
            </div>
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
              href="#rwa"
              className="px-6 py-3 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold text-sm transition"
            >
              {t.ctaRwa}
            </a>
            <a
              href="#arbitrage"
              className="px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm transition"
            >
              {t.ctaArb}
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
                <div
                  className={`text-2xl sm:text-3xl font-extrabold mb-1 ${
                    st.color === 'cyan' ? 'text-cyan-400' : 'text-emerald-400'
                  }`}
                >
                  {st.val}
                </div>
                <div className="text-xs text-slate-400">{st.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engine 01: BC Research Arbitrage Engine & Equity Curve */}
      <section id="arbitrage" className="py-16 border-b border-slate-800/80 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
              {t.sec1Tag}
            </div>
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
                  WINNING DAYS: 71% (152d)
                </span>
              </div>
            </div>

            <div className="w-full overflow-hidden rounded-lg bg-slate-950 p-4 border border-slate-800/80">
              <svg viewBox="0 0 800 220" className="w-full h-48 sm:h-56">
                <defs>
                  <linearGradient id="pnlGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <line x1="50" y1="30" x2="780" y2="30" stroke="#1e293b" strokeDasharray="4 4" />
                <line x1="50" y1="85" x2="780" y2="85" stroke="#1e293b" strokeDasharray="4 4" />
                <line x1="50" y1="140" x2="780" y2="140" stroke="#1e293b" strokeDasharray="4 4" />
                <line x1="50" y1="190" x2="780" y2="190" stroke="#334155" />

                <text x="10" y="34" fill="#64748b" fontSize="11">$15k+</text>
                <text x="10" y="89" fill="#64748b" fontSize="11">$10k</text>
                <text x="15" y="144" fill="#64748b" fontSize="11">$5k</text>
                <text x="20" y="194" fill="#64748b" fontSize="11">$0</text>

                <text x="90" y="212" fill="#64748b" fontSize="11">Jul 2026</text>
                <text x="250" y="212" fill="#64748b" fontSize="11">Aug 2026</text>
                <text x="415" y="212" fill="#64748b" fontSize="11">Sep 2026</text>
                <text x="580" y="212" fill="#64748b" fontSize="11">Oct 2026</text>
                <text x="720" y="212" fill="#64748b" fontSize="11">Nov 2026</text>

                <path
                  d="M 50 190 L 75 182 L 105 184 L 135 175 L 170 172 L 205 162 L 240 155 L 275 142 L 310 132 L 345 115 L 380 112 L 415 104 L 450 102 L 485 80 L 520 78 L 555 60 L 590 52 L 625 45 L 660 48 L 695 38 L 735 34 L 780 26 L 780 190 Z"
                  fill="url(#pnlGrad)"
                />
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
              <span className="text-xs text-emerald-400 font-mono">Real-time Margin &amp; Spread Guard</span>
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

      {/* Engine 02: Web3 RWA Tokenized Warehouse Receipt Notes & Digital Strategy */}
      <section id="rwa" className="py-16 border-b border-slate-800/80 bg-gradient-to-b from-slate-900/70 to-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
              {t.rwaTag}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{t.rwaTitle}</h2>
            <p className="text-slate-400 text-sm sm:text-base">{t.rwaSub}</p>
          </div>

          {/* 3-Step Digital Strategy Trilogy */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {t.trilogy.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition"
              >
                <div className="text-xs font-mono text-cyan-400 mb-2">{item.step}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* RWA Product Architecture Box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-cyan-500/30 mb-8 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-800 pb-5 mb-6 gap-4">
              <div>
                <span className="px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-semibold">
                  RWA STRUCTURED NOTE · TRADE FINANCE
                </span>
                <h3 className="text-xl font-bold text-white mt-2">{t.rwaBoxTitle}</h3>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-cyan-400">
                  Scale: ~US$3.0M / Tranche
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-emerald-400">
                  Tenor: 90 Days
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-amber-400">
                  Coupon: 8.0% p.a. (USDT/USDC)
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {t.rwaPillars.map((pil, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-xs text-cyan-400 font-semibold mb-1">{pil.title}</div>
                  <p className="text-xs text-slate-300 leading-relaxed">{pil.desc}</p>
                </div>
              ))}
            </div>

            {/* 80/20 Hybrid Strategy Highlight Banner */}
            <div className="p-5 rounded-xl bg-gradient-to-r from-emerald-950/60 via-slate-950 to-cyan-950/60 border border-emerald-500/30 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
                  {t.hybridTitle}
                </div>
                <p className="text-xs sm:text-sm text-slate-300">{t.hybridDesc}</p>
              </div>
              <a
                href="#contact"
                className="shrink-0 px-4 py-2.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-xs font-bold transition"
              >
                {t.hybridBtn}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: MQL5 Commercial Quant Products */}
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

      {/* Section 4: Career & Engineering Track Record */}
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

      {/* Section 5: Partnership & Contact */}
      <section id="contact" className="py-16 bg-slate-900/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{t.contactTitle}</h2>
            <p className="text-slate-400 text-sm sm:text-base">{t.contactSub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {t.modes.map((m, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
                <h3 className={`text-base font-bold mb-3 ${m.color}`}>{m.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{m.detail}</p>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950/40 border border-emerald-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-wider text-emerald-400 font-semibold mb-1">
                Direct Communication · Shanghai Pudong &amp; Amsterdam
              </div>
              <div className="text-2xl font-bold text-white mb-2">
                {t.contactBannerTitle}
              </div>
              <div className="text-sm text-slate-300 space-y-1">
                <div>
                  📧 Email:{' '}
                  <a href="mailto:aares@126.com" className="text-emerald-400 underline">
                    aares@126.com
                  </a>
                </div>
                <div>
                  📱 Tel / WeChat: <span className="text-white font-mono">+86 136-5179-3509</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:aares@126.com?subject=Quant%20Arbitrage%20%26%20RWA%20Partnership%20Inquiry"
                className="px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition"
              >
                {t.sendEmailBtn}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800/80 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4">
          © {new Date().getFullYear()} Bo &apos;Robert&apos; Chen (BC Research). Built for Institutional Quantitative Arbitrage, Web3 RWA Trade Finance &amp; Global Risk Management.
        </div>
      </footer>
    </div>
  );
}
