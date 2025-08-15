import { Link } from "react-router";
import { useScreenSizeContext } from "@/context/screenSize/useScreenSizeContext";
import { getFirstLetter } from "@/utils/getFirstLetter";
import styles from "./UserProfile.module.css";

export function LoggedInUserProfile({ username }: { username: string }) {
  const { isSmall } = useScreenSizeContext();

  return isSmall ? (
    <div className={styles["user-profile"]}>
      <Link
        to="/profile/me"
        title={username}
        className={styles["profile-picture"]}
      >
        {getFirstLetter(username)}
      </Link>
    </div>
  ) : (
    <Link to="/profile/me" className={styles["user-profile"]}>
      <div className={styles["profile-picture"]}>
        {getFirstLetter(username)}
      </div>
      <div className={styles["user-details"]}>{username}</div>
    </Link>
  );
}
