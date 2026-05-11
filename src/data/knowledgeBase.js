export const navigation = [
  {
    label: '总览',
    items: ['overview', 'system-flow', 'checklist'],
  },
  {
    label: '0. CODE 底层引擎',
    items: ['capture', 'organize', 'distill', 'express'],
  },
  {
    label: 'PARA 四库',
    items: ['project', 'area', 'resource', 'archive'],
  },
];

export const modules = [
  {
    id: 'overview',
    title: '第二大脑构建系统',
    eyebrow: 'V16.0 深度熔铸版',
    subtitle: '把信息从“收藏”推进到“产出”：用 CODE 运转知识，用 PARA 承载职责与资产。',
    tone: 'indigo',
    visual: 'overview',
    summaryCards: [
      {
        title: '最大化 ROA',
        meta: 'Attention -> Returns',
        text: '像思考 ROI 一样思考注意力。系统必须返还有价值的回报，而不是继续消耗精力。',
      },
      {
        title: 'JIT 项目管理',
        meta: '按需及时',
        text: '避免过早优化。创作在发散探索与收敛交付之间往返摆动，只在需要时推进。',
      },
      {
        title: '心流运作',
        meta: 'Flow-Based',
        text: '通过占位法和中间包降低启动阻力，让专注更容易进入、暂停和恢复。',
      },
    ],
    sections: [
      {
        title: '重构后的信息架构',
        text: '这个展示站不再按长文平铺，而是按“目标 -> CODE -> PARA -> 落地清单”组织。阅读者可以先理解系统为什么存在，再进入具体操作。',
        points: ['系统核心目标', 'CODE 运作引擎', 'PARA 四类容器', '流转图与一键落地清单'],
      },
      {
        title: '展示策略',
        text: '保留原站的暗色仪表盘、侧边导航、可视化图解和交互卡片；把内容改成结构化数据，方便继续增删模块。',
        points: ['数据与组件分离', '视觉组件复用', '移动端侧栏', '深浅色主题'],
      },
    ],
  },
  {
    id: 'capture',
    title: 'C - Capture 捕捉',
    eyebrow: '从消费转向长期投入',
    subtitle: '只让真正有共鸣、能回应长期问题的信息进入系统。',
    tone: 'yellow',
    visual: 'capture',
    summaryCards: [
      {
        title: '思维转变',
        meta: 'Consumer -> Investor',
        text: '从追逐转瞬即逝的灵感，转向长期学习与造物投入，建立自己头脑的图书馆。',
      },
      {
        title: '最高过滤器',
        meta: '12 Favorite Problems',
        text: '每次看到新信息，都问它能否帮助解决自己的 12 个核心难题之一。',
      },
      {
        title: '捕捉标准',
        meta: 'Resonate',
        text: '只收集那些让你心头一颤的内容，先关注当下共鸣，再考虑如何拼接大局。',
      },
    ],
    sections: [
      {
        title: '落地动作',
        text: '把 12 个核心难题作为独立笔记，放在 Area/23-系统底座/00-我的12个核心难题.md。',
        points: ['能回应核心难题：进入 Inbox', '不能回应核心难题：直接丢弃', '先捕捉共鸣，不急着分类到完美位置'],
      },
    ],
  },
  {
    id: 'organize',
    title: 'O - Organize 组织',
    eyebrow: '预先就位',
    subtitle: '像开火前备菜一样，把结构摆好，让真正创作时更快、更省力。',
    tone: 'green',
    visual: 'organize',
    summaryCards: [
      {
        title: 'Mise-en-place',
        meta: '烹饪隐喻',
        text: '在创作前把材料、工具和位置摆好，减少开始工作时的认知摩擦。',
      },
      {
        title: '跨平台镜像',
        meta: 'Same Structure',
        text: '文件管理器、笔记软件、待办清单中严格复制同一份 PARA 目录结构。',
      },
      {
        title: '组织目的',
        meta: '发现新思路',
        text: '组织不是为了收藏整齐，而是解决“暂不可执行的信息”和“可执行任务”的冲突。',
      },
    ],
    sections: [
      {
        title: '判断原则',
        text: '当信息可以被行动化，就向 Project 靠近；当它维持长期标准，就放入 Area；当它只是素材或兴趣，就留在 Resource。',
        points: ['结构服务于下一步行动', '同名文件夹可以跨 Area 与 Resource 存在', '减少环境切换成本'],
      },
    ],
  },
  {
    id: 'distill',
    title: 'D - Distill 提炼',
    eyebrow: '渐进式摘要',
    subtitle: '让笔记逐层压缩，直到它能被快速发现、理解和复用。',
    tone: 'blue',
    visual: 'distill',
    summaryCards: [
      {
        title: '平衡点',
        meta: 'Discoverability / Understanding',
        text: '既要让未来的自己能找到，也要让未来的自己能立刻看懂。',
      },
      {
        title: '见机而作',
        meta: 'Opportunistically',
        text: '不是每条笔记都做全套摘要，而是在复查、使用、产出时顺手压缩。',
      },
      {
        title: '目标',
        meta: '1% Remix',
        text: '最终把信息转化为原创产出、SOP、文章、演示或可复用中间包。',
      },
    ],
    sections: [
      {
        title: '5 个层级',
        text: '原始笔记、加粗重点、高亮标注、要点摘要、原创再混编。',
        points: ['先保留，再加粗', '再高亮真正共鸣的句子', '最后压缩成自己的表达'],
      },
    ],
  },
  {
    id: 'express',
    title: 'E - Express 表达',
    eyebrow: '中间包与交互',
    subtitle: '让知识离开库房，进入项目、演示、传播与价值交换。',
    tone: 'rose',
    visual: 'interact',
    summaryCards: [
      {
        title: '中间包',
        meta: 'Intermediate Packets',
        text: '把大任务拆成能独立完成、能被未来项目复用的小单元。',
      },
      {
        title: '交互模式',
        meta: 'INTERACT',
        text: '不要只被动写笔记，通过看、写、画、产出、演示、传播与知识较劲。',
      },
      {
        title: '表达目标',
        meta: 'Ship',
        text: '项目的唯一目的就是产出，表达是第二大脑闭环的出口。',
      },
    ],
    sections: [
      {
        title: '六种交互',
        text: 'SEE、WRITE、DRAW、PRODUCE、PERFORM、SELL。',
        points: ['放到不同情境中看', '写摘要与批评', '画示意图', '产出原创内容', '演示给他人', '教会他人并交换价值'],
      },
    ],
  },
  {
    id: 'project',
    title: 'Project 项目',
    eyebrow: 'Express 的主战场',
    subtitle: '具有明确目标和截止日期的一系列任务，是最具可行动性的板块。',
    tone: 'orange',
    visual: 'project',
    summaryCards: [
      {
        title: '定义',
        meta: '目标 + 截止日期',
        text: '项目聚焦当下交付，受时间约束，所有组织都应服务于产出。',
      },
      {
        title: '裁判机制',
        meta: '艾森豪威尔盒子',
        text: '用物理文件夹矩阵替代复杂标签，降低维护成本。',
      },
      {
        title: '结项',
        meta: 'Asset Transfer',
        text: '项目结束时，把高价值中间包、SOP、复盘总结迁移到对应 Area。',
      },
    ],
    sections: [
      {
        title: '执行黑客',
        text: '规划、启动、执行、暂停、结项。每个阶段都要降低阻力，并留下能接续心流的状态说明。',
        points: ['战略三部曲：诊断、指导方针、行动计划', '想法群岛：先标题、再拖素材、最后架桥', '暂停时写状态小结，给明天一个启动按钮'],
      },
    ],
  },
  {
    id: 'area',
    title: 'Area 领域',
    eyebrow: 'Organize 的宪法',
    subtitle: '长期负责的标准，没有截止日期，是系统的守门员和宪法。',
    tone: 'green',
    visual: 'area',
    summaryCards: [
      {
        title: '定义',
        meta: '长期标准',
        text: '健康、工作、财务、关系等需要持续维护的责任，都属于 Area。',
      },
      {
        title: '核心机制',
        meta: '12 个难题',
        text: 'Area 中的系统底座负责过滤 Resource，让进入系统的信息回应长期问题。',
      },
      {
        title: '维护心法',
        meta: 'Slow Burn',
        text: '领域不是冲刺，而是慢火烹饪。它维护标准，也承接项目沉淀出的资产。',
      },
    ],
    sections: [
      {
        title: '极简目录',
        text: '文档建议将 Area 收敛到生活、工作、系统底座三类，避免为了分类而分类。',
        points: ['21-我的生活', '22-我的工作', '23-系统底座：含 12 个核心难题'],
      },
    ],
  },
  {
    id: 'resource',
    title: 'Resource 资源',
    eyebrow: 'Capture & Distill 的工厂',
    subtitle: '感兴趣的主题、外部素材、灵感和未来可能有用的知识加工厂。',
    tone: 'blue',
    visual: 'resource',
    summaryCards: [
      {
        title: '定位',
        meta: '素材库',
        text: 'Resource 存放“别人写的”或外部来的素材，用来支持兴趣与项目。',
      },
      {
        title: '笔记特质',
        meta: '有用即可',
        text: '笔记不需要完美，只要对未来的自己有用，并能通过提炼逐步提高密度。',
      },
      {
        title: '语境切换',
        meta: 'Change the Form',
        text: '当素材理不顺时，按时间、顺序、优先级、目标、大小、主题、问答或形状重排。',
      },
    ],
    sections: [
      {
        title: '具象化目录',
        text: 'Resource 可以包含文档与阅读、视觉与灵感、影音与书签、工具与配置、兴趣百科。',
        points: ['30-资源/00-收件箱', '31-文档与阅读', '32-视觉与灵感', '33-影音与书签', '34-工具与配置', '35-兴趣百科'],
      },
    ],
  },
  {
    id: 'archive',
    title: 'Archive 归档',
    eyebrow: 'Organize 的终局',
    subtitle: '保存不再活跃的内容，腾空大脑带宽，同时保证未来能快速回溯。',
    tone: 'slate',
    visual: 'archive',
    summaryCards: [
      {
        title: '定义',
        meta: '不再活跃',
        text: '完成、暂停或放弃的项目与资料都进入 Archive，不继续占据当前系统。',
      },
      {
        title: '目录结构',
        meta: '年份切片',
        text: '一层按年份，二层复刻 Projects / Areas / Resources，既清爽又可追溯。',
      },
      {
        title: '归档心法',
        meta: 'Reset',
        text: '每年大扫除，把当前内容保存到 Archive 中，允许系统重新变轻。',
      },
    ],
    sections: [
      {
        title: '归档动作',
        text: '完成的内容确认交付后归档；放弃的内容必须留下痕迹，写明原因后归档。',
        points: ['Completed：确认交付后归档', 'Abandoned：写明放弃原因后归档', '每次归档都给当前系统减负'],
      },
    ],
  },
  {
    id: 'system-flow',
    title: '系统运作流转图',
    eyebrow: '从外部信息到可复用资产',
    subtitle: 'Resource 捕捉与提炼，Project 组织产出，Area 沉淀标准，Archive 完成重置。',
    tone: 'indigo',
    visual: 'flow',
    summaryCards: [
      {
        title: 'Resource',
        meta: 'C & D',
        text: '外部信息经过 Area / 12 难题过滤，进入 Capture 与 Distill。',
      },
      {
        title: 'Project',
        meta: 'E',
        text: '建立元计划，从 Resource 抓取素材，搭建想法群岛，拆成中间包并交付。',
      },
      {
        title: 'Area / Archive',
        meta: 'O',
        text: '产出的通用 SOP 沉淀为 Area 资产，项目结束后归档重置。',
      },
    ],
    sections: [
      {
        title: '一句话理解',
        text: '信息不是被收藏，而是被过滤、加工、表达、沉淀和归档。',
        points: ['先看是否有共鸣', '再看能否服务核心难题', '最终必须能进入行动或资产'],
      },
    ],
  },
  {
    id: 'checklist',
    title: '落地自检清单',
    eyebrow: 'V16.1 一键落地',
    subtitle: '用少量判断问题，把内容快速放进正确位置。',
    tone: 'teal',
    visual: 'checklist',
    summaryCards: [
      {
        title: '谁写的',
        meta: 'Ownership',
        text: '我写的、用于维护标准的内容偏 Area；别人写的、可参考学习的内容偏 Resource。',
      },
      {
        title: '能否直接给别人学',
        meta: 'Reusable',
        text: '能直接教学或复用的内容更像 Resource；太私人、太业务化的内容更像 Area。',
      },
      {
        title: '是否仍然活跃',
        meta: 'Active',
        text: '不再活跃的项目或资料，进入 Archive，给当前系统释放空间。',
      },
    ],
    sections: [
      {
        title: '最低可行目录',
        text: '先把目录跑起来，再根据真实使用增加细分。系统的价值来自流转，而不是一次性设计完美。',
        points: ['10-项目', '20-领域', '30-资源', '40-归档'],
      },
    ],
  },
];

