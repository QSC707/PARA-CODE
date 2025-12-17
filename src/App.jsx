import { useState, useEffect } from 'react';
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
  HeartHandshake, Utensils, AlertCircle, Inbox, Factory, Sparkles
} from 'lucide-react';

// ============================================================================
// 1. 数据结构：严格映射文档目录 (包含 Phase 1 & 2)
// ============================================================================

const DOC_STRUCTURE = [
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
];

// ============================================================================
// 2. 核心可视化组件 (Visualizers - Phase 1 & 2 Integrated)
// ============================================================================

// --- 2.1 [C] 思维范式转移 (Paradigm Shift) ---
const ParadigmShiftVisual = () => (
  <div className="w-full my-10 relative overflow-hidden rounded-2xl border border-indigo-500/30 bg-[#0B1120] shadow-2xl">
    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 opacity-50"></div>
    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 h-full">
       <div className="p-8 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-slate-700 bg-slate-900/80">
          <div className="absolute top-4 left-4 text-[10px] text-slate-500 font-bold uppercase tracking-widest border border-slate-600 px-2 py-0.5 rounded">OLD WAY</div>
          <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-6 grayscale opacity-60">
            <Zap className="w-8 h-8 text-slate-400" />
          </div>
          <h4 className="text-xl font-bold text-slate-400 mb-2">消费模式 (Consumer)</h4>
          <p className="text-xs text-slate-500 mb-4 max-w-[200px]">追逐转瞬即逝的灵感片刻<br/>(Fleeting Moments)</p>
       </div>
       <div className="p-8 flex flex-col items-center justify-center text-center bg-indigo-900/20 relative overflow-hidden">
          <div className="absolute top-4 right-4 text-[10px] text-indigo-400 font-bold uppercase tracking-widest border border-indigo-500/50 px-2 py-0.5 rounded">NEW WAY</div>
          <div className="absolute inset-0 bg-indigo-500/5 animate-pulse-slow"></div>
          <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(99,102,241,0.6)] z-10">
            <Library className="w-8 h-8 text-white" />
          </div>
          <h4 className="text-xl font-bold text-white mb-2 z-10">投资模式 (Investor)</h4>
          <p className="text-xs text-indigo-200 mb-4 z-10 max-w-[200px]">长期的学习与造物投入<br/>(Compound Interest)</p>
       </div>
    </div>
    <div className="bg-[#0f172a] p-6 text-center border-t border-indigo-500/30 relative">
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-3 py-0.5 rounded-full text-[10px] font-bold shadow-lg tracking-wider">CORE PHILOSOPHY</div>
      <p className="text-sm text-slate-300 font-medium leading-relaxed max-w-3xl mx-auto italic">
        “从'追逐转瞬即逝的灵感片刻'，彻底转向'<strong>长期的学习与造物投入</strong>'。建立自己头脑的'图书馆'，这与阅读陌生人写的通用文档有天壤之别。”
      </p>
    </div>
  </div>
);

// --- 2.2 [C] 捕捉双重过滤器 ---
const CapturePipeline = () => {
  const [activeStep, setActiveStep] = useState(0); 
  return (
    <div className="bg-[#0f172a] border border-slate-700 rounded-xl p-8 my-8 relative overflow-hidden">
       <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2"><Filter className="w-5 h-5 text-yellow-400" /><h4 className="font-bold text-white text-lg">捕捉标准：双重过滤机制</h4></div>
        <div className="flex gap-2">{[1,2,3].map(i => <div key={i} className={`w-2 h-2 rounded-full ${activeStep >= i ? 'bg-yellow-400' : 'bg-slate-700'}`}></div>)}</div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
         <div className={`flex-1 p-4 rounded-xl border transition-all duration-300 cursor-pointer ${activeStep === 1 ? 'bg-yellow-900/20 border-yellow-500 scale-105' : 'bg-slate-800/50 border-slate-700 opacity-60'}`} onClick={() => setActiveStep(1)}>
            <div className="flex items-center gap-2 mb-2 text-yellow-400"><HeartHandshake className="w-5 h-5" /><span className="font-bold text-sm">1. 共鸣 (Resonate)</span></div>
            <p className="text-xs text-slate-400">只收集那些让你<strong>"心头一颤"</strong>的内容。<br/>不要担心它有什么用，先问自己是否有感觉。</p>
         </div>
         <ArrowRight className="w-5 h-5 text-slate-600 hidden md:block" />
         <div className={`flex-1 p-4 rounded-xl border transition-all duration-300 cursor-pointer ${activeStep === 2 ? 'bg-green-900/20 border-green-500 scale-105' : 'bg-slate-800/50 border-slate-700 opacity-60'}`} onClick={() => setActiveStep(2)}>
            <div className="flex items-center gap-2 mb-2 text-green-400"><ShieldCheck className="w-5 h-5" /><span className="font-bold text-sm">2. 核心难题</span></div>
            <p className="text-xs text-slate-400">理查德·费曼学习法。<br/>强制提问：<strong>“它能帮我解决这 12 个难题中的哪一个？”</strong></p>
         </div>
         <ArrowRight className="w-5 h-5 text-slate-600 hidden md:block" />
         <div className={`flex-1 p-4 rounded-xl border transition-all duration-300 cursor-pointer ${activeStep === 3 ? 'bg-indigo-900/20 border-indigo-500 scale-105' : 'bg-slate-800/50 border-slate-700 opacity-60'}`} onClick={() => setActiveStep(3)}>
            <div className="flex items-center gap-2 mb-2 text-indigo-400"><Database className="w-5 h-5" /><span className="font-bold text-sm">3. 存入 (Inbox)</span></div>
            <p className="text-xs text-slate-400">通过双重过滤的信息，才是真正属于你的<strong>个人信息地貌</strong>。</p>
         </div>
      </div>
    </div>
  );
};

