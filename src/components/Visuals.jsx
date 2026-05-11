import { createElement, useState } from 'react';
import {
  Archive,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChefHat,
  ClipboardCheck,
  Database,
  Eye,
  FileText,
  FolderKanban,
  GitBranch,
  Inbox,
  Layers,
  Library,
  Megaphone,
  Mic2,
  Paintbrush,
  PenTool,
  RefreshCw,
  ShieldCheck,
  Store,
  Target,
  TimerReset,
  XCircle,
} from 'lucide-react';
import {
  directoryTree,
  distillLayers,
  interactModes,
  paraQuadrants,
  systemFlow,
  toneStyles,
} from '../data/knowledgeBase';

const toneChip = {
  blue: 'bg-blue-500/10 text-blue-600 dark:text-blue-300 border-blue-500/30',
  green: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border-emerald-500/30',
  indigo: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border-indigo-500/30',
  orange: 'bg-orange-500/10 text-orange-600 dark:text-orange-300 border-orange-500/30',
  rose: 'bg-rose-500/10 text-rose-600 dark:text-rose-300 border-rose-500/30',
  yellow: 'bg-amber-500/10 text-amber-600 dark:text-amber-300 border-amber-500/30',
  slate: 'bg-slate-500/10 text-slate-600 dark:text-slate-300 border-slate-500/30',
  teal: 'bg-teal-500/10 text-teal-600 dark:text-teal-300 border-teal-500/30',
};

const interactionIcons = [Eye, PenTool, Paintbrush, FileText, Mic2, Megaphone];

function VisualPanel({ title, children, note }) {
  return (
    <section className="rounded-lg border border-border bg-card p-5 shadow-sm">
      <div className="mb-5 flex flex-wrap items-start justify-between gap-3 border-b border-border pb-4">
        <h3 className="text-base font-semibold text-foreground">{title}</h3>
        {note ? <span className="rounded border border-border bg-accent px-2 py-1 text-xs text-muted-foreground">{note}</span> : null}
      </div>
      {children}
    </section>
  );
}

function MiniFolderTree() {
  return (
    <div className="space-y-2 text-xs">
      {['10-项目', '20-领域', '30-资源', '40-归档'].map((item) => (
        <div key={item} className="flex items-center gap-2 rounded border border-border bg-background px-3 py-2">
          <FolderKanban className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="font-medium text-foreground">{item}</span>
        </div>
      ))}
    </div>
  );
}

export function OverviewVisual() {
  return (
    <div className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
      <VisualPanel title="CODE 运作引擎" note="Capture -> Organize -> Distill -> Express">
        <div className="grid gap-3 sm:grid-cols-4">
          {[
            ['C', 'Capture', '捕捉共鸣'],
            ['O', 'Organize', '预先就位'],
            ['D', 'Distill', '渐进提炼'],
            ['E', 'Express', '表达产出'],
          ].map(([letter, label, text], index) => (
            <div key={letter} className="relative rounded-lg border border-border bg-background p-4">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded bg-primary text-sm font-bold text-primary-foreground">
                {letter}
              </div>
              <div className="font-semibold text-foreground">{label}</div>
              <div className="mt-1 text-xs text-muted-foreground">{text}</div>
              {index < 3 ? (
                <ArrowRight className="absolute right-3 top-5 hidden h-4 w-4 text-muted-foreground sm:block" />
              ) : null}
            </div>
          ))}
        </div>
      </VisualPanel>

      <VisualPanel title="PARA 容器地图" note="职责分离">
        <div className="grid grid-cols-2 gap-3">
          {[
            [Target, 'Project', '有截止日期的产出'],
            [Layers, 'Area', '长期维护的标准'],
            [Database, 'Resource', '兴趣与素材工厂'],
            [Archive, 'Archive', '不活跃内容重置'],
          ].map(([icon, title, text]) => (
            <div key={title} className="rounded-lg border border-border bg-background p-4">
              {createElement(icon, { className: 'mb-3 h-5 w-5 text-primary' })}
              <div className="font-semibold text-foreground">{title}</div>
              <div className="mt-1 text-xs leading-relaxed text-muted-foreground">{text}</div>
            </div>
          ))}
        </div>
      </VisualPanel>
    </div>
  );
}

