type CommentType = {
  id: string;
  content: string;
  bookId: string;
  userId: string;
  edited: boolean;
  createdAt: string;
  user: {
    username: string;
    id: string;
  };
};

export type { CommentType };