export const moduleById = Object.fromEntries(modules.map((item) => [item.id, item]));

export const toneStyles = {
  blue: {
    icon: 'text-blue-500',
    soft: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    text: 'text-blue-600 dark:text-blue-300',
    ring: 'ring-blue-500/20',
  },
  green: {
    icon: 'text-emerald-500',
    soft: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    text: 'text-emerald-600 dark:text-emerald-300',
    ring: 'ring-emerald-500/20',
  },
  indigo: {
    icon: 'text-indigo-500',
    soft: 'bg-indigo-500/10',
    border: 'border-indigo-500/30',
    text: 'text-indigo-600 dark:text-indigo-300',
    ring: 'ring-indigo-500/20',
  },
  orange: {
    icon: 'text-orange-500',
    soft: 'bg-orange-500/10',
    border: 'border-orange-500/30',
    text: 'text-orange-600 dark:text-orange-300',
    ring: 'ring-orange-500/20',
  },
  rose: {
    icon: 'text-rose-500',
    soft: 'bg-rose-500/10',
    border: 'border-rose-500/30',
    text: 'text-rose-600 dark:text-rose-300',
    ring: 'ring-rose-500/20',
  },
  yellow: {
    icon: 'text-amber-500',
    soft: 'bg-amber-500/10',
    border: 'border-amber-500/30',
    text: 'text-amber-600 dark:text-amber-300',
    ring: 'ring-amber-500/20',
  },
  slate: {
    icon: 'text-slate-500 dark:text-slate-300',
    soft: 'bg-slate-500/10',
    border: 'border-slate-500/30',
    text: 'text-slate-600 dark:text-slate-300',
    ring: 'ring-slate-500/20',
  },
  teal: {
    icon: 'text-teal-500',
    soft: 'bg-teal-500/10',
    border: 'border-teal-500/30',
    text: 'text-teal-600 dark:text-teal-300',
    ring: 'ring-teal-500/20',
  },
};

