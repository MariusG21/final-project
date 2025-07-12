import { Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";
import { HomePage } from "./pages/home/HomePage";
import { BookPage } from "./pages/book/BookPage";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { LoginPage } from "./pages/login/LoginPage";
import { RegisterPage } from "./pages/register/RegisterPage";
import { BestSellersPage } from "./pages/best-sellers/BestSellersPage";
import { BookshelfPage } from "./pages/bookshelf/BookshelfPage";
import { NotFoundPage } from "./pages/not-found/NotFoundPage";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        limit={3}
        autoClose={500}
        hideProgressBar
        pauseOnHover={false}
      />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/books/:bookId" element={<BookPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/best-sellers" element={<BestSellersPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/bookshelf" element={<BookshelfPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
