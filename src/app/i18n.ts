export type Locale = "en" | "zh";

export const resolvedLocaleHeader = "x-taotao-locale";

export type ProjectStatus = "live" | "active" | "prototype";

export type ProjectCard = {
  name: string;
  href: string;
  status: string;
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
    name: "TubeFilter",
    href: "https://chromewebstore.google.com/detail/tubefilter-%E2%80%93-block-youtub/mfhflkedbldmbkfnpekebilfcnpfbafh",
    status: "live",
    description: {
      en: "A Chrome extension that blocks YouTube Shorts and Facebook Reels for a less distracting feed.",
      zh: "屏蔽 YouTube Shorts 和 Facebook Reels 的 Chrome 扩展，让信息流少些干扰。",
    },
  },
  {
    name: "QuotaSwap",
    href: "https://quotaswap.taotao.au/",
    status: "live",
    description: {
      en: "A macOS menu bar app that switches the Claude desktop app between accounts in one click, keeps your Code sessions, and shows each account's usage.",
      zh: "一个 macOS 菜单栏应用，一键切换 Claude 桌面版账号，保留 Code 会话，并显示每个账号的用量。",
    },
  },
  {
    name: "BetterSchool",
    href: "https://betterschool.au/",
    status: "live",
    description: {
      en: "A map-led school discovery product covering all 11,034 Australian schools, with state and suburb browsing plus NSW intake-zone and catchment maps.",
      zh: "一个地图驱动的学校发现产品，覆盖全澳 11,034 所学校，支持按州和城区浏览，并提供新州入学区域与学区边界地图。",
    },
  },
  {
    name: "TypeAloud",
    href: "https://typealoud.app/",
    status: "live",
    description: {
      en: "100% local transcription on Mac and Windows. After a one-time model download, dictate offline with no account, subscription, or word limits. Audio stays on-device in local mode. Optional cloud transcription and translation upload audio to your chosen provider.",
      zh: "在 Mac 和 Windows 上进行 100% 本地转写。一次下载模型，即可离线输入，无需账号或订阅，没有词数额度。本地模式下音频不上传；可选云端转写与翻译会将音频发送给你选择的服务商。",
    },
  },
  {
    name: "KanaDrill",
    href: "https://kanadrill.taotao.au/",
    status: "active",
    description: {
      en: "Focused hiragana and katakana recall practice with guided drills, progress tracking, and cross-session sync.",
      zh: "专注于平假名和片假名回忆练习，通过引导式训练、进度追踪和跨会话同步建立熟练度。",
    },
  },
  {
    name: "MathTrainer",
    href: "https://mathtrainer.taotao.au/",
    status: "active",
    description: {
      en: "Adaptive maths practice with a parent progress view to track learning over time.",
      zh: "自适应数学练习，搭配家长进度视图，持续追踪学习表现。",
    },
  },
  {
    name: "Voicely",
    href: "https://apps.apple.com/app/id6746871154",
    status: "live",
    description: {
      en: "Meeting transcription for iPhone, iPad and Mac. The transcript builds while you record, the speech models run on your device, and audio is never uploaded to be transcribed. Free, with no account.",
      zh: "适用于 iPhone、iPad 和 Mac 的会议转写应用。边录音边出文字，语音模型在你的设备上运行，音频不会上传转写。免费，无需账号。",
    },
  },
  {
    name: "EverLog",
    href: "https://everlog.taotao.au/",
    status: "active",
    description: {
      en: "A private life-memory app that turns everyday moments into searchable entries with on-device transcription and temporary audio by default.",
      zh: "一个私密的生活记忆应用，把日常片段变成可搜索记录，默认在设备端转录，并只临时保留音频。",
    },
  },
  {
    name: "Threadline Studio",
    href: "https://stringart.taotao.au/",
    status: "live",
    description: {
      en: "Turns meaningful photos into circular nail-and-thread artwork, with a preview, pin path, and step-by-step winding instructions.",
      zh: "把有意义的照片转换成圆形钉线画，并生成效果预览、钉点路径和逐步绕线说明。",
    },
  },
  {
    name: "MathPlay AU",
    href: "https://mathplay.taotao.au/",
    status: "prototype",
    description: {
      en: "An interactive Australian Curriculum v9 Mathematics F-6 prototype with bilingual, child-friendly visual learning.",
      zh: "一个对齐澳洲课程 v9 学前班至六年级数学的互动原型，提供双语、儿童友好的可视化学习体验。",
    },
  },
  {
    name: "Mentii",
    href: "https://menti.taotao.au/",
    status: "prototype",
    description: {
      en: "Lightweight audience interaction for live sessions, voting, prompts, and host-controlled participation.",
      zh: "面向现场环节的轻量观众互动工具，支持投票、提示和主持人控制的参与流程。",
    },
  },
  {
    name: "Veiled Roundtable",
    href: "https://avalon.taotao.au/",
    status: "active",
    description: {
      en: "A mobile Avalon room assistant for hidden-role reveals, quest voting, Merlin assassination, and AI fill-ins for short tables.",
      zh: "一个移动端阿瓦隆房间助手，支持隐藏身份揭示、任务投票、刺杀梅林，以及人数不足时的 AI 补位。",
    },
  },
  {
    name: "Bad Instinct",
    href: "https://badinstinct.taotao.au/",
    status: "live",
    description: {
      en: "A 3D trainer for badminton doubles positioning. Five principles drawn from BWF coaching material, each with an animated rally you can pause, slow down and orbit, then rallies where you pick where to move and compare your move with the recommended one.",
      zh: "一个 3D 羽毛球双打站位训练器。5 条站位原则取自 BWF 教练资料，每条配一段可暂停、慢放、转视角的 3D 回合演示；练习时由你决定往哪儿移动，再和推荐走位对照回放。",
    },
  },
  {
    name: "YourStory",
    href: "https://yourstory.taotao.au/",
    status: "prototype",
    description: {
      en: "An AI life-story interviewer (in Chinese) that asks follow-up questions and remembers what you have told it across sessions. Talk by voice or text, start without an account, and correct its notes when it gets a name wrong.",
      zh: "人生访谈：一个会追问、会记住你的 AI 访谈者。可以打字也可以按住说话，打开就能聊，不用先注册；它记错了人名或说法，你可以直接纠正。",
    },
  },
  {
    name: "CaseMap",
    href: "https://casemap.taotao.au/",
    status: "prototype",
    description: {
      en: "An AI preparation map for Chinese debate, turning motions into argument pools, clash routes, and attack-defense prep.",
      zh: "一个中文辩论 AI 备赛地图，把辩题拆成立论池、交锋路线和攻防准备。",
    },
  },
] as const satisfies readonly {
  name: string;
  href: string;
  status: ProjectStatus;
  description: Record<Locale, string>;
}[];


