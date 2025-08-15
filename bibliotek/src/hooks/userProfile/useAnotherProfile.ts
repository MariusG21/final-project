import axios from "axios";
import { useCallback, useState } from "react";
import type { UserDetails } from "@/types/User";

export function useAnotherProfile() {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUserDetails = useCallback(async (id?: string) => {
    setIsLoading(true);
    setError(null);
    try {
      if (!id) {
        setError("User ID is required to fetch profile details.");
        setIsLoading(false);
        return;
      }
      const { data } = await axios.get(`/api/user-profile/${id}`);
      if (data.success) {
        setUserDetails(data.data);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          const message =
            error.response.data?.message || "Something went wrong.";
          setError(message);
        }
      } else {
        console.error(error);
        setError("Unexpected server error.");
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    userDetails,
    fetchUserDetails,
    isLoading,
    error,
  };
}
