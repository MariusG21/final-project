import { SeparatorLine } from "@/components/SeparatorLine/SeparatorLine";
import { useCartTotalsContext } from "@/context/cartTotals/useCartTotalsContext";
import { LoadingMessage } from "@/components/InfoMessages/LoadingMessage/LoadingMessage";
import { ErrorMessage } from "@/components/InfoMessages/ErrorMessage/ErrorMessage";
import { SummaryRow } from "./SummaryRow";
import { BuyNowButton } from "./BuyNowButton";
import styles from "./PaymentSummary.module.css";

export function PaymentSummary() {
  const { error, loading, cart } = useCartTotalsContext();

  return (
    <div className={styles["payment-summary"]}>
      {loading ? (
        <LoadingMessage message="Payment Summary is loading." />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : (
        cart && (
          <>
            <SummaryRow label="Items:" value={cart.quantity} />
            <SummaryRow
              label="Subtotal:"
              value={cart.subtotal}
              type="currency"
            />
            <SummaryRow
              label="Tax Rate:"
              value={cart.taxRate}
              type="percentage"
            />
            <SummaryRow label="Tax:" value={cart.tax} type="currency" />
            <SeparatorLine color="secondary" />
            <SummaryRow
              label="Total:"
              value={cart.total}
              highlight
              type="currency"
            />
            <BuyNowButton />
          </>
        )
      )}
    </div>
  );
}