// --- 2.2 [C] 12难题安检门 ---
const CaptureGate = () => {
  const [step, setStep] = useState(0); 
  const [isPass, setIsPass] = useState(false);
  const checkIdea = (pass) => { setStep(1); setTimeout(() => { setIsPass(pass); setStep(2); }, 1000); };
  const reset = () => { setStep(0); setIsPass(false); };
  return (
    <div className="bg-[#0B1120] border border-slate-700 rounded-xl p-6 my-6 relative overflow-hidden shadow-lg">
      <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-2 relative z-10"><Filter className="w-5 h-5 text-yellow-400" /><h4 className="font-bold text-white">交互演示：12难题安检门</h4></div>
      <div className="flex items-center justify-between relative z-10 px-4">
        <div className={`transition-all duration-500 ${step > 0 ? 'opacity-30 blur-sm' : 'opacity-100'}`}><div className="bg-white text-slate-900 px-4 py-3 rounded-lg shadow-lg text-xs font-bold flex items-center gap-2 w-32 justify-center"><Zap className="w-4 h-4 text-yellow-600" /> New Idea</div></div>
        <div className="relative">
          <div className={`w-32 h-32 rounded-full border-4 flex flex-col items-center justify-center transition-all duration-300 ${step === 1 ? 'border-yellow-500 bg-yellow-900/20' : 'border-slate-600 bg-slate-800'}`}><div className="text-[10px] text-slate-400 font-bold mb-1">12 PROBLEMS</div>{step === 1 ? <RefreshCw className="w-8 h-8 text-yellow-500 animate-spin" /> : <ShieldCheck className="w-8 h-8 text-slate-500" />}</div>
          {step === 2 && <div className={`absolute inset-0 rounded-full flex items-center justify-center animate-in zoom-in ${isPass ? 'bg-green-500' : 'bg-red-500'}`}>{isPass ? <CheckCircle className="w-12 h-12 text-white" /> : <X className="w-12 h-12 text-white" />}</div>}
        </div>
        <div className={`transition-all duration-500 w-32 text-center ${step === 2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>{isPass ? <div className="text-green-400 font-bold text-sm bg-green-900/30 px-3 py-2 rounded border border-green-500/50">存入 Inbox ✅</div> : <div className="text-red-400 font-bold text-sm bg-red-900/30 px-3 py-2 rounded border border-red-500/50">直接丢弃 🗑️</div>}</div>
      </div>
      {step === 0 && <div className="flex justify-center gap-4 mt-8"><button onClick={() => checkIdea(true)} className="text-xs bg-slate-800 hover:bg-green-900/50 text-green-400 border border-green-500/30 px-4 py-2 rounded transition-colors">匹配</button><button onClick={() => checkIdea(false)} className="text-xs bg-slate-800 hover:bg-red-900/50 text-red-400 border border-red-500/30 px-4 py-2 rounded transition-colors">不匹配</button></div>}
      {step === 2 && <div className="flex justify-center mt-8"><button onClick={reset} className="text-xs text-slate-400 hover:text-white flex items-center gap-1"><RefreshCw className="w-3 h-3"/> Reset</button></div>}
    </div>
  );
};

// --- 2.0.1 JIT 创作透镜 (Double Diamond) ---
const JITVisualizer = () => (
  <div className="bg-[#0f172a] border border-slate-700 rounded-xl p-8 relative overflow-hidden group hover:border-blue-500/50 transition-colors my-6">
    <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
      <div className="flex items-center gap-2"><GitBranch className="w-5 h-5 text-blue-400" /><h4 className="font-bold text-white text-lg">可视化：JIT 创作透镜 (发散与收敛)</h4></div>
      <span className="text-[10px] text-blue-300 font-mono border border-blue-900 bg-blue-900/20 px-2 py-1 rounded">避免过早优化</span>
    </div>
    <div className="relative h-48 w-full flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:20px_100%]"></div>
      <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
        <defs><linearGradient id="lensGradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="rgba(59, 130, 246, 0.05)" /><stop offset="50%" stopColor="rgba(59, 130, 246, 0.2)" /><stop offset="100%" stopColor="rgba(16, 185, 129, 0.05)" /></linearGradient></defs>
        <path d="M 50 96 C 150 20, 450 20, 550 96 C 450 172, 150 172, 50 96 Z" fill="url(#lensGradient)" stroke="#3B82F6" strokeWidth="2" className="drop-shadow-2xl" />
        <line x1="20" y1="96" x2="580" y2="96" stroke="#475569" strokeWidth="1" strokeDasharray="4,4" markerEnd="url(#arrowhead)" />
        <circle cx="50" cy="96" r="6" fill="#3B82F6" className="animate-pulse" />
        <circle cx="300" cy="96" r="4" fill="#FFFFFF" />
        <circle cx="550" cy="96" r="6" fill="#10B981" />
      </svg>
      <div className="absolute top-[20%] left-[25%] text-center"><div className="text-xs text-blue-300 font-bold bg-slate-900/90 px-2 py-1 rounded mb-1 border border-blue-500/30">DIVERGENCE ↗</div><div className="text-[9px] text-slate-500">探索 / 收集 / 发散</div></div>
      <div className="absolute bottom-[20%] right-[25%] text-center"><div className="text-[9px] text-slate-500 mb-1">筛选 / 排序 / 删减</div><div className="text-xs text-green-300 font-bold bg-slate-900/90 px-2 py-1 rounded border border-green-500/30">↘ CONVERGENCE</div></div>
      <div className="absolute left-2 top-[45%] -translate-y-1/2 text-[10px] font-bold text-blue-500 bg-slate-900 px-1">CAPTURE</div>
      <div className="absolute right-2 top-[45%] -translate-x-1/2 -translate-y-1/2 text-[10px] font-bold text-green-500 bg-slate-900 px-1">DELIVERY</div>
    </div>
    <div className="mt-6 text-xs text-slate-400 leading-relaxed bg-slate-800/30 p-3 rounded border border-slate-700">
       <strong>JIT 核心心法：</strong> 创作不是一条直线，而是一次呼吸。先<strong>打开视野 (Resource)</strong> 广泛收集，再<strong>收束聚焦 (Project)</strong> 快速产出。切忌在发散期纠结细节，也切忌在收敛期通过发散来逃避。
    </div>
  </div>
);

// --- 2.0.2 心流活化能曲线 (Activation Energy Curve) ---
const FlowVisualizer = () => {
  const [showPlaceholder, setShowPlaceholder] = useState(false);
  return (
    <div className="bg-[#0f172a] border border-slate-700 rounded-xl p-8 relative overflow-hidden group hover:border-yellow-500/50 transition-colors my-6">
      <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2"><Zap className="w-5 h-5 text-yellow-400" /><h4 className="font-bold text-white text-lg">可视化：心流活化能 & 占位法</h4></div>
        <button onClick={() => setShowPlaceholder(!showPlaceholder)} className={`text-[10px] px-3 py-1 rounded border transition-colors flex items-center gap-2 ${showPlaceholder ? 'bg-green-900/30 border-green-500 text-green-400' : 'bg-slate-800 border-slate-600 text-slate-400'}`}>{showPlaceholder ? <CheckCircle className="w-3 h-3"/> : <Play className="w-3 h-3"/>}{showPlaceholder ? "模式：占位法 (Low Friction)" : "模式：常规启动 (High Friction)"}</button>
      </div>
      <div className="relative h-64 w-full px-4">
        <div className="absolute left-8 bottom-8 w-[90%] h-[1px] bg-slate-600"></div><div className="absolute left-8 bottom-8 w-[1px] h-[80%] bg-slate-600"></div>
        <div className="absolute left-2 top-1/2 -rotate-90 text-[10px] text-slate-500 tracking-wider font-bold">阻力 (Resistance)</div>
        <div className="absolute bottom-2 left-1/2 text-[10px] text-slate-500 tracking-wider font-bold">时间 (Time)</div>
        <svg className="absolute inset-0 w-full h-full overflow-visible">
          <path d="M 32 180 C 80 180, 80 40, 150 40 S 250 160, 450 160" fill="none" stroke="#EF4444" strokeWidth="3" strokeDasharray="4,4" className={`transition-opacity duration-500 ${showPlaceholder ? 'opacity-20' : 'opacity-100'}`} />
          {!showPlaceholder && (<g className="animate-in fade-in zoom-in"><text x="90" y="30" fill="#EF4444" fontSize="12" fontWeight="bold">🏔️ 冷启动高墙</text><text x="90" y="50" fill="#EF4444" fontSize="10">"我要写完这篇论文"</text></g>)}
          <path d="M 32 180 C 60 180, 80 140, 150 140 S 250 160, 450 160" fill="none" stroke="#22C55E" strokeWidth="4" className={`transition-opacity duration-500 ${showPlaceholder ? 'opacity-100' : 'opacity-20'}`} />
          {showPlaceholder && (<g className="animate-in fade-in zoom-in"><text x="160" y="130" fill="#22C55E" fontSize="12" fontWeight="bold">🏂 占位法滑梯</text><text x="160" y="150" fill="#22C55E" fontSize="10">"先写个标题就好"</text><path d="M 150 40 L 150 140" stroke="#94A3B8" strokeWidth="1" strokeDasharray="2,2" /><text x="155" y="90" fill="#94A3B8" fontSize="10">节省的意志力</text></g>)}
          <line x1="30" y1="160" x2="450" y2="160" stroke="#475569" strokeWidth="1" strokeDasharray="2,2" />
          <text x="400" y="155" fill="#475569" fontSize="10">心流状态 (Flow)</text>
        </svg>
      </div>
      <div className="mt-4 flex gap-4 text-xs text-slate-300 bg-slate-800/50 p-3 rounded border border-slate-700">
         <Info className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
         <p>面对大任务时，大脑会产生畏难情绪。<strong>占位法原理：</strong>通过执行一个“微不足道”的动作，将启动门槛降到脚踝。一旦开始，惯性会推着你进入心流。</p>
      </div>
    </div>
  );
};

// --- 2.3.1 [O] PARA 动态分拣机 (The PARA Actionability Sorter) ---
const PARASorterVisual = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [step, setStep] = useState(0); 

  const items = [
    { name: "Q3 推广方案", type: "project", desc: "具体行动 + 截止日", icon: Target, color: "text-blue-400", bg: "bg-blue-500/20", border: "border-blue-500" },
    { name: "健康体检单", type: "area", desc: "长期标准 + 无死线", icon: Layers, color: "text-green-400", bg: "bg-green-500/20", border: "border-green-500" },
    { name: "网页设计灵感", type: "resource", desc: "感兴趣 + 潜在有用", icon: Database, color: "text-yellow-400", bg: "bg-yellow-500/20", border: "border-yellow-500" },
    { name: "2021 合同", type: "archive", desc: "不再活跃 + 备查", icon: Archive, color: "text-slate-400", bg: "bg-slate-500/20", border: "border-slate-500" },
  ];

  const current = items[activeItem];

  useEffect(() => {
    const timer = setInterval(() => {
      setStep(s => {
        if (s >= 4) {
          setActiveItem(i => (i + 1) % items.length);
          return 0;
        }
        return s + 1;
      });
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#0f172a] border border-slate-700 rounded-xl p-8 my-8 relative overflow-hidden">
      <div className="flex items-center gap-2 mb-8 border-b border-slate-800 pb-2">
        <Layers className="w-5 h-5 text-indigo-400" />
        <h4 className="font-bold text-white text-lg">组织原则：PARA 分拣流水线</h4>
      </div>

      <div className="flex flex-col items-center">
        <div className={`transition-all duration-500 mb-4 ${step === 0 ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-4'}`}>
           <div className="bg-white text-slate-900 px-4 py-2 rounded-lg font-bold text-sm shadow-[0_0_15px_rgba(255,255,255,0.3)] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-900 animate-pulse"></span>
              {current.name}
           </div>
        </div>

        <div className="relative w-full max-w-2xl flex flex-col gap-4">
           <div className={`border border-slate-600 bg-slate-800/50 p-3 rounded-xl flex justify-between items-center transition-all duration-300 ${step === 1 ? 'border-blue-500 bg-blue-900/20 scale-105' : ''}`}>
              <div className="flex items-center gap-3">
                 <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${step === 1 ? 'bg-blue-500 text-white' : 'bg-slate-700 text-slate-400'}`}>1</div>
                 <span className="text-xs text-slate-300">它是现在就要执行的任务吗？(Actionable)</span>
              </div>
              {step === 1 && current.type === 'project' && <span className="text-xs font-bold text-blue-400 bg-blue-900/50 px-2 py-0.5 rounded">YES → Project</span>}
           </div>
           <div className={`border border-slate-600 bg-slate-800/50 p-3 rounded-xl flex justify-between items-center transition-all duration-300 ${step === 2 ? 'border-green-500 bg-green-900/20 scale-105' : ''}`}>
              <div className="flex items-center gap-3">
                 <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${step === 2 ? 'bg-green-500 text-white' : 'bg-slate-700 text-slate-400'}`}>2</div>
                 <span className="text-xs text-slate-300">它是需要长期维护的标准吗？(Maintainable)</span>
              </div>
              {step === 2 && current.type === 'area' && <span className="text-xs font-bold text-green-400 bg-green-900/50 px-2 py-0.5 rounded">YES → Area</span>}
           </div>
           <div className={`border border-slate-600 bg-slate-800/50 p-3 rounded-xl flex justify-between items-center transition-all duration-300 ${step === 3 ? 'border-yellow-500 bg-yellow-900/20 scale-105' : ''}`}>
              <div className="flex items-center gap-3">
                 <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${step === 3 ? 'bg-yellow-500 text-white' : 'bg-slate-700 text-slate-400'}`}>3</div>
                 <span className="text-xs text-slate-300">它是未来可能有用的素材吗？(Useful)</span>
              </div>
              {step === 3 && current.type === 'resource' && <span className="text-xs font-bold text-yellow-400 bg-yellow-900/50 px-2 py-0.5 rounded">YES → Resource</span>}
           </div>
        </div>

        <div className="grid grid-cols-4 gap-2 w-full mt-6">
           {['project', 'area', 'resource', 'archive'].map((type) => (
             <div key={type} className={`p-3 rounded-xl border-2 flex flex-col items-center justify-center transition-all duration-500 ${type === 'project' ? 'border-blue-500/50 bg-blue-900/10' : ''} ${type === 'area' ? 'border-green-500/50 bg-green-900/10' : ''} ${type === 'resource' ? 'border-yellow-500/50 bg-yellow-900/10' : ''} ${type === 'archive' ? 'border-slate-500/50 bg-slate-800/50' : ''} ${step === 4 && current.type === type ? 'scale-110 ring-2 ring-white' : 'opacity-60'}`}>
                <span className="text-[10px] font-bold uppercase mb-1">{type}s</span>
                {step === 4 && current.type === type && <div className="animate-in zoom-in fade-in text-xs">📦 {current.name}</div>}
             </div>
           ))}
        </div>
        <div className="mt-6 text-center text-xs text-slate-500">
           <strong>核心心法：</strong> 组织不是为了“分类”，而是为了“行动”。<br/>
           如果一个信息不需要行动，也不需要维护，也未来无用，那就直接归档或删除。
        </div>
      </div>
    </div>
  );
};

// --- 2.3.2 [O] Mise-en-place 备菜台 ---
const MiseEnPlaceVisual = () => {
  const [mode, setMode] = useState('after');
  return (
    <div className="my-12 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl bg-[#0F172A]">
      <div className="bg-slate-900 px-6 py-4 border-b border-slate-700 flex justify-between items-center">
        <div className="flex items-center gap-3"><div className="p-2 bg-green-500/20 rounded-lg"><ChefHat className="w-6 h-6 text-green-400" /></div><div><h4 className="font-bold text-white text-lg">Mise-en-place (预先就位)</h4><p className="text-[10px] text-slate-400">Organize 的核心隐喻</p></div></div>
        <div className="flex bg-slate-800 rounded-lg p-1">
          <button onClick={() => setMode('before')} className={`px-4 py-2 rounded-md text-xs font-bold transition-all ${mode === 'before' ? 'bg-red-500/20 text-red-400 shadow' : 'text-slate-500 hover:text-white'}`}>Chaos (混乱)</button>
          <button onClick={() => setMode('after')} className={`px-4 py-2 rounded-md text-xs font-bold transition-all ${mode === 'after' ? 'bg-green-500/20 text-green-400 shadow' : 'text-slate-500 hover:text-white'}`}>Order (就位)</button>
        </div>
      </div>
      <div className="relative h-72 p-8 flex items-center justify-center transition-colors duration-500 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:20px_20px]">
        {mode === 'before' ? (
          <div className="w-full max-w-lg h-full flex flex-col items-center justify-center animate-in fade-in">
             <div className="relative w-full h-40 border-2 border-dashed border-red-500/30 rounded-xl bg-red-900/10 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-10 text-red-500 font-black text-6xl -rotate-12">MESSY</div>
                {[...Array(6)].map((_, i) => <div key={i} className="absolute p-2 bg-slate-800 border border-slate-600 rounded shadow-lg text-slate-400 animate-pulse" style={{ top: `${Math.random() * 60 + 10}%`, left: `${Math.random() * 80 + 10}%`, transform: `rotate(${Math.random() * 40 - 20}deg)` }}><FileText className="w-4 h-4" /></div>)}
                <div className="absolute bottom-2 right-2 text-red-400 flex flex-col items-center"><Utensils className="w-8 h-8" /><span className="text-[10px] font-bold">空锅等米下</span></div>
             </div>
             <p className="text-red-400 text-xs mt-4 font-bold flex items-center gap-2"><AlertCircle className="w-4 h-4" />状态：边做饭边找食材，心流被打断</p>
          </div>
        ) : (
          <div className="w-full max-w-lg h-full flex flex-col justify-end gap-4 animate-in fade-in slide-in-from-bottom-4">
             <div className="flex justify-between items-end h-32 px-4 pb-0 gap-2">
               <div className="flex-1 h-[80%] bg-blue-900/20 border border-blue-500/50 rounded-t-lg relative flex flex-col items-center justify-end pb-2 group"><div className="absolute -top-3 bg-blue-900 text-blue-300 text-[9px] px-2 rounded border border-blue-500">切好的肉 (Projects)</div><FileText className="w-4 h-4 text-blue-400 mb-1" /><FileText className="w-4 h-4 text-blue-400" /></div>
               <div className="flex-1 h-[60%] bg-yellow-900/20 border border-yellow-500/50 rounded-t-lg relative flex flex-col items-center justify-end pb-2 group"><div className="absolute -top-3 bg-yellow-900 text-yellow-300 text-[9px] px-2 rounded border border-yellow-500">洗好的菜 (Resources)</div><FileText className="w-4 h-4 text-yellow-400" /></div>
               <div className="flex-1 h-[40%] bg-green-900/20 border border-green-500/50 rounded-t-lg relative flex flex-col items-center justify-end pb-2 group"><div className="absolute -top-3 bg-green-900 text-green-300 text-[9px] px-2 rounded border border-green-500">调料 (Areas)</div><Layers className="w-4 h-4 text-green-400" /></div>
             </div>
             <div className="h-2 w-full bg-slate-700 rounded-full relative"><div className="absolute -top-10 right-0 bg-slate-800 p-2 rounded-full border border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)]"><Utensils className="w-6 h-6 text-green-400" /></div></div>
             <p className="text-green-400 text-xs mt-2 font-bold text-center flex items-center justify-center gap-2"><CheckCircle className="w-4 h-4" />状态：开火即炒，一切尽在手边</p>
          </div>
        )}
      </div>
    </div>
  );
};

// --- 2.2.1 [O] 组织原则图解 (Organize Principle) ---
const OrganizePrincipleVisual = () => (
  <div className="bg-[#0f172a] border border-slate-700 rounded-xl p-8 my-8 relative overflow-hidden">
    <div className="flex items-center gap-2 mb-8 border-b border-slate-800 pb-2"><Lightbulb className="w-5 h-5 text-green-400" /><h4 className="font-bold text-white text-lg">核心图解：为了发现 (Organize for Insight)</h4></div>
    <div className="flex items-stretch justify-between gap-8 h-40">
      <div className="w-1/3 bg-slate-800/50 border border-dashed border-slate-600 rounded-xl p-4 flex flex-col items-center justify-center relative"><div className="absolute -top-3 bg-slate-800 px-2 text-[10px] text-slate-500 uppercase tracking-widest">Conflict 1</div><Database className="w-8 h-8 text-slate-500 mb-2" /><div className="text-xs text-slate-400 font-bold">暂不可用的信息</div><div className="text-[9px] text-slate-600 mt-1 text-center">未来的素材 / 灵感<br/>(Resource)</div></div>
      <div className="flex-1 flex flex-col items-center justify-center relative"><div className="w-full h-2 bg-gradient-to-r from-transparent via-red-500/20 to-transparent absolute top-1/2 -translate-y-1/2"></div><X className="w-6 h-6 text-red-500/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" /><div className="z-10 bg-green-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-[0_0_20px_rgba(34,197,94,0.4)] flex items-center gap-2 animate-bounce-slow"><Layers className="w-3 h-3" />建立关联 (Organize)</div><div className="mt-4 text-[10px] text-green-300 text-center">"让信息在需要的时候<br/>自动出现在手边"</div></div>
      <div className="w-1/3 bg-slate-800/50 border border-dashed border-slate-600 rounded-xl p-4 flex flex-col items-center justify-center relative"><div className="absolute -top-3 bg-slate-800 px-2 text-[10px] text-slate-500 uppercase tracking-widest">Conflict 2</div><CheckSquare className="w-8 h-8 text-blue-500 mb-2" /><div className="text-xs text-slate-400 font-bold">需立即执行的任务</div><div className="text-[9px] text-slate-600 mt-1 text-center">当下的产出<br/>(Project)</div></div>
    </div>
  </div>
);

// --- 2.1 ROA 杠杆天平 ---
const ROALever = () => {
  const [attention, setAttention] = useState(80);
  const [returns, setReturns] = useState(40);
  const roa = (returns / attention).toFixed(2);
  const rotation = Math.min(Math.max((roa - 1) * 45, -45), 45);
  let statusColor = roa >= 1 ? "text-green-400" : "text-red-400";
  let statusText = roa >= 1 ? "盈利 (Profit)" : "亏损 (Loss)";

  return (
    <div className="bg-[#0f172a] border border-slate-700 rounded-xl p-8 my-8 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-slate-500">ROA</div>
      <h4 className="font-bold text-white mb-8 flex items-center gap-2"><Scale className="w-6 h-6 text-purple-400" /> 交互模型：ROA 杠杆天平</h4>
      <div className="flex flex-col items-center">
        <div className="relative w-64 h-2 bg-slate-600 rounded-full mb-8 transition-transform duration-700 ease-out" style={{ transform: `rotate(${-rotation}deg)` }}><div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"><div className="w-16 h-16 bg-red-900/80 rounded-lg border-2 border-red-500 flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.4)] backdrop-blur-sm" style={{ transform: `scale(${0.5 + attention/150})` }}><Brain className="w-8 h-8 text-white" /></div><div className="text-xs text-red-300 font-bold mt-2 bg-black/50 px-2 py-1 rounded">Attention</div></div><div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 flex flex-col items-center"><div className="w-16 h-16 bg-green-900/80 rounded-lg border-2 border-green-500 flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.4)] backdrop-blur-sm" style={{ transform: `scale(${0.5 + returns/150})` }}><Box className="w-8 h-8 text-white" /></div><div className="text-xs text-green-300 font-bold mt-2 bg-black/50 px-2 py-1 rounded">Returns</div></div><div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-slate-300 rounded-full border-4 border-slate-800 z-10"></div></div>
        <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[40px] border-b-slate-700 -mt-8"></div>
        <div className="mt-8 grid grid-cols-2 gap-8 w-full max-w-md"><div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700"><label className="text-xs text-slate-400 block mb-2">投入：整理/寻找/切换 (Cost)</label><input type="range" min="10" max="100" value={attention} onChange={(e) => setAttention(parseInt(e.target.value))} className="w-full h-2 bg-slate-700 rounded appearance-none cursor-pointer accent-red-500" /></div><div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700"><label className="text-xs text-slate-400 block mb-2">产出：文章/项目/方案 (Value)</label><input type="range" min="10" max="100" value={returns} onChange={(e) => setReturns(parseInt(e.target.value))} className="w-full h-2 bg-slate-700 rounded appearance-none cursor-pointer accent-green-500" /></div></div>
        <div className="mt-6 text-center"><div className="text-xs text-slate-500 uppercase tracking-widest mb-1">ROA Ratio</div><div className={`text-4xl font-black ${statusColor} transition-colors duration-300`}>{roa}</div><div className={`text-xs font-bold uppercase mt-1 ${statusColor}`}>{statusText}</div></div>
      </div>
    </div>
  );
};

// --- 2.4 [D] 平衡点图表 ---
const BalanceChartVisual = () => (
  <div className="my-8 bg-[#0F172A] border border-slate-700 rounded-xl p-6 relative">
    <div className="flex justify-between items-end mb-6"><h5 className="text-sm font-bold text-white flex items-center gap-2"><Activity className="w-4 h-4 text-purple-400" /> 可视化：权衡曲线 (The Trade-off)</h5></div>
    <div className="relative h-56 w-full bg-slate-900/50 rounded-lg border border-slate-800 p-4">
      <div className="absolute left-6 bottom-6 w-[90%] h-[1px] bg-slate-600"></div><div className="absolute left-6 bottom-6 w-[1px] h-[80%] bg-slate-600"></div>
      <div className="absolute bottom-2 left-1/2 text-[10px] text-slate-500 uppercase tracking-wider">压缩程度 (Compression) →</div>
      <div className="absolute left-2 top-1/2 -rotate-90 text-[10px] text-slate-500 uppercase tracking-wider">效用 (Utility)</div>
      <svg className="absolute inset-0 w-full h-full overflow-visible p-6">
        <path d="M 0 180 C 100 180, 200 50, 300 20" fill="none" stroke="#FACC15" strokeWidth="3" strokeDasharray="4,4" /><text x="310" y="25" fill="#FACC15" fontSize="10" fontWeight="bold">可发现性</text>
        <path d="M 0 20 C 100 20, 200 150, 300 180" fill="none" stroke="#94A3B8" strokeWidth="3" /><text x="310" y="180" fill="#94A3B8" fontSize="10" fontWeight="bold">完整语境</text>
      </svg>
      <div className="absolute left-[50%] top-[45%] flex flex-col items-center"><div className="w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_20px_#A855F7] animate-pulse"></div><div className="mt-2 bg-slate-800 text-purple-300 text-[10px] px-2 py-1 rounded border border-purple-500/50 whitespace-nowrap">甜蜜点 (Sweet Spot)</div></div>
    </div>
  </div>
);

const DistillHeatmap = () => {
  const [level, setLevel] = useState(1);
  const TextBlock = ({ text, importance }) => {
    let style = "text-slate-500";
    if (level >= 2 && importance >= 2) style = "text-slate-200 font-bold";
    if (level >= 3 && importance >= 3) style = "bg-yellow-500/30 text-yellow-200 px-1 rounded"; 
    if (level >= 4 && importance < 3) style = "text-slate-700 blur-[2px] transition-all duration-500"; 
    return <span className={`transition-all duration-300 ${style}`}>{text} </span>;
  };

  return (
    <div className="bg-[#0f172a] border border-slate-700 rounded-xl p-8 my-8 shadow-xl">
      <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2"><Minimize2 className="w-5 h-5 text-yellow-400" /><h4 className="font-bold text-white">交互演示：5 层渐进式摘要</h4></div>
        <div className="flex gap-2">{[1,2,3,4,5].map(l => <button key={l} onClick={() => setLevel(l)} className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${level === l ? 'bg-yellow-500 text-black scale-110' : 'bg-slate-800 text-slate-500 hover:bg-slate-700'}`}>L{l}</button>)}</div>
      </div>
      <div className="bg-slate-900 rounded-xl p-6 font-serif text-lg leading-loose min-h-[300px] relative">
        {level >= 4 && <div className="mb-8 p-4 bg-yellow-900/20 border-l-4 border-yellow-500 rounded-r-lg animate-in slide-in-from-top-4"><h5 className="text-yellow-500 font-sans font-bold text-xs uppercase mb-1">Executive Summary (Layer 4)</h5><p className="text-yellow-200 text-sm font-sans">笔记的价值 = 发现的难度 / 消费的难度。渐进式总结的核心是“以未来的时间换取现在的理解”。</p></div>}
        {level === 5 && <div className="absolute inset-0 bg-[#0f172a]/90 backdrop-blur-sm z-10 flex items-center justify-center rounded-xl animate-in fade-in"><div className="bg-slate-800 border border-indigo-500 p-6 rounded-xl max-w-sm text-center shadow-2xl transform rotate-1"><div className="text-indigo-400 font-bold text-xs mb-2 uppercase flex items-center justify-center gap-2"><GitBranch className="w-4 h-4" /> Layer 5: Remix</div><p className="text-white text-base font-medium">"笔记的终极形态不是仓库，而是工厂。通过渐进式总结，我们把几十吨的矿石（Raw Info）提炼成了几克的黄金（Insight）。 #SecondBrain"</p><div className="mt-4 text-[10px] text-slate-500 bg-black/30 py-1 rounded">已转化为：推文 / 幻灯片 / 中间包</div></div></div>}
        <div className={level === 5 ? "opacity-0" : "opacity-100"}>
          <TextBlock text="我们生活在一个信息过载的时代，但这并不是真正的问题。" importance={1} />
          <TextBlock text="真正的问题是我们缺乏对信息的过滤和提炼机制。" importance={2} />
          <TextBlock text="很多人只是像松鼠一样囤积坚果，却从来不吃掉它们。" importance={1} />
          <br/><br/>
          <TextBlock text="构建第二大脑的目的，不是为了让你成为一个更好的图书管理员，而是让你成为一个更高产的创造者。" importance={2} />
          <TextBlock text="CODE 方法论是这一系统的核心引擎。" importance={1} />
          <TextBlock text="其中，提炼（Distill）是最关键却最容易被忽视的一步。" importance={3} />
          <TextBlock text="没有提炼，笔记就是数字垃圾。" importance={3} />
          <br/><br/>
          <TextBlock text="通过渐进式总结，我们根据直觉层层剥离，直到只剩下最核心的观点。" importance={2} />
          <TextBlock text="这就像是从几十吨矿石中提炼出几克黄金。" importance={3} />
        </div>
      </div>
    </div>
  );
};

