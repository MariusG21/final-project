type InfoMessageProps = {
  message: string;
  position?: string;
};

export function InfoMessage({ message, position }: InfoMessageProps) {
  return <div className={`info-message ${position}`}>{message}</div>;
}
