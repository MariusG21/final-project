import { Link } from "react-router";
import { useScreenSizeContext } from "@/context/screenSize/useScreenSizeContext";
import { AuthButton } from "@/components/Buttons/AuthButton";
import blankProfilePicture from "@/assets/images/blank-profile-picture.png";
import styles from "./UserProfile.module.css";

export function AnonymousProfile() {
  const { isSmall } = useScreenSizeContext();

  return (
    <div className={styles["user-profile"]}>
      {isSmall ? (
        <Link to="/login" title="Login" className={styles["profile-picture"]}>
          <img src={blankProfilePicture} alt="" />
        </Link>
      ) : (
        <>
          <div className={styles["profile-picture"]}>
            <img src={blankProfilePicture} alt="" />
          </div>
          <AuthButton width={8} height={3.6} borderRadius={1.2} />
        </>
      )}
    </div>
  );
}
