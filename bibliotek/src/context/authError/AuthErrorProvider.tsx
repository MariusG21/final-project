import { type ReactNode } from "react";
import { AuthErrorContext } from "./AuthErrorContext";
import { useAuthError } from "@/hooks/authValues/useAuthError";

export default function AuthErrorProvider({
  children,
}: {
  children: ReactNode;
}) {
  const authError = useAuthError();

  return (
    <AuthErrorContext.Provider value={authError}>
      {children}
    </AuthErrorContext.Provider>
  );
}
