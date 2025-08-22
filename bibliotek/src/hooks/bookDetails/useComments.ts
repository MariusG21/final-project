import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { useAuthContext } from "@/context/auth/useAuthContext";
import { useAuthErrorContext } from "@/context/authError/useAuthErrorContext";
import type { CommentType } from "@/types/Comments";

export function useComments() {
  const { accessToken } = useAuthContext();
  const { bookId } = useParams();
  const [content, setContent] = useState("");
  const [validationError, setValidationError] = useState<{
    message: string;
    id: number;
  } | null>(null);
  const { triggerUnauthorizedLogout } = useAuthErrorContext();
  const [comments, setComments] = useState<CommentType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchComments = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const { data } = await axios.get(`/api/comments/${bookId}`);
      if (data.success) {
        setComments(data.data);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.message || "Unexpected error occurred.");
      } else {
        console.error("Something went wrong: ", error);
        setError("Something went wrong");
      }
    } finally {
      setIsLoading(false);
    }
  }, [bookId]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  const onChangeComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
    setValidationError(null);
  };
  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      postComment();
      (e.target as HTMLInputElement).blur();
    } else if (e.key === "Escape") {
      setContent("");
      (e.target as HTMLInputElement).blur();
    }
  };

  const postComment = useCallback(async () => {
    if (!content.trim()) {
      setValidationError({
        message: "Comment cannot be empty.",
        id: Date.now(),
      });
      return;
    }
    try {
      const { data } = await axios.post(
        `/api/comments/${bookId}`,
        {
          content,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (data.success) {
        console.log(data.message);
        setContent("");
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
  }, [accessToken, bookId, content, triggerUnauthorizedLogout, fetchComments]);

  useEffect(() => {
    if (validationError) {
      const timer = setTimeout(() => {
        setValidationError(null);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [validationError]);

  const commentsCount = comments.length;

  const deleteComment = useCallback(
    async (commentId: string) => {
      try {
        const { data } = await axios.delete(`/api/comments/${commentId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (data.success) {
          toast.success(data.message);
          await fetchComments();
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response) {
            const { status } = error.response;
            const message =
              error.response.data?.message || "Unexpected server error.";

            if (status === 401) {
              triggerUnauthorizedLogout();
            } else {
              toast.error(message);
            }
          }
        } else {
          console.error(error);
          toast.error("Something went wrong.");
        }
      }
    },
    [accessToken, triggerUnauthorizedLogout, fetchComments]
  );

  return {
    content,
    onChangeComment,
    handleOnKeyDown,
    postComment,
    validationError,
    comments,
    isLoading,
    error,
    commentsCount,
    fetchComments,
    deleteComment,
  };
}
