import type { BookshelfBookType as BookmarkedBookType } from "@/types/Book";

type FavoriteBooksContextValue = {
  loading: boolean;
  error: string | null;
  favoriteBooks: BookmarkedBookType[];
  fetchFavorites: () => Promise<void>;
  removeFromFavorites: (id: string) => Promise<void>;
  addToFavorites: (id: string) => Promise<void>;
  isFavorite: (id: string) => boolean;
  favoriteCount: number;
};

export type { FavoriteBooksContextValue };