// --- 2.5 E - Express: 创作仪表盘 ---
const ExpressDashboard = () => {
  const [mode, setMode] = useState(null);
  const modes = [
    { id: 'see', label: 'SEE (看)', icon: Eye, desc: "放到不同情境中看。" },
    { id: 'write', label: 'WRITE (写)', icon: FileText, desc: "做笔记，写摘要。" },
    { id: 'draw', label: 'DRAW (画)', icon: LayoutTemplate, desc: "图像化。" },
    { id: 'produce', label: 'PRODUCE (产出)', icon: Box, desc: "实质性加工。" },
    { id: 'perform', label: 'PERFORM (演示)', icon: Mic, desc: "演讲，录制视频。" },
    { id: 'sell', label: 'SELL (传播)', icon: Speaker, desc: "教会他人。" }
  ];
  return (
    <div className="bg-[#0f172a] border border-slate-700 rounded-xl p-8 my-8">
      <h4 className="font-bold text-white mb-6 flex items-center gap-2 border-b border-slate-800 pb-4"><PenTool className="w-5 h-5 text-blue-400" /> 交互演示：6 种表达模式 (INTERACT)</h4>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {modes.map((m) => (
          <button key={m.id} onClick={() => setMode(m.id)} className={`p-4 rounded-xl border transition-all text-left group relative overflow-hidden ${mode === m.id ? 'bg-blue-600 border-blue-500 text-white shadow-lg scale-105 z-10' : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:bg-slate-700 hover:border-slate-500'}`}>
            <m.icon className={`w-6 h-6 mb-3 ${mode === m.id ? 'text-white' : 'text-blue-400'}`} />
            <div className="text-xs font-bold mb-1">{m.label}</div>
            {mode === m.id && <div className="text-[10px] opacity-90 animate-in fade-in leading-relaxed mt-2 border-t border-white/20 pt-2">{m.desc}</div>}
          </button>
        ))}
      </div>
      <p className="text-center text-xs text-slate-500 mt-6 italic">点击上方卡片，查看如何与知识进行"较劲"。不要只是被动地阅读。</p>
    </div>
  );
};

