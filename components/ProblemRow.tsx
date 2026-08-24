import type { Problem } from "@/lib/types";
import DifficultyBadge from "./DifficultyBadge";

interface ProblemRowProps {
  problem: Problem;
  isCompleted: boolean;
  onToggle: () => void;
  highlight: boolean;
}

export default function ProblemRow({
  problem,
  isCompleted,
  onToggle,
  highlight,
}: ProblemRowProps) {
  return (
    <div
      data-problem-id={problem.id}
      className="flex items-center gap-2 py-1.5 px-3 rounded"
      style={
        highlight
          ? {
              border: "2px solid #b4befe",
              animation: "highlight-fade 1.5s ease-out forwards",
            }
          : { border: "2px solid transparent" }
      }
    >
      <button
        type="button"
        onClick={onToggle}
        aria-label={
          isCompleted ? `Mark ${problem.title} incomplete` : `Mark ${problem.title} complete`
        }
        className="shrink-0 flex items-center justify-center rounded-sm transition-colors"
        style={{
          width: 14,
          height: 14,
          backgroundColor: isCompleted ? "#b4befe" : "transparent",
          border: isCompleted ? "none" : "1.5px solid #585b70",
        }}
      >
        {isCompleted && (
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path
              d="M2 5L4.5 7.5L8 3"
              stroke="#1e1e2e"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      <a
        href={problem.url}
        target="_blank"
        rel="noopener noreferrer"
        title={problem.rationale}
        className={`text-sm truncate min-w-0 flex-1 transition-colors hover:underline ${
          isCompleted
            ? "line-through text-mocha-overlay0"
            : "text-mocha-text"
        }`}
      >
        {problem.title}
      </a>

      <DifficultyBadge difficulty={problem.difficulty} />
    </div>
  );
}
