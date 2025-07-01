import { TopLinks } from "./components/TopLinks";
import { Logo } from "./components/Logo";
import { SearchBar } from "./components/SearchBar";
import { CheckoutLink } from "./components/CheckoutLink";
import { UserProfile } from "./components/UserProfile";
import { SeparatorLine } from "../SeparatorLine/SeparatorLine";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles["header"]}>
      <TopLinks />
      <div className={styles["main-header"]}>
        <Logo />
        <SearchBar />
        <div className={styles["right-section"]}>
          <CheckoutLink />
          <SeparatorLine direction="v" color="third" />
          <UserProfile />
        </div>
      </div>
    </header>
  );
}
