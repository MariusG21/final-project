import { useEffect, useState, type ChangeEvent } from "react";
import { EditButton } from "@/components/Buttons/EditButton";
import { SeparatorLine } from "@/components/SeparatorLine/SeparatorLine";
import { useUserProfileContext } from "@/context/userProfile/useUserProfileContext";
import type { Body } from "@/context/userProfile/types";
import type { UserDetails } from "@/types/User";
import styles from "./ProfileBio.module.css";

type ProfileBioProps = Pick<UserDetails, "bio">;

export function ProfileBio({ bio }: ProfileBioProps) {
  const { isEditingProfile } = useUserProfileContext();
  const [isEditingField, setIsEditingField] = useState(false);
  const [bioText, setBioText] = useState(bio || "");

  useEffect(() => {
    setBioText(bio || "");
  }, [bio]);

  useEffect(() => {
    if (!isEditingProfile) {
      setIsEditingField(false);
    }
  }, [isEditingProfile]);

  const toggleEditingField = () => {
    setIsEditingField((prev) => !prev);
  };

  const body: Partial<Body> = {
    bio: bioText,
  };

  const handleChangeEvent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBioText(e.target.value);
  };

  return (
    <div className={styles["profile-bio"]}>
      <div className={styles["bio-header"]}>
        <div className={styles["label"]}>Bio:</div>
        {isEditingProfile && (
          <EditButton
            isEditingField={isEditingField}
            toggleEditingField={toggleEditingField}
            body={body}
          />
        )}
      </div>
      <SeparatorLine marginBottom={0.5} />

      {isEditingField ? (
        <textarea
          value={bioText}
          onChange={handleChangeEvent}
          className={styles["edit-bio"]}
          placeholder="Write something about yourself..."
        />
      ) : (
        <div className={styles["bio"]}>
          {bio ? bio : "Too busy reading to write a bio"}
        </div>
      )}
    </div>
  );
}
