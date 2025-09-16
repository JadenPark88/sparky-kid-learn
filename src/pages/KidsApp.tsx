import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Camera, Star, Award, Target, Calendar, Gift, LogOut } from "lucide-react";
import { ProgressBar } from "@/components/ProgressBar";
import { StampCard } from "@/components/StampCard";
import { KidsNavigation } from "@/components/KidsNavigation";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/hooks/use-toast";

const KidsApp = () => {
  const { user, signOut } = useAuth();
  const [currentView, setCurrentView] = useState("goals");

  // 임시 데이터
  const goals = [
    {
      id: 1,
      title: "문제집 2쪽씩 풀기",
      description: "수학 문제집을 매일 2쪽씩 풀어보세요",
      totalStamps: 10,
      collectedStamps: 6,
      reward: "닌텐도 게임기",
      deadline: "2025-01-25",
      isActive: true,
    },
    {
      id: 2,
      title: "책 읽기",
      description: "매일 30분씩 책을 읽어보세요",
      totalStamps: 7,
      collectedStamps: 3,
      reward: "레고 세트",
      deadline: "2025-01-20",
      isActive: false,
    },
  ];

  const handleStampCollect = (stampNumber: number) => {
    toast({
      title: "스탬프 획득!",
      description: `${stampNumber}번 스탬프를 획득했어요! 🎉`,
    });
  };

  const handleLogout = async () => {
    await signOut();
    toast({
      title: "로그아웃 완료",
      description: "안전하게 로그아웃되었습니다.",
    });
  };

  const renderGoalsView = () => (
    <div className="space-y-6">
      {goals.map((goal) => (
        <Card key={goal.id} className={`transition-all duration-300 ${goal.isActive ? 'ring-2 ring-primary/20 shadow-lg' : 'opacity-75'}`}>
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">{goal.title}</CardTitle>
              <Badge variant={goal.isActive ? "default" : "secondary"}>
                {goal.isActive ? "진행중" : "대기중"}
              </Badge>
            </div>
            <CardDescription>{goal.description}</CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-yellow" />
                <span className="font-medium">보상: {goal.reward}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span>~{goal.deadline}</span>
              </div>
            </div>

            <ProgressBar 
              current={goal.collectedStamps} 
              total={goal.totalStamps}
              className="mb-4"
            />

            {goal.isActive && (
              <div className="space-y-4">
                <div className="grid grid-cols-5 gap-2">
                  {Array.from({ length: goal.totalStamps }, (_, i) => (
                    <StampCard
                      key={i + 1}
                      stampNumber={i + 1}
                      isCollected={i < goal.collectedStamps}
                      onClick={() => handleStampCollect(i + 1)}
                      className="w-12 h-12 md:w-14 md:h-14"
                    />
                  ))}
                </div>

                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={() => toast({ title: "📸 인증하기", description: "사진을 업로드해서 오늘의 목표를 인증해보세요!" })}
                >
                  <Camera className="w-4 h-4 mr-2" />
                  오늘의 목표 인증하기
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderStampsView = () => (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <Star className="w-5 h-5 text-yellow" />
          내 스탬프 컬렉션
        </h3>
        
        <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
          {Array.from({ length: 20 }, (_, i) => (
            <StampCard
              key={i + 1}
              stampNumber={i + 1}
              isCollected={i < 9}
              onClick={() => {}}
              className="w-16 h-16"
            />
          ))}
        </div>
      </Card>
    </div>
  );

  const renderCalendarView = () => (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-bold mb-4">스탬프 달력</h3>
        
        <div className="grid grid-cols-7 gap-2 mb-4">
          {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
            <div key={day} className="text-center text-sm font-medium text-muted-foreground p-2">
              {day}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: 31 }, (_, i) => (
            <div
              key={i}
              className="aspect-square flex items-center justify-center rounded-lg border text-sm relative hover:bg-muted/50 transition-colors"
            >
              {i + 1}
              {i < 15 && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  const renderRewardsView = () => (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <Gift className="w-5 h-5 text-purple" />
          내 보상함
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green/10 to-blue/10 rounded-lg border">
            <div>
              <h4 className="font-semibold">닌텐도 게임기</h4>
              <p className="text-sm text-muted-foreground">수학 문제집 목표</p>
            </div>
            <Badge className="bg-gradient-to-r from-primary to-secondary text-white">
              60% 달성
            </Badge>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg border">
            <div>
              <h4 className="font-semibold text-muted-foreground">레고 세트</h4>
              <p className="text-sm text-muted-foreground">책 읽기 목표</p>
            </div>
            <Badge variant="secondary">대기중</Badge>
          </div>
        </div>
      </Card>
    </div>
  );

  const renderContent = () => {
    switch (currentView) {
      case "goals":
        return renderGoalsView();
      case "stamps":
        return renderStampsView();
      case "calendar":
        return renderCalendarView();
      case "rewards":
        return renderRewardsView();
      default:
        return renderGoalsView();
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-accent p-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div className="text-center flex-1 space-y-2">
              <h1 className="text-4xl font-bold text-white drop-shadow-lg">
                스탬프 앱
              </h1>
              <p className="text-white/90 text-lg">
                안녕하세요, {user?.user_metadata?.display_name || '어린이'}님!
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="bg-white/10 text-white border-white/20 hover:bg-white/20"
            >
              <LogOut className="w-4 h-4 mr-2" />
              로그아웃
            </Button>
          </div>

          {/* Navigation */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-1">
            <div className="grid grid-cols-4 gap-1">
              {[
                { key: "goals", label: "목표", icon: Target },
                { key: "stamps", label: "스탬프", icon: Star },
                { key: "calendar", label: "달력", icon: Calendar },
                { key: "rewards", label: "보상", icon: Gift },
              ].map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setCurrentView(key)}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-200 ${
                    currentView === key
                      ? "bg-white text-primary shadow-lg"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                  <span className="text-sm font-medium">{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
            {renderContent()}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default KidsApp;