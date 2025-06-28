import { Routes, Route } from "react-router";
import { HomePage } from "./pages/home/HomePage";
import { NotFoundPage } from "./pages/not-found/NotFoundPage";
import { BookPage } from "./pages/book/BookPage";
import { LoginPage } from "./pages/login/LoginPage";
import { RegisterPage } from "./pages/register/RegisterPage";
import { BestSellersPage } from "./pages/best-sellers/BestSellersPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/books/:bookId" element={<BookPage />} />
        <Route path="/best-sellers" element={<BestSellersPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
