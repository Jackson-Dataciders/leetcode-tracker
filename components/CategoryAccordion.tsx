import type { ReactNode } from "react";
import type { Category } from "@/lib/types";
import ProgressBar from "./ProgressBar";

interface CategoryAccordionProps {
  category: Category;
  completedCount: number;
  isOpen: boolean;
  onToggleOpen: () => void;
  renderProblem: (problem: Category["problems"][number]) => ReactNode;
}

export default function CategoryAccordion({
  category,
  completedCount,
  isOpen,
  onToggleOpen,
  renderProblem,
}: CategoryAccordionProps) {
  const total = category.problems.length;

  return (
    <div className="rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={onToggleOpen}
        aria-expanded={isOpen}
        className="w-full bg-mocha-mantle px-4 py-3 text-left hover:bg-mocha-surface0/30 transition-colors"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className={`shrink-0 text-mocha-subtext0 transition-transform duration-200 ${
                isOpen ? "rotate-90" : ""
              }`}
              fill="currentColor"
            >
              <path d="M6 3l5 5-5 5V3z" />
            </svg>
            <span className="text-mocha-text font-medium text-sm">
              {category.index}. {category.name}
            </span>
          </div>
          <span className="text-mocha-subtext0 text-sm shrink-0 ml-2">
            {completedCount} / {total}
          </span>
        </div>
        <div className="mt-2">
          <ProgressBar completed={completedCount} total={total} />
        </div>
      </button>

      {isOpen && (
        <div className="bg-mocha-base py-1">
          {category.problems.map((problem) => (
            <div key={problem.id}>{renderProblem(problem)}</div>
          ))}
        </div>
      )}
    </div>
  );
}
