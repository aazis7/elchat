import { useContext } from "react";
import { AuthContext } from "@/context/auth-provider.tsx";

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
}
