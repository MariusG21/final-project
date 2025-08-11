import axios from "axios";
import { toast } from "react-toastify";
import type { UseFormReset, UseFormSetError } from "react-hook-form";
import { useAuthContext } from "@/context/auth/useAuthContext";
import type { ChangePasswordFormData } from "./useChangePasswordForm";
import { useState } from "react";

export function useChangePassword(
  reset: UseFormReset<ChangePasswordFormData>,
  setError: UseFormSetError<ChangePasswordFormData>
) {
  const { accessToken } = useAuthContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shouldModalClose, setShouldModalClose] = useState(true);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [modalMessage, setModalMessage] = useState<string | null>(null);

  const changePassword = async (formData: ChangePasswordFormData) => {
    setStatus("loading");
    setModalMessage("Changing password...");
    setShouldModalClose(false);
    try {
      const { data } = await axios.put(
        "/api/user-profile/me/password",
        formData,
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
            setError("currentPassword", { message });
            break;
          default:
            reset();
            toast.error(message);
        }
      } else {
        reset();
        console.error(error);
        toast.error("Something went wrong while changing the password.");
      }
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
