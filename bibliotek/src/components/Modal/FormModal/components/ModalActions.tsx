import { OutlineButton } from "@/components/Buttons/OutlineButton";
import { AuthButton } from "@/components/Buttons/AuthButton";
import styles from "./ModalActions.module.css";

type ModalActionsProps = {
  onCancel: () => void;
};

export function ModalActions(onCancel: ModalActionsProps) {
  return (
    <div className={styles["modal-actions"]}>
      <OutlineButton label="Cancel" action="cancel" cancel={() => onCancel} />
      <AuthButton type="submit" action="submit" label="Change" />
    </div>
  );
}
