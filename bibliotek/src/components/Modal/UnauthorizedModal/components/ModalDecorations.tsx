import FoldedCorner from "@/assets/images/folded-corner.png";
import styles from "./ModalDecorations.module.css";

export function ModalDecorations() {
  return (
    <>
      <img
        src={FoldedCorner}
        alt="#"
        className={`${styles["folded-corner"]} ${styles["top-left"]}`}
      />
      <img
        src={FoldedCorner}
        alt="#"
        className={`${styles["folded-corner"]} ${styles["top-right"]}`}
      />
      <img
        src={FoldedCorner}
        alt="#"
        className={`${styles["folded-corner"]} ${styles["bottom-right"]}`}
      />
      <img
        src={FoldedCorner}
        alt="#"
        className={`${styles["folded-corner"]} ${styles["bottom-left"]}`}
      />
    </>
  );
}