export function CaptureVisual() {
  const [state, setState] = useState('idle');

  function runGate(result) {
    setState('checking');
    window.setTimeout(() => setState(result), 650);
  }

  const accepted = state === 'accepted';
  const rejected = state === 'rejected';

  return (
    <VisualPanel title="12 个核心难题安检门" note="点击模拟过滤">
      <div className="grid items-center gap-5 md:grid-cols-[1fr_auto_1fr]">
        <div className={`rounded-lg border border-border bg-background p-5 transition ${state !== 'idle' ? 'opacity-50' : ''}`}>
          <BookOpen className="mb-4 h-7 w-7 text-amber-500" />
          <div className="text-sm font-semibold text-foreground">新信息 / 新灵感</div>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">先不急着收藏，先问它是否触发共鸣，并且能否回应长期问题。</p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-amber-500/40 bg-amber-500/10">
            {state === 'checking' ? (
              <RefreshCw className="h-10 w-10 animate-spin text-amber-500" />
            ) : accepted ? (
              <CheckCircle2 className="h-10 w-10 text-emerald-500" />
            ) : rejected ? (
              <XCircle className="h-10 w-10 text-rose-500" />
            ) : (
              <ShieldCheck className="h-10 w-10 text-amber-500" />
            )}
          </div>
          <div className="text-center text-xs font-medium text-muted-foreground">12 Favorite Problems</div>
        </div>

        <div className="rounded-lg border border-border bg-background p-5">
          <Inbox className="mb-4 h-7 w-7 text-emerald-500" />
          <div className="text-sm font-semibold text-foreground">
            {accepted ? '进入 Inbox' : rejected ? '直接丢弃' : '等待判断'}
          </div>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            {accepted
              ? '这条信息可以进入系统，后续再组织、提炼和表达。'
              : rejected
                ? '没有回应长期问题，也没有必要占用注意力。'
                : 'Capture 的价值不在多收，而在让输入保持高质量。'}
          </p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap justify-center gap-3">
        <button className="rounded border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-600 dark:text-emerald-300" onClick={() => runGate('accepted')}>
          能回应核心难题
        </button>
        <button className="rounded border border-rose-500/40 bg-rose-500/10 px-4 py-2 text-xs font-semibold text-rose-600 dark:text-rose-300" onClick={() => runGate('rejected')}>
          不能，丢弃
        </button>
        <button className="rounded border border-border bg-accent px-4 py-2 text-xs font-semibold text-muted-foreground" onClick={() => setState('idle')}>
          重置
        </button>
      </div>
    </VisualPanel>
  );
}

export function OrganizeVisual() {
  return (
    <VisualPanel title="跨平台镜像结构" note="同一份 PARA">
      <div className="grid gap-4 md:grid-cols-3">
        {[
          ['文件管理器', '本地资料与项目产物'],
          ['笔记软件', '概念、SOP、复盘与素材'],
          ['待办清单', '下一步行动与截止日期'],
        ].map(([title, text]) => (
          <div key={title} className="rounded-lg border border-border bg-background p-4">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
              <ChefHat className="h-4 w-4 text-emerald-500" />
              {title}
            </div>
            <p className="mb-4 text-xs leading-relaxed text-muted-foreground">{text}</p>
            <MiniFolderTree />
          </div>
        ))}
      </div>
    </VisualPanel>
  );
}

export function DistillVisual() {
  return (
    <VisualPanel title="5 层渐进式摘要" note="发现性与理解度的平衡">
      <div className="space-y-3">
        {distillLayers.map((layer, index) => (
          <div key={layer.label} className="flex items-center gap-4">
            <div className="hidden w-20 text-right text-xs font-semibold text-muted-foreground sm:block">{layer.value}</div>
            <div
              className="rounded-lg border border-blue-500/25 bg-blue-500/10 p-4"
              style={{ width: `${100 - index * 12}%`, minWidth: 'min(100%, 17rem)' }}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-semibold text-foreground">{layer.label}</span>
                <span className="rounded border border-blue-500/30 px-2 py-0.5 text-xs text-blue-600 dark:text-blue-300">{layer.value}</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">{layer.text}</p>
            </div>
          </div>
        ))}
      </div>
    </VisualPanel>
  );
}

