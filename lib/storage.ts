import type { ProgressState } from "@/lib/types";

const STORAGE_KEY = "leetcode-tracker:progress";

export function loadProgress(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
      console.warn("Invalid progress data in localStorage, resetting.");
      return {};
    }
    return parsed as ProgressState;
  } catch {
    console.warn("Failed to load progress from localStorage.");
    return {};
  }
}

export function saveProgress(state: ProgressState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    console.warn("Failed to save progress to localStorage.");
  }
}
