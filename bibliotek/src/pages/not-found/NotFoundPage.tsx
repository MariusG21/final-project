import { Link } from "react-router";
import { Header } from "@/components/Header/Header";
import "./NotFoundPage.css";
import { Title } from "@/components/Title/Title";

export function NotFoundPage() {
  return (
    <>
      <Title />
      <Header />
      <h1 className="not-found-message">Page Not Found</h1>
      <h2 className="go-home-message">
        Go back{" "}
        <Link to="/" className="home-link">
          home
        </Link>{" "}
      </h2>
    </>
  );
}
