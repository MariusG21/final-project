import { Link } from "react-router";
import { useEffect, useState } from "react";
import blankProfilePicture from "@/assets/images/blank-profile-picture.png";
import styles from "./UserProfile.module.css";

export function UserProfile() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    setUser(false);
  }, []);

  return (
    <div className={styles["user-profile"]}>
      <div className={styles["profile-picture"]}>
        <img src={blankProfilePicture} alt="" />
      </div>
      {user ? (
        <div className={styles["user-details"]}>Marius</div>
      ) : (
        <Link to="/login" className={styles["login-button"]}>
          Login
        </Link>
      )}
    </div>
  );
}
