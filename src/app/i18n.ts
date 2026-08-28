export type Locale = "en" | "zh";

export const resolvedLocaleHeader = "x-taotao-locale";

export type ProjectStatus = "live" | "active" | "prototype";
export type ProjectTier = "activeNow" | "experiments";

export type ProjectCard = {
  name: string;
  href: string;
  status: string;
  accent: string;
  description: string;
};

export type ProjectGroup = {
  tier: ProjectTier;
  title: string;
  intro: string;
  projects: ProjectCard[];
};

export function detectLocaleFromAcceptLanguage(
  acceptLanguage: string | null | undefined,
): Locale {
  if (!acceptLanguage) {
    return "en";
  }

  const languages = acceptLanguage
    .split(",")
    .map((entry) => entry.trim().split(";")[0]?.toLowerCase())
    .filter(Boolean);

  return languages.some((language) => language === "zh" || language.startsWith("zh-"))
    ? "zh"
    : "en";
}

export function detectLocaleFromLanguageParam(
  value: string | string[] | null | undefined,
): Locale | undefined {
  const rawValue = Array.isArray(value) ? value[0] : value;

  if (!rawValue) {
    return undefined;
  }

  const normalizedValue = rawValue.trim().toLowerCase();

  if (
    normalizedValue === "zh" ||
    normalizedValue === "cn" ||
    normalizedValue === "zh-cn" ||
    normalizedValue === "zh-tw" ||
    normalizedValue === "chinese" ||
    normalizedValue === "中文"
  ) {
    return "zh";
  }

  if (
    normalizedValue === "en" ||
    normalizedValue === "en-au" ||
    normalizedValue === "en-us" ||
    normalizedValue === "english"
  ) {
    return "en";
  }

  return undefined;
}

export function resolveLocale({
  languageParam,
  acceptLanguage,
}: {
  languageParam?: string | string[] | null;
  acceptLanguage?: string | null;
}): Locale {
  return (
    detectLocaleFromLanguageParam(languageParam) ??
    detectLocaleFromAcceptLanguage(acceptLanguage)
  );
}

