import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useAuthContext } from "@/context/auth/useAuthContext";
import { ConfirmationModal } from "@/components/Modal/ConfirmationModal";
import { useCartBooksContext } from "@/context/cartBooks/useCartBooksContext";
import { useCartTotalsContext } from "@/context/cartTotals/useCartTotalsContext";
import styles from "./BuyNowButton.module.css";

export function BuyNowButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user, accessToken } = useAuthContext();
  const { fetchCartBooks } = useCartBooksContext();
  const { fetchCartTotals, cartQuantity } = useCartTotalsContext();

  const handleClickEvent = () => {
    if (!cartQuantity) {
      toast.info("Oops! Your cart is empty.");
      return;
    } else {
      setIsModalOpen(true);
    }
  };

  const handlePurchase = async () => {
    if (!user) {
      toast.error("User not found");
      return;
    }
    try {
      const { data } = await axios.post("/api/cart/checkout", null, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (data.success) {
        toast.success(data.message || "Payment successful.");
        fetchCartBooks();
        fetchCartTotals();
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          const { status } = error.response;
          const message =
            error.response.data?.message || "Unexpected server error.";

          if (status === 404 || status === 401) {
            //logout
            toast.error(message);
          } else {
            toast.error(message);
          }
        }
      } else {
        console.error(error);
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <>
      <div onClick={handleClickEvent} className={styles["buy-now-border"]}>
        <div className={styles["buy-now-button"]}>Buy Now</div>
      </div>
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handlePurchase}
        title="Ready to read?"
        subtitle="Just confirm your purchase to get started."
      />
    </>
  );
}
