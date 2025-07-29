import { useScreenSizeContext } from "@/context/screenSize/useScreenSizeContext";
import { SeparatorLine } from "@/components/SeparatorLine/SeparatorLine";
import { CartButton } from "@/components/Buttons/CartButton";
import { TopLinks } from "./components/TopLinks";
import { Logo } from "./components/Logo";
import { SearchBar } from "./components/SearchBar";
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
          <CartButton
            action="cartLink"
            label="CART"
            width={isSmall ? 4.6 : 10.2}
            widthUnits="rem"
          />
          <SeparatorLine direction="v" color="third" />
          <UserProfile />
        </div>
      </div>
    </header>
  );
}