const projectsBase = [
  {
    name: "BetterSchool",
    href: "https://betterschool.au/",
    tier: "activeNow",
    status: "live",
    accent: "rgba(255, 190, 126, 0.48)",
    description: {
      en: "A map-led school discovery product covering all 11,034 Australian schools, with state and suburb browsing plus NSW intake-zone and catchment maps.",
      zh: "一个地图驱动的学校发现产品，覆盖全澳 11,034 所学校，支持按州和城区浏览，并提供新州入学区域与学区边界地图。",
    },
  },
  {
    name: "SayType",
    href: "https://saytype.taotao.au/",
    tier: "activeNow",
    status: "live",
    accent: "rgba(139, 217, 255, 0.46)",
    description: {
      en: "Cross-platform desktop voice input for macOS, Windows, and Linux: hold a shortcut, speak, and insert AI-transcribed text into any app.",
      zh: "面向 macOS、Windows 和 Linux 的跨平台桌面语音输入工具：按住快捷键说话，松开后把 AI 转写文字插入任何应用。",
    },
  },
  {
    name: "KanaDrill",
    href: "https://kanadrill.taotao.au/",
    tier: "activeNow",
    status: "active",
    accent: "rgba(255, 151, 188, 0.46)",
    description: {
      en: "Focused hiragana and katakana recall practice with guided drills, progress tracking, and cross-session sync.",
      zh: "专注于平假名和片假名回忆练习，通过引导式训练、进度追踪和跨会话同步建立熟练度。",
    },
  },
  {
    name: "Maths Practice",
    href: "https://mathtrainer.taotao.au/",
    tier: "activeNow",
    status: "active",
    accent: "rgba(255, 211, 102, 0.52)",
    description: {
      en: "An Australian Curriculum v9 Year 2 maths fluency trainer with adaptive practice and a parent view of progress.",
      zh: "一个对齐澳洲课程 v9 二年级内容的数学熟练度训练器，提供自适应练习和家长进度视图。",
    },
  },
  {
    name: "Voicely",
    href: "https://voicely.taotao.au/",
    tier: "activeNow",
    status: "active",
    accent: "rgba(230, 171, 255, 0.42)",
    description: {
      en: "A local-first iOS meeting transcription app that keeps sensitive audio processing on device with WhisperKit and Core ML.",
      zh: "一个本地优先的 iOS 会议转录应用，通过 WhisperKit 和 Core ML 在设备端处理敏感音频。",
    },
  },
  {
    name: "EverLog",
    href: "https://everlog.taotao.au/",
    tier: "activeNow",
    status: "active",
    accent: "rgba(160, 255, 214, 0.42)",
    description: {
      en: "A private life-memory app that turns everyday moments into searchable entries with on-device transcription and temporary audio by default.",
      zh: "一个私密的生活记忆应用，把日常片段变成可搜索记录，默认在设备端转录，并只临时保留音频。",
    },
  },
  {
    name: "Threadline Studio",
    href: "https://stringart.taotao.au/",
    tier: "experiments",
    status: "live",
    accent: "rgba(255, 151, 188, 0.46)",
    description: {
      en: "Turns meaningful photos into circular nail-and-thread artwork, with a preview, pin path, and step-by-step winding instructions.",
      zh: "把有意义的照片转换成圆形钉线画，并生成效果预览、钉点路径和逐步绕线说明。",
    },
  },
  {
    name: "MathPlay AU",
    href: "https://mathplay.taotao.au/",
    tier: "experiments",
    status: "prototype",
    accent: "rgba(255, 211, 102, 0.52)",
    description: {
      en: "An interactive Australian Curriculum v9 Mathematics F-6 prototype with bilingual, child-friendly visual learning.",
      zh: "一个对齐澳洲课程 v9 学前班至六年级数学的互动原型，提供双语、儿童友好的可视化学习体验。",
    },
  },
  {
    name: "Mentii",
    href: "https://menti.taotao.au/",
    tier: "experiments",
    status: "prototype",
    accent: "rgba(120, 189, 255, 0.5)",
    description: {
      en: "Lightweight audience interaction for live sessions, voting, prompts, and host-controlled participation.",
      zh: "面向现场环节的轻量观众互动工具，支持投票、提示和主持人控制的参与流程。",
    },
  },
  {
    name: "Veiled Roundtable",
    href: "https://avalon.taotao.au/",
    tier: "experiments",
    status: "prototype",
    accent: "rgba(142, 226, 255, 0.44)",
    description: {
      en: "A mobile Avalon room assistant for hidden-role reveals, quest voting, Merlin assassination, and AI fill-ins for short tables.",
      zh: "一个移动端阿瓦隆房间助手，支持隐藏身份揭示、任务投票、刺杀梅林，以及人数不足时的 AI 补位。",
    },
  },
  {
    name: "EnergyLens",
    href: "https://energy.taotao.au/",
    tier: "experiments",
    status: "prototype",
    accent: "rgba(160, 255, 214, 0.42)",
    description: {
      en: "Compares Australian electricity plans by replaying real smart-meter interval data through retailer tariff formulas.",
      zh: "把真实智能电表分时数据代入零售商资费公式，比较澳洲电力方案的实际成本。",
    },
  },
  {
    name: "CaseMap",
    href: "https://casemap.taotao.au/",
    tier: "experiments",
    status: "prototype",
    accent: "rgba(186, 168, 255, 0.46)",
    description: {
      en: "An AI preparation map for Chinese debate, turning motions into argument pools, clash routes, and attack-defense prep.",
      zh: "一个中文辩论 AI 备赛地图，把辩题拆成立论池、交锋路线和攻防准备。",
    },
  },
  {
    name: "AI Ops Canvas",
    href: "https://mindboard.taotao.au/",
    tier: "experiments",
    status: "prototype",
    accent: "rgba(139, 217, 255, 0.46)",
    description: {
      en: "An AI operations canvas for mapping workflows, roles, tools, and hand-offs before turning an idea into a working system.",
      zh: "一个 AI 运营画布，在把想法变成可运行系统之前，先梳理流程、角色、工具和交接关系。",
    },
  },
] as const satisfies readonly {
  name: string;
  href: string;
  tier: ProjectTier;
  status: ProjectStatus;
  accent: string;
  description: Record<Locale, string>;
}[];

