import { ConfirmationModal } from "@/components/Modal/ConfirmationModal";
import { CartButton } from "@/components/Buttons/CartButton";
import { useCheckout } from "@/hooks/cart/useCheckout";

export function BuyNowButton() {
  const {
    handlePurchase,
    isModalOpen,
    shouldModalClose,
    status,
    modalMessage,
    setIsModalOpen,
    handleBuyNowClickEvent,
  } = useCheckout();

  return (
    <>
      <CartButton
        action="buy"
        height={4.6}
        borderRadius={10}
        label="Buy Now"
        clickEvent={handleBuyNowClickEvent}
      />
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
