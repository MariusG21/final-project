import axios from "axios";
import { toast } from "react-toastify";
import { useAuthContext } from "@/context/auth/useAuthContext";

export function useRemoveFromFavorites() {
  const { user, accessToken } = useAuthContext();

  const removeFromFavorites = async (id: string) => {
    if (!user) {
      toast.info("Login before this action.");
      return;
    }

    try {
      const { data } = await axios.delete(`/api/favorite-books/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (data.success) {
        toast.info(data.message);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          const { status } = error.response;
          const message =
            error.response.data?.message || "Unexpected server error.";

          if (status === 409) {
            toast.info(message);
          } else if (status === 404 || status === 401) {
            toast.error(message);
          } else {
            toast.error(message);
          }
        }
      } else {
        console.error(error);
        toast.error("Something went wrong");
      }
    }
  };

  return { removeFromFavorites };
}
