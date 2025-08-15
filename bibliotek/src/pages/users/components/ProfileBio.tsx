import { SeparatorLine } from "@/components/SeparatorLine/SeparatorLine";
import type { UserDetails } from "@/types/User";
import styles from "./ProfileBio.module.css";

type ProfileBioProps = Pick<UserDetails, "bio">;

export function ProfileBio({ bio }: ProfileBioProps) {
  return (
    <div className={styles["profile-bio"]}>
      <div className={styles["bio-header"]}>
        <div className={styles["label"]}>Bio:</div>
      </div>
      <SeparatorLine marginBottom={0.5} />
      <div className={styles["bio"]}>
        {bio ? bio : "Too busy reading to write a bio"}
      </div>
    </div>
  );
}
