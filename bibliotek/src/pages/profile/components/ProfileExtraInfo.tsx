import { SeparatorLine } from "@/components/SeparatorLine/SeparatorLine";
import { ExtraInfoGroup } from "./ExtraInfoGroup";
import styles from "./ProfileExtraInfo.module.css";
import type { UserDetails } from "@/types/User";

type ProfileExtraInfoProps = {
  userDetails: UserDetails;
};

export function ProfileExtraInfo({ userDetails }: ProfileExtraInfoProps) {
  return (
    <div className={styles["profile-extra-info"]}>
      <div className={styles["extra-info-header"]}>
        <div className={styles["label"]}>Reader's identity:</div>
      </div>
      <SeparatorLine />

      <div className={styles["content"]}>
        <ExtraInfoGroup
          label="Favorite Book:"
          value={userDetails.favoriteBook}
        />
        <ExtraInfoGroup
          label="Favorite Genre:"
          value={userDetails.favoriteGenre}
        />
        <ExtraInfoGroup
          label="Favorite Author:"
          value={userDetails.favoriteAuthor}
        />
      </div>
    </div>
  );
}
