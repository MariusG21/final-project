import { useAuthContext } from "@/context/auth/useAuthContext";

export function useIsMyComment(commentUserId: string | null) {
  const { user } = useAuthContext();

  const isMyComment = user && user.id === commentUserId;

  return Boolean(isMyComment);
}
