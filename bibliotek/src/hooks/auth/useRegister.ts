import axios from "axios";
import { toast } from "react-toastify";
import type { UseFormSetError } from "react-hook-form";
import { useRedirect } from "@/hooks/redirect/useRedirect";
import type { RegisterFormData } from "./useRegisterForm";

export function useRegister(setError: UseFormSetError<RegisterFormData>) {
  const { redirectTo } = useRedirect();

  const registerUser = async (formData: RegisterFormData) => {
    try {
      const payload = {
        username: formData.username.trim(),
        email: formData.email.trim().toLowerCase(),
        password: formData.password,
      };

      await axios.post("/api/users/register", payload);

      toast.success("Registration was successfully");
      redirectTo("/login", {
        state: {
          username: formData.username,
          password: formData.password,
        },
        replace: true,
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message: string =
          error.response?.data?.message || "Unexpected error occurred.";
        if (message === "Username already taken") {
          setError("username", {
            message,
          });
        } else if (message === "Account already in use under this email") {
          setError("email", {
            message,
          });
        } else {
          toast.error(message);
        }
      } else {
        toast.error("Something went wrong.");
        console.error(error);
      }
    }
  };

  return { registerUser };
}
