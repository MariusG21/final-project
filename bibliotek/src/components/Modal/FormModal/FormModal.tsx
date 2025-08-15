import Modal from "react-modal";
import { useEffect } from "react";
import { FormGroup } from "@/components/Auth/components/FormGroup";
import { useChangePasswordForm } from "@/hooks/auth/useChangePasswordForm";
import { useChangePassword } from "@/hooks/auth/useChangePassword";
import { useArrowNavigation } from "@/hooks/ui/useArrowNavigation";
import { useAutoFocus } from "@/hooks/ui/useAutoFocus";
import { ModalDecorations } from "./components/ModalDecorations";
import { ModalActions } from "./components/ModalActions";
import styles from "./FormModal.module.css";
import { SeparatorLine } from "@/components/SeparatorLine/SeparatorLine";
import { FormHeader } from "./components/FormHeader";
import { LoadingMessage } from "@/components/InfoMessages/LoadingMessage/LoadingMessage";
import { ErrorMessage } from "@/components/InfoMessages/ErrorMessage/ErrorMessage";

Modal.setAppElement("#root");

export function FormModal({
  setOpenModalFn,
}: {
  setOpenModalFn?: (fn: () => void) => void;
}) {
  const { registerRef, handleKeyDown } = useArrowNavigation();
  const currentPasswordRef = useAutoFocus<HTMLInputElement>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useChangePasswordForm();
  const {
    isModalOpen,
    closeModal,
    shouldModalClose,
    changePassword,
    openModal,
    status,
    modalMessage,
  } = useChangePassword(reset, setError);

  useEffect(() => {
    if (setOpenModalFn) {
      setOpenModalFn(() => openModal);
    }
  }, [setOpenModalFn, openModal]);

  useEffect(() => {
    if (isModalOpen) {
      const timer = requestAnimationFrame(() => {
        currentPasswordRef.current?.focus();
      });
      return () => cancelAnimationFrame(timer);
    }
  }, [isModalOpen, currentPasswordRef]);

  return (
    <Modal
      isOpen={isModalOpen}
      shouldCloseOnEsc={shouldModalClose}
      shouldCloseOnOverlayClick={shouldModalClose}
      onRequestClose={closeModal}
      contentLabel="Form Modal"
      overlayClassName={styles["modal-overlay"]}
      className={styles["modal-content"]}
    >
      <ModalDecorations />
      {status === "loading" ? (
        <LoadingMessage message={modalMessage} />
      ) : status === "error" ? (
        <ErrorMessage message={modalMessage || "Unexpected server error."} />
      ) : (
        <form
          onSubmit={handleSubmit(changePassword)}
          className={styles["form-modal"]}
        >
          <FormHeader />
          <FormGroup
            id="currentPassword"
            label="Current Password"
            type="password"
            register={register}
            placeholder="Your Current Password"
            error={errors.currentPassword}
            inputProps={{
              ref: (el) => {
                currentPasswordRef.current = el;
                registerRef(0)(el);
              },
              onKeyDown: handleKeyDown(0),
            }}
          />
          <FormGroup
            id="password"
            label="Password"
            type="password"
            register={register}
            placeholder="Your New Password"
            error={errors.password}
            autoComplete="off"
            inputProps={{
              ref: registerRef(1),
              onKeyDown: handleKeyDown(1),
            }}
          />
          <FormGroup
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            register={register}
            placeholder="Confirm Your New Password"
            error={errors.confirmPassword}
            autoComplete="off"
            inputProps={{
              ref: registerRef(2),
              onKeyDown: handleKeyDown(2),
            }}
          />
          <SeparatorLine marginBottom={0.5} marginTop={1} />
          <ModalActions onCancel={closeModal} />
        </form>
      )}
    </Modal>
  );
}