// --- 2.6 Eisenhower Matrix ---
const EisenhowerMatrix = () => (
  <div className="grid grid-cols-2 gap-4 my-6">
    {[
      { id: "11", title: "重要且紧急", color: "border-red-500 bg-red-900/20", tag: "Limit: 3", icon: Flame },
      { id: "12", title: "重要不紧急", color: "border-yellow-500 bg-yellow-900/20", tag: "Deadline", icon: Brain },
      { id: "13", title: "紧急不重要", color: "border-blue-500 bg-blue-900/20", tag: "Delegate", icon: Zap },
      { id: "14", title: "不重要不紧急", color: "border-slate-500 bg-slate-800/50", tag: "Delete", icon: Archive },
    ].map((q) => (
      <div key={q.id} className={`p-4 rounded-xl border-2 flex flex-col ${q.color} min-h-[120px] transition-all hover:scale-[1.02]`}>
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-2"><q.icon className="w-4 h-4 opacity-70" /><span className="font-bold text-white text-sm">{q.id}</span></div>
          <span className="text-[9px] bg-black/20 px-1.5 py-0.5 rounded text-white/80">{q.tag}</span>
        </div>
        <div className="mt-auto text-xs text-white/90 font-medium">{q.title}</div>
      </div>
    ))}
  </div>
);

