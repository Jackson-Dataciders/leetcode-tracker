"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { CURRICULUM } from "@/lib/curriculum";
import { loadProgress, saveProgress } from "@/lib/storage";
import type { Difficulty, ProgressState } from "@/lib/types";

export function useProgress() {
  const [completed, setCompleted] = useState<ProgressState>({});

  useEffect(() => {
    setCompleted(loadProgress());
  }, []);

  const toggle = useCallback((problemId: string) => {
    setCompleted((prev) => {
      const next = { ...prev };
      if (next[problemId]) {
        delete next[problemId];
      } else {
        next[problemId] = true;
      }
      saveProgress(next);
      return next;
    });
  }, []);

  const isCompleted = useCallback(
    (problemId: string) => completed[problemId] === true,
    [completed]
  );

  const totalCompleted = Object.keys(completed).length;

  const completedByDifficulty = useMemo(() => {
    const counts: Record<Difficulty, number> = { Easy: 0, Medium: 0, Hard: 0 };
    const allProblems = CURRICULUM.flatMap((c) => c.problems);
    for (const p of allProblems) {
      if (completed[p.id]) {
        counts[p.difficulty]++;
      }
    }
    return counts;
  }, [completed]);

  const completedByCategory = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const cat of CURRICULUM) {
      counts[cat.name] = cat.problems.filter((p) => completed[p.id]).length;
    }
    return counts;
  }, [completed]);

  return {
    completed,
    toggle,
    isCompleted,
    totalCompleted,
    completedByDifficulty,
    completedByCategory,
  };
}
