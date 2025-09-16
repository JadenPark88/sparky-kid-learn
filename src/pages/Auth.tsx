import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';
import { Sparkles, Star } from 'lucide-react';

const Auth = () => {
  const { user, signIn, signUp } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  // Redirect if already authenticated
  if (user) {
    return <Navigate to="/kids" replace />;
  }

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const { error } = await signIn(email, password);

    if (error) {
      toast({
        title: "로그인 실패",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "로그인 성공!",
        description: "스탬프 앱에 오신 것을 환영합니다!",
      });
    }

    setIsLoading(false);
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const displayName = formData.get('displayName') as string;

    const { error } = await signUp(email, password, displayName);

    if (error) {
      toast({
        title: "회원가입 실패",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "회원가입 성공!",
        description: "이메일을 확인해주세요.",
      });
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <Sparkles className="absolute top-20 left-20 w-8 h-8 text-yellow animate-sparkle" />
        <Star className="absolute top-40 right-32 w-6 h-6 text-pink animate-bounce-in" />
        <Sparkles className="absolute bottom-32 left-1/4 w-6 h-6 text-blue animate-sparkle" style={{ animationDelay: "1s" }} />
        <Star className="absolute bottom-20 right-20 w-8 h-8 text-green animate-bounce-in" style={{ animationDelay: "0.5s" }} />
      </div>

      <Card className="w-full max-w-md relative z-10 bg-white/95 backdrop-blur-sm shadow-2xl border-0">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <Star className="w-8 h-8 text-white fill-current" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-foreground">스탬프 앱</CardTitle>
          <CardDescription className="text-muted-foreground">
            목표를 달성하고 스탬프를 모아보세요!
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Tabs defaultValue="signin" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">로그인</TabsTrigger>
              <TabsTrigger value="signup">회원가입</TabsTrigger>
            </TabsList>

            <TabsContent value="signin">
              <form onSubmit={handleSignIn} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signin-email">이메일</Label>
                  <Input
                    id="signin-email"
                    name="email"
                    type="email"
                    placeholder="이메일을 입력하세요"
                    required
                    disabled={isLoading}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signin-password">비밀번호</Label>
                  <Input
                    id="signin-password"
                    name="password"
                    type="password"
                    placeholder="비밀번호를 입력하세요"
                    required
                    disabled={isLoading}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "로그인 중..." : "로그인"}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="signup">
              <form onSubmit={handleSignUp} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-name">이름</Label>
                  <Input
                    id="signup-name"
                    name="displayName"
                    type="text"
                    placeholder="이름을 입력하세요"
                    required
                    disabled={isLoading}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email">이메일</Label>
                  <Input
                    id="signup-email"
                    name="email"
                    type="email"
                    placeholder="이메일을 입력하세요"
                    required
                    disabled={isLoading}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">비밀번호</Label>
                  <Input
                    id="signup-password"
                    name="password"
                    type="password"
                    placeholder="비밀번호를 입력하세요"
                    required
                    disabled={isLoading}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "회원가입 중..." : "회원가입"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;