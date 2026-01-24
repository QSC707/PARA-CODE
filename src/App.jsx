import { useState, useEffect, createContext, useContext } from 'react';
import {
  Brain, Target, Layers, Database, Archive,
  BookOpen, ChevronRight, Zap, Activity,
  GitBranch, Box, CheckSquare, AlertTriangle,
  ArrowRight, MousePointer2, Info, Folder, FileText,
  List, CheckCircle, Play, Pause, RefreshCw, X,
  ChevronsRight, CornerDownRight, Search, LayoutTemplate,
  Thermometer, ShieldCheck, Flame, Anchor, Filter,
  ChefHat, Minimize2, Mic, Eye, PenTool, Speaker,
  Scale, ArrowDown, Lightbulb, TrendingUp, MoveRight, Library,
  HeartHandshake, Utensils, AlertCircle, Inbox, Factory, Sparkles,
  Calendar, Trash2, Shield, Repeat, Link, Copy, History,
  Hammer, Framer, Map as MapIcon, RotateCcw,
  ListTodo, Grid, Layout, Rocket, User, Clock, HelpCircle, Filter as FunnelIcon,
  Sun, Moon, Menu
} from 'lucide-react';

// Theme Context
const ThemeContext = createContext();
const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// ============================================================================
// 1. 数据结构：全息实操百科版 (Deep Forge V16.0)
// ============================================================================

const DOC_STRUCTURE = [
  // --- Part 0: Keep Original (导论 & CODE) ---
  {
    id: 'intro',
    title: '0. 导论 & CODE 引擎',
    icon: BookOpen,
    subsections: [
      { id: 'core_goal', title: '核心目标：ROA / JIT / Flow' },
      { id: 'code_c', title: 'C - Capture (捕捉机制)' },
      { id: 'code_o', title: 'O - Organize (组织心法)' },
      { id: 'code_d', title: 'D - Distill (提炼技术)' },
      { id: 'code_e', title: 'E - Express (表达模式)' }
    ]
  },
  // --- Part 1: Project (项目) ---
  {
    id: 'para_project',
    title: '1. Project (项目)',
    icon: Target,
    color: 'text-blue-400',
    subsections: [
      { id: 'proj_def', title: '1.1 定义与裁判机制 (矩阵)' },
      { id: 'proj_plan', title: '1.2 规划：战略/元计划/循环' },
      { id: 'proj_start', title: '1.2 启动：想法群岛' },
      { id: 'proj_exec', title: '1.2 执行：中间包与生化机制' },
      { id: 'proj_close', title: '1.3 暂停与结项' }
    ]
  },
  // --- Part 2: Area (领域) ---
  {
    id: 'para_area',
    title: '2. Area (领域)',
    icon: Layers,
    color: 'text-green-400',
    subsections: [
      { id: 'area_def', title: '2.1 定义与目录结构' },
      { id: 'area_mech', title: '2.2-2.4 维护机制与心法' }
    ]
  },
  // --- Part 3: Resource (资源) ---
  {
    id: 'para_resource',
    title: '3. Resource (资源)',
    icon: Database,
    color: 'text-yellow-400',
    subsections: [
      { id: 'res_def', title: '3.1 特质与目录' },
      { id: 'res_flow', title: '3.2-3.4 捕捉与提炼流' }
    ]
  },
  // --- Part 4: Archive (归档) ---
  {
    id: 'para_archive',
    title: '4. Archive (归档)',
    icon: Archive,
    color: 'text-muted-foreground',
    subsections: [
      { id: 'arch_all', title: '4.1-4.2 归档全解与清单' }
    ]
  }
];

// ============================================================================
// 2. 核心可视化组件 (Visualizers)
// ============================================================================

// ----------------------------------------------------------------------------
// GROUP A: 原始组件 (Part 0 专用 - 100% 保留)
// ----------------------------------------------------------------------------

