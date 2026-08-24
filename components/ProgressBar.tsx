interface ProgressBarProps {
  completed: number;
  total: number;
}

export default function ProgressBar({ completed, total }: ProgressBarProps) {
  const pct = total === 0 ? 0 : (completed / total) * 100;

  return (
    <div
      className="h-1.5 w-full rounded-full bg-mocha-surface0"
      role="progressbar"
      aria-label={`${completed} of ${total} completed`}
      aria-valuenow={completed}
      aria-valuemin={0}
      aria-valuemax={total}
    >
      <div
        className="h-full rounded-full bg-mocha-lavender transition-all duration-300"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
