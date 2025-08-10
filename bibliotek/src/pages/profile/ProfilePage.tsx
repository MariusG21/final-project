import { useEffect } from "react";
import { TitleAndFavicon } from "@/components/Title/TitleAndFavicon";
import { Header } from "@/components/Header/Header";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { SecondHeader } from "@/components/SecondHeader/SecondHeader";
import { LoadingMessage } from "@/components/InfoMessages/LoadingMessage/LoadingMessage";
import { ErrorMessage } from "@/components/InfoMessages/ErrorMessage/ErrorMessage";
import { ToggleEditMode } from "@/components/Buttons/ToggleEditMode";
import { LoginMessage } from "@/components/InfoMessages/LoginMessage/LoginMessage";
import { useUserProfileContext } from "@/context/userProfile/useUserProfileContext";
import { useAuthContext } from "@/context/auth/useAuthContext";
import { ProfileSummary } from "./components/ProfileSummary";
import { ProfileBio } from "./components/ProfileBio";
import { ProfileExtraInfo } from "./components/ProfileExtraInfo";
import styles from "./ProfilePage.module.css";

export function ProfilePage() {
  const { user } = useAuthContext();
  const { userDetails, fetchUserDetails, isLoading, error } =
    useUserProfileContext();

  useEffect(() => {
    if (user) {
      fetchUserDetails();
    }
  }, [user, fetchUserDetails]);

  return (
    <>
      <TitleAndFavicon />
      <Header />
      <Sidebar />
      <SecondHeader title="Your Profile" />
      <main className={styles["profile-page"]}>
        {!user ? (
          <LoginMessage message="Login to see your profile" />
        ) : isLoading ? (
          <LoadingMessage message="Your profile is loading... " />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : (
          userDetails && (
            <div className={styles["profile-content"]}>
              <ProfileSummary userDetails={userDetails} />
              <ProfileBio bio={userDetails.bio} />
              <ProfileExtraInfo userDetails={userDetails} />
              <ToggleEditMode />
            </div>
          )
        )}
      </main>
    </>
  );
}