export function InteractVisual() {
  return (
    <VisualPanel title="INTERACT 交互模式" note="不要只被动写">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {interactModes.map(([label, text], index) => {
          const Icon = interactionIcons[index];

          return (
            <div key={label} className="rounded-lg border border-border bg-background p-4">
              <Icon className="mb-4 h-5 w-5 text-rose-500" />
              <div className="font-semibold text-foreground">{label}</div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{text}</p>
            </div>
          );
        })}
      </div>
    </VisualPanel>
  );
}

export function ProjectVisual() {
  return (
    <div className="grid gap-5 xl:grid-cols-[1fr_0.95fr]">
      <VisualPanel title="艾森豪威尔物理文件夹矩阵" note="优先级裁判">
        <div className="grid gap-3 sm:grid-cols-2">
          {paraQuadrants.map((item) => (
            <div key={item.title} className={`rounded-lg border p-4 ${toneChip[item.tone]}`}>
              <div className="text-sm font-semibold">{item.title}</div>
              <div className="mt-1 text-xs opacity-80">{item.subtitle}</div>
              <div className="mt-4 rounded border border-current/20 bg-background/50 px-2 py-1 text-xs font-semibold">{item.limit}</div>
              <p className="mt-3 text-xs leading-relaxed opacity-90">{item.text}</p>
            </div>
          ))}
        </div>
      </VisualPanel>

      <VisualPanel title="Express 执行流程" note="Planning -> Asset Transfer">
        <div className="space-y-3">
          {[
            ['规划', '诊断、指导方针、行动计划，写清期望成果。'],
            ['启动', '标题先行，拖入素材，搭建想法群岛。'],
            ['执行', '拆成中间包，降低阻力，保持心流。'],
            ['暂停', '写状态小结，停在知道下一步的位置。'],
            ['结项', '把 SOP、复盘和高价值中间包迁移到 Area。'],
          ].map(([title, text], index) => (
            <div key={title} className="flex gap-3 rounded-lg border border-border bg-background p-3">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-orange-500/10 text-xs font-bold text-orange-500">{index + 1}</div>
              <div>
                <div className="text-sm font-semibold text-foreground">{title}</div>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </VisualPanel>
    </div>
  );
}

export function AreaVisual() {
  return (
    <VisualPanel title="Area 守门员" note="长期标准">
      <div className="grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-5">
          <ShieldCheck className="mb-4 h-8 w-8 text-emerald-500" />
          <div className="text-sm font-semibold text-foreground">12 个核心难题</div>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">它不是普通清单，而是系统底座。任何进入 Resource 的信息，都要先问是否能回应这些长期问题。</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {[
            ['21-我的生活', '健康、家庭、财务、关系等个人标准。'],
            ['22-我的工作', '职业能力、项目复盘、工作 SOP。'],
            ['23-系统底座', '12 难题、目录规范、方法论维护。'],
          ].map(([title, text]) => (
            <div key={title} className="rounded-lg border border-border bg-background p-4">
              <Layers className="mb-3 h-5 w-5 text-emerald-500" />
              <div className="text-sm font-semibold text-foreground">{title}</div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </VisualPanel>
  );
}

export function ResourceVisual() {
  return (
    <VisualPanel title="Resource 加工流水线" note="Capture & Distill">
      <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
        {[
          [Library, '外部素材', '文档、阅读、视觉、影音、工具与兴趣百科。'],
          [Inbox, '收件箱', '只放有共鸣、可能有用、能支持项目的信息。'],
          [Database, '提炼工厂', '加粗、高亮、摘要、再混编为原创产出。'],
        ].map(([icon, title, text], index) => (
          <div key={title} className="contents">
            <div className="rounded-lg border border-border bg-background p-5">
              {createElement(icon, { className: 'mb-4 h-7 w-7 text-blue-500' })}
              <div className="text-sm font-semibold text-foreground">{title}</div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{text}</p>
            </div>
            {index < 2 ? <ArrowRight className="mx-auto hidden h-full w-5 text-muted-foreground md:block" /> : null}
          </div>
        ))}
      </div>
    </VisualPanel>
  );
}

export function ArchiveVisual() {
  return (
    <VisualPanel title="年份切片归档库" note="Reset">
      <div className="grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border border-border bg-background p-5">
          <TimerReset className="mb-4 h-8 w-8 text-slate-500 dark:text-slate-300" />
          <div className="text-sm font-semibold text-foreground">清空当前系统</div>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">归档不是删除，而是给当前注意力减负。完成或放弃，都应该从活跃系统中移出。</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {['2024年', '2025年', '2026年'].map((year) => (
            <div key={year} className="rounded-lg border border-slate-500/30 bg-slate-500/10 p-4">
              <Archive className="mb-4 h-6 w-6 text-slate-500 dark:text-slate-300" />
              <div className="font-semibold text-foreground">{year}</div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">Projects / Areas / Resources</p>
            </div>
          ))}
        </div>
      </div>
    </VisualPanel>
  );
}

export function FlowVisual() {
  return (
    <VisualPanel title="系统运作流转" note="输入到资产">
      <div className="grid gap-4 xl:grid-cols-4">
        {systemFlow.map((step, index) => (
          <div key={step.title} className="relative rounded-lg border border-border bg-background p-5">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded bg-primary/10 text-sm font-bold text-primary">{index + 1}</div>
              <span className="rounded border border-border bg-accent px-2 py-1 text-xs text-muted-foreground">{step.tag}</span>
            </div>
            <div className="font-semibold text-foreground">{step.title}</div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{step.text}</p>
            {index < systemFlow.length - 1 ? (
              <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 rounded-full bg-background text-muted-foreground xl:block" />
            ) : null}
          </div>
        ))}
      </div>
    </VisualPanel>
  );
}

export function ChecklistVisual() {
  return (
    <div className="grid gap-5 xl:grid-cols-[0.85fr_1.15fr]">
      <VisualPanel title="落地判断器" note="快速归类">
        <div className="space-y-3">
          {[
            ['我写的，且用于维护长期标准？', 'Area'],
            ['别人写的，主要用于参考学习？', 'Resource'],
            ['有明确目标和截止日期？', 'Project'],
            ['已经不活跃但未来可能回溯？', 'Archive'],
          ].map(([question, answer]) => (
            <div key={question} className="flex items-start gap-3 rounded-lg border border-border bg-background p-3">
              <ClipboardCheck className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />
              <div className="min-w-0">
                <div className="text-sm font-medium text-foreground">{question}</div>
                <div className="mt-1 text-xs text-muted-foreground">放入：{answer}</div>
              </div>
            </div>
          ))}
        </div>
      </VisualPanel>

      <VisualPanel title="一键落地目录" note="最低可行结构">
        <pre className="max-h-[26rem] overflow-auto rounded-lg border border-border bg-background p-4 text-xs leading-relaxed text-muted-foreground">
          {directoryTree}
        </pre>
      </VisualPanel>
    </div>
  );
}

export function ToneIcon({ tone }) {
  const style = toneStyles[tone] || toneStyles.indigo;

  return (
    <div className={`flex h-11 w-11 items-center justify-center rounded-lg border ${style.soft} ${style.border}`}>
      <GitBranch className={`h-5 w-5 ${style.icon}`} />
    </div>
  );
}

export function TinyParaLegend() {
  return (
    <div className="grid grid-cols-2 gap-2 text-xs sm:grid-cols-4">
      {[
        [Target, 'Project'],
        [Layers, 'Area'],
        [Database, 'Resource'],
        [Archive, 'Archive'],
      ].map(([icon, label]) => (
        <div key={label} className="flex items-center gap-2 rounded border border-border bg-card px-3 py-2 text-muted-foreground">
          {createElement(icon, { className: 'h-3.5 w-3.5' })}
          {label}
        </div>
      ))}
    </div>
  );
}

export function ValueChain() {
  return (
    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
      {['注意力', '共鸣', '过滤', '提炼', '表达', '资产'].map((item, index) => (
        <div key={item} className="flex items-center gap-2">
          <span className="rounded border border-border bg-card px-3 py-1.5">{item}</span>
          {index < 5 ? <ArrowRight className="h-3 w-3" /> : null}
        </div>
      ))}
    </div>
  );
}

export function OutputShelf() {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {[
        [FileText, 'SOP', '项目中反复有效的步骤。'],
        [Store, '中间包', '未来项目可复用的模块。'],
        [CheckCircle2, '复盘', '经验教训与下一次改进。'],
      ].map(([icon, title, text]) => (
        <div key={title} className="rounded-lg border border-border bg-card p-4">
          {createElement(icon, { className: 'mb-3 h-5 w-5 text-primary' })}
          <div className="text-sm font-semibold text-foreground">{title}</div>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{text}</p>
        </div>
      ))}
    </div>
  );
}