// --- 2.1 GTD 流水线 ---
const GTDPipelineVisualizer = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    { id: 1, title: "Capture", icon: Inbox, desc: "收集一切未尽事宜", action: "放入 Inbox" },
    { id: 2, title: "Clarify", icon: Search, desc: "这是什么？可执行吗？", action: "下一步行动" },
    { id: 3, title: "Organize", icon: Layers, desc: "放入正确的清单/容器", action: "Project / Area" },
    { id: 4, title: "Reflect", icon: RefreshCw, desc: "定期回顾与检视", action: "周/日复盘" },
    { id: 5, title: "Engage", icon: Play, desc: "根据情境开始执行", action: "Do It" },
  ];

  return (
    <div className="bg-[#0f172a] border border-slate-700 rounded-xl p-6 my-8 relative overflow-hidden">
       <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-4">
          <h4 className="font-bold text-white flex items-center gap-2"><Activity className="w-5 h-5 text-blue-400" /> GTD 动态流水线</h4>
          <div className="flex gap-1">{steps.map((s, i) => <div key={i} className={`w-2 h-2 rounded-full ${i <= activeStep ? 'bg-blue-500' : 'bg-slate-700'}`}></div>)}</div>
       </div>
       <div className="flex gap-4 h-64">
          <div className="w-1/3 flex flex-col gap-2">
             {steps.map((step, idx) => (
                <button key={idx} onClick={() => setActiveStep(idx)} className={`text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-all ${activeStep === idx ? 'bg-blue-600 text-white shadow-lg scale-105' : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800'}`}>
                   <step.icon className={`w-4 h-4 ${activeStep === idx ? 'text-white' : 'text-slate-500'}`} />
                   <div><div className="text-xs font-bold">{step.title}</div>{activeStep === idx && <div className="text-[9px] opacity-80 mt-1">{step.action}</div>}</div>
                </button>
             ))}
          </div>
          <div className="flex-1 bg-slate-900 rounded-xl border border-slate-800 relative flex flex-col p-6 items-center justify-center text-center">
             <div className="text-5xl mb-4 text-blue-500">
               {React.createElement(steps[activeStep].icon, { className: "w-16 h-16" })}
             </div>
             <h5 className="text-lg font-bold text-white mb-2">{steps[activeStep].title}</h5>
             <p className="text-sm text-slate-400">{steps[activeStep].desc}</p>
          </div>
       </div>
    </div>
  );
};

