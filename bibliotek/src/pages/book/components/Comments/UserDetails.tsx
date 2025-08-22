import { Link } from "react-router";
import { getFirstLetter } from "@/utils/getFirstLetter";
import styles from "./UserDetails.module.css";

type UserDetailsProps = {
  user: {
    id: string;
    username: string;
  };
  isEdited: boolean;
};

export function UserDetails({ user, isEdited }: UserDetailsProps) {
  return (
    <>
      <Link to={`/profile/${user.id}`} className={styles["user-details"]}>
        <div className={styles["user-avatar"]}>
          {getFirstLetter(user.username)}
        </div>
        <div className={styles["username"]}>{user.username}</div>
      </Link>
      {isEdited && <span className={styles["edited"]}>(edited)</span>}
    </>
  );
}
