import { useContext } from "react";
import { CommentsContext } from "./CommentsContext";

export function useCommentsContext() {
  const context = useContext(CommentsContext);
  if (!context) {
    throw new Error(
      "useCommentsContext must be used within a CommentsProvider"
    );
  }
  return context;
}