const HemingwayBridgeVisualizer = () => {
  const [stage, setStage] = useState('stop'); 
  return (
    <div className="bg-[#0f172a] border border-slate-700 rounded-xl p-8 my-8 relative">
       <div className="flex items-center gap-2 mb-8 border-b border-slate-800 pb-2"><GitBranch className="w-5 h-5 text-indigo-400" /><h4 className="font-bold text-white text-lg">实操演示：海明威桥</h4></div>
       <div className="relative h-48 w-full flex items-center justify-center">
          <div className="flex items-center gap-8">
             <div className={`w-32 h-32 rounded-lg flex flex-col items-center justify-center border-2 transition-all ${stage === 'stop' ? 'border-red-500 bg-red-900/20' : 'border-slate-700 bg-slate-800'}`}>
               <Pause className="w-8 h-8 text-white mb-2" />
               <span className="text-xs font-bold text-white">TODAY: STOP</span>
             </div>
             <ArrowRight className="w-8 h-8 text-slate-500" />
             <div className={`w-32 h-32 rounded-lg flex flex-col items-center justify-center border-2 transition-all ${stage === 'bridge' ? 'border-yellow-500 bg-yellow-900/20' : 'border-slate-700 bg-slate-800'}`}>
               <FileText className="w-8 h-8 text-white mb-2" />
               <span className="text-xs font-bold text-white">THE BRIDGE</span>
             </div>
             <ArrowRight className="w-8 h-8 text-slate-500" />
             <div className={`w-32 h-32 rounded-lg flex flex-col items-center justify-center border-2 transition-all ${stage === 'start' ? 'border-green-500 bg-green-900/20' : 'border-slate-700 bg-slate-800'}`}>
               <Zap className="w-8 h-8 text-white mb-2" />
               <span className="text-xs font-bold text-white">TOMORROW: FLOW</span>
             </div>
          </div>
       </div>
       <div className="flex justify-center gap-4 mt-8">
          <button onClick={() => setStage('stop')} className="px-4 py-2 rounded text-xs font-bold bg-slate-800 text-slate-300 hover:text-white">1. 强制停笔</button>
          <button onClick={() => setStage('bridge')} className="px-4 py-2 rounded text-xs font-bold bg-slate-800 text-slate-300 hover:text-white">2. 写下指令</button>
          <button onClick={() => setStage('start')} className="px-4 py-2 rounded text-xs font-bold bg-slate-800 text-slate-300 hover:text-white">3. 次日启动</button>
       </div>
    </div>
  );
};

