import type { UserDetails } from "@/types/User";
import { ProfileAvatar } from "./ProfileAvatar";
import { ProfileDetails } from "./ProfileDetails";
import styles from "./ProfileSummary.module.css";

type ProfileSummaryProps = {
  userDetails: UserDetails;
};

export function ProfileSummary({ userDetails }: ProfileSummaryProps) {
  return (
    <div className={styles["profile-summary"]}>
      <ProfileAvatar username={userDetails.username} />
      <ProfileDetails
        username={userDetails.username}
        email={userDetails.email}
        createdAt={userDetails.createdAt}
        id={userDetails.id}
      />
    </div>
  );
}
