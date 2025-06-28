import "./ErrorMessage.css";

type ErrorMessageProps = {
  message: string;
};

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="error-message">
      <p>{message}</p>
      <button
        className="reload-button"
        onClick={() => window.location.reload()}
      >
        Retry
      </button>
    </div>
  );
}
