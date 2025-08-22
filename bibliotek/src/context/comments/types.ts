import type { CommentType } from "@/types/Comments";

type CommentsContextValue = {
  content: string;
  onChangeComment: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  postComment: () => Promise<void>;
  validationError: {
    message: string;
    id: number;
  } | null;
  comments: CommentType[];
  isLoading: boolean;
  error: string | null;
  commentsCount: number;
  fetchComments: () => Promise<void>;
  deleteComment: (commentId: string) => Promise<void>;
};

export type { CommentsContextValue };
