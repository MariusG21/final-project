import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import type { UseFormReset, UseFormSetError } from "react-hook-form";
import { useAuthContext } from "@/context/auth/useAuthContext";
import type { LoginFormData } from "./useLoginForm";

export function useLogin(
  reset: UseFormReset<LoginFormData>,
  setError: UseFormSetError<LoginFormData>
) {
  const navigate = useNavigate();
  const { login } = useAuthContext();

  const onSubmit = async (formData: LoginFormData) => {
    try {
      const payload = {
        username: formData.username.trim(),
        password: formData.password,
      };

      const { data } = await axios.post("/api/users/login", payload);
      login(data.data);
      toast.success("Logged in successfully");
      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message: string =
          error.response?.data?.message || "Login failed.";
        switch (message) {
          case "Incorrect username.":
            setError("username", { message });
            break;
          case "Incorrect password.":
            setError("password", { message });
            break;
          default:
            toast.error(message);
            console.error(message, error);
            reset();
        }
      } else {
        toast.error("Something went wrong.");
        console.error(error);
        reset();
      }
    }
  };

  return { loginUser: onSubmit };
}
