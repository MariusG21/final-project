import { getFirstLetter } from "@/utils/getFirstLetter";
import styles from "./ProfileAvatar.module.css";

type ProfileAvatarProps = {
  username: string;
};

export function ProfileAvatar({ username }: ProfileAvatarProps) {
  return (
    <div className={styles["profile-avatar"]}>{getFirstLetter(username)}</div>
  );
}
