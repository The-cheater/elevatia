import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Google } from "lucide-react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const handleGoogleLogin = async () => {
    // Redirect to backend Google OAuth endpoint
    window.location.href = "http://localhost:5000/api/auth/google";
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 bg-muted/50 p-8 flex items-center justify-center">
        <div className="max-w-md space-y-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            OPPORTUNITIES
          </h1>
          <p className="text-xl md:text-2xl font-medium">
            START YOUR JOURNEY NOW!!
          </p>
          <p className="text-muted-foreground text-lg">
            Your dreams are waiting for
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Login Now!!!</h2>
            <p className="text-muted-foreground">
              Access your personalized learning dashboard
            </p>
          </div>

          <div className="space-y-4">
            <Button
              variant="outline"
              className="w-full gap-2"
              onClick={handleGoogleLogin}
            >
              <Google className="h-4 w-4" />
              Login with Google
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                OR CONTINUE WITH
              </span>
            </div>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <Input placeholder="Email" type="email" required />
            </div>
            <div className="space-y-2">
              <Input placeholder="Password" type="password" required />
            </div>
            <Button className="w-full" type="submit">
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
