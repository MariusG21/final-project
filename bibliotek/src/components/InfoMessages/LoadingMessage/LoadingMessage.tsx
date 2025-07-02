type LoadingMessageProps = {
  message: string;
  position?: string;
};

export function LoadingMessage({
  message = "Loading...",
  position,
}: LoadingMessageProps) {
  return <div className={`info-message ${position}`}>{message}</div>;
}
