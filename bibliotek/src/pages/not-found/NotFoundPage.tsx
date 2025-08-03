import { Header } from "@/components/Header/Header";
import { usePageTitle } from "@/hooks/common/usePageTitle";
import "./NotFoundPage.css";
import { Link } from "react-router";

export function NotFoundPage() {
  usePageTitle("404 - Page Not Found");
  return (
    <>
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
