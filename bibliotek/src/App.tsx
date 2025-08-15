import { Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";
import { UnauthorizedModal } from "@/components/Modal/UnauthorizedModal/UnauthorizedModal";
import { useAuthErrorContext } from "@/context/authError/useAuthErrorContext";
import { useUnauthorizedModalLogout } from "@/hooks/modal/useUnauthorizedModalLogout";
import { HomePage } from "./pages/home/HomePage";
import { BookPage } from "./pages/book/BookPage";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { LoginPage } from "./pages/login/LoginPage";
import { RegisterPage } from "./pages/register/RegisterPage";
import { BestSellersPage } from "./pages/best-sellers/BestSellersPage";
import { BookshelfPage } from "./pages/bookshelf/BookshelfPage";
import { NotFoundPage } from "./pages/not-found/NotFoundPage";
import { BookmarkedPage } from "./pages/bookmarked/BookmarkedPage";
import { ProfilePage } from "./pages/profile/ProfilePage";
import { UserProfilePage } from "./pages/users/UserProfilePage";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useUnauthorizedModalLogout();
  const { showUnauthorizedModal, closeUnauthorizedModal } =
    useAuthErrorContext();

  return (
    <>
      <ToastContainer
        position="top-center"
        limit={3}
        autoClose={500}
        hideProgressBar
        pauseOnHover={false}
        closeButton={false}
      />
      <UnauthorizedModal
        isOpen={showUnauthorizedModal}
        onClose={closeUnauthorizedModal}
      />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/books/:bookId" element={<BookPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/best-sellers" element={<BestSellersPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/bookshelf" element={<BookshelfPage />} />
        <Route path="/bookmarked" element={<BookmarkedPage />} />
        <Route path="/profile/me" element={<ProfilePage />} />
        <Route path="/profile/:id" element={<UserProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
