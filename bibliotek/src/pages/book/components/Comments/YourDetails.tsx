import { useState } from "react";
import { Link } from "react-router";
import { getFirstLetter } from "@/utils/getFirstLetter";
import styles from "./YourDetails.module.css";

type YourDetailsProps = {
  user: {
    id: string;
    username: string;
  };
  isEdited: boolean;
};

export function YourDetails({ user, isEdited }: YourDetailsProps) {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  return (
    <>
      <Link
        to={"/profile/me"}
        className={styles["user-details"]}
        onMouseEnter={() => setTooltipVisible(true)}
        onMouseLeave={() => setTooltipVisible(false)}
      >
        <div className={styles["user-avatar"]}>
          {getFirstLetter(user.username)}
        </div>
        <div className={styles["username"]}>{user.username}</div>
        <div
          className={styles["tooltip"]}
          style={{ opacity: isTooltipVisible ? 1 : 0 }}
        >
          That's You
        </div>
      </Link>
      {isEdited && <span className={styles["edited"]}>(edited)</span>}
    </>
  );
}
