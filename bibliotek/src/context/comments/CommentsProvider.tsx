import type { ReactNode } from "react";
import { useComments } from "@/hooks/bookDetails/useComments";
import { CommentsContext } from "./CommentsContext";

export function CommentsProvider({ children }: { children: ReactNode }) {
  const commentsContextValue = useComments();

  return (
    <CommentsContext.Provider value={{ ...commentsContextValue }}>
      {children}
    </CommentsContext.Provider>
  );
}
