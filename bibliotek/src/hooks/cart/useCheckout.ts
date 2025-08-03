import axios from "axios";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { useAuthContext } from "@/context/auth/useAuthContext";
import { useBookshelfContext } from "@/context/bookshelf/useBookshelfContext";
import { useCartBooksContext } from "@/context/cartBooks/useCartBooksContext";
import { useCartTotalsContext } from "@/context/cartTotals/useCartTotalsContext";

type StatusType = "idle" | "loading" | "success" | "error";

export function useCheckout() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shouldModalClose, setShouldModalClose] = useState(true);
  const [modalMessage, setModalMessage] = useState("");
  const [status, setStatus] = useState<StatusType>("idle");
  const { user, accessToken } = useAuthContext();
  const { fetchCartBooks } = useCartBooksContext();
  const { fetchCartTotals, cartQuantity } = useCartTotalsContext();
  const { fetchBookshelf } = useBookshelfContext();

  const handlePurchase = useCallback(async () => {
    if (!user) {
      toast.error("User not found");
      return;
    }
    setStatus("loading");
    setModalMessage("Action in progress. Please wait.");
    try {
      const { data } = await axios.post("/api/cart/checkout", null, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (data.success) {
        setStatus("success");
        setShouldModalClose(false);
        setTimeout(() => {
          toast.success(data.message || "Payment successful.");
          setStatus("idle");
          setIsModalOpen(false);
          setShouldModalClose(true);
          fetchCartBooks();
          fetchCartTotals();
          fetchBookshelf();
        }, 2000);
      }
    } catch (error) {
      setStatus("error");
      if (axios.isAxiosError(error)) {
        if (error.response) {
          const { status } = error.response;
          const message =
            error.response.data?.message || "Unexpected server error.";

          if (status === 404 || status === 401) {
            //logout
            setModalMessage(message);
          } else {
            setModalMessage(message);
          }
        }
      } else {
        console.error(error);
        setModalMessage("Something went wrong.");
      }
    }
  }, [user, accessToken, fetchBookshelf, fetchCartBooks, fetchCartTotals]);

  const handleBuyNowClickEvent = useCallback(() => {
    if (!cartQuantity) {
      toast.info("Oops! Your cart is empty.");
      return;
    } else {
      setIsModalOpen(true);
    }
  }, [cartQuantity]);

  return {
    handlePurchase,
    isModalOpen,
    shouldModalClose,
    modalMessage,
    status,
    cartQuantity,
    setIsModalOpen,
    handleBuyNowClickEvent,
  };
}
