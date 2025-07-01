export function PaymentSummary() {
  return (
    <div className="payment-summary">
      <div className="rows">
        <div className="label">Items:</div>
        <div className="price">0</div>
      </div>
      <div className="rows">
        <div className="label">Subtotal:</div>
        <div className="price">0</div>
      </div>
      <div className="rows">
        <div className="label">Tax Rate:</div>
        <div className="price">0</div>
      </div>
      <div className="rows">
        <div className="label">Tax:</div>
        <div className="price">0</div>
      </div>
      <div className="rows">
        <div className="label">Total:</div>
        <div className="price">0</div>
      </div>
    </div>
  );
}
