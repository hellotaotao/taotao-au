import {
  BookOpenTextIcon,
  FunnelIcon,
  ChatsIcon,
  MapPinIcon,
  MaskHappyIcon,
  MathOperationsIcon,
  MegaphoneIcon,
  MicrophoneIcon,
  PuzzlePieceIcon,
  QuotesIcon,
  RacquetIcon,
  ScribbleLoopIcon,
  StarFourIcon,
  SwapIcon,
  TranslateIcon,
  WaveformIcon,
} from "@phosphor-icons/react/dist/ssr";

const icons = {
  tubefilter: FunnelIcon,
  quotaswap: SwapIcon,
  typealoud: MicrophoneIcon,
  betterschool: MapPinIcon,
  kanadrill: TranslateIcon,
  "maths-practice": MathOperationsIcon,
  voicely: WaveformIcon,
  everlog: BookOpenTextIcon,
  "threadline-studio": ScribbleLoopIcon,
  "mathplay-au": PuzzlePieceIcon,
  mentii: MegaphoneIcon,
  "veiled-roundtable": MaskHappyIcon,
  badinstinct: RacquetIcon,
  yourstory: QuotesIcon,
  casemap: ChatsIcon,
};

export function ProductIcon({ id }: { id: string }) {
  const Icon = icons[id as keyof typeof icons];
  return <Icon weight="duotone" aria-hidden="true" />;
}

export function SparkIcon() {
  return <StarFourIcon weight="regular" aria-hidden="true" />;
}
