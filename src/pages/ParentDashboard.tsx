import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Settings, 
  CheckCircle, 
  XCircle, 
  Gift, 
  Camera, 
  Plus,
  User,
  Target,
  Clock
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ParentDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [pendingRequests] = useState([
    {
      id: 1,
      childName: "지민이",
      date: "2024-03-15",
      time: "14:30",
      goal: "문제집 2쪽 풀기",
      photo: "📚 수학 문제집 완료 사진",
      status: "pending"
    },
    {
      id: 2,
      childName: "지민이", 
      date: "2024-03-14",
      time: "16:20",
      goal: "방 정리하기",
      photo: "🛏️ 깨끗한 방 사진",
      status: "pending"
    }
  ]);

  const [goals] = useState([
    {
      id: 1,
      title: "문제집 2쪽씩 풀기",
      description: "매일 수학 문제집 2쪽씩 완료하기",
      totalStamps: 10,
      currentStamps: 3,
      reward: "닌텐도 게임기",
      endDate: "2024-03-25",
      status: "active"
    },
    {
      id: 2,
      title: "집안일 돕기",
      description: "식탁 닦기, 바닥 청소 등",
      totalStamps: 20,
      currentStamps: 7,
      reward: "RC카",
      endDate: "2024-04-05",
      status: "active"
    }
  ]);

  const handleApproveRequest = (requestId: number) => {
    toast({
      title: "✅ 스탬프 승인 완료",
      description: "아이에게 스탬프가 지급되었습니다!",
    });
  };

  const handleRejectRequest = (requestId: number) => {
    toast({
      title: "❌ 스탬프 거부",
      description: "요청이 거부되었습니다. 아이에게 알림이 전송됩니다.",
    });
  };

  const handleProvideReward = (goalId: number) => {
    toast({
      title: "🎉 보상 지급 완료",
      description: "아이가 보상을 받았습니다!",
    });
  };

  const tabs = [
    { id: "overview", label: "대시보드", icon: Target },
    { id: "requests", label: "승인 요청", icon: CheckCircle },
    { id: "goals", label: "목표 관리", icon: Settings },
    { id: "rewards", label: "보상 관리", icon: Gift },
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 전체 현황 */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <User className="w-8 h-8 text-primary" />
            <div>
              <h3 className="font-semibold">지민이</h3>
              <p className="text-sm text-muted-foreground">활성 상태</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>진행 중인 목표</span>
              <span className="font-semibold">2개</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>대기 중인 요청</span>
              <span className="font-semibold text-orange">2개</span>
            </div>
          </div>
        </Card>

        {/* 오늘의 활동 */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-8 h-8 text-purple" />
            <div>
              <h3 className="font-semibold">오늘의 활동</h3>
              <p className="text-sm text-muted-foreground">3월 15일</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>완료한 목표</span>
              <span className="font-semibold text-success">1개</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>스탬프 수집</span>
              <span className="font-semibold text-primary">+1</span>
            </div>
          </div>
        </Card>

        {/* 다가오는 보상 */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Gift className="w-8 h-8 text-pink" />
            <div>
              <h3 className="font-semibold">다가오는 보상</h3>
              <p className="text-sm text-muted-foreground">완료 임박</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-sm">
              <p className="font-medium">닌텐도 게임기</p>
              <p className="text-muted-foreground">7/10 스탬프 (70%)</p>
            </div>
          </div>
        </Card>
      </div>

      {/* 최근 활동 */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">최근 활동</h3>
        <div className="space-y-3">
          {[
            { action: "스탬프 수집", goal: "문제집 풀기", time: "2시간 전", status: "completed" },
            { action: "목표 설정", goal: "집안일 돕기", time: "1일 전", status: "created" },
            { action: "보상 지급", goal: "독서하기", time: "3일 전", status: "rewarded" },
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${
                  activity.status === 'completed' ? 'bg-success' :
                  activity.status === 'created' ? 'bg-primary' : 'bg-yellow'
                }`} />
                <div>
                  <p className="font-medium">{activity.action}</p>
                  <p className="text-sm text-muted-foreground">{activity.goal}</p>
                </div>
              </div>
              <span className="text-sm text-muted-foreground">{activity.time}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  const renderRequests = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">스탬프 승인 요청</h2>
        <Badge variant="secondary">{pendingRequests.length}개 대기중</Badge>
      </div>

      <div className="space-y-4">
        {pendingRequests.map((request) => (
          <Card key={request.id} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <Camera className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="font-semibold">{request.childName}의 인증 요청</h3>
                  <p className="text-sm text-muted-foreground">
                    {request.date} {request.time}
                  </p>
                </div>
              </div>
              <Badge variant="outline" className="border-orange text-orange">
                승인 대기
              </Badge>
            </div>

            <div className="space-y-3 mb-4">
              <div>
                <Label className="text-sm font-medium">목표</Label>
                <p className="text-sm">{request.goal}</p>
              </div>
              
              <div>
                <Label className="text-sm font-medium">제출한 사진</Label>
                <div className="mt-2 p-4 bg-muted rounded-lg border-2 border-dashed">
                  <Camera className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-center text-sm text-muted-foreground">{request.photo}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button 
                onClick={() => handleApproveRequest(request.id)}
                className="flex-1 bg-success hover:bg-success/90"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                승인
              </Button>
              <Button 
                onClick={() => handleRejectRequest(request.id)}
                variant="outline" 
                className="flex-1 border-destructive text-destructive hover:bg-destructive hover:text-white"
              >
                <XCircle className="w-4 h-4 mr-2" />
                거부
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderGoals = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">목표 관리</h2>
        <Button className="bg-gradient-to-r from-primary to-secondary">
          <Plus className="w-4 h-4 mr-2" />
          새 목표 추가
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {goals.map((goal) => (
          <Card key={goal.id} className="p-6">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{goal.title}</h3>
                  <p className="text-sm text-muted-foreground">{goal.description}</p>
                </div>
                <Badge variant={goal.status === 'active' ? 'default' : 'secondary'}>
                  {goal.status === 'active' ? '진행중' : '완료'}
                </Badge>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>진행률</span>
                  <span className="font-semibold">
                    {goal.currentStamps}/{goal.totalStamps}
                  </span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-300"
                    style={{ width: `${(goal.currentStamps / goal.totalStamps) * 100}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t">
                <div>
                  <p className="text-sm font-medium">보상</p>
                  <p className="text-sm text-muted-foreground">{goal.reward}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">마감일</p>
                  <p className="text-sm text-muted-foreground">{goal.endDate}</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* 새 목표 생성 폼 */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">새 목표 만들기</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>목표 제목</Label>
            <Input placeholder="예: 매일 독서하기" />
          </div>
          <div className="space-y-2">
            <Label>필요한 스탬프 수</Label>
            <Input type="number" placeholder="10" />
          </div>
          <div className="space-y-2">
            <Label>보상</Label>
            <Input placeholder="예: 놀이공원 가기" />
          </div>
          <div className="space-y-2">
            <Label>마감일</Label>
            <Input type="date" />
          </div>
          <div className="md:col-span-2 space-y-2">
            <Label>목표 설명</Label>
            <Textarea placeholder="자세한 설명을 입력해주세요..." />
          </div>
        </div>
        <Button className="mt-4">목표 생성</Button>
      </Card>
    </div>
  );

  const renderRewards = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">보상 관리</h2>

      {/* 보상 지급 대기 */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Gift className="w-5 h-5 text-pink" />
          보상 지급 대기
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow/10 to-orange/10 rounded-lg border">
            <div className="flex items-center gap-3">
              <Gift className="w-8 h-8 text-yellow" />
              <div>
                <h4 className="font-semibold">닌텐도 게임기</h4>
                <p className="text-sm text-muted-foreground">
                  지민이 • 문제집 풀기 목표 완료
                </p>
              </div>
            </div>
            <Button 
              onClick={() => handleProvideReward(1)}
              className="bg-gradient-to-r from-yellow to-orange text-white"
            >
              보상 지급
            </Button>
          </div>
        </div>
      </Card>

      {/* 보상 히스토리 */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">보상 지급 내역</h3>
        
        <div className="space-y-3">
          {[
            { reward: "레고 세트", child: "지민이", date: "2024-03-10", goal: "독서하기" },
            { reward: "자전거", child: "지민이", date: "2024-02-25", goal: "운동하기" },
            { reward: "보드게임", child: "지민이", date: "2024-02-15", goal: "숙제하기" },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-success" />
                <div>
                  <p className="font-medium">{item.reward}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.child} • {item.goal}
                  </p>
                </div>
              </div>
              <span className="text-sm text-muted-foreground">{item.date}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return renderOverview();
      case "requests":
        return renderRequests();
      case "goals":
        return renderGoals();
      case "rewards":
        return renderRewards();
      default:
        return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Target className="w-8 h-8 text-primary" />
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                스탬프 부모 관리
              </h1>
            </div>
            <Badge variant="outline" className="bg-green/10 text-green border-green">
              온라인
            </Badge>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-64">
            <nav className="space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeTab === tab.id
                        ? "bg-primary text-white shadow-lg"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentDashboard;