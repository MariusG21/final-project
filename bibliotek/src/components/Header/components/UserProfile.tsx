import { Link } from "react-router";
import { useAuthContext } from "@/context/auth/useAuthContext";
import { getFirstLetter } from "@/utils/getFirstLetter";
import blankProfilePicture from "@/assets/images/blank-profile-picture.png";
import styles from "./UserProfile.module.css";

export function UserProfile() {
  const { user } = useAuthContext();

  return user ? (
    <Link to="/profile" className={styles["user-profile"]}>
      <div className={styles["profile-picture"]}>
        {getFirstLetter(user.username)}
      </div>
      <div className={styles["user-details"]}>{user.username}</div>
    </Link>
  ) : (
    <div className={styles["user-profile"]}>
      <div className={styles["profile-picture"]}>
        <img src={blankProfilePicture} alt="" />
      </div>
      <Link to="/login" className={styles["login-button"]}>
        Login
      </Link>
    </div>
  );
}
