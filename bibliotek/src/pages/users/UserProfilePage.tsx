import { useEffect } from "react";
import { useParams } from "react-router";
import { TitleAndFavicon } from "@/components/Title/TitleAndFavicon";
import { Header } from "@/components/Header/Header";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { SecondHeader } from "@/components/SecondHeader/SecondHeader";
import { LoadingMessage } from "@/components/InfoMessages/LoadingMessage/LoadingMessage";
import { ErrorMessage } from "@/components/InfoMessages/ErrorMessage/ErrorMessage";
import { useAuthContext } from "@/context/auth/useAuthContext";
import { useAnotherProfile } from "@/hooks/userProfile/useAnotherProfile";
import { useRedirect } from "@/hooks/redirect/useRedirect";
import { getProfileTitle } from "@/utils/getProfileTitle";
import { ProfileSummary } from "./components/ProfileSummary";
import { ProfileBio } from "./components/ProfileBio";
import { ProfileExtraInfo } from "./components/ProfileExtraInfo";
import styles from "./UserProfilePage.module.css";

export function UserProfilePage() {
  const { user } = useAuthContext();
  const { redirectTo } = useRedirect();
  const { userDetails, fetchUserDetails, isLoading, error } =
    useAnotherProfile();
  const { id } = useParams();

  useEffect(() => {
    if (user && user.id === id) {
      redirectTo("/profile/me");
      return;
    } else {
      fetchUserDetails(id);
    }
  }, [fetchUserDetails, id, user, redirectTo]);

  return (
    <>
      <TitleAndFavicon pageTitle={userDetails?.username} />
      <Header />
      <Sidebar />
      <SecondHeader title={getProfileTitle(userDetails?.username)} />
      <main className={styles["profile-page"]}>
        {isLoading ? (
          <LoadingMessage message="Your profile is loading... " />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : (
          userDetails && (
            <div className={styles["profile-content"]}>
              <ProfileSummary userDetails={userDetails} />
              <ProfileBio bio={userDetails.bio} />
              <ProfileExtraInfo userDetails={userDetails} />
            </div>
          )
        )}
      </main>
    </>
  );
}
