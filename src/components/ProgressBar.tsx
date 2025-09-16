import { cn } from "@/lib/utils";

interface ProgressBarProps {
  current: number;
  total: number;
  className?: string;
}

export const ProgressBar = ({ current, total, className }: ProgressBarProps) => {
  const percentage = Math.min((current / total) * 100, 100);
  
  return (
    <div className={cn("w-full", className)}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold text-foreground">
          진행률
        </span>
        <span className="text-sm font-bold text-primary">
          {current}/{total}
        </span>
      </div>
      
      <div className="w-full h-4 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-700 ease-out rounded-full relative"
          style={{ width: `${percentage}%` }}
        >
          {/* Animated shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
        </div>
      </div>
      
      <div className="mt-1 text-center">
        <span className="text-xs text-muted-foreground">
          {percentage.toFixed(0)}% 완료
        </span>
      </div>
    </div>
  );
};