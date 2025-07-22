import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useAuthContext } from "@/context/auth/useAuthContext";
import { ConfirmationModal } from "@/components/Modal/ConfirmationModal";
import { useCartBooksContext } from "@/context/cartBooks/useCartBooksContext";
import { useCartTotalsContext } from "@/context/cartTotals/useCartTotalsContext";
import styles from "./BuyNowButton.module.css";

type StatusType = "idle" | "loading" | "success" | "error";

export function BuyNowButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shouldModalClose, setShouldModalClose] = useState(true);
  const [modalMessage, setModalMessage] = useState("");
  const [status, setStatus] = useState<StatusType>("idle");
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
        status={status}
        message={modalMessage}
        shouldClose={shouldModalClose}
      />
    </>
  );
}