const ParadigmShiftVisual = () => (<div className="w-full my-10 relative overflow-hidden rounded-2xl border border-indigo-500/30 bg-card shadow-2xl"><div className="absolute inset-0 bg-gradient-to-r from-accent via-primary/10 to-accent opacity-50"></div><div className="relative z-10 grid grid-cols-1 md:grid-cols-2 h-full"><div className="p-8 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-border bg-accent"><div className="absolute top-4 left-4 text-[10px] text-muted-foreground font-bold uppercase tracking-widest border border-border px-2 py-0.5 rounded">OLD WAY</div><div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-6 grayscale opacity-60"><Zap className="w-8 h-8 text-muted-foreground" /></div><h4 className="text-xl font-bold text-muted-foreground mb-2">消费模式 (Consumer)</h4><p className="text-xs text-muted-foreground mb-4 max-w-[200px]">追逐转瞬即逝的灵感片刻<br/>(Fleeting Moments)</p></div><div className="p-8 flex flex-col items-center justify-center text-center bg-primary/10 relative overflow-hidden"><div className="absolute top-4 right-4 text-[10px] text-primary font-bold uppercase tracking-widest border border-primary/50 px-2 py-0.5 rounded">NEW WAY</div><div className="absolute inset-0 bg-primary/5 animate-pulse-slow"></div><div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(99,102,241,0.6)] z-10"><Library className="w-8 h-8 text-foreground" /></div><h4 className="text-xl font-bold text-foreground mb-2 z-10">投资模式 (Investor)</h4><p className="text-xs text-primary mb-4 z-10 max-w-[200px]">长期的学习与造物投入<br/>(Compound Interest)</p></div></div></div>);
const CapturePipeline = () => { const [activeStep, setActiveStep] = useState(0); return (<div className="bg-card border border-border rounded-xl p-8 my-8 relative overflow-hidden"><div className="flex items-center justify-between mb-8 border-b border-border pb-4"><div className="flex items-center gap-2"><Filter className="w-5 h-5 text-yellow-500" /><h4 className="font-bold text-foreground text-lg">捕捉标准：双重过滤机制</h4></div><div className="flex gap-2">{[1,2,3].map(i => <div key={i} className={`w-2 h-2 rounded-full ${activeStep >= i ? 'bg-yellow-500' : 'bg-muted'}`}></div>)}</div></div><div className="flex flex-col md:flex-row items-center justify-between gap-4"><div className={`flex-1 p-4 rounded-xl border transition-all duration-300 cursor-pointer ${activeStep === 1 ? 'bg-yellow-500/20 border-yellow-500 scale-105' : 'bg-accent border-border opacity-60'}`} onClick={() => setActiveStep(1)}><div className="flex items-center gap-2 mb-2 text-yellow-600 dark:text-yellow-400"><HeartHandshake className="w-5 h-5" /><span className="font-bold text-sm">1. 共鸣 (Resonate)</span></div><p className="text-xs text-muted-foreground">只收集那些让你<strong>"心头一颤"</strong>的内容。<br/>不要担心它有什么用，先问自己是否有感觉。</p></div><ArrowRight className="w-5 h-5 text-muted-foreground hidden md:block" /><div className={`flex-1 p-4 rounded-xl border transition-all duration-300 cursor-pointer ${activeStep === 2 ? 'bg-green-500/20 border-green-500 scale-105' : 'bg-accent border-border opacity-60'}`} onClick={() => setActiveStep(2)}><div className="flex items-center gap-2 mb-2 text-green-600 dark:text-green-400"><ShieldCheck className="w-5 h-5" /><span className="font-bold text-sm">2. 核心难题</span></div><p className="text-xs text-muted-foreground">理查德·费曼学习法。<br/>强制提问：<strong>"它能帮我解决这 12 个难题中的哪一个？"</strong></p></div><ArrowRight className="w-5 h-5 text-muted-foreground hidden md:block" /><div className={`flex-1 p-4 rounded-xl border transition-all duration-300 cursor-pointer ${activeStep === 3 ? 'bg-indigo-500/20 border-indigo-500 scale-105' : 'bg-accent border-border opacity-60'}`} onClick={() => setActiveStep(3)}><div className="flex items-center gap-2 mb-2 text-indigo-600 dark:text-indigo-400"><Database className="w-5 h-5" /><span className="font-bold text-sm">3. 存入 (Inbox)</span></div><p className="text-xs text-muted-foreground">通过双重过滤的信息，才是真正属于你的<strong>个人信息地貌</strong>。</p></div></div></div>);};
const CaptureGate = () => { const [step, setStep] = useState(0); const [isPass, setIsPass] = useState(false); const checkIdea = (pass) => { setStep(1); setTimeout(() => { setIsPass(pass); setStep(2); }, 1000); }; const reset = () => { setStep(0); setIsPass(false); }; return (<div className="bg-card border border-border rounded-xl p-6 my-6 relative overflow-hidden shadow-lg"><div className="flex items-center gap-2 mb-6 border-b border-border pb-2 relative z-10"><Filter className="w-5 h-5 text-yellow-500" /><h4 className="font-bold text-foreground">交互演示：12难题安检门</h4></div><div className="flex items-center justify-between relative z-10 px-4"><div className={`transition-all duration-500 ${step > 0 ? 'opacity-30 blur-sm' : 'opacity-100'}`}><div className="bg-primary text-primary-foreground px-4 py-3 rounded-lg shadow-lg text-xs font-bold flex items-center gap-2 w-32 justify-center"><Zap className="w-4 h-4" /> New Idea</div></div><div className="relative"><div className={`w-32 h-32 rounded-full border-4 flex flex-col items-center justify-center transition-all duration-300 ${step === 1 ? 'border-yellow-500 bg-yellow-500/20' : 'border-border bg-accent'}`}><div className="text-[10px] text-muted-foreground font-bold mb-1">12 PROBLEMS</div>{step === 1 ? <RefreshCw className="w-8 h-8 text-yellow-500 animate-spin" /> : <ShieldCheck className="w-8 h-8 text-muted-foreground" />}</div>{step === 2 && <div className={`absolute inset-0 rounded-full flex items-center justify-center animate-in zoom-in ${isPass ? 'bg-green-500' : 'bg-red-500'}`}>{isPass ? <CheckCircle className="w-12 h-12 text-foreground" /> : <X className="w-12 h-12 text-foreground" />}</div>}</div><div className={`transition-all duration-500 w-32 text-center ${step === 2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>{isPass ? <div className="text-green-600 dark:text-green-400 font-bold text-sm bg-green-500/20 px-3 py-2 rounded border border-green-500/50">存入 Inbox ✅</div> : <div className="text-red-600 dark:text-red-400 font-bold text-sm bg-red-500/20 px-3 py-2 rounded border border-red-500/50">直接丢弃 🗑️</div>}</div></div>{step === 0 && <div className="flex justify-center gap-4 mt-8"><button onClick={() => checkIdea(true)} className="text-xs bg-accent hover:bg-green-500/20 text-green-600 dark:text-green-400 border border-green-500/30 px-4 py-2 rounded transition-colors">匹配</button><button onClick={() => checkIdea(false)} className="text-xs bg-accent hover:bg-red-500/20 text-red-600 dark:text-red-400 border border-red-500/30 px-4 py-2 rounded transition-colors">不匹配</button></div>}{step === 2 && <div className="flex justify-center mt-8"><button onClick={reset} className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1"><RefreshCw className="w-3 h-3"/> Reset</button></div>}</div>);};
const JITVisualizer = () => (<div className="bg-card border border-border rounded-xl p-8 relative overflow-hidden group hover:border-blue-500/50 transition-colors my-6"><div className="flex items-center justify-between mb-6 border-b border-border pb-4"><div className="flex items-center gap-2"><GitBranch className="w-5 h-5 text-blue-400" /><h4 className="font-bold text-foreground text-lg">可视化：JIT 创作透镜 (发散与收敛)</h4></div><span className="text-[10px] text-blue-300 font-mono border border-blue-900 bg-blue-900/20 px-2 py-1 rounded">避免过早优化</span></div><div className="relative h-48 w-full flex items-center justify-center px-4"><div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:20px_100%]"></div><svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none"><defs><linearGradient id="lensGradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="rgba(59, 130, 246, 0.05)" /><stop offset="50%" stopColor="rgba(59, 130, 246, 0.2)" /><stop offset="100%" stopColor="rgba(16, 185, 129, 0.05)" /></linearGradient></defs><path d="M 50 96 C 150 20, 450 20, 550 96 C 450 172, 150 172, 50 96 Z" fill="url(#lensGradient)" stroke="#3B82F6" strokeWidth="2" className="drop-shadow-2xl" /><line x1="20" y1="96" x2="580" y2="96" stroke="#475569" strokeWidth="1" strokeDasharray="4,4" /><circle cx="50" cy="96" r="6" fill="#3B82F6" className="animate-pulse" /><circle cx="300" cy="96" r="4" fill="#FFFFFF" /><circle cx="550" cy="96" r="6" fill="#10B981" /></svg><div className="absolute top-[20%] left-[25%] text-center"><div className="text-xs text-blue-300 font-bold bg-card/90 px-2 py-1 rounded mb-1 border border-blue-500/30">DIVERGENCE ↗</div><div className="text-[9px] text-muted-foreground">探索 / 收集 / 发散</div></div><div className="absolute bottom-[20%] right-[25%] text-center"><div className="text-[9px] text-muted-foreground mb-1">筛选 / 排序 / 删减</div><div className="text-xs text-green-300 font-bold bg-card/90 px-2 py-1 rounded border border-green-500/30">↘ CONVERGENCE</div></div><div className="absolute left-2 top-[45%] -translate-y-1/2 text-[10px] font-bold text-blue-500 bg-card px-1">CAPTURE</div><div className="absolute right-2 top-[45%] -translate-x-1/2 -translate-y-1/2 text-[10px] font-bold text-green-500 bg-card px-1">DELIVERY</div></div><div className="mt-6 text-xs text-muted-foreground leading-relaxed bg-accent p-3 rounded border border-border"><strong>JIT 核心心法：</strong> 创作不是一条直线，而是一次呼吸。先<strong>打开视野 (Resource)</strong> 广泛收集，再<strong>收束聚焦 (Project)</strong> 快速产出。切忌在发散期纠结细节，也切忌在收敛期通过发散来逃避。</div></div>);
const FlowVisualizer = () => { const [showPlaceholder, setShowPlaceholder] = useState(false); return (<div className="bg-card border border-border rounded-xl p-8 relative overflow-hidden group hover:border-yellow-500/50 transition-colors my-6"><div className="flex items-center justify-between mb-6 border-b border-border pb-4"><div className="flex items-center gap-2"><Zap className="w-5 h-5 text-yellow-400" /><h4 className="font-bold text-foreground text-lg">可视化：心流活化能 & 占位法</h4></div><button onClick={() => setShowPlaceholder(!showPlaceholder)} className={`text-[10px] px-3 py-1 rounded border transition-colors flex items-center gap-2 ${showPlaceholder ? 'bg-green-900/30 border-green-500 text-green-400' : 'bg-accent border-border text-muted-foreground'}`}>{showPlaceholder ? <CheckCircle className="w-3 h-3"/> : <Play className="w-3 h-3"/>}{showPlaceholder ? "模式：占位法 (Low Friction)" : "模式：常规启动 (High Friction)"}</button></div><div className="relative h-64 w-full px-4"><div className="absolute left-8 bottom-8 w-[90%] h-[1px] bg-slate-600"></div><div className="absolute left-8 bottom-8 w-[1px] h-[80%] bg-slate-600"></div><div className="absolute left-2 top-1/2 -rotate-90 text-[10px] text-muted-foreground tracking-wider font-bold">阻力 (Resistance)</div><div className="absolute bottom-2 left-1/2 text-[10px] text-muted-foreground tracking-wider font-bold">时间 (Time)</div><svg className="absolute inset-0 w-full h-full overflow-visible"><path d="M 32 180 C 80 180, 80 40, 150 40 S 250 160, 450 160" fill="none" stroke="#EF4444" strokeWidth="3" strokeDasharray="4,4" className={`transition-opacity duration-500 ${showPlaceholder ? 'opacity-20' : 'opacity-100'}`} />{!showPlaceholder && (<g className="animate-in fade-in zoom-in"><text x="90" y="30" fill="#EF4444" fontSize="12" fontWeight="bold">🏔️ 冷启动高墙</text><text x="90" y="50" fill="#EF4444" fontSize="10">"我要写完这篇论文"</text></g>)}<path d="M 32 180 C 60 180, 80 140, 150 140 S 250 160, 450 160" fill="none" stroke="#22C55E" strokeWidth="4" className={`transition-opacity duration-500 ${showPlaceholder ? 'opacity-100' : 'opacity-20'}`} />{showPlaceholder && (<g className="animate-in fade-in zoom-in"><text x="160" y="130" fill="#22C55E" fontSize="12" fontWeight="bold">🏂 占位法滑梯</text><text x="160" y="150" fill="#22C55E" fontSize="10">"先写个标题就好"</text><path d="M 150 40 L 150 140" stroke="#94A3B8" strokeWidth="1" strokeDasharray="2,2" /><text x="155" y="90" fill="#94A3B8" fontSize="10">节省的意志力</text></g>)}<line x1="30" y1="160" x2="450" y2="160" stroke="#475569" strokeWidth="1" strokeDasharray="2,2" /><text x="400" y="155" fill="#475569" fontSize="10">心流状态 (Flow)</text></svg></div><div className="mt-4 flex gap-4 text-xs text-foreground bg-accent p-3 rounded border border-border"><Info className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" /><p>面对大任务时，大脑会产生畏难情绪。<strong>占位法原理：</strong>通过执行一个“微不足道”的动作，将启动门槛降到脚踝。一旦开始，惯性会推着你进入心流。</p></div></div>);};
const PARASorterVisual = () => { const [activeItem, setActiveItem] = useState(0); const [step, setStep] = useState(0); const items = [ { name: "Q3 推广方案", type: "project", desc: "具体行动 + 截止日", icon: Target, color: "text-blue-400", bg: "bg-blue-500/20", border: "border-blue-500" }, { name: "健康体检单", type: "area", desc: "长期标准 + 无死线", icon: Layers, color: "text-green-400", bg: "bg-green-500/20", border: "border-green-500" }, { name: "网页设计灵感", type: "resource", desc: "感兴趣 + 潜在有用", icon: Database, color: "text-yellow-400", bg: "bg-yellow-500/20", border: "border-yellow-500" }, { name: "2021 合同", type: "archive", desc: "不再活跃 + 备查", icon: Archive, color: "text-muted-foreground", bg: "bg-slate-500/20", border: "border-slate-500" }, ]; const current = items[activeItem]; useEffect(() => { const timer = setInterval(() => { setStep(s => { if (s >= 4) { setActiveItem(i => (i + 1) % items.length); return 0; } return s + 1; }); }, 1500); return () => clearInterval(timer); }, []); return ( <div className="bg-card border border-border rounded-xl p-8 my-8 relative overflow-hidden"> <div className="flex items-center gap-2 mb-8 border-b border-border pb-2"> <Layers className="w-5 h-5 text-indigo-400" /> <h4 className="font-bold text-foreground text-lg">组织原则：PARA 分拣流水线</h4> </div> <div className="flex flex-col items-center"> <div className={`transition-all duration-500 mb-4 ${step === 0 ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-4'}`}> <div className="bg-white text-slate-900 px-4 py-2 rounded-lg font-bold text-sm shadow-[0_0_15px_rgba(255,255,255,0.3)] flex items-center gap-2"> <span className="w-2 h-2 rounded-full bg-card animate-pulse"></span> {current.name} </div> </div> <div className="relative w-full max-w-2xl flex flex-col gap-4"> <div className={`border border-border bg-accent p-3 rounded-xl flex justify-between items-center transition-all duration-300 ${step === 1 ? 'border-blue-500 bg-blue-900/20 scale-105' : ''}`}> <div className="flex items-center gap-3"> <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${step === 1 ? 'bg-blue-500 text-foreground' : 'bg-muted text-muted-foreground'}`}>1</div> <span className="text-xs text-foreground">它是现在就要执行的任务吗？(Actionable)</span> </div> {step === 1 && current.type === 'project' && <span className="text-xs font-bold text-blue-400 bg-blue-900/50 px-2 py-0.5 rounded">YES → Project</span>} </div> <div className={`border border-border bg-accent p-3 rounded-xl flex justify-between items-center transition-all duration-300 ${step === 2 ? 'border-green-500 bg-green-900/20 scale-105' : ''}`}> <div className="flex items-center gap-3"> <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${step === 2 ? 'bg-green-500 text-foreground' : 'bg-muted text-muted-foreground'}`}>2</div> <span className="text-xs text-foreground">它是需要长期维护的标准吗？(Maintainable)</span> </div> {step === 2 && current.type === 'area' && <span className="text-xs font-bold text-green-400 bg-green-900/50 px-2 py-0.5 rounded">YES → Area</span>} </div> <div className={`border border-border bg-accent p-3 rounded-xl flex justify-between items-center transition-all duration-300 ${step === 3 ? 'border-yellow-500 bg-yellow-900/20 scale-105' : ''}`}> <div className="flex items-center gap-3"> <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${step === 3 ? 'bg-yellow-500 text-foreground' : 'bg-muted text-muted-foreground'}`}>3</div> <span className="text-xs text-foreground">它是未来可能有用的素材吗？(Useful)</span> </div> {step === 3 && current.type === 'resource' && <span className="text-xs font-bold text-yellow-400 bg-yellow-900/50 px-2 py-0.5 rounded">YES → Resource</span>} </div> </div> <div className="grid grid-cols-4 gap-2 w-full mt-6"> {['project', 'area', 'resource', 'archive'].map((type) => ( <div key={type} className={`p-3 rounded-xl border-2 flex flex-col items-center justify-center transition-all duration-500 ${type === 'project' ? 'border-blue-500/50 bg-blue-900/10' : ''} ${type === 'area' ? 'border-green-500/50 bg-green-900/10' : ''} ${type === 'resource' ? 'border-yellow-500/50 bg-yellow-900/10' : ''} ${type === 'archive' ? 'border-slate-500/50 bg-accent' : ''} ${step === 4 && current.type === type ? 'scale-110 ring-2 ring-white' : 'opacity-60'}`}> <span className="text-[10px] font-bold uppercase mb-1">{type}s</span> {step === 4 && current.type === type && <div className="animate-in zoom-in fade-in text-xs">📦 {current.name}</div>} </div> ))} </div> <div className="mt-6 text-center text-xs text-muted-foreground"> <strong>核心心法：</strong> 组织不是为了“分类”，而是为了“行动”。<br/> 如果一个信息不需要行动，也不需要维护，也未来无用，那就直接归档或删除。 </div> </div> </div> ); };
const MiseEnPlaceVisual = () => { const [mode, setMode] = useState('after'); return (<div className="my-12 border border-border rounded-2xl overflow-hidden shadow-2xl bg-card"><div className="bg-card px-6 py-4 border-b border-border flex justify-between items-center"><div className="flex items-center gap-3"><div className="p-2 bg-green-500/20 rounded-lg"><ChefHat className="w-6 h-6 text-green-400" /></div><div><h4 className="font-bold text-foreground text-lg">Mise-en-place (预先就位)</h4><p className="text-[10px] text-muted-foreground">Organize 的核心隐喻</p></div></div><div className="flex bg-accent rounded-lg p-1"><button onClick={() => setMode('before')} className={`px-4 py-2 rounded-md text-xs font-bold transition-all ${mode === 'before' ? 'bg-red-500/20 text-red-400 shadow' : 'text-muted-foreground hover:text-foreground'}`}>Chaos (混乱)</button><button onClick={() => setMode('after')} className={`px-4 py-2 rounded-md text-xs font-bold transition-all ${mode === 'after' ? 'bg-green-500/20 text-green-400 shadow' : 'text-muted-foreground hover:text-foreground'}`}>Order (就位)</button></div></div><div className="relative h-72 p-8 flex items-center justify-center transition-colors duration-500 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:20px_20px]">{mode === 'before' ? (<div className="w-full max-w-lg h-full flex flex-col items-center justify-center animate-in fade-in"><div className="relative w-full h-40 border-2 border-dashed border-red-500/30 rounded-xl bg-red-900/10 flex items-center justify-center overflow-hidden"><div className="absolute inset-0 flex items-center justify-center opacity-10 text-red-500 font-black text-6xl -rotate-12">MESSY</div>{[...Array(6)].map((_, i) => <div key={i} className="absolute p-2 bg-accent border border-border rounded shadow-lg text-muted-foreground animate-pulse" style={{ top: `${Math.random() * 60 + 10}%`, left: `${Math.random() * 80 + 10}%`, transform: `rotate(${Math.random() * 40 - 20}deg)` }}><FileText className="w-4 h-4" /></div>)}<div className="absolute bottom-2 right-2 text-red-400 flex flex-col items-center"><Utensils className="w-8 h-8" /><span className="text-[10px] font-bold">空锅等米下</span></div></div><p className="text-red-400 text-xs mt-4 font-bold flex items-center gap-2"><AlertCircle className="w-4 h-4" />状态：边做饭边找食材，心流被打断</p></div>) : (<div className="w-full max-w-lg h-full flex flex-col justify-end gap-4 animate-in fade-in slide-in-from-bottom-4"><div className="flex justify-between items-end h-32 px-4 pb-0 gap-2"><div className="flex-1 h-[80%] bg-blue-900/20 border border-blue-500/50 rounded-t-lg relative flex flex-col items-center justify-end pb-2 group"><div className="absolute -top-3 bg-blue-900 text-blue-300 text-[9px] px-2 rounded border border-blue-500">切好的肉 (Projects)</div><FileText className="w-4 h-4 text-blue-400 mb-1" /><FileText className="w-4 h-4 text-blue-400" /></div><div className="flex-1 h-[60%] bg-yellow-900/20 border border-yellow-500/50 rounded-t-lg relative flex flex-col items-center justify-end pb-2 group"><div className="absolute -top-3 bg-yellow-900 text-yellow-300 text-[9px] px-2 rounded border border-yellow-500">洗好的菜 (Resources)</div><FileText className="w-4 h-4 text-yellow-400" /></div><div className="flex-1 h-[40%] bg-green-900/20 border border-green-500/50 rounded-t-lg relative flex flex-col items-center justify-end pb-2 group"><div className="absolute -top-3 bg-green-900 text-green-300 text-[9px] px-2 rounded border border-green-500">调料 (Areas)</div><Layers className="w-4 h-4 text-green-400" /></div></div><div className="h-2 w-full bg-muted rounded-full relative"><div className="absolute -top-10 right-0 bg-accent p-2 rounded-full border border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)]"><Utensils className="w-6 h-6 text-green-400" /></div></div><p className="text-green-400 text-xs mt-2 font-bold text-center flex items-center justify-center gap-2"><CheckCircle className="w-4 h-4" />状态：开火即炒，一切尽在手边</p></div>)}</div></div>);};
const OrganizePrincipleVisual = () => (<div className="bg-card border border-border rounded-xl p-8 my-8 relative overflow-hidden"><div className="flex items-center gap-2 mb-8 border-b border-border pb-2"><Lightbulb className="w-5 h-5 text-green-400" /><h4 className="font-bold text-foreground text-lg">核心图解：为了发现 (Organize for Insight)</h4></div><div className="flex items-stretch justify-between gap-8 h-40"><div className="w-1/3 bg-accent border border-dashed border-border rounded-xl p-4 flex flex-col items-center justify-center relative"><div className="absolute -top-3 bg-accent px-2 text-[10px] text-muted-foreground uppercase tracking-widest">Conflict 1</div><Database className="w-8 h-8 text-muted-foreground mb-2" /><div className="text-xs text-muted-foreground font-bold">暂不可用的信息</div><div className="text-[9px] text-muted-foreground mt-1 text-center">未来的素材 / 灵感<br/>(Resource)</div></div><div className="flex-1 flex flex-col items-center justify-center relative"><div className="w-full h-2 bg-gradient-to-r from-transparent via-red-500/20 to-transparent absolute top-1/2 -translate-y-1/2"></div><X className="w-6 h-6 text-red-500/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" /><div className="z-10 bg-green-600 text-foreground px-4 py-2 rounded-full text-xs font-bold shadow-[0_0_20px_rgba(34,197,94,0.4)] flex items-center gap-2 animate-bounce-slow"><Layers className="w-3 h-3" />建立关联 (Organize)</div><div className="mt-4 text-[10px] text-green-300 text-center">"让信息在需要的时候<br/>自动出现在手边"</div></div><div className="w-1/3 bg-accent border border-dashed border-border rounded-xl p-4 flex flex-col items-center justify-center relative"><div className="absolute -top-3 bg-accent px-2 text-[10px] text-muted-foreground uppercase tracking-widest">Conflict 2</div><CheckSquare className="w-8 h-8 text-blue-500 mb-2" /><div className="text-xs text-muted-foreground font-bold">需立即执行的任务</div><div className="text-[9px] text-muted-foreground mt-1 text-center">当下的产出<br/>(Project)</div></div></div></div>);
const ROALever = () => { const [attention, setAttention] = useState(80); const [returns, setReturns] = useState(40); const roa = (returns / attention).toFixed(2); const rotation = Math.min(Math.max((roa - 1) * 45, -45), 45); let statusColor = roa >= 1 ? "text-green-400" : "text-red-400"; let statusText = roa >= 1 ? "盈利 (Profit)" : "亏损 (Loss)"; return (<div className="bg-card border border-border rounded-xl p-8 my-8 shadow-2xl relative overflow-hidden"><div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-muted-foreground">ROA</div><h4 className="font-bold text-foreground mb-8 flex items-center gap-2"><Scale className="w-6 h-6 text-purple-400" /> 交互模型：ROA 杠杆天平</h4><div className="flex flex-col items-center"><div className="relative w-64 h-2 bg-slate-600 rounded-full mb-8 transition-transform duration-700 ease-out" style={{ transform: `rotate(${-rotation}deg)` }}><div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"><div className="w-16 h-16 bg-red-900/80 rounded-lg border-2 border-red-500 flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.4)] backdrop-blur-sm" style={{ transform: `scale(${0.5 + attention/150})` }}><Brain className="w-8 h-8 text-foreground" /></div><div className="text-xs text-red-300 font-bold mt-2 bg-black/50 px-2 py-1 rounded">Attention</div></div><div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 flex flex-col items-center"><div className="w-16 h-16 bg-green-900/80 rounded-lg border-2 border-green-500 flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.4)] backdrop-blur-sm" style={{ transform: `scale(${0.5 + returns/150})` }}><Box className="w-8 h-8 text-foreground" /></div><div className="text-xs text-green-300 font-bold mt-2 bg-black/50 px-2 py-1 rounded">Returns</div></div><div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-slate-300 rounded-full border-4 border-border z-10"></div></div><div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[40px] border-b-slate-700 -mt-8"></div><div className="mt-8 grid grid-cols-2 gap-8 w-full max-w-md"><div className="bg-accent p-4 rounded-lg border border-border"><label className="text-xs text-muted-foreground block mb-2">投入：整理/寻找/切换 (Cost)</label><input type="range" min="10" max="100" value={attention} onChange={(e) => setAttention(parseInt(e.target.value))} className="w-full h-2 bg-muted rounded appearance-none cursor-pointer accent-red-500" /></div><div className="bg-accent p-4 rounded-lg border border-border"><label className="text-xs text-muted-foreground block mb-2">产出：文章/项目/方案 (Value)</label><input type="range" min="10" max="100" value={returns} onChange={(e) => setReturns(parseInt(e.target.value))} className="w-full h-2 bg-muted rounded appearance-none cursor-pointer accent-green-500" /></div></div><div className="mt-6 text-center"><div className="text-xs text-muted-foreground uppercase tracking-widest mb-1">ROA Ratio</div><div className={`text-4xl font-black ${statusColor} transition-colors duration-300`}>{roa}</div><div className={`text-xs font-bold uppercase mt-1 ${statusColor}`}>{statusText}</div></div></div></div>);};
const BalanceChartVisual = () => (<div className="my-8 bg-card border border-border rounded-xl p-6 relative"><div className="flex justify-between items-end mb-6"><h5 className="text-sm font-bold text-foreground flex items-center gap-2"><Activity className="w-4 h-4 text-purple-400" /> 可视化：权衡曲线 (The Trade-off)</h5></div><div className="relative h-56 w-full bg-card/50 rounded-lg border border-border p-4"><div className="absolute left-6 bottom-6 w-[90%] h-[1px] bg-slate-600"></div><div className="absolute left-6 bottom-6 w-[1px] h-[80%] bg-slate-600"></div><div className="absolute bottom-2 left-1/2 text-[10px] text-muted-foreground uppercase tracking-wider">压缩程度 (Compression) →</div><div className="absolute left-2 top-1/2 -rotate-90 text-[10px] text-muted-foreground uppercase tracking-wider">效用 (Utility)</div><svg className="absolute inset-0 w-full h-full overflow-visible p-6"><path d="M 0 180 C 100 180, 200 50, 300 20" fill="none" stroke="#FACC15" strokeWidth="3" strokeDasharray="4,4" /><text x="310" y="25" fill="#FACC15" fontSize="10" fontWeight="bold">可发现性</text><path d="M 0 20 C 100 20, 200 150, 300 180" fill="none" stroke="#94A3B8" strokeWidth="3" /><text x="310" y="180" fill="#94A3B8" fontSize="10" fontWeight="bold">完整语境</text></svg><div className="absolute left-[50%] top-[45%] flex flex-col items-center"><div className="w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_20px_#A855F7] animate-pulse"></div><div className="mt-2 bg-accent text-purple-300 text-[10px] px-2 py-1 rounded border border-purple-500/50 whitespace-nowrap">甜蜜点 (Sweet Spot)</div></div></div></div>);
const DistillHeatmap = () => { const [level, setLevel] = useState(1); const TextBlock = ({ text, importance }) => { let style = "text-muted-foreground"; if (level >= 2 && importance >= 2) style = "text-foreground font-bold"; if (level >= 3 && importance >= 3) style = "bg-yellow-500/30 text-yellow-600 dark:text-yellow-200 px-1 rounded"; if (level >= 4 && importance < 3) style = "text-slate-700 blur-[2px] transition-all duration-500"; return <span className={`transition-all duration-300 ${style}`}>{text} </span>; }; return (<div className="bg-card border border-border rounded-xl p-8 my-8 shadow-xl"><div className="flex items-center justify-between mb-6 border-b border-border pb-4"><div className="flex items-center gap-2"><Minimize2 className="w-5 h-5 text-yellow-400" /><h4 className="font-bold text-foreground">交互演示：5 层渐进式摘要</h4></div><div className="flex gap-2">{[1,2,3,4,5].map(l => <button key={l} onClick={() => setLevel(l)} className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${level === l ? 'bg-yellow-500 text-black scale-110' : 'bg-accent text-muted-foreground hover:bg-muted'}`}>L{l}</button>)}</div></div><div className="bg-card rounded-xl p-6 font-serif text-lg leading-loose min-h-[300px] relative">{level >= 4 && <div className="mb-8 p-4 bg-yellow-900/20 border-l-4 border-yellow-500 rounded-r-lg animate-in slide-in-from-top-4"><h5 className="text-yellow-500 font-sans font-bold text-xs uppercase mb-1">Executive Summary (Layer 4)</h5><p className="text-yellow-600 dark:text-yellow-200 text-sm font-sans">笔记的价值 = 发现的难度 / 消费的难度。渐进式总结的核心是“以未来的时间换取现在的理解”。</p></div>}{level === 5 && <div className="absolute inset-0 bg-card/90 backdrop-blur-sm z-10 flex items-center justify-center rounded-xl animate-in fade-in"><div className="bg-accent border border-indigo-500 p-6 rounded-xl max-w-sm text-center shadow-2xl transform rotate-1"><div className="text-indigo-400 font-bold text-xs mb-2 uppercase flex items-center justify-center gap-2"><GitBranch className="w-4 h-4" /> Layer 5: Remix</div><p className="text-foreground text-base font-medium">"笔记的终极形态不是仓库，而是工厂。通过渐进式总结，我们把几十吨的矿石（Raw Info）提炼成了几克的黄金（Insight）。 #SecondBrain"</p><div className="mt-4 text-[10px] text-muted-foreground bg-black/30 py-1 rounded">已转化为：推文 / 幻灯片 / 中间包</div></div></div>}<div className={level === 5 ? "opacity-0" : "opacity-100"}><TextBlock text="我们生活在一个信息过载的时代，但这并不是真正的问题。" importance={1} /><TextBlock text="真正的问题是我们缺乏对信息的过滤和提炼机制。" importance={2} /><TextBlock text="很多人只是像松鼠一样囤积坚果，却从来不吃掉它们。" importance={1} /><br/><br/><TextBlock text="构建第二大脑的目的，不是为了让你成为一个更好的图书管理员，而是让你成为一个更高产的创造者。" importance={2} /><TextBlock text="CODE 方法论是这一系统的核心引擎。" importance={1} /><TextBlock text="其中，提炼（Distill）是最关键却最容易被忽视的一步。" importance={3} /><TextBlock text="没有提炼，笔记就是数字垃圾。" importance={3} /><br/><br/><TextBlock text="通过渐进式总结，我们根据直觉层层剥离，直到只剩下最核心的观点。" importance={2} /><TextBlock text="这就像是从几十吨矿石中提炼出几克黄金。" importance={3} /></div></div></div>);};
const ExpressDashboard = () => { const [mode, setMode] = useState(null); const modes = [ { id: 'see', label: 'SEE (看)', icon: Eye, desc: "放到不同情境中看。" }, { id: 'write', label: 'WRITE (写)', icon: FileText, desc: "做笔记，写摘要。" }, { id: 'draw', label: 'DRAW (画)', icon: LayoutTemplate, desc: "图像化。" }, { id: 'produce', label: 'PRODUCE (产出)', icon: Box, desc: "实质性加工。" }, { id: 'perform', label: 'PERFORM (演示)', icon: Mic, desc: "演讲，录制视频。" }, { id: 'sell', label: 'SELL (传播)', icon: Speaker, desc: "教会他人。" } ]; return (<div className="bg-card border border-border rounded-xl p-8 my-8"><h4 className="font-bold text-foreground mb-6 flex items-center gap-2 border-b border-border pb-4"><PenTool className="w-5 h-5 text-blue-400" /> 交互演示：6 种表达模式 (INTERACT)</h4><div className="grid grid-cols-2 md:grid-cols-3 gap-4">{modes.map((m) => (<button key={m.id} onClick={() => setMode(m.id)} className={`p-4 rounded-xl border transition-all text-left group relative overflow-hidden ${mode === m.id ? 'bg-blue-600 border-blue-500 text-foreground shadow-lg scale-105 z-10' : 'bg-accent border-border text-muted-foreground hover:bg-muted hover:border-slate-500'}`}><m.icon className={`w-6 h-6 mb-3 ${mode === m.id ? 'text-foreground' : 'text-blue-400'}`} /><div className="text-xs font-bold mb-1">{m.label}</div>{mode === m.id && <div className="text-[10px] opacity-90 animate-in fade-in leading-relaxed mt-2 border-t border-white/20 pt-2">{m.desc}</div>}</button>))}</div><p className="text-center text-xs text-muted-foreground mt-6 italic">点击上方卡片，查看如何与知识进行"较劲"。不要只是被动地阅读。</p></div>);};

// ----------------------------------------------------------------------------
// GROUP B: 新增增强组件 (Part 1-4 专用 - 科学可视化)
// ----------------------------------------------------------------------------

// 1.1 Project: Eisenhower Matrix (Enhanced)
const EisenhowerMatrix = () => (
  <div className="bg-card border border-border rounded-xl p-6 my-6 relative shadow-lg">
    <div className="flex items-center gap-2 mb-4"><Target className="w-4 h-4 text-blue-400"/><h4 className="font-bold text-foreground">艾森豪威尔物理矩阵</h4></div>
    <div className="grid grid-cols-2 gap-4">
      {[
        { id: "11", title: "重要且紧急", desc: "Q1 火力全开区。今天的'青蛙'。", limit: "硬性限制: 不超3个", bg: "bg-red-900/20", border: "border-red-500/50", text: "text-red-400", icon: Flame },
        { id: "12", title: "重要不紧急", desc: "Q2 核心成长区。必须设置截止日期。", limit: "主动构建未来", bg: "bg-yellow-900/20", border: "border-yellow-500/50", text: "text-yellow-400", icon: Brain },
        { id: "13", title: "紧急不重要", desc: "Q3 噪音区。别人的急事。", limit: "速战速决/委托", bg: "bg-blue-900/20", border: "border-blue-500/50", text: "text-blue-400", icon: Zap },
        { id: "14", title: "不重要不紧急", desc: "Q4 孵化与冷冻池。缓冲。", limit: "一月不动即删", bg: "bg-accent", border: "border-border", text: "text-muted-foreground", icon: Archive },
      ].map(q => (
        <div key={q.id} className={`${q.bg} ${q.border} border p-4 rounded-lg flex flex-col min-h-[120px] transition-transform hover:scale-[1.02] relative overflow-hidden group`}>
           <div className="flex justify-between items-start z-10">
             <span className={`font-black text-lg ${q.text} flex items-center gap-2`}><q.icon className="w-4 h-4"/>{q.id}</span>
             <span className="text-[9px] bg-black/30 px-2 py-1 rounded text-foreground/70 backdrop-blur-sm">{q.limit}</span>
           </div>
           <div className={`font-bold mt-2 ${q.text} z-10`}>{q.title}</div>
           <div className="text-xs text-muted-foreground mt-1 z-10 leading-relaxed">{q.desc}</div>
           <div className={`absolute -right-4 -bottom-4 opacity-10 ${q.text}`}><q.icon className="w-24 h-24"/></div>
        </div>
      ))}
    </div>
  </div>
);

// 1.2 Project: Metaplan (元计划)
const MetaplanVisual = () => (
  <div className="bg-card border border-border rounded-xl p-6 my-6">
     <div className="flex items-center gap-2 mb-4"><Layout className="w-4 h-4 text-purple-400"/><h4 className="font-bold text-foreground">元计划 (Metaplan) 四要素</h4></div>
     <div className="grid grid-cols-2 gap-2">
        <div className="bg-accent p-3 rounded border border-border">
           <span className="text-purple-400 font-bold text-xs block mb-1">WHO (谁)</span>
           <span className="text-muted-foreground text-[10px]">责任人与协作方</span>
        </div>
        <div className="bg-accent p-3 rounded border border-border">
           <span className="text-blue-400 font-bold text-xs block mb-1">WHAT (做啥)</span>
           <span className="text-muted-foreground text-[10px]">具体产出物</span>
        </div>
        <div className="bg-accent p-3 rounded border border-border">
           <span className="text-green-400 font-bold text-xs block mb-1">WHEN (何时)</span>
           <span className="text-muted-foreground text-[10px]">截止日期/里程碑</span>
        </div>
        <div className="bg-accent p-3 rounded border border-border">
           <span className="text-yellow-400 font-bold text-xs block mb-1">WHY (动机)</span>
           <span className="text-muted-foreground text-[10px]">核心目的与价值</span>
        </div>
     </div>
  </div>
);

// 1.2 Project: Strategy Triad (战略三部曲)
const StrategyTriad = () => (
  <div className="bg-card border border-border rounded-xl p-8 my-8 relative">
    <div className="flex items-center gap-2 mb-6 border-b border-border pb-2"><MapIcon className="w-5 h-5 text-blue-400"/><h4 className="font-bold text-foreground text-lg">战略三部曲 (Planning)</h4></div>
    <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
      <div className="w-full md:w-1/3 p-4 bg-accent border border-border rounded-lg flex flex-col items-center text-center relative group hover:border-blue-500 transition-colors">
        <div className="w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400 font-bold mb-2">1</div>
        <h5 className="text-sm font-bold text-foreground mb-1">诊断 (Diagnosis)</h5>
        <p className="text-[10px] text-muted-foreground">问题到底是什么？</p>
        <ArrowRight className="absolute -bottom-6 md:bottom-auto md:-right-4 w-6 h-6 text-muted-foreground rotate-90 md:rotate-0 z-10"/>
      </div>
      <div className="w-full md:w-1/3 p-4 bg-accent border border-border rounded-lg flex flex-col items-center text-center relative group hover:border-yellow-500 transition-colors">
        <div className="w-8 h-8 rounded-full bg-yellow-900/50 flex items-center justify-center text-yellow-400 font-bold mb-2">2</div>
        <h5 className="text-sm font-bold text-foreground mb-1">指导方针 (Policy)</h5>
        <p className="text-[10px] text-muted-foreground">用哪种路径去解？</p>
        <ArrowRight className="absolute -bottom-6 md:bottom-auto md:-right-4 w-6 h-6 text-muted-foreground rotate-90 md:rotate-0 z-10"/>
      </div>
      <div className="w-full md:w-1/3 p-4 bg-accent border border-border rounded-lg flex flex-col items-center text-center group hover:border-green-500 transition-colors">
        <div className="w-8 h-8 rounded-full bg-green-900/50 flex items-center justify-center text-green-400 font-bold mb-2">3</div>
        <h5 className="text-sm font-bold text-foreground mb-1">行动计划 (Action)</h5>
        <p className="text-[10px] text-muted-foreground">具体如何实施？</p>
      </div>
    </div>
  </div>
);

// 1.2 Project: GTD 12 Steps (循环盘)
const GTD12Steps = () => {
  const [activeStep, setActiveStep] = useState(1);
  const steps = [
    {id:1, t:"识别"}, {id:2, t:"捕获"}, {id:3, t:"组织"}, {id:4, t:"解读"},
    {id:5, t:"校验"}, {id:6, t:"创作"}, {id:7, t:"分享"}, {id:8, t:"保存"},
    {id:9, t:"总结"}, {id:10,t:"回顾"}, {id:11,t:"评估"}, {id:12,t:"再利用"}
  ];
  return (
    <div className="bg-card border border-border rounded-xl p-6 my-8">
      <div className="flex items-center gap-2 mb-6 border-b border-border pb-2"><RefreshCw className="w-5 h-5 text-blue-400"/><h4 className="font-bold text-foreground">JIT 创作循环 (The 12 Steps)</h4></div>
      <div className="relative h-64 w-full flex items-center justify-center">
        <div className="absolute w-48 h-48 rounded-full border border-border"></div>
        {steps.map((s, i) => {
          const angle = (i * 30) - 90;
          const rad = angle * (Math.PI / 180);
          const x = 50 + 40 * Math.cos(rad);
          const y = 50 + 40 * Math.sin(rad);
          return (
            <button key={s.id} 
              onClick={() => setActiveStep(s.id)}
              className={`absolute w-8 h-8 -ml-4 -mt-4 rounded-full text-[10px] font-bold flex items-center justify-center transition-all ${activeStep === s.id ? 'bg-blue-500 text-foreground scale-125 z-10 shadow-[0_0_10px_#3b82f6]' : 'bg-accent text-muted-foreground hover:bg-muted'}`}
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              {s.id}
            </button>
          );
        })}
        <div className="absolute w-24 h-24 bg-card rounded-full border border-blue-500/30 flex flex-col items-center justify-center text-center z-0 animate-in zoom-in">
          <div className="text-2xl font-black text-blue-500">{activeStep}</div>
          <div className="text-xs font-bold text-foreground">{steps[activeStep-1].t}</div>
        </div>
      </div>
      <p className="text-center text-xs text-muted-foreground mt-2">点击数字查看步骤。不要试图跳步，这是一个完整的代谢循环。</p>
    </div>
  );
};

// 1.2 Project: SMART Goal (拆解器)
const SmartGoalVisual = () => (
  <div className="bg-card border border-border rounded-xl p-6 my-6">
    <div className="flex items-center gap-2 mb-4"><Target className="w-4 h-4 text-green-400"/><h4 className="font-bold text-foreground">SMART 降维拆解</h4></div>
    <div className="flex gap-1 h-20">
      {['S','M','A','R','T'].map(l => (
        <div key={l} className="flex-1 bg-accent border border-border rounded flex flex-col items-center justify-center hover:bg-muted transition-colors group">
          <span className="text-lg font-black text-muted-foreground group-hover:text-foreground transition-colors">{l}</span>
          <span className="text-[8px] text-muted-foreground uppercase group-hover:text-green-400">{l==='S'?'Specific':l==='M'?'Measurable':l==='A'?'Achievable':l==='R'?'Relevant':'Time-bound'}</span>
        </div>
      ))}
    </div>
    <div className="mt-4 p-3 bg-accent rounded border border-border flex items-center gap-4">
       <div className="bg-red-900/30 text-red-400 px-2 py-1 rounded text-xs line-through">写完论文</div>
       <ArrowRight className="w-4 h-4 text-muted-foreground"/>
       <div className="bg-green-900/30 text-green-400 px-2 py-1 rounded text-xs font-bold">周五前写完引言 (S+T)</div>
    </div>
  </div>
);

// 1.2 Project: Archipelago (想法群岛)
const ArchipelagoVisual = () => (
  <div className="bg-card border border-border rounded-xl p-6 my-6 relative overflow-hidden h-48 flex items-center justify-center">
    <div className="absolute inset-0 bg-blue-900/5 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>
    <div className="flex gap-8 relative z-10 items-center">
       <div className="flex flex-col items-center group">
          <div className="w-12 h-12 bg-yellow-900/30 border border-yellow-500 rounded-full flex items-center justify-center text-[10px] text-yellow-400 shadow-[0_0_15px_rgba(234,179,8,0.3)] animate-float">Res A</div>
       </div>
       <div className="h-1 w-16 bg-muted self-center relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-500/50 animate-shimmer"></div>
       </div>
       <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-blue-900/30 border-2 border-blue-500 rounded-xl flex items-center justify-center font-bold text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.3)]">Project</div>
       </div>
       <div className="h-1 w-16 bg-muted self-center relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-500/50 animate-shimmer" style={{animationDelay: '1s'}}></div>
       </div>
       <div className="flex flex-col items-center group">
          <div className="w-12 h-12 bg-yellow-900/30 border border-yellow-500 rounded-full flex items-center justify-center text-[10px] text-yellow-400 shadow-[0_0_15px_rgba(234,179,8,0.3)]">Res B</div>
       </div>
    </div>
    <div className="absolute bottom-2 text-[10px] text-muted-foreground">将孤岛连接成大陆</div>
  </div>
);

// 1.2 Project: Bio Mechanisms (神经生物学机制)
const BioMechanisms = () => (
  <div className="bg-card border border-border rounded-xl p-6 my-6">
    <div className="flex items-center gap-2 mb-4"><Activity className="w-4 h-4 text-pink-400"/><h4 className="font-bold text-foreground">生化机制利用</h4></div>
    <div className="space-y-3">
       <div className="flex items-center gap-3">
         <div className="w-24 text-right text-[10px] font-bold text-blue-400">去甲肾上腺素</div>
         <div className="h-2 flex-1 bg-accent rounded-full overflow-hidden"><div className="h-full w-[80%] bg-blue-500/50 rounded-full"></div></div>
         <div className="text-[10px] text-muted-foreground">专注/屏蔽</div>
       </div>
       <div className="flex items-center gap-3">
         <div className="w-24 text-right text-[10px] font-bold text-yellow-400">多巴胺</div>
         <div className="h-2 flex-1 bg-accent rounded-full overflow-hidden"><div className="h-full w-[60%] bg-yellow-500/50 rounded-full"></div></div>
         <div className="text-[10px] text-muted-foreground">模式识别</div>
       </div>
       <div className="flex items-center gap-3">
         <div className="w-24 text-right text-[10px] font-bold text-green-400">内啡肽</div>
         <div className="h-2 flex-1 bg-accent rounded-full overflow-hidden"><div className="h-full w-[40%] bg-green-500/50 rounded-full"></div></div>
         <div className="text-[10px] text-muted-foreground">愉悦平静</div>
       </div>
       <div className="flex items-center gap-3">
         <div className="w-24 text-right text-[10px] font-bold text-purple-400">花生四烯乙醇胺</div>
         <div className="h-2 flex-1 bg-accent rounded-full overflow-hidden"><div className="h-full w-[50%] bg-purple-500/50 rounded-full"></div></div>
         <div className="text-[10px] text-muted-foreground">横向思维</div>
       </div>
       <div className="flex items-center gap-3">
         <div className="w-24 text-right text-[10px] font-bold text-red-400">一氧化氮</div>
         <div className="h-2 flex-1 bg-accent rounded-full overflow-hidden"><div className="h-full w-[30%] bg-red-500/50 rounded-full"></div></div>
         <div className="text-[10px] text-muted-foreground">压力放松</div>
       </div>
    </div>
  </div>
);

// 1.2 Project: Packet Switching (中间包)
const PacketSwitchingVisual = () => (
  <div className="bg-card border border-border rounded-xl p-6 my-6">
    <h4 className="font-bold text-foreground mb-4 text-xs flex items-center gap-2"><Box className="w-4 h-4 text-green-400"/> Packet Switching (中间包)</h4>
    <div className="flex gap-2">
       {["找参考文献", "写引言", "画图表"].map((text, i) => (
         <div key={i} className="flex-1 bg-green-900/20 border border-green-500/50 p-2 rounded text-center hover:bg-green-900/30 transition-colors cursor-pointer group">
            <div className="text-xs text-green-400 font-bold mb-1 group-hover:scale-110 transition-transform">Packet {i+1}</div>
            <div className="text-[10px] text-muted-foreground">{text}</div>
            <div className="mt-2 w-full h-1 bg-green-900 rounded-full overflow-hidden"><div className="w-2/3 h-full bg-green-500 rounded-full"></div></div>
         </div>
       ))}
    </div>
  </div>
);

// 1.2 Project: Hemingway Bridge (海明威桥)
const HemingwayBridgeVisualizer = () => { 
  const [s, setS] = useState(0); 
  return (
    <div className="bg-card border border-border rounded-xl p-6 my-6 text-center">
      <div className="flex justify-center gap-4 mb-6">
        <button onClick={()=>setS(0)} className={`px-4 py-2 rounded text-xs font-bold border transition-all ${s===0?'bg-red-500 border-red-400 text-foreground':'bg-accent border-border text-muted-foreground'}`}>1. Stop</button>
        <button onClick={()=>setS(1)} className={`px-4 py-2 rounded text-xs font-bold border transition-all ${s===1?'bg-yellow-500 border-yellow-400 text-black':'bg-accent border-border text-muted-foreground'}`}>2. Bridge</button>
        <button onClick={()=>setS(2)} className={`px-4 py-2 rounded text-xs font-bold border transition-all ${s===2?'bg-green-500 border-green-400 text-foreground':'bg-accent border-border text-muted-foreground'}`}>3. Start</button>
      </div>
      <div className="h-24 flex items-center justify-center p-4 bg-card rounded border border-border relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 transition-opacity duration-500 ${s===2?'opacity-100':'opacity-0'}`}></div>
        <span className="text-sm font-bold text-foreground transition-all animate-in fade-in relative z-10 leading-relaxed">
          {s===0?"强制停在“知道下一句写什么”的地方 (留有余地)" : s===1?"写下状态小结：当前进度 + 明天第一步做什么" : "第二天读一遍小结，零摩擦接续心流 (Flow)"}
        </span>
      </div>
    </div>
  )
};

// 1.3 Project: Review Cycle (每周回顾)
const ReviewCycleVisual = () => (
  <div className="bg-card border border-border rounded-xl p-6 my-6 flex items-center gap-6">
     <div className="relative w-24 h-24 shrink-0">
        <div className="absolute inset-0 rounded-full border-4 border-border"></div>
        <div className="absolute inset-0 rounded-full border-t-4 border-green-500 animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-green-400">Weekly<br/>Check-in</div>
     </div>
     <div className="space-y-2 text-xs text-muted-foreground">
        <div className="flex items-center gap-2"><CheckSquare className="w-3 h-3 text-blue-400"/> 重新排列优先级</div>
        <div className="flex items-center gap-2"><Target className="w-3 h-3 text-red-400"/> 检查"期望成果"达成</div>
        <div className="flex items-center gap-2"><Calendar className="w-3 h-3 text-yellow-400"/> 即使过期，也是 Check-in 节点</div>
     </div>
  </div>
);

// 1.3 Project: Asset Transfer (资产入库)
const AssetTransferVisual = () => (
  <div className="bg-card border border-border rounded-xl p-6 my-6 flex items-center justify-between gap-4 relative overflow-hidden">
     <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-green-900/10 opacity-30"></div>
     <div className="p-4 border border-blue-500 rounded bg-blue-900/20 text-center flex-1 z-10">
        <div className="text-xs text-blue-400 font-bold mb-2">Project (Temp)</div>
        <FileText className="w-6 h-6 text-foreground mx-auto"/>
     </div>
     <div className="flex-1 flex flex-col items-center z-10">
        <div className="text-[10px] text-muted-foreground mb-1 font-mono uppercase">SOP/Assets</div>
        <MoveRight className="w-8 h-8 text-muted-foreground animate-pulse"/>
     </div>
     <div className="p-4 border border-green-500 rounded bg-green-900/20 text-center flex-1 z-10">
        <div className="text-xs text-green-400 font-bold mb-2">Area (Perm)</div>
        <Layers className="w-6 h-6 text-foreground mx-auto"/>
     </div>
  </div>
);

// 1.2 Project: GTD Pipeline (Comprehensive)
const GTDPipeline = () => {
  const steps = [
    { id: 1, title: "规划 (Planning)", icon: MapIcon, desc: "诊断 / 方针 / 行动", color: "text-blue-400", bg: "bg-blue-500" },
    { id: 2, title: "启动 (Starting)", icon: Rocket, desc: "想法群岛 / 拆解", color: "text-purple-400", bg: "bg-purple-500" },
    { id: 3, title: "执行 (Doing)", icon: Zap, desc: "中间包 / 心流", color: "text-yellow-400", bg: "bg-yellow-500" },
    { id: 4, title: "暂停 (Pausing)", icon: Pause, desc: "海明威桥", color: "text-green-400", bg: "bg-green-500" }
  ];
  return (
    <div className="bg-card border border-border rounded-xl p-6 my-8">
      <div className="flex items-center gap-2 mb-6 border-b border-border pb-2"><ListTodo className="w-5 h-5 text-indigo-400"/><h4 className="font-bold text-foreground">执行黑客：GTD 全流程</h4></div>
      <div className="flex flex-col md:flex-row gap-4">
        {steps.map((s, i) => (
          <div key={s.id} className="flex-1 relative group">
            <div className={`p-4 bg-accent border border-border rounded-lg h-full flex flex-col items-center text-center transition-all hover:border-slate-400`}>
               <div className={`w-10 h-10 rounded-full ${s.bg}/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                 <s.icon className={`w-5 h-5 ${s.color}`} />
               </div>
               <h5 className="text-sm font-bold text-foreground mb-1">{s.title}</h5>
               <p className="text-[10px] text-muted-foreground">{s.desc}</p>
            </div>
            {i < steps.length - 1 && <ArrowRight className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 text-muted-foreground z-10" />}
            {i < steps.length - 1 && <ArrowDown className="md:hidden absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 text-muted-foreground z-10" />}
          </div>
        ))}
      </div>
    </div>
  );
};

// 2.1 Area: Catalog Tree
const AreaCatalogTree = () => (
  <div className="bg-card border border-border rounded-xl p-6 my-6">
    <h4 className="font-bold text-foreground mb-4 text-xs flex gap-2"><Layers className="w-4 h-4 text-green-400"/> 极简目录结构</h4>
    <div className="space-y-2 font-mono text-xs">
      <div className="flex items-center gap-2 text-green-400 bg-green-900/10 p-2 rounded"><Folder className="w-4 h-4"/> 21-我的生活 (Life)</div>
      <div className="flex items-center gap-2 text-green-400 bg-green-900/10 p-2 rounded"><Folder className="w-4 h-4"/> 22-我的工作 (Work)</div>
      <div className="flex items-center gap-2 text-green-400 bg-green-900/10 p-2 rounded"><Folder className="w-4 h-4"/> 23-系统底座 (System)</div>
      <div className="pl-6 flex items-center gap-2 text-muted-foreground"><FileText className="w-3 h-3"/> 00-我的12个核心难题.md <span className="text-[9px] bg-yellow-500/20 text-yellow-300 px-1 rounded">宪法</span></div>
    </div>
  </div>
);

// 2.1 Area: Gatekeeper Shield (12难题防御盾)
const GatekeeperShield = () => {
  const [blocked, setBlocked] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => setBlocked(b => !b), 2000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="bg-card border border-border rounded-xl p-8 my-8 relative overflow-hidden">
       <div className="flex items-center gap-2 mb-6 border-b border-border pb-2"><Shield className="w-5 h-5 text-green-400"/><h4 className="font-bold text-foreground text-lg">守门员机制 (The Gatekeeper)</h4></div>
       <div className="flex items-center justify-center gap-8 md:gap-16">
          <div className={`transition-all duration-500 flex flex-col items-center ${blocked ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
             <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mb-2"><X className="w-6 h-6 text-red-500"/></div>
             <span className="text-[10px] text-red-400">无关杂讯</span>
          </div>
          <div className="relative z-10">
             <div className="w-32 h-40 bg-green-900/10 border-4 border-green-500 rounded-b-full flex flex-col items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                <ShieldCheck className="w-12 h-12 text-green-400 mb-2"/>
                <span className="text-xs font-bold text-green-400">12 难题</span>
             </div>
             {blocked && <div className="absolute top-1/2 -left-10 w-10 h-1 bg-red-500 animate-pulse"></div>} 
             {!blocked && <div className="absolute top-1/2 left-full w-10 h-1 bg-blue-500 animate-pulse"></div>}
          </div>
          <div className={`transition-all duration-500 flex flex-col items-center ${!blocked ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
             <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-2"><CheckCircle className="w-6 h-6 text-blue-500"/></div>
             <span className="text-[10px] text-blue-400">有效资源</span>
          </div>
       </div>
    </div>
  );
};

// 2.3 Area: Slow Burn vs Sprint
const SlowBurnVisual = () => (
  <div className="bg-card border border-border rounded-xl p-6 my-6 grid grid-cols-2 gap-4">
    <div className="bg-accent p-4 rounded text-center opacity-50 border border-transparent">
       <Zap className="w-6 h-6 text-blue-400 mx-auto mb-2"/>
       <div className="text-xs font-bold text-blue-400">Project: Sprint</div>
       <div className="text-[8px] text-muted-foreground mt-1">百米冲刺 / 耗尽全力</div>
    </div>
    <div className="bg-green-900/20 border border-green-500/50 p-4 rounded text-center shadow-[0_0_15px_rgba(34,197,94,0.2)]">
       <ChefHat className="w-6 h-6 text-green-400 mx-auto mb-2"/>
       <div className="text-xs font-bold text-green-400">Area: Slow Burn</div>
       <div className="text-[8px] text-green-600 dark:text-green-200/50 mt-1">文火慢炖 / 慢慢孵化</div>
    </div>
  </div>
);

// 2.3 Area: Forgetting Curve
const ForgettingCurve = () => (
  <div className="bg-card border border-border rounded-xl p-6 my-6">
    <div className="flex items-center gap-2 mb-4"><History className="w-4 h-4 text-green-400"/><h4 className="font-bold text-foreground">维护动作：间隔重复</h4></div>
    <div className="relative h-40 w-full bg-card/50 border border-border rounded p-4">
      <div className="absolute inset-0 grid grid-cols-6 gap-0 opacity-10">
         {[...Array(6)].map((_,i)=><div key={i} className="border-r border-slate-500"></div>)}
      </div>
      <svg className="absolute inset-0 w-full h-full overflow-visible p-4">
        <path d="M 0 10 Q 50 120 100 130" fill="none" stroke="#475569" strokeWidth="2" strokeDasharray="4,4"/>
        <line x1="100" y1="130" x2="100" y2="10" stroke="#22C55E" strokeWidth="2" />
        <path d="M 100 10 Q 200 80 300 100" fill="none" stroke="#22C55E" strokeWidth="2" />
        <line x1="300" y1="100" x2="300" y2="10" stroke="#22C55E" strokeWidth="2" />
        <path d="M 300 10 Q 500 20 600 30" fill="none" stroke="#22C55E" strokeWidth="2" />
      </svg>
      <div className="absolute bottom-2 left-2 text-[9px] text-muted-foreground">Time →</div>
      <div className="absolute top-2 left-2 text-[9px] text-muted-foreground">Retention ↑</div>
    </div>
  </div>
);

// 3.1 Resource: Note Characteristics
const NoteCharacteristicsCard = () => (
  <div className="bg-card border border-border rounded-xl p-6 my-6">
    <div className="flex items-center gap-2 mb-4"><FileText className="w-4 h-4 text-yellow-400"/><h4 className="font-bold text-foreground">笔记的核心特质</h4></div>
    <div className="grid grid-cols-2 gap-4">
       {[
         {t:"Personal", d:"只为自己优化，不面向公开", i:MousePointer2},
         {t:"Unpolished", d:"允许杂乱、随机，不打磨", i:Hammer},
         {t:"Open-ended", d:"持续增补的知识库", i:Layout},
         {t:"Diverse", d:"图/文/音/码 多样媒介", i:Grid},
       ].map(c=>(
         <div key={c.t} className="bg-accent p-3 rounded border border-border hover:border-yellow-500/50 transition-colors">
            <c.i className="w-4 h-4 text-yellow-500 mb-2"/>
            <div className="font-bold text-foreground text-xs">{c.t}</div>
            <div className="text-[9px] text-muted-foreground">{c.d}</div>
         </div>
       ))}
    </div>
  </div>
);

// 3.1 Resource: Catalog Grid
const ResourceCatalogGrid = () => (
  <div className="bg-card border border-border rounded-xl p-6 my-6">
     <div className="flex items-center gap-2 mb-4"><Database className="w-4 h-4 text-yellow-400"/><h4 className="font-bold text-foreground">具象化目录 (V8.0)</h4></div>
     <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="bg-yellow-900/10 text-yellow-600 dark:text-yellow-200 border border-yellow-500/30 p-2 rounded flex items-center gap-2"><Inbox className="w-3 h-3"/> 00-收件箱</div>
        <div className="bg-accent text-foreground border border-border p-2 rounded flex items-center gap-2"><FileText className="w-3 h-3"/> 31-文档与阅读</div>
        <div className="bg-accent text-foreground border border-border p-2 rounded flex items-center gap-2"><Eye className="w-3 h-3"/> 32-视觉与灵感</div>
        <div className="bg-accent text-foreground border border-border p-2 rounded flex items-center gap-2"><Play className="w-3 h-3"/> 33-影音与书签</div>
        <div className="bg-accent text-foreground border border-border p-2 rounded flex items-center gap-2"><Hammer className="w-3 h-3"/> 34-工具与配置</div>
        <div className="bg-accent text-foreground border border-border p-2 rounded flex items-center gap-2"><BookOpen className="w-3 h-3"/> 35-兴趣百科</div>
     </div>
  </div>
);

// 3.2 Resource: Spark Resonance (火花捕捉)
const SparkResonance = () => (
  <div className="bg-card border border-border rounded-xl p-6 my-6">
    <div className="flex items-center gap-2 mb-4"><Flame className="w-4 h-4 text-orange-400"/><h4 className="font-bold text-foreground">火花捕捉模拟 (Hover to Resonate)</h4></div>
    <div className="p-6 bg-card rounded-lg text-lg font-serif text-muted-foreground leading-relaxed cursor-text select-none">
       阅读时，大部分内容都是平庸的铺垫。
       <span className="hover:text-yellow-300 hover:bg-yellow-900/50 hover:shadow-[0_0_15px_rgba(253,224,71,0.5)] transition-all duration-300 rounded px-1 cursor-pointer text-muted-foreground mx-1">突然，你读到了一个让你心头一颤的句子。</span>
       这就是共鸣。
       <span className="hover:text-yellow-300 hover:bg-yellow-900/50 hover:shadow-[0_0_15px_rgba(253,224,71,0.5)] transition-all duration-300 rounded px-1 cursor-pointer text-muted-foreground mx-1">不要犹豫，立刻捕捉它。</span>
       忽略其他的噪音。
    </div>
    <div className="mt-2 text-center text-[10px] text-muted-foreground">⬆️ 试着把鼠标移动到文字上寻找"共鸣点"</div>
  </div>
);

// 3.3 Resource: Distill Funnel (提炼漏斗 - 取代之前的 Heatmap)
const DistillFunnel = () => (
  <div className="bg-card border border-border rounded-xl p-6 my-6 relative">
     <div className="flex items-center gap-2 mb-6 border-b border-border pb-2"><FunnelIcon className="w-5 h-5 text-yellow-400"/><h4 className="font-bold text-foreground">提炼漏斗 (Distill Funnel)</h4></div>
     <div className="flex flex-col items-center gap-1">
        <div className="w-[100%] h-12 bg-accent border border-border rounded flex items-center justify-center text-xs text-muted-foreground">Layer 1: 原始笔记 (0% 压缩)</div>
        <ArrowDown className="w-4 h-4 text-muted-foreground"/>
        <div className="w-[80%] h-12 bg-accent border border-border rounded flex items-center justify-center text-xs text-foreground">Layer 2: 加粗 (25% 压缩)</div>
        <ArrowDown className="w-4 h-4 text-muted-foreground"/>
        <div className="w-[60%] h-12 bg-yellow-900/20 border border-yellow-500/50 rounded flex items-center justify-center text-xs text-yellow-400 font-bold">Layer 3: 高亮 (20% 压缩) - 共鸣</div>
        <ArrowDown className="w-4 h-4 text-yellow-600"/>
        <div className="w-[40%] h-12 bg-accent border border-border rounded flex items-center justify-center text-xs text-foreground">Layer 4: 摘要 (5% 压缩)</div>
        <ArrowDown className="w-4 h-4 text-muted-foreground"/>
        <div className="w-[20%] h-12 bg-blue-900/20 border border-blue-500/50 rounded flex items-center justify-center text-xs text-blue-400 font-bold">Layer 5: 重混 (1% 压缩)</div>
     </div>
  </div>
);

// 3.4 Resource: Context Switch (同名策略)
const ContextSwitchVisual = () => (
  <div className="bg-card border border-border rounded-xl p-6 my-6 flex gap-4">
    <div className="flex-1 bg-yellow-900/20 border border-yellow-500/50 p-3 rounded text-center">
       <div className="text-[10px] text-yellow-500 font-bold mb-1">Resource/摄影</div>
       <div className="text-[9px] text-muted-foreground">别人写的 (素材)</div>
       <div className="text-[8px] text-muted-foreground mt-1">大师集 / 教程</div>
       <Database className="w-4 h-4 text-yellow-500 mx-auto mt-2"/>
    </div>
    <RotateCcw className="w-6 h-6 text-muted-foreground self-center"/>
    <div className="flex-1 bg-green-900/20 border border-green-500/50 p-3 rounded text-center">
       <div className="text-[10px] text-green-500 font-bold mb-1">Area/摄影</div>
       <div className="text-[9px] text-muted-foreground">我写的 (业务)</div>
       <div className="text-[8px] text-muted-foreground mt-1">报价表 / 档期</div>
       <Layers className="w-4 h-4 text-green-500 mx-auto mt-2"/>
    </div>
  </div>
);

// 4.1 Archive: Archive Vault
const ArchiveVaultVisual = () => (
  <div className="bg-card border border-border rounded-xl p-6 my-6 flex justify-center gap-4">
    <div className="p-4 bg-accent border border-border rounded flex flex-col items-center opacity-50"><span className="text-xs font-bold text-muted-foreground">2023</span></div>
    <div className="p-4 bg-accent border border-slate-500 rounded flex flex-col items-center scale-110 shadow-xl border-t-2">
       <span className="text-xs font-bold text-foreground">2024</span>
       <div className="flex gap-1 mt-2"><div className="w-2 h-2 bg-blue-500 rounded-full"></div><div className="w-2 h-2 bg-green-500 rounded-full"></div><div className="w-2 h-2 bg-yellow-500 rounded-full"></div></div>
    </div>
    <div className="p-4 bg-accent border border-border rounded flex flex-col items-center opacity-50"><span className="text-xs font-bold text-muted-foreground">2025</span></div>
  </div>
);

// 4.1 Archive: Graveyard (已放弃项目)
const GraveyardVisual = () => (
  <div className="bg-card border border-border rounded-xl p-6 my-6">
     <div className="flex items-center gap-2 mb-4"><Trash2 className="w-4 h-4 text-red-400"/><h4 className="font-bold text-foreground">项目墓地 (Abandoned)</h4></div>
     <div className="flex gap-4 overflow-x-auto pb-2">
        {[1,2,3].map(i => (
          <div key={i} className="min-w-[120px] bg-accent border border-border rounded-lg p-3 flex flex-col gap-2 opacity-60 grayscale hover:grayscale-0 transition-all">
             <div className="text-[10px] bg-red-900/30 text-red-400 px-1 rounded w-fit">ABANDONED</div>
             <div className="font-bold text-foreground text-xs">App Idea V{i}</div>
             <div className="text-[8px] text-muted-foreground italic border-t border-border pt-1">Reason: Not viable</div>
          </div>
        ))}
     </div>
     <p className="text-[10px] text-muted-foreground mt-2">即便放弃，也要留痕。防止未来重蹈覆辙。</p>
  </div>
);

// General: Context Tree (目录结构)
const ContextTree = ({active}) => (
  <div className="font-mono text-[10px] text-muted-foreground bg-card p-4 rounded border border-border my-4">
    <div className={active==='project'?'text-blue-400 font-bold bg-blue-900/20 -mx-2 px-2 rounded':''}>📂 10-Projects</div>
    <div className="pl-4 text-muted-foreground">└─ 📂 11-Q1_Urgent</div>
    <div className={active==='area'?'text-green-400 font-bold bg-green-900/20 -mx-2 px-2 rounded':''}>📂 20-Areas</div>
    <div className="pl-4 text-muted-foreground">└─ 📄 12_Questions.md</div>
    <div className={active==='resource'?'text-yellow-400 font-bold bg-yellow-900/20 -mx-2 px-2 rounded':''}>📂 30-Resources</div>
    <div className="pl-4 text-muted-foreground">└─ 📂 31_Reading</div>
    <div className={active==='archive'?'text-foreground font-bold bg-muted/50 -mx-2 px-2 rounded':''}>📂 40-Archives</div>
    <div className="pl-4 text-muted-foreground">└─ 📂 2024</div>
  </div>
);

// PARA Flow Diagram (四象限流转图)
const PARAFlowDiagram = () => {
  const [activeFlow, setActiveFlow] = useState(0);
  const flows = [
    {from: 'resource', to: 'project', label: '素材→项目', desc: '想法群岛'},
    {from: 'project', to: 'area', label: '项目→领域', desc: '资产入库'},
    {from: 'project', to: 'archive', label: '项目→归档', desc: '完成/放弃'},
    {from: 'area', to: 'resource', label: '领域→资源', desc: '12难题过滤'}
  ];

  useEffect(() => {
    const timer = setInterval(() => setActiveFlow(f => (f + 1) % flows.length), 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-card border border-border rounded-xl p-8 my-8">
      <div className="flex items-center gap-2 mb-6 border-b border-border pb-2">
        <Repeat className="w-5 h-5 text-purple-400"/>
        <h4 className="font-bold text-foreground text-lg">PARA 信息流转图</h4>
      </div>
      <div className="grid grid-cols-2 gap-6 relative">
        <div className={`p-6 rounded-xl border-2 transition-all ${activeFlow === 3 || activeFlow === 0 ? 'border-yellow-500 bg-yellow-900/20 scale-105' : 'border-yellow-500/30 bg-accent'}`}>
          <Database className="w-8 h-8 text-yellow-400 mb-2"/>
          <h5 className="font-bold text-yellow-400">Resource</h5>
          <p className="text-xs text-muted-foreground mt-1">素材库 (C&D)</p>
        </div>
        <div className={`p-6 rounded-xl border-2 transition-all ${activeFlow === 0 || activeFlow === 1 || activeFlow === 2 ? 'border-blue-500 bg-blue-900/20 scale-105' : 'border-blue-500/30 bg-accent'}`}>
          <Target className="w-8 h-8 text-blue-400 mb-2"/>
          <h5 className="font-bold text-blue-400">Project</h5>
          <p className="text-xs text-muted-foreground mt-1">项目 (E)</p>
        </div>
        <div className={`p-6 rounded-xl border-2 transition-all ${activeFlow === 1 || activeFlow === 3 ? 'border-green-500 bg-green-900/20 scale-105' : 'border-green-500/30 bg-accent'}`}>
          <Layers className="w-8 h-8 text-green-400 mb-2"/>
          <h5 className="font-bold text-green-400">Area</h5>
          <p className="text-xs text-muted-foreground mt-1">领域 (O)</p>
        </div>
        <div className={`p-6 rounded-xl border-2 transition-all ${activeFlow === 2 ? 'border-slate-400 bg-muted/20 scale-105' : 'border-slate-500/30 bg-accent'}`}>
          <Archive className="w-8 h-8 text-muted-foreground mb-2"/>
          <h5 className="font-bold text-muted-foreground">Archive</h5>
          <p className="text-xs text-muted-foreground mt-1">归档 (Reset)</p>
        </div>
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: 10}}>
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#6366f1" />
            </marker>
          </defs>
          {activeFlow === 0 && <path d="M 150 80 L 350 80" stroke="#3b82f6" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" className="animate-pulse"/>}
          {activeFlow === 1 && <path d="M 350 150 L 150 250" stroke="#22c55e" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" className="animate-pulse"/>}
          {activeFlow === 2 && <path d="M 450 150 L 450 250" stroke="#94a3b8" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" className="animate-pulse"/>}
          {activeFlow === 3 && <path d="M 150 250 L 150 150" stroke="#eab308" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" className="animate-pulse"/>}
        </svg>
      </div>
      <div className="mt-6 text-center p-4 bg-accent rounded border border-border">
        <div className="text-sm font-bold text-foreground mb-1">{flows[activeFlow].label}</div>
        <div className="text-xs text-muted-foreground">{flows[activeFlow].desc}</div>
      </div>
    </div>
  );
};

// CODE Cycle Animation (CODE 循环动画)
const CODECycleAnimation = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {id: 'C', name: 'Capture', icon: Anchor, color: 'text-yellow-400', bg: 'bg-yellow-500', desc: '捕捉共鸣', area: 'Resource'},
    {id: 'O', name: 'Organize', icon: Layers, color: 'text-green-400', bg: 'bg-green-500', desc: '预先就位', area: 'Area'},
    {id: 'D', name: 'Distill', icon: Minimize2, color: 'text-blue-400', bg: 'bg-blue-500', desc: '渐进提炼', area: 'Resource'},
    {id: 'E', name: 'Express', icon: Rocket, color: 'text-purple-400', bg: 'bg-purple-500', desc: '快速产出', area: 'Project'}
  ];

  useEffect(() => {
    const timer = setInterval(() => setActiveStep(s => (s + 1) % steps.length), 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-card border border-border rounded-xl p-8 my-8">
      <div className="flex items-center gap-2 mb-6 border-b border-border pb-2">
        <RefreshCw className="w-5 h-5 text-indigo-400"/>
        <h4 className="font-bold text-foreground text-lg">CODE 工作流循环</h4>
      </div>
      <div className="relative h-80 flex items-center justify-center">
        <div className="absolute w-64 h-64 rounded-full border-2 border-border"></div>
        {steps.map((step, i) => {
          const angle = (i * 90) - 90;
          const rad = angle * (Math.PI / 180);
          const x = 50 + 35 * Math.cos(rad);
          const y = 50 + 35 * Math.sin(rad);
          return (
            <div key={step.id} className="absolute" style={{left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)'}}>
              <div className={`w-20 h-20 rounded-full flex flex-col items-center justify-center transition-all ${activeStep === i ? `${step.bg} scale-125 shadow-[0_0_30px_rgba(99,102,241,0.6)]` : 'bg-accent scale-100'}`}>
                <step.icon className={`w-8 h-8 ${activeStep === i ? 'text-foreground' : step.color}`}/>
                <span className={`text-xs font-bold mt-1 ${activeStep === i ? 'text-foreground' : 'text-muted-foreground'}`}>{step.id}</span>
              </div>
              {activeStep === i && (
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center w-32 animate-in fade-in">
                  <div className="text-sm font-bold text-foreground">{step.name}</div>
                  <div className="text-xs text-muted-foreground">{step.desc}</div>
                  <div className="text-[10px] text-muted-foreground mt-1">→ {step.area}</div>
                </div>
              )}
            </div>
          );
        })}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-black text-foreground">CODE</div>
            <div className="text-xs text-muted-foreground">持续循环</div>
          </div>
        </div>
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <marker id="code-arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#6366f1" />
            </marker>
          </defs>
          <circle cx="50%" cy="50%" r="32%" fill="none" stroke="#6366f1" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" className="animate-spin" style={{animationDuration: '10s'}}/>
        </svg>
      </div>
    </div>
  );
};

// Project Dashboard (项目进度看板)
const ProjectDashboard = () => {
  const [stats] = useState({
    q1: {count: 2, total: 3, label: 'Q1 火力全开', color: 'red'},
    q2: {count: 5, total: 10, label: 'Q2 核心成长', color: 'yellow'},
    q3: {count: 3, total: 8, label: 'Q3 噪音区', color: 'blue'},
    q4: {count: 1, total: 5, label: 'Q4 孵化池', color: 'slate'}
  });

  return (
    <div className="bg-card border border-border rounded-xl p-8 my-8">
      <div className="flex items-center gap-2 mb-6 border-b border-border pb-2">
        <Grid className="w-5 h-5 text-blue-400"/>
        <h4 className="font-bold text-foreground text-lg">项目看板总览</h4>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.entries(stats).map(([key, data]) => (
          <div key={key} className={`bg-${data.color}-900/20 border border-${data.color}-500/50 rounded-lg p-4 hover:scale-105 transition-transform`}>
            <div className="flex items-center justify-between mb-2">
              <Target className={`w-5 h-5 text-${data.color}-400`}/>
              <span className={`text-xs font-mono text-${data.color}-400`}>{data.count}/{data.total}</span>
            </div>
            <div className={`text-2xl font-black text-${data.color}-400 mb-1`}>{data.count}</div>
            <div className="text-xs text-muted-foreground">{data.label}</div>
            <div className="mt-3 h-1.5 bg-muted rounded-full overflow-hidden">
              <div className={`h-full bg-${data.color}-500 rounded-full transition-all`} style={{width: `${(data.count/data.total)*100}%`}}></div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 grid grid-cols-3 gap-4 text-center">
        <div className="bg-accent p-3 rounded">
          <div className="text-2xl font-bold text-foreground">11</div>
          <div className="text-xs text-muted-foreground">总项目数</div>
        </div>
        <div className="bg-green-900/20 border border-green-500/30 p-3 rounded">
          <div className="text-2xl font-bold text-green-400">7</div>
          <div className="text-xs text-muted-foreground">进行中</div>
        </div>
        <div className="bg-accent p-3 rounded">
          <div className="text-2xl font-bold text-muted-foreground">4</div>
          <div className="text-xs text-muted-foreground">待启动</div>
        </div>
      </div>
    </div>
  );
};

// ROA Tracker (注意力回报率追踪器)
const ROATracker = () => {
  const [weekData] = useState([
    {day: '周一', attention: 8, returns: 6, roa: 0.75},
    {day: '周二', attention: 7, returns: 8, roa: 1.14},
    {day: '周三', attention: 9, returns: 7, roa: 0.78},
    {day: '周四', attention: 6, returns: 9, roa: 1.5},
    {day: '周五', attention: 8, returns: 10, roa: 1.25},
    {day: '周六', attention: 5, returns: 7, roa: 1.4},
    {day: '周日', attention: 4, returns: 5, roa: 1.25}
  ]);
  const avgROA = (weekData.reduce((sum, d) => sum + d.roa, 0) / weekData.length).toFixed(2);

  return (
    <div className="bg-card border border-border rounded-xl p-8 my-8">
      <div className="flex items-center justify-between mb-6 border-b border-border pb-2">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-purple-400"/>
          <h4 className="font-bold text-foreground text-lg">本周 ROA 追踪</h4>
        </div>
        <div className={`text-2xl font-black ${avgROA >= 1 ? 'text-green-400' : 'text-red-400'}`}>
          {avgROA}
        </div>
      </div>
      <div className="flex items-end justify-between gap-2 h-48 mb-4">
        {weekData.map((d, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-2">
            <div className="flex-1 w-full flex flex-col justify-end gap-1">
              <div className="bg-green-500/30 rounded-t" style={{height: `${(d.returns/10)*100}%`}} title={`产出: ${d.returns}`}></div>
              <div className="bg-red-500/30 rounded-t" style={{height: `${(d.attention/10)*100}%`}} title={`投入: ${d.attention}`}></div>
            </div>
            <div className="text-[10px] text-muted-foreground">{d.day}</div>
            <div className={`text-xs font-bold ${d.roa >= 1 ? 'text-green-400' : 'text-red-400'}`}>
              {d.roa.toFixed(2)}
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500/30 rounded"></div>
          <span className="text-muted-foreground">注意力投入</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500/30 rounded"></div>
          <span className="text-muted-foreground">价值产出</span>
        </div>
      </div>
    </div>
  );
};

// Knowledge Heatmap (知识库活跃度热力图)
const KnowledgeHeatmap = () => {
  const [areas] = useState([
    {name: '文档阅读', activity: 85, notes: 24, icon: BookOpen},
    {name: '视觉灵感', activity: 60, notes: 18, icon: Eye},
    {name: '影音书签', activity: 45, notes: 12, icon: Play},
    {name: '工具配置', activity: 90, notes: 31, icon: Hammer},
    {name: '兴趣百科', activity: 30, notes: 8, icon: Sparkles},
    {name: '我的生活', activity: 70, notes: 15, icon: User},
    {name: '我的工作', activity: 95, notes: 42, icon: Factory},
    {name: '系统底座', activity: 50, notes: 10, icon: Shield}
  ]);

  const getColor = (activity) => {
    if (activity >= 80) return 'bg-green-500';
    if (activity >= 60) return 'bg-yellow-500';
    if (activity >= 40) return 'bg-orange-500';
    return 'bg-slate-600';
  };

  return (
    <div className="bg-card border border-border rounded-xl p-8 my-8">
      <div className="flex items-center gap-2 mb-6 border-b border-border pb-2">
        <Thermometer className="w-5 h-5 text-orange-400"/>
        <h4 className="font-bold text-foreground text-lg">知识库活跃度</h4>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {areas.map((area, i) => (
          <div key={i} className="bg-accent rounded-lg p-4 hover:scale-105 transition-transform relative overflow-hidden">
            <div className={`absolute inset-0 ${getColor(area.activity)} opacity-10`}></div>
            <div className="relative z-10">
              <area.icon className="w-6 h-6 text-muted-foreground mb-2"/>
              <div className="text-sm font-bold text-foreground mb-1">{area.name}</div>
              <div className="text-xs text-muted-foreground mb-2">{area.notes} 条笔记</div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div className={`h-full ${getColor(area.activity)} transition-all`} style={{width: `${area.activity}%`}}></div>
                </div>
                <span className="text-xs font-mono text-muted-foreground">{area.activity}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-center gap-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded"></div>
          <span className="text-muted-foreground">高活跃 (80%+)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-yellow-500 rounded"></div>
          <span className="text-muted-foreground">中活跃 (60-79%)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-orange-500 rounded"></div>
          <span className="text-muted-foreground">低活跃 (40-59%)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-slate-600 rounded"></div>
          <span className="text-muted-foreground">待激活 (&lt;40%)</span>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 3. 页面渲染器 (Renderer) - 完整融合版
// ============================================================================
const SectionRenderer = ({ activeSection }) => {
  
  // --------------------------------------------------------------------------
  // PART 0: 原始渲染逻辑 (Original) - 100% 保留
  // --------------------------------------------------------------------------

  // --- Intro & Core Goals ---
  if (activeSection === 'core_goal') return (
    <div className="animate-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto py-12 px-8">
      <div className="mb-12 border-b border-border pb-8">
        <h1 className="text-4xl font-black text-foreground mb-6 leading-tight">导论：系统重构与核心目标</h1>
        <p className="text-xl text-foreground leading-relaxed">
          V16.0 的核心变革在于实现了<strong>“知行合一”</strong>。我们将 CODE 的四个步骤，精准地绑定到了 PARA 的四个板块中，彻底解决了“动作”与“容器”的割裂。
        </p>
      </div>

      <PARAFlowDiagram />
      <CODECycleAnimation />
      <ROATracker />

      <div className="space-y-12">
        <div className="bg-accent p-6 rounded-xl border border-border">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2"><Activity className="w-5 h-5 text-purple-400"/> 1. 最大化 ROA (注意力回报率)</h3>
          <div className="prose prose-invert prose-sm text-muted-foreground mb-6">
            <p>我们必须像投资资金 (ROI) 那样思考我们的注意力。构建系统的目的不是为了当一个完美的图书管理员，而是为了让投入的每一分注意力都能产生回报。</p>
          </div>
          <ROALever />
        </div>

        <div className="flex flex-col gap-12">
          <div className="bg-accent p-8 rounded-xl border border-border hover:border-blue-500/50 transition-colors">
            <h4 className="text-blue-400 font-bold mb-4 flex items-center gap-2 text-xl"><GitBranch className="w-6 h-6"/> 2. JIT (按需及时)</h4>
            <div className="mb-6"><JITVisualizer /></div>
            <p className="text-sm text-muted-foreground leading-relaxed bg-card/50 p-4 rounded border border-border/50">
              避免过早优化。只在需要时推进。创作过程是在 <strong>Divergence (发散/探索)</strong> 与 <strong>Convergence (收敛/交付)</strong> 之间来回摆动。
            </p>
          </div>

          <div className="bg-accent p-8 rounded-xl border border-border hover:border-yellow-500/50 transition-colors">
            <h4 className="text-yellow-400 font-bold mb-4 flex items-center gap-2 text-xl"><Zap className="w-6 h-6"/> 3. 心流运作 (Flow)</h4>
            <div className="mb-6"><FlowVisualizer /></div>
            <p className="text-sm text-muted-foreground leading-relaxed bg-card/50 p-4 rounded border border-border/50">
              利用神经生物学机制，通过<strong>"占位法 (Placeholder)"</strong>降低阻力，维持精力充沛的专注。
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  // --- C - Capture ---
  if (activeSection === 'code_c') return (
    <div className="animate-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto py-12 px-8">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-yellow-600/20 rounded-xl border border-yellow-500/50"><Anchor className="w-8 h-8 text-yellow-500" /></div>
        <div><h2 className="text-3xl font-bold text-foreground">C - Capture (捕捉)</h2><p className="text-yellow-600 dark:text-yellow-200/60 font-mono text-sm mt-1">从"消费"转向"长期投入"</p></div>
      </div>
      <ParadigmShiftVisual />
      <div className="prose prose-invert prose-lg max-w-none text-foreground mb-12">
        <h3 className="text-foreground">捕捉标准：共鸣 (Resonate)</h3>
        <p>
          只收集那些让你<strong>"心头一颤"</strong>的内容。不要为了收集而收集。专注于当下的共鸣，先别担心它与大局如何拼接。这些共鸣点最终会形成你独特的“个人信息地貌”。
        </p>
        <CapturePipeline />
        <h3 className="text-foreground mt-12">最高过滤器：12 个核心难题</h3>
        <p>
          这是理查德·费曼的学习法。思考你最关心的 12 个开放式大问题。每当看到新信息，强制问自己：<strong>“它能帮我解决这 12 个难题中的哪一个？”</strong>
        </p>
      </div>
      <CaptureGate />
    </div>
  );

  // --- O - Organize ---
  if (activeSection === 'code_o') return (
    <div className="animate-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto py-12 px-8">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-green-600/20 rounded-xl border border-green-500/50"><ChefHat className="w-8 h-8 text-green-500" /></div>
        <div><h2 className="text-3xl font-bold text-foreground">O - Organize (组织)</h2><p className="text-green-600 dark:text-green-200/60 font-mono text-sm mt-1">预先就位 (Mise-en-place)</p></div>
      </div>
      <div className="bg-green-900/20 border-l-4 border-green-500 p-6 mb-8 rounded-r-xl">
        <h3 className="text-lg font-bold text-green-400 mb-2">组织原则</h3>
        <p className="text-green-600 dark:text-green-100/80 italic">"为了发现新思路而组织，解决'暂不可执行的信息'与'可执行的任务'之间的冲突。"</p>
        <OrganizePrincipleVisual />
      </div>
      <div className="mb-12">
         <h3 className="text-lg font-bold text-foreground mb-4">PARA 分拣流水线 (The Sorter)</h3>
         <PARASorterVisual />
      </div>
      <MiseEnPlaceVisual />
      <div className="prose prose-invert prose-lg max-w-none text-foreground mb-8 mt-12">
        <h3 className="text-foreground">跨平台镜像 (Mirroring)</h3>
        <p>
          为了减少摩擦，请在你的文件管理器、笔记软件、待办清单中，<strong>严格复制同一份 PARA 目录结构</strong>。
          这能减少在不同任务/环境间频繁切换注意力的次数与成本。
        </p>
        <div className="flex gap-4 mt-6 not-prose">
          {['Finder/Explorer', 'Notion/Obsidian', 'Todoist/Things'].map(app => (
            <div key={app} className="bg-accent px-4 py-3 rounded-lg border border-border text-xs text-muted-foreground font-mono flex items-center gap-2"><Folder className="w-4 h-4 text-green-500" /> {app}</div>
          ))}
        </div>
      </div>
    </div>
  );

  // --- D - Distill ---
  if (activeSection === 'code_d') return (
    <div className="animate-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto py-12 px-8">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-yellow-200/20 rounded-xl border border-yellow-200/50"><Minimize2 className="w-8 h-8 text-yellow-600 dark:text-yellow-200" /></div>
        <div><h2 className="text-3xl font-bold text-foreground">D - Distill (提炼)</h2><p className="text-yellow-600 dark:text-yellow-100/60 font-mono text-sm mt-1">CODE 引擎第三步</p></div>
      </div>
      <div className="prose prose-invert prose-lg max-w-none text-foreground mb-8">
        <h3 className="text-foreground">核心心法：平衡点</h3>
        <p>我们常误以为笔记做得越详细越好，但在信息过载时代，这种观念是致命的。我们需要在 <strong>Discoverability (可发现性)</strong> 与 <strong>Understanding (理解度)</strong> 之间取得平衡。</p>
      </div>
      <BalanceChartVisual />
      <div className="prose prose-invert prose-lg max-w-none text-foreground mt-12">
        <h3 className="text-foreground">操作：见机而作 (Opportunistically)</h3>
        <p>不是每一条笔记都会通过所有层级，而在你<strong>使用</strong>笔记、为了完成项目而复查时，顺手进行压缩。这保证了我们只在有价值的信息上花费注意力。</p>
      </div>
      <DistillHeatmap />
    </div>
  );

  // --- E - Express ---
  if (activeSection === 'code_e') return (
    <div className="animate-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto py-12 px-8">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-blue-600/20 rounded-xl border border-blue-500/50"><PenTool className="w-8 h-8 text-blue-400" /></div>
        <div><h2 className="text-3xl font-bold text-foreground">E - Express (表达)</h2><p className="text-blue-600 dark:text-blue-200/60 font-mono text-sm mt-1">中间包与交互模式</p></div>
      </div>
      <ExpressDashboard />
    </div>
  );

  // --------------------------------------------------------------------------
  // PART 1: Project (全新百科内容 - 100% 还原文档)
  // --------------------------------------------------------------------------
  if (activeSection === 'proj_def') return (
    <div className="max-w-4xl mx-auto py-12 px-8 animate-in slide-in-from-bottom-4">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-blue-600/20 rounded-xl border border-blue-500/50"><Target className="w-8 h-8 text-blue-400" /></div>
        <div><h2 className="text-3xl font-bold text-foreground">1. Project (项目)</h2><p className="text-blue-600 dark:text-blue-200/60 font-mono text-sm mt-1">Express 的主战场</p></div>
      </div>

      <ProjectDashboard />

      <div className="bg-accent p-6 rounded-xl border border-border mb-8">
         <blockquote className="border-l-4 border-blue-500 pl-4 text-foreground italic mb-4">
           <p>定义：具有明确目标 + 截止日期的一系列任务。</p>
           <p>CODE 绑定：这里是 E - Express (表达) 的核心区域。项目的唯一目的就是产出。</p>
           <p>核心属性：聚焦，受时间约束。这是最具可行动性 (Actionable) 的板块。</p>
         </blockquote>
      </div>

      <h3 className="text-xl font-bold text-foreground mb-4">1.1 裁判机制：艾森豪威尔盒子--物理文件夹矩阵(优先级)</h3>
      <p className="text-muted-foreground mb-4">使用物理位置代替标签，降低维护成本。</p>
      <EisenhowerMatrix />
      
      <div className="prose prose-invert text-muted-foreground text-sm mt-6">
         <ul className="space-y-4">
           <li>
             <strong>🔴 11-重要且紧急 (Q1 火力全开区)</strong>
             <br/>定义：火烧眉毛的事。今天的"青蛙"。
             <br/>硬性限制：<strong>绝对不超过 3 个</strong>。如果你想把第 4 个拖进来，必须先移走一个。
           </li>
           <li>
             <strong>🟡 12-重要不紧急 (Q2 核心成长区)</strong>
             <br/>定义：黄金时间区。第二大脑的核心成长区。
             <br/>动作：放入此文件夹，并必须设置<strong>截止日期</strong>。这是你主动构建未来的地方。
           </li>
           <li>
             <strong>🔵 13-紧急不重要 (Q3 噪音区)</strong>
             <br/>定义：别人的急事，或者琐碎的行政流程。
             <br/>策略：速战速决，或者委托 AI 处理。不要让它占满你的看板。
           </li>
           <li>
             <strong>⚪️ 14-不重要不紧急 (Q4 孵化与冷冻池)</strong>
             <br/>定义：垃圾/缓冲池。想玩的游戏、一时兴起的点子。
             <br/>策略：放入此文件夹"冷冻"。如果一个月都没打开过，直接删除或归档。
           </li>
         </ul>
      </div>
    </div>
  );

  if (activeSection === 'proj_plan') return (
    <div className="max-w-4xl mx-auto py-12 px-8 animate-in slide-in-from-bottom-4">
      <div className="flex items-center gap-2 mb-6 border-b border-border pb-2"><MapIcon className="w-6 h-6 text-blue-400"/><h2 className="text-2xl font-bold text-foreground">1.2 执行黑客：Express (表达) 的全流程</h2></div>
      
      <p className="text-foreground mb-8">这是如何把项目做完的"微观操作说明书"。</p>

      <section className="mb-12">
         <h3 className="text-lg font-bold text-foreground mb-2">阶段一：规划 (Planning) —— 战略与循环</h3>
         <div className="prose prose-invert text-muted-foreground text-sm">
           <p><strong>战略三部曲</strong>：在动手前，先明确以下三点：</p>
           <StrategyTriad />
           <ul className="list-disc pl-5 space-y-2 mt-4">
             <li><strong>诊断 (Diagnosis)</strong>：问题到底是什么？</li>
             <li><strong>指导方针 (Guiding Policy)</strong>：我们用哪种路径去寻找解决方案？</li>
             <li><strong>行动计划 (Action Plan)</strong>：我们将如何实施那个解法？</li>
           </ul>
           <p className="mt-4"><strong>定义期望成果</strong>：用<strong>现在时态</strong>描述成功后的样子，并标注具体日期（例如：“11月15日，我提交了最终报告”）。</p>
         </div>
      </section>

      <section className="mb-12">
         <h3 className="text-lg font-bold text-foreground mb-2">与领域的"软连接"</h3>
         <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-2">
           <li><strong>不要过度关联</strong>：虽然项目通常源自某个领域（如"减肥项目"源自"健康领域"），但在操作层面**不需要强制建立链接**。</li>
           <li><strong>专注当下</strong>：项目文件夹是"车间"，领域文件夹是"仓库"。做项目时就在车间里搞，不要分心去管仓库。</li>
         </ul>
      </section>

      <section className="mb-12">
         <h3 className="text-lg font-bold text-foreground mb-2">元计划 (Metaplan)</h3>
         <p className="text-muted-foreground text-sm">建立笔记，写下 <strong>Who (谁)、What (做啥)、When (何时)、Why (动机)</strong>。</p>
      </section>

      <section>
         <h3 className="text-lg font-bold text-foreground mb-4">JIT 创作循环 (The 12 Steps)</h3>
         <p className="text-muted-foreground text-sm mb-4">不要试图跳步，遵循这个循环：1.信息识别 → 2.捕获 → 3.组织 → 4.解读 → 5.校验 → 6.创作 → 7.分享 → 8.保存 → 9.总结 → 10.回顾 → 11.重新评估 → 12.再利用。</p>
         <GTD12Steps />
      </section>
    </div>
  );

  if (activeSection === 'proj_start') return (
    <div className="max-w-4xl mx-auto py-12 px-8 animate-in slide-in-from-bottom-4">
      <div className="flex items-center gap-2 mb-6 border-b border-border pb-2"><Rocket className="w-6 h-6 text-purple-400"/><h2 className="text-2xl font-bold text-foreground">1.2 执行黑客：启动阶段</h2></div>

      <section className="mb-12">
         <h3 className="text-lg font-bold text-foreground mb-4">阶段二：启动 (Starting) —— 想法群岛</h3>
         <div className="prose prose-invert text-muted-foreground text-sm mb-6">
           <p><strong>解法：想法群岛 (Archipelago of Ideas)</strong></p>
           <ol className="list-decimal pl-5 space-y-2">
             <li><strong>标题先行</strong>：先把主标题、小标题列出来，搭建骨架。</li>
             <li><strong>拖入素材</strong>：从 <code>Resource</code> 中把相关的高亮笔记、点子全拖进来，像**离散的岛屿**一样摆在文档里。</li>
             <li><strong>架桥</strong>：你的工作不再是凭空创作，而是**在岛屿之间建立连接**，理顺逻辑。这大大降低了认知阻力。</li>
           </ol>
         </div>
         <ArchipelagoVisual />
      </section>

      <section>
         <h3 className="text-lg font-bold text-foreground mb-4">降维拆分</h3>
         <p className="text-muted-foreground text-sm mb-4">把大雄心的目标拆解为"小型项目"和"垫脚石"。</p>
         <p className="text-muted-foreground text-sm mb-4">SMART原则: 原子任务，直观跟踪进度。</p>
         <SmartGoalVisual />
      </section>
    </div>
  );

  if (activeSection === 'proj_exec') return (
    <div className="max-w-4xl mx-auto py-12 px-8 animate-in slide-in-from-bottom-4">
      <div className="flex items-center gap-2 mb-6 border-b border-border pb-2"><Zap className="w-6 h-6 text-yellow-400"/><h2 className="text-2xl font-bold text-foreground">1.2 执行黑客：执行阶段</h2></div>

      <section className="mb-12">
         <h3 className="text-lg font-bold text-foreground mb-4">阶段三：执行 (Doing) —— 中间包与心流</h3>
         <p className="text-muted-foreground text-sm mb-4"><strong>跨越阻力</strong>：当我们坐下工作时，必须先跨过环境（摆好工位）、心智（回顾主题）、情绪（直面自我怀疑）的阻力。</p>
         
         <div className="bg-card p-4 rounded border border-border mb-6">
            <h4 className="text-xs font-bold text-purple-400 mb-2">生化机制利用 (为何有效?)</h4>
            <BioMechanisms />
         </div>
      </section>

      <section className="mb-12">
         <h3 className="text-lg font-bold text-foreground mb-4">操作：占位法 / 中间包 (Packet Switching)</h3>
         <div className="prose prose-invert text-muted-foreground text-sm mb-6">
           <p>把大任务拆解为一系列**微小的单元（小包）**。</p>
           <ul className="list-disc pl-5">
             <li>❌ 错误示范："写完论文"</li>
             <li>✅ 正确示范："找 3 个参考文献"、"写好引言段"、"画一张架构图"</li>
           </ul>
           <p className="mt-2">价值：小包更容易开始（降低启动能耗）。中间包可以在未来被不同项目复用（模块化）。</p>
         </div>
         <PacketSwitchingVisual />
      </section>

      <section>
         <h3 className="text-lg font-bold text-foreground mb-4">交互模式 (INTERACT)</h3>
         <p className="text-muted-foreground text-sm">不要干坐着写，尝试以下方式：</p>
         <ul className="list-disc pl-5 text-muted-foreground text-sm">
            <li><strong>DRAW (画)</strong>：图像化笔记、绘制示意图。</li>
            <li><strong>PERFORM (演示)</strong>：在分享会演讲，或录制视频。</li>
            <li><strong>SELL (传播)</strong>：教会他人，进行价值交换。</li>
         </ul>
      </section>
    </div>
  );

  if (activeSection === 'proj_close') return (
    <div className="max-w-4xl mx-auto py-12 px-8 animate-in slide-in-from-bottom-4">
      <div className="flex items-center gap-2 mb-6 border-b border-border pb-2"><Pause className="w-6 h-6 text-green-400"/><h2 className="text-2xl font-bold text-foreground">1.3 暂停与结项</h2></div>
      
      <section className="mb-12">
        <h3 className="text-lg font-bold text-foreground mb-4">阶段四：暂停 (Pausing) —— 海明威桥</h3>
        <p className="text-muted-foreground text-sm mb-4">结束时停在"知道下一句写什么"的地方。写下 **"状态小结"** (Status Note)。</p>
        <div className="bg-accent p-4 rounded border border-border text-sm text-foreground mb-6">
           <strong>状态小结内容：</strong>
           <ul className="list-disc pl-5 mt-2 space-y-1">
             <li>当前状态：已采取了哪些行动？</li>
             <li>社会情境：谁推荐的？谁在协作？</li>
             <li>内部语境：你对此有哪些想法、感受或顾虑？</li>
             <li>下一步计划：明天第一步做什么？</li>
           </ul>
           <p className="mt-2 text-green-400 italic">效果：第二天这一句话就是你的启动按钮，零摩擦接续心流。</p>
        </div>
        <HemingwayBridgeVisualizer />
      </section>

      <section>
        <h3 className="text-lg font-bold text-foreground mb-4">1.3 结项与复盘 (Asset Transfer)</h3>
        <div className="prose prose-invert text-muted-foreground text-sm mb-6">
          <p>每周回顾：重新排列优先级，检查"期望成果"是否达成。即使过期未完成，截止日期也是一个重要的 Check-in 节点。</p>
          <ReviewCycleVisual />
          <p><strong>核心动作：资产入库</strong></p>
          <ul className="list-disc pl-5">
            <li>项目结束时，是 Project 与 Area 发生关系的唯一时刻。</li>
            <li>操作：将项目中产出的**高价值中间包、SOP、复盘总结**（即"你创造的资产"），移动到对应的 <strong>Area</strong> 文件夹中。</li>
            <li>AI 指令：<em>"提取本项目产出的'SOP'和'经验教训'，归档到 Area 库。"</em></li>
          </ul>
        </div>
        <AssetTransferVisual />
      </section>
    </div>
  );

  // --------------------------------------------------------------------------
  // PART 2: Area (全新百科内容 - 100% 还原文档)
  // --------------------------------------------------------------------------
  if (activeSection === 'area_def') return (
    <div className="max-w-4xl mx-auto py-12 px-8 animate-in slide-in-from-bottom-4">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-green-600/20 rounded-xl border border-green-500/50"><Layers className="w-8 h-8 text-green-400" /></div>
        <div><h2 className="text-3xl font-bold text-foreground">2. Area (领域)</h2><p className="text-green-600 dark:text-green-200/60 font-mono text-sm mt-1">Organize 的宪法</p></div>
      </div>

      <div className="bg-accent p-6 rounded-xl border border-border mb-8">
         <blockquote className="border-l-4 border-green-500 pl-4 text-foreground italic">
           定义：长期负责的标准。没有截止日期。<br/>
           CODE 绑定：这里是 O - Organize (组织) 的核心，特别是标准的维护。<br/>
           核心位置：它是整个系统的"守门员"和"宪法"。
         </blockquote>
      </div>

      <h3 className="text-lg font-bold text-foreground mb-4">2.1 极简目录结构</h3>
      <AreaCatalogTree />
      
      <div className="mt-8 bg-card p-4 rounded border border-border text-sm text-muted-foreground">
        <p className="mb-2"><strong>注：</strong> Area 下的子文件夹名称，完全可以和 Resource 重复。</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><code>Area/健康</code> 存放体检单 (我的)</li>
          <li><code>Resource/健康</code> 存放减肥文章 (参考)</li>
        </ul>
      </div>
    </div>
  );

  if (activeSection === 'area_mech') return (
    <div className="max-w-4xl mx-auto py-12 px-8 animate-in slide-in-from-bottom-4">
      <h2 className="text-2xl font-bold text-foreground mb-8">维护机制</h2>
      
      <section className="mb-12">
        <h3 className="text-lg font-bold text-foreground mb-4">2.2 核心机制：12 个难题 (The Gatekeeper)</h3>
        <p className="text-muted-foreground text-sm mb-6">定义：列出你人生长期关注的 12 个开放式大问题。<br/>作用：它是 Resource (资源) 的守门员。任何进入系统的信息，必须能回应这 12 个问题之一。</p>
        <GatekeeperShield />
      </section>

      <section className="mb-12">
        <h3 className="text-lg font-bold text-foreground mb-4">2.3 维护心法：慢火烹饪 (Slow Burn)</h3>
        <div className="prose prose-invert text-muted-foreground text-sm mb-6">
           <p><strong>Organize 心法</strong>：领域不需要像项目那样冲刺。它是**炖汤**，允许想法随时间慢慢孵化。</p>
           <p><strong>内容属性：我写的</strong></p>
           <ul className="list-disc pl-5">
             <li>这里存放的是**为了维持我自己的标准**而产生的文件。</li>
             <li>典型内容：我的体检报告、我的理财计划、我的工作复盘、我的生病日记、我制定的 SOP、我的合同扫描件。</li>
           </ul>
           <p><strong>所有权判据</strong>：**你写的**（资产）归 Area；**别人写的**（素材）归 Resource。</p>
        </div>
        <SlowBurnVisual />
      </section>

      <section>
        <h3 className="text-lg font-bold text-foreground mb-4">2.4 维护动作：间隔重复</h3>
        <p className="text-muted-foreground text-sm mb-6">类抖音/Anki 复习系统。利用 Spaced Repetition (间隔重复) 插件。<br/>判定标准：是职业考证/必须记住的？➝ Area（高频复习）。是有趣冷知识/仅作参考？➝ Resource（随缘查阅）。</p>
        <ForgettingCurve />
      </section>
    </div>
  );

  // --------------------------------------------------------------------------
  // PART 3: Resource (全新百科内容 - 100% 还原文档)
  // --------------------------------------------------------------------------
  if (activeSection === 'res_def') return (
    <div className="max-w-4xl mx-auto py-12 px-8 animate-in slide-in-from-bottom-4">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-yellow-600/20 rounded-xl border border-yellow-500/50"><Database className="w-8 h-8 text-yellow-400" /></div>
        <div><h2 className="text-3xl font-bold text-foreground">3. Resource (资源)</h2><p className="text-yellow-600 dark:text-yellow-200/60 font-mono text-sm mt-1">Capture & Distill 的工厂</p></div>
      </div>

      <KnowledgeHeatmap />

      <div className="bg-accent p-6 rounded-xl border border-border mb-8">
         <blockquote className="border-l-4 border-yellow-500 pl-4 text-foreground italic">
           定义：感兴趣的主题。<br/>
           CODE 绑定：这里同时发生 C - Capture (捕捉) 和 D - Distill (提炼)。这是素材加工厂。
         </blockquote>
      </div>

      <h3 className="text-lg font-bold text-foreground mb-4">笔记的核心特质</h3>
      <p className="text-muted-foreground text-sm mb-4"><strong>核心概念</strong>：笔记不需要完美，只要对自己有用。</p>
      <NoteCharacteristicsCard />

      <h3 className="text-lg font-bold text-foreground mt-8 mb-4">3.1 具象化目录 (V8.0)</h3>
      <ResourceCatalogGrid />
    </div>
  );

  if (activeSection === 'res_flow') return (
    <div className="max-w-4xl mx-auto py-12 px-8 animate-in slide-in-from-bottom-4">
      <h2 className="text-2xl font-bold text-foreground mb-8">捕捉与提炼流</h2>

      <section className="mb-12">
        <h3 className="text-lg font-bold text-foreground mb-4">3.2 捕捉 (Capture) —— 共鸣与过滤</h3>
        <div className="prose prose-invert text-muted-foreground text-sm mb-6">
           <p><strong>操作流程：</strong></p>
           <ul className="list-disc pl-5">
             <li>看到一条新信息时，先与自己的「Area / 12 个难题」进行对照判断。</li>
             <li>如果信息属于 **外部来源（别人写的）**，主要用于支持你的兴趣或项目。</li>
             <li>阅读时使用 **火花捕捉（Spark Capture）** 的方式：只标记那些让你产生 **"心头一颤（Resonate）"** 的句子或片段。</li>
             <li>若内容确实触发共鸣，将其放入 <strong>Inbox</strong>。</li>
           </ul>
           <p className="mt-2"><strong>作用</strong>：这是你的**私人图书馆**。既然是图书馆，那里面的书就应该是通用的，谁借走都能看。</p>
           <p className="mt-2"><strong>交互模式 (INTERACT)</strong>：</p>
           <ul className="list-disc pl-5">
             <li><strong>SEE (看)</strong>：放到不同情境中看；听取他人意见。</li>
             <li><strong>WRITE (写)</strong>：做笔记，写摘要。</li>
             <li><strong>PRODUCE (产出)</strong>：进行浓缩、解读、批评、转化。</li>
           </ul>
        </div>
        <SparkResonance />
      </section>

      <section className="mb-12">
         <h3 className="text-lg font-bold text-foreground mb-4">3.3 提炼 (Distill) —— 5 层渐进式摘要</h3>
         <p className="text-muted-foreground text-sm mb-4">原则：Compression (压缩)。让笔记更小、更简。不是每条笔记都要做全套，**顺手做 (Opportunistically)**。</p>
         <DistillFunnel />
         <div className="bg-card p-4 rounded border border-border text-sm space-y-3 text-muted-foreground">
            <div><strong className="text-foreground">Layer 1 (0% 压缩) - 原始笔记：</strong>全文剪藏。</div>
            <div><strong className="text-foreground">Layer 2 (25% 压缩) - 加粗：</strong>快速扫读，加粗重点段落。</div>
            <div><strong className="text-yellow-400">Layer 3 (20% 压缩) - 高亮 (Highlight)：</strong>在加粗中，高亮核心金句。专注于共鸣，寻找反直觉内容。</div>
            <div><strong className="text-foreground">Layer 4 (5% 压缩) - 执行摘要 (Summary)：</strong>在笔记最顶部，用自己的话写 3-5 句总结。</div>
            <div><strong className="text-blue-400">Layer 5 (1% 压缩) - 原创重混 (Remix)：</strong>转化为推文/文章 (中间包)。</div>
         </div>
      </section>

      <section>
        <h3 className="text-lg font-bold text-foreground mb-4">3.4 语境切换 (Context Switch) 与同名策略</h3>
        <div className="prose prose-invert text-muted-foreground text-sm mb-6">
           <p><strong>同名文件夹策略</strong>：不要害怕在 Area 和 Resource 建立同名文件夹。</p>
           <ul className="list-disc pl-5">
             <li><code>Resource/摄影</code>：存放大师的摄影集、布光教程文章。（别人教你的）</li>
             <li><code>Area/摄影</code>：存放你的接单报价表、你的拍摄档期安排、你总结的后期预设参数。（你自己的业务）</li>
           </ul>
           <p className="mt-4"><strong>操作</strong>：如果素材理不顺，尝试 <strong>Change the Form (改变形式)</strong>，按以下 8 个维度重新整理：</p>
           <ul className="list-disc pl-5 grid grid-cols-2 gap-1 mt-2">
             <li>Chronological (时间) / Sequentially (顺序)</li>
             <li>Priority (优先级) / Objective (目标)</li>
             <li>Size (大小) / Theme (主题)</li>
             <li>Q&A (问答) / Shape (形状)</li>
           </ul>
           <p className="mt-2"><strong>色彩评论</strong>：用不同颜色添加你的提问。<br/><strong>句子黑客</strong>：直接高亮并连线。</p>
        </div>
        <ContextSwitchVisual />
      </section>
    </div>
  );

  // --------------------------------------------------------------------------
  // PART 4: Archive (全新百科内容 - 100% 还原文档)
  // --------------------------------------------------------------------------
  if (activeSection === 'arch_all') return (
    <div className="max-w-4xl mx-auto py-12 px-8 animate-in slide-in-from-bottom-4">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-slate-600/20 rounded-xl border border-slate-500/50"><Archive className="w-8 h-8 text-muted-foreground" /></div>
        <div><h2 className="text-3xl font-bold text-foreground">4. Archive (归档)</h2><p className="text-muted-foreground/60 font-mono text-sm mt-1">Organize 的终局</p></div>
      </div>

      <div className="bg-accent p-6 rounded-xl border border-border mb-8">
         <blockquote className="border-l-4 border-slate-500 pl-4 text-foreground italic">
           定义：不再活跃的内容。<br/>
           CODE 绑定：这是 O - Organize (组织) 的最后一步 —— Reset (重置)。<br/>
           核心逻辑：按年份切片，腾空大脑带宽，同时确保未来能快速回溯。
         </blockquote>
      </div>

      <h3 className="text-lg font-bold text-foreground mb-4">4.1 目录结构与切片</h3>
      <div className="prose prose-invert text-muted-foreground text-sm mb-6">
         <ul className="list-disc pl-5">
           <li>一级目录：<code>2024年</code>、<code>2025年</code>...</li>
           <li>二级目录：在年份文件夹内，**严格复刻**上层的 P.A.R 结构 (Projects / Areas / Resources)。</li>
         </ul>
      </div>
      <ArchiveVaultVisual />

      <h3 className="text-lg font-bold text-foreground mt-12 mb-4">4.2 归档心法：重置与清洁</h3>
      <div className="prose prose-invert text-muted-foreground text-sm mb-6">
         <p><strong>每年大扫除</strong>：把一切清空、从头开始并没有什么不对！把所有当前内容保存到 Archive 中。</p>
         <p><strong>归档动作</strong>：</p>
         <ul className="list-disc pl-5">
           <li><strong>已完成 (Completed)</strong>：确认交付后，看板状态改为 DONE，拖入归档。</li>
           <li><strong>已放弃 (Abandoned)</strong>：**必须留痕**。在文件夹名或笔记开头写下 <code>[已放弃] 原因：...</code>，然后拖入归档。</li>
         </ul>
         <p className="mt-2"><strong>价值</strong>：1. 心理减负（全新开始）；2. 快速回溯（路径清晰）。</p>
      </div>
      <GraveyardVisual />

      <div className="mt-12 p-6 bg-card border border-border rounded-xl">
         <h3 className="text-lg font-bold text-foreground mb-4">🌟 总结：系统运作流转图 (V16.0)</h3>
         <ol className="list-decimal pl-5 text-muted-foreground text-sm space-y-2">
           <li><strong>Resource (C&D)</strong>：外部信息 → 经过 Area (12难题) 过滤 → Capture (捕捉火花) → Distill (5层提炼)。</li>
           <li><strong>Project (E)</strong>：建立元计划 → 从 Resource 抓取素材 → 搭建想法群岛 → 拆解为中间包 → Express (产出)。</li>
           <li><strong>Area (O)</strong>：将产出的通用 SOP 沉淀为资产 → Slow Burn (慢火维护)。</li>
           <li><strong>Archive (O)</strong>：项目结束 → Reset (重置归档)。</li>
         </ol>
      </div>

      <div className="mt-8 p-6 bg-green-900/10 border border-green-900/30 rounded-xl">
         <h3 className="text-lg font-bold text-green-400 mb-4">🚀 附：V16.1 落地自检清单</h3>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted-foreground">
            <div>
               <strong className="text-foreground block mb-2">1. 是谁写的？</strong>
               <ul className="list-disc pl-5">
                  <li>我写的 → <strong>Area</strong></li>
                  <li>别人写的 → <strong>Resource</strong></li>
               </ul>
            </div>
            <div>
               <strong className="text-foreground block mb-2">2. 能直接发给别人学习吗？</strong>
               <ul className="list-disc pl-5">
                  <li>能 → <strong>Resource</strong></li>
                  <li>不能（太乱/太隐私） → <strong>Area</strong></li>
               </ul>
            </div>
         </div>
      </div>

      <div className="mt-8 p-6 bg-card border border-border rounded-xl font-mono text-xs text-muted-foreground">
         <h3 className="text-lg font-bold text-foreground font-sans mb-4">🚀 附：一键落地清单</h3>
         <pre className="whitespace-pre-wrap">
{`10-项目/11-重要且紧急
10-项目/12-重要不紧急
10-项目/13-紧急不重要
10-项目/14-不重要不紧急

20-领域/21-我的生活
20-领域/22-我的工作
20-领域/23-系统底座 (含 12个核心难题)

30-资源/00-收件箱
30-资源/31-文档与阅读
30-资源/32-视觉与灵感
30-资源/33-影音与书签
30-资源/34-工具与配置
30-资源/35-兴趣百科

40-归档/2025年`}
         </pre>
      </div>
    </div>
  );

  return <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
      <LayoutTemplate className="w-16 h-16 mb-4 opacity-20" />
      <h3 className="text-xl font-bold text-muted-foreground">Select a Module</h3>
    </div>;
};

// ============================================================================
// 4. 主程序框架
// ============================================================================
function SecondBrainV16_Ultimate_Demo() {
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('core_goal');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-background text-foreground font-sans selection:bg-indigo-500/30 overflow-hidden">

      {/* 侧边栏 */}
      <nav className={`
        fixed lg:static inset-y-0 left-0 z-50 w-72
        bg-card border-r border-border flex flex-col
        transform transition-transform duration-300 lg:transform-none
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-lg">
                <Brain className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <span className="text-foreground font-bold text-lg block leading-none">Second Brain</span>
                <span className="text-[10px] text-muted font-mono tracking-widest">V16.0 FULL</span>
              </div>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 hover:bg-accent rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {DOC_STRUCTURE.map((section) => (
            <div key={section.id} className="mb-4">
              <div className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm font-bold mb-1 ${section.color ? section.color : 'text-muted'}`}>
                <section.icon className={`w-4 h-4`} />
                <span>{section.title}</span>
              </div>
              <div className="ml-4 pl-4 border-l border-border space-y-1 mt-1">
                {section.subsections.map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => {
                      setActiveTab(sub.id);
                      setSidebarOpen(false);
                    }}
                    className={`text-[11px] w-full text-left py-2 px-3 rounded transition-colors truncate flex items-center gap-2 ${activeTab === sub.id ? 'bg-primary text-primary-foreground font-medium shadow-sm' : 'text-muted hover:text-foreground hover:bg-accent'}`}
                  >
                    {sub.title}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>

      {/* 主内容区 */}
      <main className="flex-1 flex flex-col relative">
        <header className="h-14 border-b border-border bg-card/90 backdrop-blur flex items-center justify-between px-8 shrink-0 z-10">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 hover:bg-accent rounded-lg"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 text-xs text-muted font-mono">
              <span>DOCS</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground uppercase">{activeTab}</span>
            </div>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-accent rounded-lg transition-colors"
            aria-label="切换主题"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </header>
        <div className="flex-1 overflow-y-auto bg-background relative scroll-smooth">
          <SectionRenderer activeSection={activeTab} />
        </div>
      </main>

      {/* 移动端遮罩 */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <SecondBrainV16_Ultimate_Demo />
    </ThemeProvider>
  );
}