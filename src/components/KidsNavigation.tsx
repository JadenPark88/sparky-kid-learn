import { Home, Calendar, Camera, Gift } from "lucide-react";
import { cn } from "@/lib/utils";

interface KidsNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const KidsNavigation = ({ activeTab, onTabChange }: KidsNavigationProps) => {
  const tabs = [
    { id: "home", icon: Home, label: "홈", color: "text-primary" },
    { id: "calendar", icon: Calendar, label: "달력", color: "text-purple" },
    { id: "camera", icon: Camera, label: "인증", color: "text-orange" },
    { id: "rewards", icon: Gift, label: "보상", color: "text-pink" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border p-4 z-50">
      <div className="flex justify-around max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-200",
                isActive
                  ? "bg-primary/10 scale-110"
                  : "hover:bg-muted/50"
              )}
            >
              <Icon
                className={cn(
                  "w-6 h-6 transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              />
              <span
                className={cn(
                  "text-xs font-medium transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};