export const translations = {
  en: {
    projectStatus: {
      live: "Live product",
      active: "Active build",
      prototype: "Prototype",
    },
    contactLinks: [
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/ta0wang",
      },
    ],
    focusAreas: [
      "Practical AI products",
      "Education",
      "Productivity tools",
      "Voice-first software",
      "Games",
    ],
    nowItems: [
      "Most of my spare time goes into voice software: TypeAloud for voice typing and Voicely for meeting transcripts.",
      "Alongside those, I keep improving BetterSchool, a map of every Australian school, and QuotaSwap, a Mac menu bar app for switching Claude accounts.",
    ],
    hero: {
      lead: "I'm a full-time software engineer based in Adelaide.",
      body: "Outside work, I enjoy making tools I want to use and playful experiments that others might enjoy too. taotao.au brings these side projects together, for my own everyday use and for you to explore.",
    },
    about: {
      title: "About",
      copy: [
        "These hobby projects usually start with something I need in everyday life, or an idea I want to explore.",
      ],
      focusLabel: "Focus areas",
    },
    now: {
      title: "Lately",
    },
    contact: {
      title: "Contact",
      intro:
        "The best way to reach me is by email or LinkedIn. Project feedback, questions about using a tool, or a chat about shared interests are all welcome.",
    },
  },
  zh: {
    projectStatus: {
      live: "已上线产品",
      active: "活跃开发中",
      prototype: "原型",
    },
    contactLinks: [
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/ta0wang",
      },
    ],
    focusAreas: ["实用 AI 产品", "教育", "效率工具", "语音优先软件", "游戏"],
    nowItems: [
      "业余时间主要花在语音软件上：语音输入软件 TypeAloud，和会议转写应用 Voicely。",
      "另外也在持续改进 BetterSchool（全澳学校地图）和 QuotaSwap（切换 Claude 账号的 Mac 菜单栏应用）。",
    ],
    hero: {
      lead: "我住在阿德莱德，是一名全职软件工程师。",
      body: "工作之外，我喜欢做一些自己想用、也希望别人觉得有用的小工具，以及好玩的实验。taotao.au 收集了这些业余项目，方便我自己使用，也欢迎你来探索、试用。",
    },
    about: {
      title: "关于",
      copy: [
        "这些兴趣项目大多来自自己的日常需要，或一个想试试看的点子。",
      ],
      focusLabel: "关注方向",
    },
    now: {
      title: "最近在做什么",
    },
    contact: {
      title: "联系",
      intro:
        "如果你想联系我，欢迎发邮件或通过 LinkedIn 找到我。无论是项目反馈、使用中的问题，还是聊聊共同的兴趣，都很欢迎。",
    },
  },
} as const;

export function getProjects(locale: Locale): ProjectCard[] {
  const t = translations[locale];

  return projectsBase.map((project) => ({
    name: project.name,
    href: project.href,
    status: t.projectStatus[project.status],
    description: project.description[locale],
  }));
}
