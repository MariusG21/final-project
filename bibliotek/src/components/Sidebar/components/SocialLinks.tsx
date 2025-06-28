import { SiFacebook, SiInstagram, SiTiktok, SiX } from "react-icons/si";
import { PlaceholderLink } from "./PlaceholderLink";
import styles from "./SocialLinks.module.css";

export function SocialLinks() {
  return (
    <nav className={styles["social-links"]}>
      <PlaceholderLink icon={SiFacebook} />
      <PlaceholderLink icon={SiInstagram} />
      <PlaceholderLink icon={SiTiktok} />
      <PlaceholderLink icon={SiX} />
    </nav>
  );
}