const PacketAssemblyVisual = () => (
  <div className="bg-[#0f172a] border border-slate-700 rounded-xl p-8 my-8 relative">
    <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-2"><Box className="w-5 h-5 text-yellow-400" /><h4 className="font-bold text-white text-lg">隐喻图解：乐高式拼装</h4></div>
    <div className="flex flex-col md:flex-row items-center gap-12 justify-center">
       <div className="flex flex-col gap-2">
          <div className="bg-slate-800 p-2 rounded border border-slate-700 text-xs text-slate-300 flex items-center gap-2 w-32 justify-center"><FileText className="w-3 h-3 text-blue-400" /> 调研数据</div>
          <div className="bg-slate-800 p-2 rounded border border-slate-700 text-xs text-slate-300 flex items-center gap-2 w-32 justify-center"><Folder className="w-3 h-3 text-yellow-400" /> 图片素材</div>
          <div className="bg-slate-800 p-2 rounded border border-slate-700 text-xs text-slate-300 flex items-center gap-2 w-32 justify-center"><Mic className="w-3 h-3 text-green-400" /> 采访录音</div>
       </div>
       <ArrowRight className="w-8 h-8 text-slate-600" />
       <div className="bg-slate-900 border-2 border-dashed border-slate-600 rounded-xl p-6 flex flex-col items-center justify-end w-48 h-40">
          <div className="h-8 w-full bg-yellow-600 rounded-md mb-1"></div>
          <div className="h-8 w-[90%] bg-blue-600 rounded-md mb-1"></div>
          <div className="h-8 w-[50%] bg-green-600 rounded-md"></div>
          <div className="mt-2 text-xs text-white font-bold">Project Done</div>
       </div>
    </div>
  </div>
);

const ProjectLifecycleVisual = () => (
  <div className="bg-[#0f172a] border border-slate-700 rounded-xl p-8 my-8 relative">
    <div className="flex items-center gap-2 mb-8 border-b border-slate-800 pb-2"><RefreshCw className="w-5 h-5 text-green-400" /><h4 className="font-bold text-white text-lg">项目生命周期</h4></div>
    <div className="relative flex justify-between items-center px-8">
       <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-800 -z-10"></div>
       <div className="flex flex-col items-center"><div className="w-10 h-10 rounded-full bg-blue-900 border-2 border-blue-500 flex items-center justify-center z-10"><Play className="w-4 h-4 text-blue-400" /></div><div className="mt-2 text-xs font-bold text-blue-400">启动</div></div>
       <div className="flex flex-col items-center"><div className="w-10 h-10 rounded-full bg-yellow-900 border-2 border-yellow-500 flex items-center justify-center z-10"><Activity className="w-4 h-4 text-yellow-400" /></div><div className="mt-2 text-xs font-bold text-yellow-400">执行</div></div>
       <div className="flex flex-col items-center"><div className="w-10 h-10 rounded-full bg-green-900 border-2 border-green-500 flex items-center justify-center z-10"><CheckCircle className="w-4 h-4 text-green-400" /></div><div className="mt-2 text-xs font-bold text-green-400">结项</div></div>
    </div>
  </div>
);

