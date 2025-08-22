import axios from "axios";
import { useCallback, useState } from "react";
import { useAuthContext } from "@/context/auth/useAuthContext";
import { useAuthErrorContext } from "@/context/authError/useAuthErrorContext";
import { useCommentsContext } from "@/context/comments/useCommentsContext";
import { toast } from "react-toastify";

export function useEditingComments() {
  const [isEditingComment, setIsEditingComment] = useState(false);
  const [newContent, setNewContent] = useState("");
  const [newContentValidationError, setNewContentValidationError] = useState<
    string | null
  >(null);
  const { fetchComments } = useCommentsContext();
  const { accessToken } = useAuthContext();
  const { triggerUnauthorizedLogout } = useAuthErrorContext();

  const openEditingMode = () => {
    setIsEditingComment(true);
  };

  const closeEditingMode = () => {
    setIsEditingComment(false);
    setNewContent("");
    setNewContentValidationError(null);
  };

  const keyDownEvent = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Escape") {
      closeEditingMode();
    }
  };

  const onChangeNewContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewContent(e.target.value);
    setNewContentValidationError(null);
  };

  const editComment = useCallback(
    async (commentId: string, newContent: string) => {
      if (!newContent.trim()) {
        setNewContentValidationError("Content cannot be empty.");
        return;
      }
      try {
        const { data } = await axios.put(
          `/api/comments/${commentId}`,
          { content: newContent },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        if (data.success) {
          closeEditingMode();
          await fetchComments();
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error?.response) {
            const { status } = error.response;
            if (status === 401) {
              triggerUnauthorizedLogout();
            } else {
              console.error(error.response?.data.message);
            }
          } else {
            console.error("something went wrong: ", error);
          }
        } else {
          console.error(error);
          toast.error("Unexpected error");
        }
      }
    },
    [accessToken, triggerUnauthorizedLogout, fetchComments]
  );

  return {
    isEditingComment,
    openEditingMode,
    closeEditingMode,
    newContent,
    newContentValidationError,
    keyDownEvent,
    onChangeNewContent,
    editComment,
  };
}
