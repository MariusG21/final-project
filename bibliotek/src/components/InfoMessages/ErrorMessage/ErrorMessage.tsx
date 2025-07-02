type ErrorMessageProps = {
  message: string;
  position?: string;
};

export function ErrorMessage({ message, position }: ErrorMessageProps) {
  return (
    <div className={`info-message ${position}`}>
      <p>{message}</p>
      <button className="info-link" onClick={() => window.location.reload()}>
        Retry
      </button>
    </div>
  );
}
