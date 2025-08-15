import { FaArrowLeft } from "react-icons/fa";
import { useRedirect } from "@/hooks/redirect/useRedirect";
import styles from "./SecondHeader.module.css";

type SecondHeaderType = {
  title: string;
  withBackButton?: boolean;
};

export function SecondHeader({ title, withBackButton }: SecondHeaderType) {
  const { redirectBackOr } = useRedirect();

  return (
    <header className={styles["header"]}>
      {withBackButton && (
        <button
          className={styles["back-button"]}
          title="back"
          onClick={() => redirectBackOr()}
        >
          <FaArrowLeft />
        </button>
      )}
      {title}
    </header>
  );
}
