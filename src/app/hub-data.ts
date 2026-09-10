import { getProjectGroups, type Locale, type ProjectCard } from "./i18n";

export const hubCopy = {
  "en": {
    "tagline": "Useful tools. Playful experiments.",
    "products": "Products",
    "lab": "Lab",
    "about": "About",
    "featuredTitle": "Try these first",
    "moreTitle": "More products",
    "visitProduct": "Use product",
    "installProduct": "Install extension",
    "labTitle": "In the lab",
    "labIntro": "Works in progress, open to explore.",
    "madeBy": "Made by Tao",
    "skipContent": "Skip to content",
    "backToProducts": "Back to products",
    "navigation": "Main navigation",
    "language": "Switch language",
    "hello": "Hi, I\u2019m Tao."
  },
  "zh": {
    "tagline": "\u5b9e\u7528\u7684\u5c0f\u5de5\u5177\uff0c\u597d\u73a9\u7684\u65b0\u5c1d\u8bd5\u3002",
    "products": "\u4ea7\u54c1",
    "lab": "\u5b9e\u9a8c\u5ba4",
    "about": "\u5173\u4e8e\u6211",
    "featuredTitle": "\u5148\u8bd5\u8bd5\u8fd9\u51e0\u4e2a",
    "moreTitle": "\u66f4\u591a\u4f5c\u54c1",
    "visitProduct": "\u5f00\u59cb\u4f7f\u7528",
    "installProduct": "\u5b89\u88c5\u6269\u5c55",
    "labTitle": "\u5b9e\u9a8c\u5ba4\u91cc",
    "labIntro": "\u8fd8\u5728\u6253\u78e8\uff0c\u4e5f\u6b22\u8fce\u6765\u901b\u901b\u3002",
    "madeBy": "Tao \u5236\u4f5c",
    "skipContent": "\u8df3\u5230\u5185\u5bb9",
    "backToProducts": "\u8fd4\u56de\u4ea7\u54c1",
    "navigation": "\u4e3b\u5bfc\u822a",
    "language": "\u5207\u6362\u8bed\u8a00",
    "hello": "\u4f60\u597d\uff0c\u6211\u662f Tao\u3002"
  }
} as const;