export const translations = {
  en: {
    projectStatus: {
      live: "Live product",
      active: "Active build",
      prototype: "Prototype",
    },
    projectTiers: {
      activeNow: {
        title: "Active now",
        intro: "The products receiving most of my build time and attention right now.",
      },
      experiments: {
        title: "More live experiments",
        intro: "Working explorations that remain online, useful, and open to iteration.",
      },
    },
    contactLinks: [
      {
        name: "GitHub",
        href: "https://github.com/hellotaotao",
      },
      {
        name: "Email",
        href: "mailto:hellotaotao@gmail.com",
      },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/ta0wang",
      },
    ],
    spotlightStats: [
      {
        label: "Base",
        value: "Adelaide, Australia",
      },
      {
        label: "Priority",
        value: "Useful workflows and sharp UX",
      },
      {
        label: "Mode",
        value: "Small products, fast iteration",
      },
    ],
    heroMetrics: [
      {
        label: "Current home",
        value: "taotao.au is the main hub for live products, active builds, and updates.",
      },
      {
        label: "Build style",
        value: "Simple interfaces, quick feedback loops, and steady practical refinement.",
      },
      {
        label: "Focus areas",
        value: "AI, productivity, education, games, and voice-first software with real utility.",
      },
    ],
    motionSignals: [
      {
        label: "Pulse",
        value: "Useful AI",
      },
      {
        label: "Priority",
        value: "Fast trial",
      },
      {
        label: "Bias",
        value: "Clean UX",
      },
    ],
    focusAreas: [
      "Practical AI products",
      "Education",
      "Productivity tools",
      "Voice-first software",
    ],
    nowItems: [
      "Focusing current build time on BetterSchool, SayType, KanaDrill, Maths Practice, Voicely, and EverLog.",
      "Turning active builds into dependable products through short build-test-ship loops.",
      "Keeping live experiments available without letting them crowd out the work receiving attention now.",
    ],
    hero: {
      eyebrow: "taotao.au",
      badges: ["Adelaide-based builder", "Useful AI over AI spectacle"],
      title: "Tao Wang",
      lead: "I build practical AI products, tools, and experiments.",
      body: "Based in Adelaide, I work on useful software that is simple, fast to try, and grounded in real-world problems. This site is the main hub for my current products, ideas, and ongoing work.",
      projectsCta: "View current projects",
      contactCta: "Get in touch",
      signalsLabel: "Current build signals",
    },
    spotlight: {
      label: "Right now",
      title: "Shipping small, useful products with AI where it actually helps.",
      copy: "The work is biased toward fast time-to-value, clean interfaces, and real workflows instead of novelty for its own sake.",
    },
    projects: {
      label: "Selected work",
      title: "Current projects",
      intro:
        "Current products first, followed by live experiments that are still useful to explore.",
    },
    about: {
      label: "Profile",
      title: "About",
      copy: [
        "I like building software that feels immediately useful: products with a clear purpose, simple interfaces, and enough technical depth to keep getting better over time.",
        "My work often sits at the intersection of AI, productivity, education, and practical web products.",
      ],
      focusLabel: "Focus areas",
    },
    now: {
      label: "In motion",
      title: "Now",
    },
    contact: {
      label: "Open line",
      title: "Contact",
      intro:
        "The easiest way to find me is through GitHub or email. If we are discussing products, prototypes, or practical AI ideas, feel free to reach out.",
    },
  },
  zh: {
    projectStatus: {
      live: "已上线产品",
      active: "活跃开发中",
      prototype: "原型",
    },
    projectTiers: {
      activeNow: {
        title: "当前投入",
        intro: "目前获得我最多构建时间和注意力的产品。",
      },
      experiments: {
        title: "更多线上实验",
        intro: "仍然在线、可以使用，并会继续迭代的探索项目。",
      },
    },
    contactLinks: [
      {
        name: "GitHub",
        href: "https://github.com/hellotaotao",
      },
      {
        name: "Email",
        href: "mailto:hellotaotao@gmail.com",
      },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/ta0wang",
      },
    ],
    spotlightStats: [
      {
        label: "位置",
        value: "澳大利亚阿德莱德",
      },
      {
        label: "优先级",
        value: "有用的流程和清晰的体验",
      },
      {
        label: "节奏",
        value: "小产品，快速迭代",
      },
    ],
    heroMetrics: [
      {
        label: "当前主页",
        value: "taotao.au 是线上产品、开发中项目和更新的主要入口。",
      },
      {
        label: "构建方式",
        value: "简单界面、快速反馈循环，以及持续的实用改进。",
      },
      {
        label: "关注方向",
        value: "AI、效率、教育、游戏，以及真正有用的语音优先软件。",
      },
    ],
    motionSignals: [
      {
        label: "脉冲",
        value: "有用的 AI",
      },
      {
        label: "优先级",
        value: "快速试用",
      },
      {
        label: "偏好",
        value: "干净体验",
      },
    ],
    focusAreas: ["实用 AI 产品", "教育", "效率工具", "语音优先软件"],
    nowItems: [
      "当前主要投入 BetterSchool、SayType、KanaDrill、Maths Practice、Voicely 和 EverLog。",
      "通过短周期的构建、测试和发布，把活跃开发项目打磨成可靠产品。",
      "保留可用的线上实验，但不让它们淹没现在真正获得投入的工作。",
    ],
    hero: {
      eyebrow: "taotao.au",
      badges: ["常驻阿德莱德的产品构建者", "重视有用 AI，而不是 AI 表演"],
      title: "Tao Wang",
      lead: "我构建实用的 AI 产品、工具和实验。",
      body: "我在阿德莱德工作，专注于简单、容易试用、并扎根真实问题的软件。这个网站是我当前产品、想法和持续工作的主要入口。",
      projectsCta: "查看当前项目",
      contactCta: "联系我",
      signalsLabel: "当前构建信号",
    },
    spotlight: {
      label: "现在",
      title: "在 AI 真正有帮助的地方，发布小而实用的产品。",
      copy: "这些工作偏向快速体现价值、干净界面和真实流程，而不是为了新奇而新奇。",
    },
    projects: {
      label: "精选作品",
      title: "当前项目",
      intro: "先展示当前产品，再展示仍然值得探索的线上实验。",
    },
    about: {
      label: "简介",
      title: "关于",
      copy: [
        "我喜欢构建能立刻体现用途的软件：目标清楚、界面简单，并且有足够技术深度，可以持续变得更好。",
        "我的工作经常落在 AI、效率、教育和实用网页产品的交汇处。",
      ],
      focusLabel: "关注方向",
    },
    now: {
      label: "进行中",
      title: "现在",
    },
    contact: {
      label: "联系方式",
      title: "联系",
      intro:
        "最容易找到我的方式是 GitHub 或邮件。如果你想聊产品、原型或实用 AI 想法，欢迎联系。",
    },
  },
} as const;

const projectTierOrder: readonly ProjectTier[] = ["activeNow", "experiments"];

export function getProjectGroups(locale: Locale): ProjectGroup[] {
  const t = translations[locale];

  return projectTierOrder.map((tier) => ({
    tier,
    title: t.projectTiers[tier].title,
    intro: t.projectTiers[tier].intro,
    projects: projectsBase
      .filter((project) => project.tier === tier)
      .map((project) => ({
        name: project.name,
        href: project.href,
        accent: project.accent,
        status: t.projectStatus[project.status],
        description: project.description[locale],
      })),
  }));
}
