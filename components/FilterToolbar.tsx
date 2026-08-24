import type { Difficulty, FilterState } from "@/lib/types";

interface FilterToolbarProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
}

const DIFFICULTIES: Difficulty[] = ["Easy", "Medium", "Hard"];

const DIFFICULTY_COLORS: Record<Difficulty, { bg: string; text: string }> = {
  Easy: { bg: "#a6e3a1", text: "#173404" },
  Medium: { bg: "#f9e2af", text: "#412402" },
  Hard: { bg: "#f38ba8", text: "#501313" },
};

const STATUS_OPTIONS: FilterState["status"][] = ["all", "open", "completed"];

const STATUS_LABELS: Record<FilterState["status"], string> = {
  all: "All",
  open: "Open",
  completed: "Completed",
};

export default function FilterToolbar({
  filters,
  onFiltersChange,
}: FilterToolbarProps) {
  const toggleDifficulty = (d: Difficulty) => {
    const next = new Set(filters.difficulties);
    if (next.has(d)) {
      next.delete(d);
    } else {
      next.add(d);
    }
    onFiltersChange({ ...filters, difficulties: next });
  };

  const setStatus = (status: FilterState["status"]) => {
    onFiltersChange({ ...filters, status });
  };

  const resetFilters = () => {
    onFiltersChange({ search: "", difficulties: new Set(), status: "all" });
  };

  const hasActiveFilters =
    filters.search !== "" || filters.difficulties.size > 0 || filters.status !== "all";

  return (
    <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center">
      <input
        type="search"
        placeholder="Search problems..."
        value={filters.search}
        onChange={(e) => onFiltersChange({ ...filters, search: e.target.value })}
        className="bg-mocha-mantle border border-mocha-surface0 rounded-lg px-3 py-2 text-sm text-mocha-text placeholder:text-mocha-overlay0 focus:outline-none focus:ring-2 focus:ring-mocha-lavender flex-1 min-w-0"
      />

      <div className="flex gap-1.5">
        {DIFFICULTIES.map((d) => {
          const active = filters.difficulties.has(d);
          const colors = DIFFICULTY_COLORS[d];
          return (
            <button
              key={d}
              type="button"
              onClick={() => toggleDifficulty(d)}
              className="px-2.5 py-1.5 text-xs font-medium rounded-md transition-colors"
              style={
                active
                  ? { backgroundColor: colors.bg, color: colors.text }
                  : {
                      backgroundColor: "transparent",
                      color: colors.bg,
                      border: `1px solid ${colors.bg}`,
                    }
              }
            >
              {d}
            </button>
          );
        })}
      </div>

      <div className="flex gap-1.5">
        {STATUS_OPTIONS.map((s) => {
          const active = filters.status === s;
          return (
            <button
              key={s}
              type="button"
              onClick={() => setStatus(s)}
              className={`px-2.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
                active
                  ? "bg-mocha-lavender text-mocha-base"
                  : "bg-transparent text-mocha-subtext0 border border-mocha-surface1"
              }`}
            >
              {STATUS_LABELS[s]}
            </button>
          );
        })}
      </div>

      {hasActiveFilters && (
        <button
          type="button"
          onClick={resetFilters}
          className="text-xs text-mocha-subtext0 hover:text-mocha-text transition-colors underline shrink-0"
        >
          Reset
        </button>
      )}
    </div>
  );
}
