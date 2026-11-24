import { getProjects, type Locale, type ProjectCard } from "./i18n";

export const hubCopy = {
  en: {
    tagline: "Useful tools. Playful experiments.",
    products: "Products",
    lab: "Lab",
    about: "About",
    featuredTitle: "Try these first",
    moreTitle: "More products",
    visitProduct: "Open",
    installProduct: "Install extension",
    labTitle: "In the lab",
    labIntro: "Works in progress, open to explore.",
    archiveLink: "Older projects",
    archiveTitle: "Older projects",
    archiveIntro: "I'm not working on these right now, but they're still online and free to try. I may pick them up again one day.",
    backToLab: "Back to the lab",
    madeBy: "Made by Tao",
    skipContent: "Skip to content",
    backToProducts: "Back to products",
    navigation: "Main navigation",
    language: "Switch language",
    hello: "Hi, I’m Tao.",
  },
  zh: {
    tagline: "实用的小工具，好玩的新尝试。",
    products: "产品",
    lab: "实验室",
    about: "关于我",
    featuredTitle: "先试试这几个",
    moreTitle: "更多产品",
    visitProduct: "打开",
    installProduct: "安装扩展",
    labTitle: "实验室里",
    labIntro: "还在打磨，也欢迎来逛逛。",
    archiveLink: "更早的项目",
    archiveTitle: "更早的项目",
    archiveIntro: "这些项目暂时没在开发，但都还在线，可以随便试。说不定哪天我会接着做。",
    backToLab: "返回实验室",
    madeBy: "Tao 制作",
    skipContent: "跳到内容",
    backToProducts: "返回产品",
    navigation: "主导航",
    language: "切换语言",
    hello: "你好，我是 Tao。",
  },
} as const;

const projectPresentation = {
  TubeFilter: {
    id: "tubefilter",
    tone: "coral",
    platform: "Chrome",
    shortDescription: {
      en: "Block YouTube Shorts & Facebook Reels.",
      zh: "屏蔽 YouTube Shorts 和 Facebook Reels。",
    },
    cta: { en: "Get TubeFilter", zh: "安装 TubeFilter" },
  },
  QuotaSwap: {
    id: "quotaswap",
    tone: "sky",
    platform: "macOS",
    shortDescription: {
      en: "Switch Claude accounts in one click.",
      zh: "一键切换 Claude 账号。",
    },
    cta: { en: "Get QuotaSwap", zh: "获取 QuotaSwap" },
  },
  TypeAloud: {
    id: "typealoud",
    tone: "blue",
    platform: "macOS · Windows · Linux",
    shortDescription: {
      en: "Free voice typing, 100% local. Your audio is never uploaded.",
      zh: "免费的语音输入软件，100% 本地处理，音频不上传。",
    },
    cta: { en: "Explore TypeAloud", zh: "了解 TypeAloud" },
  },
  BetterSchool: {
    id: "betterschool",
    tone: "yellow",
    platform: "Web",
    shortDescription: {
      en: "Choose your child's school on a map of every Australian school.",
      zh: "在全澳学校地图上，给孩子挑选学校。",
    },
    cta: { en: "Open BetterSchool", zh: "打开 BetterSchool" },
  },
  KanaDrill: {
    id: "kanadrill",
    tone: "coral",
    platform: "Web",
    shortDescription: {
      en: "Drill Japanese hiragana and katakana until they stick.",
      zh: "把日语平假名和片假名练成肌肉记忆。",
    },
    cta: { en: "Open KanaDrill", zh: "打开 KanaDrill" },
  },
  MathTrainer: {
    id: "maths-practice",
    tone: "mint",
    platform: "",
    shortDescription: {
      en: "Adaptive maths practice. Visible progress.",
      zh: "自适应数学练习，进步看得见。",
    },
    cta: { en: "", zh: "" },
  },
  Voicely: {
    id: "voicely",
    tone: "lavender",
    platform: "iPhone · iPad · Mac",
    shortDescription: {
      en: "Meeting transcripts, made on your device. Free.",
      zh: "会议转写，在你的设备上完成。免费。",
    },
    cta: { en: "Get it on the App Store", zh: "在 App Store 获取" },
  },
  EverLog: {
    id: "everlog",
    tone: "sky",
    platform: "",
    shortDescription: {
      en: "Searchable life memories.",
      zh: "可以搜索的生活记忆。",
    },
    cta: { en: "", zh: "" },
  },
  "Threadline Studio": {
    id: "threadline-studio",
    tone: "peach",
    platform: "",
    shortDescription: {
      en: "Turn photos into string art.",
      zh: "把照片变成钉线画。",
    },
    cta: { en: "", zh: "" },
  },
  "MathPlay AU": {
    id: "mathplay-au",
    tone: "yellow",
    platform: "",
    shortDescription: {
      en: "Interactive F–6 maths for the Australian Curriculum.",
      zh: "对齐澳洲课程的学前至六年级互动数学。",
    },
    cta: { en: "", zh: "" },
  },
  Mentii: {
    id: "mentii",
    tone: "coral",
    platform: "",
    shortDescription: {
      en: "Live voting and prompts for your audience.",
      zh: "让现场观众实时投票、参与互动。",
    },
    cta: { en: "", zh: "" },
  },
  "Veiled Roundtable": {
    id: "veiled-roundtable",
    tone: "sky",
    platform: "Web",
    shortDescription: {
      en: "An extra hand for Avalon night.",
      zh: "阿瓦隆聚会的小助手。",
    },
    cta: { en: "Open Veiled Roundtable", zh: "打开 Veiled Roundtable" },
  },
  "Bad Instinct": {
    id: "badinstinct",
    tone: "mint",
    platform: "Web",
    shortDescription: {
      en: "Learn where to stand in badminton doubles.",
      zh: "羽毛球双打，学会站位。",
    },
    cta: { en: "", zh: "" },
  },
  YourStory: {
    id: "yourstory",
    tone: "peach",
    platform: "Web",
    shortDescription: {
      en: "An AI interviewer for your life story.",
      zh: "人生访谈，会追问也记得住。",
    },
    cta: { en: "", zh: "" },
  },
  CaseMap: {
    id: "casemap",
    tone: "lavender",
    platform: "",
    shortDescription: {
      en: "Map your debate arguments.",
      zh: "梳理辩论思路。",
    },
    cta: { en: "", zh: "" },
  },
} as const;

export type HubProject = ProjectCard & {
  id: string;
  tone: string;
  platform: string;
  shortDescription: string;
  cta: string;
};

type ProjectName = keyof typeof projectPresentation;

const featuredNames = ["TypeAloud", "Voicely", "Veiled Roundtable"] as const satisfies readonly ProjectName[];

const moreNames = ["TubeFilter", "BetterSchool", "MathTrainer", "QuotaSwap", "KanaDrill"] as const satisfies readonly ProjectName[];

const labNames = ["Threadline Studio", "Bad Instinct", "YourStory", "CaseMap", "EverLog", "Mentii"] as const satisfies readonly ProjectName[];

// Projects that are no longer being worked on but stay online on the /archive page.
const archiveNames = ["MathPlay AU"] as const satisfies readonly ProjectName[];

export function getHubProjects(locale: Locale): {
  featured: HubProject[];
  more: HubProject[];
  lab: HubProject[];
  archive: HubProject[];
} {
  const presented = getProjects(locale).map((project): HubProject => {
    const presentation = projectPresentation[project.name as ProjectName];
    return {
      ...project,
      ...presentation,
      shortDescription: presentation.shortDescription[locale],
      cta: presentation.cta[locale],
    };
  });
  const pick = (names: readonly ProjectName[]) =>
    names.map((name) => presented.find((project) => project.name === name)!);
  return {
    featured: pick(featuredNames),
    more: pick(moreNames),
    lab: pick(labNames),
    archive: pick(archiveNames),
  };
}
