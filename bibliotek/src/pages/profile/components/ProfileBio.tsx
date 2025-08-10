import { EditButton } from "@/components/Buttons/EditButton";
import { SeparatorLine } from "@/components/SeparatorLine/SeparatorLine";
import { useUserProfileContext } from "@/context/userProfile/useUserProfileContext";
import type { UserDetails } from "@/types/User";
import styles from "./ProfileBio.module.css";

type ProfileBioProps = Pick<UserDetails, "bio">;

export function ProfileBio({ bio }: ProfileBioProps) {
  const { isEditingProfile } = useUserProfileContext();

  return (
    <div className={styles["profile-bio"]}>
      <div className={styles["bio-header"]}>
        <div className={styles["label"]}>Bio:</div>
        {isEditingProfile && <EditButton />}
      </div>
      <SeparatorLine marginBottom={0.5} />
      <div className={styles["bio"]}>
        {bio ? bio : "Too busy reading to write a bio"}
      </div>
    </div>
  );
}
