import { useState } from "react";
import { StampCard } from "@/components/StampCard";
import { ProgressBar } from "@/components/ProgressBar";
import { KidsNavigation } from "@/components/KidsNavigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Sparkles, Trophy } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const KidsApp = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [collectedStamps, setCollectedStamps] = useState([1, 3, 5]); // 수집된 스탬프들
  const totalStamps = 10;
  
  const currentGoal = {
    title: "문제집 2쪽씩 풀기",
    reward: "닌텐도 게임기",
    daysLeft: 5,
  };

  const handleStampRequest = () => {
    toast({
      title: "📸 사진을 업로드해주세요!",
      description: "오늘의 목표를 완료한 모습을 찍어서 보내주세요.",
    });
  };

  const handleRewardRequest = () => {
    toast({
      title: "🎉 보상 요청 완료!",
      description: "부모님께 보상 요청을 보냈어요. 조금만 기다려주세요!",
    });
  };

  const renderHomeTab = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          안녕하세요! 😊
        </h1>
        <p className="text-muted-foreground">오늘도 열심히 해봐요!</p>
      </div>

      {/* Current Goal */}
      <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-foreground">현재 목표</h2>
            <Badge variant="secondary" className="bg-gradient-to-r from-primary to-secondary text-white">
              {currentGoal.daysLeft}일 남음
            </Badge>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-primary">{currentGoal.title}</h3>
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow" />
              <span className="font-semibold text-foreground">보상: {currentGoal.reward}</span>
            </div>
          </div>

          <ProgressBar current={collectedStamps.length} total={totalStamps} />
        </div>
      </Card>

      {/* Stamp Collection */}
      <Card className="p-6">
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow" />
            스탬프 수집
          </h3>
          
          <div className="grid grid-cols-5 gap-3">
            {Array.from({ length: totalStamps }, (_, i) => (
              <StampCard
                key={i + 1}
                stampNumber={i + 1}
                isCollected={collectedStamps.includes(i + 1)}
                onClick={() => {
                  if (!collectedStamps.includes(i + 1)) {
                    handleStampRequest();
                  }
                }}
              />
            ))}
          </div>
        </div>
      </Card>

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button
          onClick={handleStampRequest}
          size="lg"
          className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all duration-300 py-6 rounded-2xl"
        >
          <Camera className="w-6 h-6 mr-2" />
          오늘의 목표 인증하기
        </Button>

        {collectedStamps.length >= totalStamps && (
          <Button
            onClick={handleRewardRequest}
            size="lg"
            variant="outline"
            className="w-full border-2 border-success text-success hover:bg-success hover:text-white transition-all duration-300 py-6 rounded-2xl animate-bounce-in"
          >
            <Trophy className="w-6 h-6 mr-2" />
            보상 받기! 🎉
          </Button>
        )}
      </div>
    </div>
  );

  const renderCalendarTab = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-center">스탬프 달력</h2>
      <div className="bg-white rounded-2xl p-4 border">
        <div className="grid grid-cols-7 gap-2 mb-4">
          {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
            <div key={day} className="text-center text-sm font-medium text-muted-foreground p-2">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: 30 }, (_, i) => (
            <div
              key={i}
              className="aspect-square flex items-center justify-center rounded-lg border text-sm relative"
            >
              {i + 1}
              {collectedStamps.includes(i + 1) && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-success rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCameraTab = () => (
    <div className="space-y-6 text-center">
      <h2 className="text-xl font-bold">목표 인증하기</h2>
      <div className="bg-muted rounded-2xl p-8 border-2 border-dashed border-primary">
        <Camera className="w-16 h-16 text-primary mx-auto mb-4" />
        <p className="text-muted-foreground mb-4">
          오늘의 목표를 완료한 모습을<br />
          사진으로 찍어서 업로드해주세요!
        </p>
        <Button
          onClick={handleStampRequest}
          className="bg-gradient-to-r from-primary to-secondary"
        >
          사진 업로드
        </Button>
      </div>
    </div>
  );

  const renderRewardsTab = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-center">보상 목록</h2>
      <Card className="p-6 bg-gradient-to-br from-yellow/5 to-orange/5">
        <div className="text-center space-y-4">
          <Trophy className="w-16 h-16 text-yellow mx-auto" />
          <h3 className="text-lg font-bold">{currentGoal.reward}</h3>
          <p className="text-muted-foreground">
            스탬프 {totalStamps}개를 모두 수집하면<br />
            이 멋진 보상을 받을 수 있어요!
          </p>
          <ProgressBar current={collectedStamps.length} total={totalStamps} />
        </div>
      </Card>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return renderHomeTab();
      case "calendar":
        return renderCalendarTab();
      case "camera":
        return renderCameraTab();
      case "rewards":
        return renderRewardsTab();
      default:
        return renderHomeTab();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <div className="pb-24 px-4 pt-6 max-w-md mx-auto">
        {renderContent()}
      </div>

      {/* Bottom Navigation */}
      <KidsNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default KidsApp;