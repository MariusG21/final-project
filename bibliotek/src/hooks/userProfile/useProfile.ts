import axios from "axios";
import { useCallback, useState } from "react";
import { useAuthContext } from "@/context/auth/useAuthContext";
import { useAuthErrorContext } from "@/context/authError/useAuthErrorContext";
import type { UserDetails } from "@/types/User";

export function useProfile() {
  const { accessToken } = useAuthContext();
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const { triggerUnauthorizedLogout } = useAuthErrorContext();

  const fetchUserDetails = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const { data } = await axios.get("/api/user-profile/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (data.success) {
        setUserDetails(data.data);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          const { status } = error.response;
          const message =
            error.response.data?.message || "Unexpected server error.";

          if (status === 404 || status === 401) {
            setError(message);
          } else {
            setError(message);
          }
        }
      } else {
        console.error(error);
        setError("Something went wrong.");
      }
    } finally {
      setIsLoading(false);
    }
  }, [accessToken]);

  const toggleEditMode = () => {
    setIsEditingProfile((prev) => !prev);
  };

  return {
    userDetails,
    fetchUserDetails,
    isLoading,
    error,
    isEditingProfile,
    toggleEditMode,
  };
}