export const paraQuadrants = [
  {
    title: '11-重要且紧急',
    subtitle: 'Q1 火力全开区',
    tone: 'rose',
    limit: '最多 3 个',
    text: '今天的青蛙。超过 3 个就必须先移走一个。',
  },
  {
    title: '12-重要不紧急',
    subtitle: 'Q2 核心成长区',
    tone: 'yellow',
    limit: '必须有截止日期',
    text: '主动构建未来的地方，是项目系统里最值得保护的区块。',
  },
  {
    title: '13-紧急不重要',
    subtitle: 'Q3 噪音区',
    tone: 'blue',
    limit: '速战速决',
    text: '别人的急事或琐碎流程，尽量委托、模板化或快速处理。',
  },
  {
    title: '14-不重要不紧急',
    subtitle: 'Q4 孵化与冷冻池',
    tone: 'slate',
    limit: '一个月无动作则清理',
    text: '临时点子和想玩的东西可以冷冻，不要占据活跃看板。',
  },
];

export const distillLayers = [
  { label: '原始笔记', value: '100%', text: '完整保留来源与上下文。' },
  { label: '加粗重点', value: '25%', text: '第一次快速压缩，标出重要段落。' },
  { label: '高亮标注', value: '20%', text: '只高亮真正与自己共鸣的内容。' },
  { label: '要点摘要', value: '5%', text: '用自己的话在顶部抓住核心。' },
  { label: '原创再混编', value: '< 1%', text: '转化为文章、SOP、演示或可复用中间包。' },
];

