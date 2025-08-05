import { useContext } from "react";
import { AuthErrorContext } from "./AuthErrorContext";

export const useAuthErrorContext = () => {
  const ctx = useContext(AuthErrorContext);

  if (!ctx) {
    throw new Error(
      "useAuthErrorContext should only be used in children of AuthErrorProvider!"
    );
  }

  return ctx;
};
