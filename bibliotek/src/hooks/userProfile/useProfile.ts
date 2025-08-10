import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { toast } from "react-toastify";
import { useAuthContext } from "@/context/auth/useAuthContext";
import { useAuthErrorContext } from "@/context/authError/useAuthErrorContext";
import type { Body } from "@/context/userProfile/types";
import type { UserDetails } from "@/types/User";

export function useProfile() {
  const { accessToken, updateUsername } = useAuthContext();

  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const location = useLocation();
  const { triggerUnauthorizedLogout } = useAuthErrorContext();

  useEffect(() => {
    if (location.pathname !== "/profile") {
      setIsEditingProfile(false);
    }
  }, [location]);

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

          if (status === 404) {
            setError(message);
          } else if (status === 401) {
            triggerUnauthorizedLogout();
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
  }, [accessToken, triggerUnauthorizedLogout]);

  const editUserDetails = useCallback(
    async (body: Partial<Body>) => {
      try {
        const { data } = await axios.put("/api/user-profile/me", body, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (data.success) {
          if (data.username) {
            updateUsername(data.username);
          }
          toast.success(data.message);
          fetchUserDetails();
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response) {
            const { status } = error.response;
            const message =
              error.response.data?.message || "Unexpected server error.";

            if (status === 409) {
              toast.error(message);
            } else if (status === 401) {
              triggerUnauthorizedLogout();
            } else {
              toast.error(message);
            }
          }
        } else {
          console.error(error);
          toast.error("Something went wrong.");
        }
      }
    },
    [accessToken, triggerUnauthorizedLogout, fetchUserDetails, updateUsername]
  );

  const toggleEditMode = () => {
    setIsEditingProfile((prev) => !prev);
  };

  return {
    userDetails,
    fetchUserDetails,
    editUserDetails,
    isLoading,
    error,
    isEditingProfile,
    toggleEditMode,
  };
}
