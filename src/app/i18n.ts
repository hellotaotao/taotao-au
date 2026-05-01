export type Locale = "en" | "zh";

export const resolvedLocaleHeader = "x-taotao-locale";

export type ProjectCard = {
  name: string;
  href: string;
  status: string;
  accent: string;
  description: string;
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
    name: "String Art",
    href: "https://stringart.taotao.au/",
    accent: "rgba(255, 151, 188, 0.46)",
    description: {
      en: "A visual web tool for designing string-art patterns and turning simple geometry into shareable creations.",
      zh: "一个可视化网页工具，用来设计弦线艺术图案，把简单几何变成可分享的作品。",
    },
  },
  {
    name: "Mindboard",
    href: "https://mindboard.taotao.au/",
    accent: "rgba(139, 217, 255, 0.46)",
    description: {
      en: "A calm thinking board for arranging ideas spatially, shaping rough thoughts, and exploring connections.",
      zh: "一个安静的思考白板，用空间方式整理想法、打磨粗略思路并探索连接。",
    },
  },
  {
    name: "Mentii",
    href: "https://menti.taotao.au/",
    accent: "rgba(120, 189, 255, 0.5)",
    description: {
      en: "A lightweight audience interaction tool for live sessions, voting, and host-controlled experiences.",
      zh: "一个轻量的现场观众互动工具，支持实时环节、投票和主持人控制的体验。",
    },
  },
  {
    name: "BetterSchool.au",
    href: "https://betterschool.au/",
    accent: "rgba(255, 190, 126, 0.48)",
    description: {
      en: "A school discovery product focused on helping families compare options with map-led exploration.",
      zh: "面向家庭的学校发现产品，用地图驱动的探索方式帮助比较不同选择。",
    },
  },
  {
    name: "Voicely",
    href: "https://voicely.taotao.au/",
    accent: "rgba(230, 171, 255, 0.42)",
    description: {
      en: "A privacy-first iOS voice notes and transcription product with a dedicated public website.",
      zh: "一个隐私优先的 iOS 语音笔记和转录产品，并有独立公开网站。",
    },
  },
  {
    name: "Avalon Host",
    href: "https://avalon.taotao.au/",
    accent: "rgba(142, 226, 255, 0.44)",
    description: {
      en: "A mobile web host for in-person Avalon games and quick Avalon Lite sessions.",
      zh: "一个移动网页主持工具，用于线下阿瓦隆游戏和快速 Avalon Lite 场次。",
    },
  },
  {
    name: "Energy Plan Lens",
    href: "https://energy.taotao.au/",
    accent: "rgba(160, 255, 214, 0.42)",
    description: {
      en: "A practical energy comparison lens for making electricity plan details easier to inspect and understand.",
      zh: "一个实用的电力方案比较视角，让电费计划细节更容易查看和理解。",
    },
  },
  {
    name: "CaseMap",
    href: "https://casemap.taotao.au/",
    accent: "rgba(186, 168, 255, 0.46)",
    description: {
      en: "An AI preparation map for Chinese debate, turning motions into argument pools, clash routes, and attack-defense prep.",
      zh: "一个中文辩论 AI 备赛地图，把辩题拆成立论池、交锋路线和攻防准备。",
    },
  },
] as const;

export const translations = {
  en: {
    projectStatus: {
      live: "Live website",
      active: "Active build",
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
        href: "https://www.linkedin.com",
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
        value: "AI, productivity, education, and voice-first software with real utility.",
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
      "Keeping taotao.au current with the strongest live public project websites.",
      "Improving hands-on products like String Art, Mindboard, Mentii, BetterSchool.au, Voicely, Avalon Host, Energy Plan Lens, and CaseMap.",
      "Favoring projects that are already live, easy to try, and useful without explanation.",
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
        "A curated set of live project websites that are current, useful, and ready to try.",
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
      live: "线上网站",
      active: "开发中",
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
        href: "https://www.linkedin.com",
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
        value: "AI、效率、教育，以及真正有用的语音优先软件。",
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
      "持续更新 taotao.au，优先展示最强的线上公开项目。",
      "改进 String Art、Mindboard、Mentii、BetterSchool.au、Voicely、Avalon Host、Energy Plan Lens 和 CaseMap 等可直接试用的产品。",
      "优先展示已经上线、容易试用、并且不用解释也能体现用途的项目。",
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
      intro: "精选已经上线、当前可用、并且值得直接试用的项目网站。",
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

export function getProjectCards(locale: Locale): ProjectCard[] {
  const t = translations[locale];

  return projectsBase.map((project) => ({
    name: project.name,
    href: project.href,
    accent: project.accent,
    status: t.projectStatus.live,
    description: project.description[locale],
  }));
}
