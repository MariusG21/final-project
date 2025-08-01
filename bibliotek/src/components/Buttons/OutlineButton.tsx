import { toast } from "react-toastify";
import { useAuthContext } from "@/context/auth/useAuthContext";
import { useRedirect } from "@/hooks/redirect/useRedirect";
import styles from "./OutlineButton.module.css";

type OutlineButtonProps = {
  label: string;
  action: "link" | "logout";
};

export function OutlineButton({ label, action }: OutlineButtonProps) {
  const { redirectBackOr } = useRedirect();
  const { logout } = useAuthContext();

  const handleEvent = () => {
    switch (action) {
      case "logout":
        logout();
        break;
      case "link":
        redirectBackOr();
        break;
      default:
        toast.error("Something went wrong");
    }
  };

  return (
    <div onClick={handleEvent} className={styles["outline-button"]}>
      {label}
    </div>
  );
}
