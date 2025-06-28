import styles from "./CopyrightMessage.module.css";

export function CopyrightMessage() {
  return (
    <p className={styles["copyright-message"]}>
      Bibliotek is dedicated to sharing knowledge and fostering a love for
      reading. All content on this site is protected by copyright and may not be
      reproduced without written permission. <br /> <br />
      &copy; {new Date().getFullYear()} <strong>Bibliotek</strong>.
    </p>
  );
}
