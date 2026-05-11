import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { toneStyles } from '../data/knowledgeBase';
import {
  ArchiveVisual,
  AreaVisual,
  CaptureVisual,
  ChecklistVisual,
  DistillVisual,
  FlowVisual,
  InteractVisual,
  OrganizeVisual,
  OutputShelf,
  OverviewVisual,
  ProjectVisual,
  ResourceVisual,
  TinyParaLegend,
  ToneIcon,
  ValueChain,
} from './Visuals';

const visualByType = {
  overview: OverviewVisual,
  capture: CaptureVisual,
  organize: OrganizeVisual,
  distill: DistillVisual,
  interact: InteractVisual,
  project: ProjectVisual,
  area: AreaVisual,
  resource: ResourceVisual,
  archive: ArchiveVisual,
  flow: FlowVisual,
  checklist: ChecklistVisual,
};

export function SectionView({ module }) {
  const style = toneStyles[module.tone] || toneStyles.indigo;
  const Visual = visualByType[module.visual];

  return (
    <article className="min-h-full bg-background">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <section className={`mb-6 rounded-lg border bg-card p-5 shadow-sm ring-1 ${style.border} ${style.ring}`}>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex max-w-3xl gap-4">
              <ToneIcon tone={module.tone} />
              <div>
                <div className={`mb-2 text-xs font-semibold uppercase tracking-[0.18em] ${style.text}`}>{module.eyebrow}</div>
                <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{module.title}</h1>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{module.subtitle}</p>
              </div>
            </div>

            <div className="shrink-0">
              {module.id === 'overview' ? <TinyParaLegend /> : <ValueChain />}
            </div>
          </div>
        </section>

        <section className="mb-6 grid gap-4 lg:grid-cols-3">
          {module.summaryCards.map((card) => (
            <div key={card.title} className="rounded-lg border border-border bg-card p-5 shadow-sm">
              <div className="mb-4 flex items-start justify-between gap-3">
                <h2 className="text-base font-semibold text-foreground">{card.title}</h2>
                <span className={`shrink-0 rounded border px-2 py-1 text-[11px] font-medium ${style.soft} ${style.border} ${style.text}`}>{card.meta}</span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{card.text}</p>
            </div>
          ))}
        </section>

        {Visual ? (
          <div className="mb-6">
            <Visual />
          </div>
        ) : null}

        <section className="grid gap-4 lg:grid-cols-2">
          {module.sections.map((section) => (
            <div key={section.title} className="rounded-lg border border-border bg-card p-5 shadow-sm">
              <h2 className="text-base font-semibold text-foreground">{section.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{section.text}</p>
              <div className="mt-5 space-y-2">
                {section.points.map((point) => (
                  <div key={point} className="flex gap-3 rounded border border-border bg-background px-3 py-2 text-sm text-muted-foreground">
                    <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${style.icon}`} />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="rounded-lg border border-border bg-card p-5 shadow-sm">
            <h2 className="text-base font-semibold text-foreground">下一步使用方式</h2>
            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              {[
                '先判断内容属于 Project、Area、Resource 还是 Archive。',
                '再根据 CODE 判断它处在捕捉、组织、提炼还是表达阶段。',
                '最后把能复用的产物沉淀为资产，而不是只停留在收藏。',
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <ArrowRight className={`mt-0.5 h-4 w-4 shrink-0 ${style.icon}`} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {module.id === 'project' || module.id === 'system-flow' ? (
          <section className="mt-6">
            <OutputShelf />
          </section>
        ) : null}
      </div>
    </article>
  );
}
