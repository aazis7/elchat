import { useAuth } from "@/hooks/use-auth.ts";
import { useLocation } from "wouter";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const [location, setLocation] = useLocation();

  if (!user) {
    setLocation("/login", { replace: true, state: { from: location } });
  }
  return <>{children}</>;
}

export function PublicRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const [location, setLocation] = useLocation();

  if (user) {
    setLocation("/", { replace: true, state: { from: location } });
  }
  return <>{children}</>;
}
