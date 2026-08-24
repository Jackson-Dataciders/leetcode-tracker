import type { Difficulty } from "@/lib/types";
import { CURRICULUM } from "@/lib/curriculum";
import ProgressBar from "./ProgressBar";

const TOTAL_PROBLEMS = CURRICULUM.reduce((sum, c) => sum + c.problems.length, 0);

const TOTALS_BY_DIFFICULTY: Record<Difficulty, number> = (() => {
  const counts: Record<Difficulty, number> = { Easy: 0, Medium: 0, Hard: 0 };
  for (const cat of CURRICULUM) {
    for (const p of cat.problems) {
      counts[p.difficulty]++;
    }
  }
  return counts;
})();

const DIFFICULTY_DOT_COLORS: Record<Difficulty, string> = {
  Easy: "#a6e3a1",
  Medium: "#f9e2af",
  Hard: "#f38ba8",
};

interface ProgressHeaderProps {
  totalCompleted: number;
  completedByDifficulty: Record<Difficulty, number>;
  onJumpToNext: () => void;
}

export default function ProgressHeader({
  totalCompleted,
  completedByDifficulty,
  onJumpToNext,
}: ProgressHeaderProps) {
  const difficulties: Difficulty[] = ["Easy", "Medium", "Hard"];

  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h1 className="text-2xl font-bold text-mocha-text">
            LeetCode Tracker
          </h1>
          <p className="text-sm text-mocha-subtext0 mt-1">
            {totalCompleted} / {TOTAL_PROBLEMS} problems completed
          </p>
          <div className="mt-2">
            <ProgressBar completed={totalCompleted} total={TOTAL_PROBLEMS} />
          </div>
        </div>
        <button
          type="button"
          onClick={onJumpToNext}
          className="shrink-0 mt-1 px-3 py-2 text-sm font-medium rounded-lg border border-mocha-lavender text-mocha-lavender hover:bg-mocha-lavender hover:text-mocha-base transition-colors"
        >
          Jump to next ↓
        </button>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {difficulties.map((d) => (
          <div key={d} className="space-y-1">
            <div className="flex items-center gap-1.5">
              <span
                className="inline-block w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: DIFFICULTY_DOT_COLORS[d] }}
              />
              <span className="text-xs text-mocha-subtext1">{d}</span>
            </div>
            <p className="text-xs text-mocha-subtext0">
              {completedByDifficulty[d]} / {TOTALS_BY_DIFFICULTY[d]}
            </p>
            <ProgressBar
              completed={completedByDifficulty[d]}
              total={TOTALS_BY_DIFFICULTY[d]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
