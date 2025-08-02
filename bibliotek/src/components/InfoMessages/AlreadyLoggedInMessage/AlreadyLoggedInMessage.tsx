import { MessageActions } from "./components/MessageActions";
import styles from "./AlreadyLoggedInMessage.module.css";

type AlreadyLoggedInMessageProps = {
  message: string;
};

export function AlreadyLoggedInMessage({
  message,
}: AlreadyLoggedInMessageProps) {
  return (
    <div className={styles["message-container"]}>
      <p className={styles["message"]}>{message}</p>
      <MessageActions />
    </div>
  );
}
