import { useContext } from "react";
import { UserProfileContext } from "./UserProfileContext";

export const useUserProfileContext = () => {
  const ctx = useContext(UserProfileContext);

  if (!ctx) {
    throw new Error(
      "useUserProfileContext should only be used in children of UserProfileContextProvider!"
    );
  }

  return ctx;
};
