export type Difficulty = "Easy" | "Medium" | "Hard";

export interface Problem {
  id: string;
  title: string;
  url: string;
  difficulty: Difficulty;
  rationale: string;
  category: string;
}

export interface Category {
  index: number;
  name: string;
  problems: Problem[];
}

export interface ProgressState {
  [problemId: string]: true;
}

export interface FilterState {
  search: string;
  difficulties: Set<Difficulty>;
  status: "all" | "open" | "completed";
}
