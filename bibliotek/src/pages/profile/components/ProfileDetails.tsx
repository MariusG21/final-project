import type { UserDetails } from "@/types/User";
import { InfoGroup } from "./InfoGroup";
import styles from "./ProfileDetails.module.css";

type ProfileDetailsProps = Pick<
  UserDetails,
  "username" | "email" | "createdAt" | "id"
>;

export function ProfileDetails({
  username,
  email,
  createdAt: joined,
  id,
}: ProfileDetailsProps) {
  return (
    <div className={styles["profile-details"]}>
      <InfoGroup label="Username:" value={username} />
      <InfoGroup label="Gmail:" value={email} />
      <InfoGroup label="Joined:" value={joined} isDate noEditable />
      <InfoGroup label="Id:" value={id} noEditable />
    </div>
  );
}
