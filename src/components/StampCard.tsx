import { cn } from "@/lib/utils";
import { Star, Sparkles } from "lucide-react";

interface StampCardProps {
  isCollected: boolean;
  stampNumber: number;
  onClick?: () => void;
  className?: string;
}

export const StampCard = ({ isCollected, stampNumber, onClick, className }: StampCardProps) => {
  return (
    <div
      className={cn(
        "relative w-16 h-16 md:w-20 md:h-20 rounded-2xl border-4 cursor-pointer transition-all duration-300",
        isCollected
          ? "bg-gradient-to-br from-primary to-secondary border-success shadow-lg animate-stamp-collect"
          : "bg-muted border-border hover:border-primary hover:scale-105",
        className
      )}
      onClick={onClick}
    >
      {/* Stamp content */}
      <div className="flex items-center justify-center h-full">
        {isCollected ? (
          <div className="relative">
            <Star className="w-8 h-8 md:w-10 md:h-10 text-white fill-current" />
            {/* Sparkle effects */}
            <Sparkles className="absolute -top-2 -right-2 w-4 h-4 text-yellow animate-sparkle" />
            <Sparkles className="absolute -bottom-1 -left-1 w-3 h-3 text-pink animate-sparkle" style={{ animationDelay: "0.5s" }} />
          </div>
        ) : (
          <div className="text-2xl md:text-3xl font-bold text-muted-foreground">
            {stampNumber}
          </div>
        )}
      </div>

      {/* Completion indicator */}
      {isCollected && (
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center animate-bounce-in">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      )}
    </div>
  );
};