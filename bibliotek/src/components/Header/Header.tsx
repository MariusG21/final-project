import { useScreenSizeContext } from "@/context/screenSize/useScreenSizeContext";
import { SeparatorLine } from "@/components/SeparatorLine/SeparatorLine";
import { TopLinks } from "./components/TopLinks";
import { Logo } from "./components/Logo";
import { SearchBar } from "./components/SearchBar";
import { CheckoutLink } from "./components/CheckoutLink";
import { UserProfile } from "./components/UserProfile";
import { HamburgerMenu } from "./components/HamburgerMenu";
import styles from "./Header.module.css";

export function Header() {
  const { isSmall } = useScreenSizeContext();

  return (
    <header className={styles["header"]}>
      <TopLinks />
      <div className={styles["main-header"]}>
        <Logo />
        <SearchBar />
        <div className={styles["right-section"]}>
          {isSmall && <HamburgerMenu />}
          <CheckoutLink />
          <SeparatorLine direction="v" color="third" />
          <UserProfile />
        </div>
      </div>
    </header>
  );
}
