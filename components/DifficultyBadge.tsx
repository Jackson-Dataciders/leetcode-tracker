import type { Difficulty } from "@/lib/types";

const BADGE_STYLES: Record<Difficulty, { bg: string; text: string }> = {
  Easy: { bg: "#a6e3a1", text: "#173404" },
  Medium: { bg: "#f9e2af", text: "#412402" },
  Hard: { bg: "#f38ba8", text: "#501313" },
};

interface DifficultyBadgeProps {
  difficulty: Difficulty;
}

export default function DifficultyBadge({ difficulty }: DifficultyBadgeProps) {
  const style = BADGE_STYLES[difficulty];

  return (
    <span
      className="text-[10px] font-medium px-1.5 py-0.5 rounded shrink-0"
      style={{ backgroundColor: style.bg, color: style.text }}
    >
      {difficulty}
    </span>
  );
}
