import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Monitor, ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            스탬프 동기부여 시스템
          </h1>
          <p className="text-xl text-muted-foreground">
            아이들의 학습과 생활 습관을 재미있게 관리해보세요
          </p>
        </div>

        {/* Service Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 아이용 서비스 */}
          <Card className="p-8 hover:shadow-lg transition-all duration-300 group cursor-pointer">
            <Link to="/kids" className="block">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <User className="w-10 h-10 text-primary" />
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-2">아이용 앱</h2>
                  <p className="text-muted-foreground mb-4">
                    스탬프를 모으고 목표를 달성해보세요!
                  </p>
                </div>

                <div className="space-y-2 text-sm text-left">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>목표 완료 인증하기</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span>스탬프 수집하기</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow rounded-full"></div>
                    <span>보상 받기</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green rounded-full"></div>
                    <span>달력으로 진행상황 확인</span>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-primary to-secondary group-hover:shadow-lg transition-all duration-300">
                  아이용 앱 시작하기
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Link>
          </Card>

          {/* 부모용 서비스 */}
          <Card className="p-8 hover:shadow-lg transition-all duration-300 group cursor-pointer">
            <Link to="/parent" className="block">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple/20 to-pink/20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Monitor className="w-10 h-10 text-purple" />
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-2">부모용 대시보드</h2>
                  <p className="text-muted-foreground mb-4">
                    목표를 설정하고 아이의 진행상황을 관리하세요
                  </p>
                </div>

                <div className="space-y-2 text-sm text-left">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple rounded-full"></div>
                    <span>목표 및 보상 설정</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pink rounded-full"></div>
                    <span>스탬프 요청 승인</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange rounded-full"></div>
                    <span>보상 관리</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span>진행상황 모니터링</span>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full border-2 border-purple text-purple hover:bg-purple hover:text-white group-hover:shadow-lg transition-all duration-300"
                >
                  부모용 대시보드 열기
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Link>
          </Card>
        </div>

        {/* Features */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">주요 기능</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📱</span>
              </div>
              <h4 className="font-semibold mb-2">모바일 최적화</h4>
              <p className="text-sm text-muted-foreground">
                아이들이 쉽게 사용할 수 있는 직관적인 모바일 인터페이스
              </p>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-semibold mb-2">목표 기반 시스템</h4>
              <p className="text-sm text-muted-foreground">
                명확한 목표 설정과 달성을 통한 체계적인 습관 형성
              </p>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 bg-yellow/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🎉</span>
              </div>
              <h4 className="font-semibold mb-2">재미있는 보상</h4>
              <p className="text-sm text-muted-foreground">
                게이미피케이션을 통한 지속적인 동기부여 제공
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;