const projectPresentation = {
"TubeFilter": {
  "id": "tubefilter",
  "tone": "coral",
  "monogram": "TF",
  "platform": "Chrome",
  "shortDescription": {
    "en": "Block YouTube Shorts & Facebook Reels.",
    "zh": "\u5c4f\u853d YouTube Shorts \u548c Facebook Reels\u3002"
  },
  "cta": {
    "en": "Get TubeFilter",
    "zh": "\u5b89\u88c5 TubeFilter"
  }
},
  "SayType": {
    "id": "saytype",
    "tone": "blue",
    "monogram": "ST",
    "platform": "macOS \u00b7 Windows \u00b7 Linux",
    "shortDescription": {
      "en": "100% local, offline transcription. No subscription.",
      "zh": "100% \u672c\u5730\u79bb\u7ebf\u8f6c\u5199\uff0c\u65e0\u9700\u8ba2\u9605"
    },
    "cta": {
      "en": "Explore SayType",
      "zh": "\u4e86\u89e3 SayType"
    }
  },
  "BetterSchool": {
    "id": "betterschool",
    "tone": "yellow",
    "monogram": "BS",
    "platform": "Web",
    "shortDescription": {
      "en": "Find your next school, on the map.",
      "zh": "\u5728\u5730\u56fe\u4e0a\uff0c\u627e\u5230\u5fc3\u4eea\u7684\u5b66\u6821\u3002"
    },
    "cta": {
      "en": "Open BetterSchool",
      "zh": "\u6253\u5f00 BetterSchool"
    }
  },
  "KanaDrill": {
    "id": "kanadrill",
    "tone": "coral",
    "monogram": "KD",
    "platform": "Web",
    "shortDescription": {
      "en": "Make kana second nature.",
      "zh": "\u8ba9\u5047\u540d\uff0c\u6210\u4e3a\u808c\u8089\u8bb0\u5fc6\u3002"
    },
    "cta": {
      "en": "Open KanaDrill",
      "zh": "\u6253\u5f00 KanaDrill"
    }
  },
  "Maths Practice": {
    "id": "maths-practice",
    "tone": "mint",
    "monogram": "MP",
    "platform": "",
    "shortDescription": {
      "en": "Adaptive maths practice.",
      "zh": "\u81ea\u9002\u5e94\u6570\u5b66\u7ec3\u4e60\u3002"
    },
    "cta": {
      "en": "",
      "zh": ""
    }
  },
  "Voicely": {
    "id": "voicely",
    "tone": "lavender",
    "monogram": "V",
    "platform": "",
    "shortDescription": {
      "en": "On-device transcription. No uploads.",
      "zh": "\u672c\u5730\u8f6c\u5199\uff0c\u65e0\u9700\u4e0a\u4f20\u3002"
    },
    "cta": {
      "en": "",
      "zh": ""
    }
  },
  "EverLog": {
    "id": "everlog",
    "tone": "sky",
    "monogram": "E",
    "platform": "",
    "shortDescription": {
      "en": "Searchable life memories.",
      "zh": "\u53ef\u4ee5\u641c\u7d22\u7684\u751f\u6d3b\u8bb0\u5fc6\u3002"
    },
    "cta": {
      "en": "",
      "zh": ""
    }
  },
  "Threadline Studio": {
    "id": "threadline-studio",
    "tone": "peach",
    "monogram": "TS",
    "platform": "",
    "shortDescription": {
      "en": "Turn photos into string art.",
      "zh": "\u628a\u7167\u7247\u53d8\u6210\u9489\u7ebf\u753b\u3002"
    },
    "cta": {
      "en": "",
      "zh": ""
    }
  },
  "MathPlay AU": {
    "id": "mathplay-au",
    "tone": "yellow",
    "monogram": "MA",
    "platform": "",
    "shortDescription": {
      "en": "Play your way through maths.",
      "zh": "\u5728\u4e92\u52a8\u4e2d\u63a2\u7d22\u6570\u5b66\u3002"
    },
    "cta": {
      "en": "",
      "zh": ""
    }
  },
  "Mentii": {
    "id": "mentii",
    "tone": "coral",
    "monogram": "M",
    "platform": "",
    "shortDescription": {
      "en": "Bring your audience into the room.",
      "zh": "\u8ba9\u73b0\u573a\u89c2\u4f17\u4e00\u8d77\u53c2\u4e0e\u3002"
    },
    "cta": {
      "en": "",
      "zh": ""
    }
  },
  "Veiled Roundtable": {
    "id": "veiled-roundtable",
    "tone": "sky",
    "monogram": "VR",
    "platform": "",
    "shortDescription": {
      "en": "An extra hand for Avalon night.",
      "zh": "\u963f\u74e6\u9686\u805a\u4f1a\u7684\u5c0f\u52a9\u624b\u3002"
    },
    "cta": {
      "en": "",
      "zh": ""
    }
  },
  "EnergyLens": {
    "id": "energylens",
    "tone": "mint",
    "monogram": "EL",
    "platform": "",
    "shortDescription": {
      "en": "Compare electricity plans.",
      "zh": "\u6bd4\u8f83\u7535\u529b\u65b9\u6848\u3002"
    },
    "cta": {
      "en": "",
      "zh": ""
    }
  },
  "CaseMap": {
    "id": "casemap",
    "tone": "lavender",
    "monogram": "CM",
    "platform": "",
    "shortDescription": {
      "en": "Map your debate arguments.",
      "zh": "\u68b3\u7406\u8fa9\u8bba\u601d\u8def\u3002"
    },
    "cta": {
      "en": "",
      "zh": ""
    }
  },
  "AI Ops Canvas": {
    "id": "ai-ops-canvas",
    "tone": "peach",
    "monogram": "AI",
    "platform": "",
    "shortDescription": {
      "en": "Make your workflows visible.",
      "zh": "\u8ba9\u5de5\u4f5c\u6d41\u7a0b\u6e05\u6670\u53ef\u89c1\u3002"
    },
    "cta": {
      "en": "",
      "zh": ""
    }
  }
} as const;

export type HubProject = ProjectCard & {
  id: string;
  tone: string;
  monogram: string;
  platform: string;
  shortDescription: string;
  cta: string;
};

const featuredNames = ["SayType", "BetterSchool", "KanaDrill"] as const;

const moreNames = ["TubeFilter", "Threadline Studio"] as const;

const labNames = ["Voicely", "Maths Practice", "Veiled Roundtable", "MathPlay AU", "CaseMap", "EverLog", "Mentii", "EnergyLens"] as const;

export function getHubProjects(locale: Locale): {
  featured: HubProject[];
  more: HubProject[];
  lab: HubProject[];
} {
  const projects = getProjectGroups(locale).flatMap((group) => group.projects);
  const presented = projects.map((project): HubProject => {
    const presentation = projectPresentation[project.name as keyof typeof projectPresentation];
    return {
      ...project,
      ...presentation,
      shortDescription: presentation.shortDescription[locale],
      cta: presentation.cta[locale],
    };
  });
  return {
    featured: featuredNames.map((name) => presented.find((project) => project.name === name)!),
    more: moreNames.map((name) => presented.find((project) => project.name === name)!),
    lab: labNames.map((name) => presented.find((project) => project.name === name)!),
  };
}
