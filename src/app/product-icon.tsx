import {
  BookOpenTextIcon,
  ChatsIcon,
  FlowArrowIcon,
  LightningIcon,
  MapPinIcon,
  MaskHappyIcon,
  MathOperationsIcon,
  MegaphoneIcon,
  MicrophoneIcon,
  PuzzlePieceIcon,
  ScribbleLoopIcon,
  StarFourIcon,
  TranslateIcon,
  WaveformIcon,
} from "@phosphor-icons/react/dist/ssr";

const icons = {
  saytype: MicrophoneIcon,
  betterschool: MapPinIcon,
  kanadrill: TranslateIcon,
  "maths-practice": MathOperationsIcon,
  voicely: WaveformIcon,
  everlog: BookOpenTextIcon,
  "threadline-studio": ScribbleLoopIcon,
  "mathplay-au": PuzzlePieceIcon,
  mentii: MegaphoneIcon,
  "veiled-roundtable": MaskHappyIcon,
  energylens: LightningIcon,
  casemap: ChatsIcon,
  "ai-ops-canvas": FlowArrowIcon,
};

export function ProductIcon({ id }: { id: string }) {
  const Icon = icons[id as keyof typeof icons];
  return <Icon weight="duotone" aria-hidden="true" />;
}

export function SparkIcon() {
  return <StarFourIcon weight="regular" aria-hidden="true" />;
}
