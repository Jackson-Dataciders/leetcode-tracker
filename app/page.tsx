"use client";

import { useState, useCallback, useMemo } from "react";
import { CURRICULUM } from "@/lib/curriculum";
import type { FilterState, Problem } from "@/lib/types";
import { useProgress } from "@/hooks/useProgress";
import ProgressHeader from "@/components/ProgressHeader";
import FilterToolbar from "@/components/FilterToolbar";
import CategoryAccordion from "@/components/CategoryAccordion";
import ProblemRow from "@/components/ProblemRow";

export default function Home() {
  const {
    toggle,
    isCompleted,
    totalCompleted,
    completedByDifficulty,
    completedByCategory,
  } = useProgress();

  const [filters, setFilters] = useState<FilterState>({
    search: "",
    difficulties: new Set(),
    status: "all",
  });

  const [openCategories, setOpenCategories] = useState<Set<number>>(new Set());
  const [highlightedProblemId, setHighlightedProblemId] = useState<string | null>(null);

  const toggleCategory = useCallback((index: number) => {
    setOpenCategories((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }, []);

  const filteredCurriculum = useMemo(() => {
    const searchLower = filters.search.toLowerCase();

    return CURRICULUM.map((cat) => {
      const filtered = cat.problems.filter((p) => {
        if (searchLower && !p.title.toLowerCase().includes(searchLower)) {
          return false;
        }
        if (filters.difficulties.size > 0 && !filters.difficulties.has(p.difficulty)) {
          return false;
        }
        if (filters.status === "open" && isCompleted(p.id)) {
          return false;
        }
        if (filters.status === "completed" && !isCompleted(p.id)) {
          return false;
        }
        return true;
      });

      return { ...cat, problems: filtered };
    }).filter((cat) => cat.problems.length > 0);
  }, [filters, isCompleted]);

  const handleJumpToNext = useCallback(() => {
    let bestCategory: (typeof CURRICULUM)[number] | null = null;
    let bestRatio = Infinity;

    for (const cat of CURRICULUM) {
      const total = cat.problems.length;
      const completed = completedByCategory[cat.name] ?? 0;

      if (completed >= total) continue;

      const ratio = completed / total;
      if (ratio < bestRatio || (ratio === bestRatio && (!bestCategory || cat.index < bestCategory.index))) {
        bestRatio = ratio;
        bestCategory = cat;
      }
    }

    if (!bestCategory) return;

    const nextProblem = bestCategory.problems.find((p) => !isCompleted(p.id));
    if (!nextProblem) return;

    setOpenCategories((prev) => new Set(prev).add(bestCategory.index));
    setHighlightedProblemId(nextProblem.id);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const el = document.querySelector(`[data-problem-id="${nextProblem.id}"]`);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      });
    });

    setTimeout(() => {
      setHighlightedProblemId(null);
    }, 1500);
  }, [completedByCategory, isCompleted]);

  const renderProblem = useCallback(
    (problem: Problem) => (
      <ProblemRow
        problem={problem}
        isCompleted={isCompleted(problem.id)}
        onToggle={() => toggle(problem.id)}
        highlight={highlightedProblemId === problem.id}
      />
    ),
    [isCompleted, toggle, highlightedProblemId]
  );

  return (
    <div className="space-y-6">
      <ProgressHeader
        totalCompleted={totalCompleted}
        completedByDifficulty={completedByDifficulty}
        onJumpToNext={handleJumpToNext}
      />

      <FilterToolbar filters={filters} onFiltersChange={setFilters} />

      <div className="space-y-2">
        {filteredCurriculum.map((cat) => (
          <CategoryAccordion
            key={cat.index}
            category={cat}
            completedCount={completedByCategory[cat.name] ?? 0}
            isOpen={openCategories.has(cat.index)}
            onToggleOpen={() => toggleCategory(cat.index)}
            renderProblem={renderProblem}
          />
        ))}
        {filteredCurriculum.length === 0 && (
          <p className="text-center text-mocha-overlay0 py-8 text-sm">
            No problems match your filters.
          </p>
        )}
      </div>
    </div>
  );
}