export const interactModes = [
  ['SEE', '放到不同情境中看，听取他人意见。'],
  ['WRITE', '做笔记，写摘要，留下自己的理解。'],
  ['DRAW', '图像化笔记，绘制示意图或流程图。'],
  ['PRODUCE', '浓缩、解读、批评、转化为原创内容。'],
  ['PERFORM', '在分享会演讲，或录制视频演示。'],
  ['SELL', '教会他人，进行价值交换。'],
];

export const systemFlow = [
  {
    title: 'Resource',
    tag: 'C & D',
    text: '外部信息 -> 12 难题过滤 -> 捕捉火花 -> 5 层提炼',
  },
  {
    title: 'Project',
    tag: 'E',
    text: '元计划 -> 抓取素材 -> 想法群岛 -> 中间包 -> 产出',
  },
  {
    title: 'Area',
    tag: 'O',
    text: '项目资产 -> SOP / 经验教训 -> 长期标准 -> 慢火维护',
  },
  {
    title: 'Archive',
    tag: 'Reset',
    text: '完成或放弃 -> 留痕 -> 年份切片 -> 清空当前系统',
  },
];

export const directoryTree = `10-项目/
  11-重要且紧急/
  12-重要不紧急/
  13-紧急不重要/
  14-不重要不紧急/

20-领域/
  21-我的生活/
  22-我的工作/
  23-系统底座/
    00-我的12个核心难题.md

30-资源/
  00-收件箱/
  31-文档与阅读/
  32-视觉与灵感/
  33-影音与书签/
  34-工具与配置/
  35-兴趣百科/

40-归档/
  2025年/`;
