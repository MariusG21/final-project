import { Link } from "react-router";
import { TitleAndFavicon } from "@/components/Title/TitleAndFavicon";
import { Header } from "@/components/Header/Header";
import "./NotFoundPage.css";

export function NotFoundPage() {
  return (
    <>
      <TitleAndFavicon />
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
