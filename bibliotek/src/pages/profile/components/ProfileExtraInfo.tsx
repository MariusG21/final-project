import { SeparatorLine } from "@/components/SeparatorLine/SeparatorLine";
import type { UserDetails } from "@/types/User";
import { ExtraInfoGroup } from "./ExtraInfoGroup";
import styles from "./ProfileExtraInfo.module.css";

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
          field="favoriteBook"
          label="Favorite Book:"
          value={userDetails.favoriteBook}
        />
        <ExtraInfoGroup
          field="favoriteGenre"
          label="Favorite Genre:"
          value={userDetails.favoriteGenre}
        />
        <ExtraInfoGroup
          field="favoriteAuthor"
          label="Favorite Author:"
          value={userDetails.favoriteAuthor}
        />
      </div>
    </div>
  );
}
