// import { FaStar } from "react-icons/fa";
// import type { JSX } from "react";
import FoldedCorner from "@/assets/images/folded-corner.png";
import styles from "./ModalDecorations.module.css";

export function ModalDecorations() {
  // const decorationStars: JSX.Element[] = [];

  // for (let i = 0; i < 10; i++) {
  //   const top = Math.ceil(Math.random() * 80) + 10;
  //   const left = Math.ceil(Math.random() * 80) + 10;
  //   const fontSize = (Math.ceil(Math.random() * 10) + 10) / 10;

  //   const style = {
  //     fontSize: `${fontSize}rem`,
  //     top: `${top}%`,
  //     left: `${left}%`,
  //   };

  //   decorationStars.push(
  //     <div className={styles["decoration-star"]} style={style}>
  //       <FaStar />
  //     </div>
  //   );
  // }

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
      {/* {decorationStars.map((star) => star)} */}
    </>
  );
}
