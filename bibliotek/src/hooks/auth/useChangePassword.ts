import axios from "axios";
import { toast } from "react-toastify";
import { type UseFormReset, type UseFormSetError } from "react-hook-form";
import { useAuthContext } from "@/context/auth/useAuthContext";
import type { ChangePasswordFormData } from "./useChangePasswordForm";
import { useState } from "react";
import { useAuthErrorContext } from "@/context/authError/useAuthErrorContext";

export function useChangePassword(
  reset: UseFormReset<ChangePasswordFormData>,
  setError: UseFormSetError<ChangePasswordFormData>
) {
  const { triggerUnauthorizedLogout } = useAuthErrorContext();
  const { accessToken } = useAuthContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shouldModalClose, setShouldModalClose] = useState(true);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [modalMessage, setModalMessage] = useState<string>("");

  const changePassword = async (formData: ChangePasswordFormData) => {
    setStatus("loading");
    setModalMessage("Changing password...");
    setShouldModalClose(false);
    try {
      const payload = {
        currentPassword: formData.currentPassword,
        password: formData.password,
      };
      const { data } = await axios.put(
        "/api/user-profile/me/password",
        payload,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (data.success) {
        setTimeout(() => {
          toast.success(data.message || "Password changed successfully.");
          setStatus("idle");
          setIsModalOpen(false);
          setShouldModalClose(true);
        }, 2000);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message: string =
          error.response?.data?.message || "Password change failed.";
        switch (message) {
          case "Current password is incorrect":
            setStatus("idle");
            setShouldModalClose(true);
            setModalMessage("");
            setError("currentPassword", { message });
            break;
          case "Invalid or expired token":
            setIsModalOpen(false);
            triggerUnauthorizedLogout();
            setStatus("idle");
            break;
          default:
            reset();
            setStatus("error");
            setShouldModalClose(true);
            setModalMessage(message);
        }
      } else {
        reset();
        console.error(error);
        setStatus("error");
        setModalMessage("Unexpected error occurred.");
      }
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    reset();
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  return {
    changePassword,
    isModalOpen,
    openModal,
    closeModal,
    shouldModalClose,
    status,
    modalMessage,
  };
}