// ============================================================================
// 3. 页面渲染器 (Renderer)
// ============================================================================
const SectionRenderer = ({ activeSection }) => {
  
  // --- Intro & Core Goals ---
  if (activeSection === 'core_goal') return (
    <div className="animate-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto py-12 px-8">
      <div className="mb-12 border-b border-slate-800 pb-8">
        <h1 className="text-4xl font-black text-white mb-6 leading-tight">导论：系统重构与核心目标</h1>
        <p className="text-xl text-slate-300 leading-relaxed">
          V16.0 的核心变革在于实现了<strong>“知行合一”</strong>。我们将 CODE 的四个步骤，精准地绑定到了 PARA 的四个板块中，彻底解决了“动作”与“容器”的割裂。
        </p>
      </div>

      <div className="space-y-12">
        <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Activity className="w-5 h-5 text-purple-400"/> 1. 最大化 ROA (注意力回报率)</h3>
          <div className="prose prose-invert prose-sm text-slate-400 mb-6">
            <p>我们必须像投资资金 (ROI) 那样思考我们的注意力。构建系统的目的不是为了当一个完美的图书管理员，而是为了让投入的每一分注意力都能产生回报。</p>
          </div>
          <ROALever />
        </div>

        {/* 核心目标：按需及时 & 心流运作 (Vertical Stack) */}
        <div className="flex flex-col gap-12">
          <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
            <h4 className="text-blue-400 font-bold mb-4 flex items-center gap-2 text-xl"><GitBranch className="w-6 h-6"/> 2. JIT (按需及时)</h4>
            <div className="mb-6"><JITVisualizer /></div>
            <p className="text-sm text-slate-400 leading-relaxed bg-slate-900/50 p-4 rounded border border-slate-700/50">
              避免过早优化。只在需要时推进。创作过程是在 <strong>Divergence (发散/探索)</strong> 与 <strong>Convergence (收敛/交付)</strong> 之间来回摆动。
            </p>
          </div>

          <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700 hover:border-yellow-500/50 transition-colors">
            <h4 className="text-yellow-400 font-bold mb-4 flex items-center gap-2 text-xl"><Zap className="w-6 h-6"/> 3. 心流运作 (Flow)</h4>
            <div className="mb-6"><FlowVisualizer /></div>
            <p className="text-sm text-slate-400 leading-relaxed bg-slate-900/50 p-4 rounded border border-slate-700/50">
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
        <div><h2 className="text-3xl font-bold text-white">C - Capture (捕捉)</h2><p className="text-yellow-200/60 font-mono text-sm mt-1">从"消费"转向"长期投入"</p></div>
      </div>

      {/* 视觉增强点 1: 放大“思维转变” */}
      <ParadigmShiftVisual />

      <div className="prose prose-invert prose-lg max-w-none text-slate-300 mb-12">
        <h3 className="text-white">捕捉标准：共鸣 (Resonate)</h3>
        <p>
          只收集那些让你<strong>"心头一颤"</strong>的内容。不要为了收集而收集。专注于当下的共鸣，先别担心它与大局如何拼接。这些共鸣点最终会形成你独特的“个人信息地貌”。
        </p>
        
        {/* Capture Pipeline added here for visual reinforcement */}
        <CapturePipeline />

        <h3 className="text-white mt-12">最高过滤器：12 个核心难题</h3>
        <p>
          这是理查德·费曼的学习法。思考你最关心的 12 个开放式大问题。每当看到新信息，强制问自己：<strong>“它能帮我解决这 12 个难题中的哪一个？”</strong>
        </p>
      </div>

      {/* 视觉增强点 2: 12难题交互演示 */}
      <CaptureGate />
    </div>
  );

  // --- O - Organize ---
  if (activeSection === 'code_o') return (
    <div className="animate-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto py-12 px-8">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-green-600/20 rounded-xl border border-green-500/50"><ChefHat className="w-8 h-8 text-green-500" /></div>
        <div><h2 className="text-3xl font-bold text-white">O - Organize (组织)</h2><p className="text-green-200/60 font-mono text-sm mt-1">预先就位 (Mise-en-place)</p></div>
      </div>

      <div className="bg-green-900/20 border-l-4 border-green-500 p-6 mb-8 rounded-r-xl">
        <h3 className="text-lg font-bold text-green-400 mb-2">组织原则</h3>
        <p className="text-green-100/80 italic">"为了发现新思路而组织，解决'暂不可执行的信息'与'可执行的任务'之间的冲突。"</p>
        <OrganizePrincipleVisual />
      </div>

      {/* 视觉增强点: 动态 PARA 分拣机 */}
      <div className="mb-12">
         <h3 className="text-lg font-bold text-white mb-4">PARA 分拣流水线 (The Sorter)</h3>
         <PARASorterVisual />
      </div>

      {/* 视觉增强点 3: Mise-en-place 备菜台 */}
      <MiseEnPlaceVisual />

      <div className="prose prose-invert prose-lg max-w-none text-slate-300 mb-8 mt-12">
        <h3 className="text-white">跨平台镜像 (Mirroring)</h3>
        <p>
          为了减少摩擦，请在你的文件管理器、笔记软件、待办清单中，<strong>严格复制同一份 PARA 目录结构</strong>。
          这能减少在不同任务/环境间频繁切换注意力的次数与成本。
        </p>
        <div className="flex gap-4 mt-6 not-prose">
          {['Finder/Explorer', 'Notion/Obsidian', 'Todoist/Things'].map(app => (
            <div key={app} className="bg-slate-800 px-4 py-3 rounded-lg border border-slate-700 text-xs text-slate-400 font-mono flex items-center gap-2"><Folder className="w-4 h-4 text-green-500" /> {app}</div>
          ))}
        </div>
      </div>
    </div>
  );

  // --- D - Distill ---
  if (activeSection === 'code_d') return (
    <div className="animate-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto py-12 px-8">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-yellow-200/20 rounded-xl border border-yellow-200/50"><Minimize2 className="w-8 h-8 text-yellow-200" /></div>
        <div><h2 className="text-3xl font-bold text-white">D - Distill (提炼)</h2><p className="text-yellow-100/60 font-mono text-sm mt-1">CODE 引擎第三步</p></div>
      </div>

      <div className="prose prose-invert prose-lg max-w-none text-slate-300 mb-8">
        <h3 className="text-white">核心心法：平衡点</h3>
        <p>我们常误以为笔记做得越详细越好，但在信息过载时代，这种观念是致命的。我们需要在 <strong>Discoverability (可发现性)</strong> 与 <strong>Understanding (理解度)</strong> 之间取得平衡。</p>
      </div>

      {/* 视觉增强点 4: 平衡点图表 */}
      <BalanceChartVisual />

      <div className="prose prose-invert prose-lg max-w-none text-slate-300 mt-12">
        <h3 className="text-white">操作：见机而作 (Opportunistically)</h3>
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
        <div><h2 className="text-3xl font-bold text-white">E - Express (表达)</h2><p className="text-blue-200/60 font-mono text-sm mt-1">中间包与交互模式</p></div>
      </div>
      <ExpressDashboard />
    </div>
  );

  return <div className="flex flex-col items-center justify-center h-full text-slate-500">
      <LayoutTemplate className="w-16 h-16 mb-4 opacity-20" />
      <h3 className="text-xl font-bold text-slate-400">Select a Module</h3>
      <p className="text-sm mt-2">请从左侧选择具体的章节以开始学习。</p>
    </div>;
};

// ============================================================================
// 4. 主程序框架
// ============================================================================
export default function SecondBrainV16_Phase2_Final() {
  const [activeTab, setActiveTab] = useState('core_goal');

  return (
    <div className="flex h-screen bg-[#020617] font-sans selection:bg-indigo-500/30 overflow-hidden text-slate-300">
      
      <nav className="w-72 bg-[#050B14] border-r border-slate-800 flex flex-col shrink-0">
        <div className="p-6 border-b border-slate-800/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-900/50"><Brain className="w-5 h-5 text-white" /></div>
            <div><span className="text-white font-bold text-lg block leading-none">Second Brain</span><span className="text-[10px] text-slate-500 font-mono tracking-widest">V16.0 ENCYCLOPEDIA</span></div>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {DOC_STRUCTURE.map((section) => (
            <div key={section.id} className="mb-4">
              <div className="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm font-bold text-slate-400 mb-1">
                <section.icon className={`w-4 h-4 ${section.color || 'text-slate-500'}`} />
                <span>{section.title}</span>
              </div>
              <div className="ml-4 pl-4 border-l border-slate-800 space-y-1 mt-1">
                {section.subsections.map((sub) => (
                  <button key={sub.id} onClick={() => setActiveTab(sub.id)} className={`text-[11px] w-full text-left py-2 px-3 rounded transition-colors truncate flex items-center gap-2 ${activeTab === sub.id ? 'bg-slate-800 text-white font-medium shadow-sm border-l-2 border-indigo-500' : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800/30'}`}>{sub.title}</button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>

      <main className="flex-1 flex flex-col relative">
        <header className="h-14 border-b border-slate-800 bg-[#050B14]/90 backdrop-blur flex items-center justify-between px-8 shrink-0 z-10">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-mono"><span>DOCS</span><ChevronRight className="w-3 h-3" /><span className="text-slate-300 uppercase">{activeTab}</span></div>
        </header>
        <div className="flex-1 overflow-y-auto bg-[#020617] relative scroll-smooth"><SectionRenderer activeSection={activeTab} /></div>
      </main>

    </div>
  );
}
