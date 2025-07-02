import { Link } from "react-router";

type LoginMessageProps = {
  message: string;
};

export function LoginMessage({ message }: LoginMessageProps) {
  return (
    <div className="info-message">
      <p>{message}</p>
      <Link to="/login" className="info-link">
        Login
      </Link>
    </div>
  );
}
