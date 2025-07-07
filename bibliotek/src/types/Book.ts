type Book = {
  id: string;
  title: string;
  author: string;
  image: string;
  genre: string[];
  rating: {
    stars: number;
    reviews: number;
  };
  copiesSold: number;
  discount: number | null;
  price: number;
  description: string;
  publishedYear: number;
};

type BookPreview = Omit<
  Book,
  "genre" | "description" | "publishedYear" | "copiesSold"
>;

type SimilarBook = Pick<Book, "id" | "image" | "title" | "author">;

type BestSeller = SimilarBook & {
  place: number;
};

type CartBook = Omit<BookPreview, "rating">;

export type { Book, BookPreview, SimilarBook, BestSeller, CartBook };
