import Modal from "react-modal";
import styles from "./FormModal.module.css";
import { FormGroup } from "@/components/Auth/components/FormGroup";
import { useChangePasswordForm } from "@/hooks/auth/useChangePasswordForm";
import { useChangePassword } from "@/hooks/auth/useChangePassword";
import { useArrowNavigation } from "@/hooks/ui/useArrowNavigation";
import { ModalDecorations } from "./components/ModalDecorations";
import { ModalActions } from "./components/ModalActions";

Modal.setAppElement("#root");

export function FormModal({
  formHook,
  changePasswordHook,
}: {
  formHook: ReturnType<typeof useChangePasswordForm>;
  changePasswordHook: ReturnType<typeof useChangePassword>;
}) {
  const { registerRef, handleKeyDown } = useArrowNavigation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = formHook;

  const { changePassword, isModalOpen, shouldModalClose, closeModal } =
    changePasswordHook;

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
      <form
        onSubmit={handleSubmit(changePassword)}
        className={styles["form-modal"]}
      >
        <FormGroup
          id="currentPassword"
          label="Current Password"
          register={register}
          placeholder="Current Password"
          error={errors.currentPassword}
          inputProps={{
            ref: registerRef(0),
            onKeyDown: handleKeyDown(0),
          }}
        />
        <FormGroup
          id="password"
          label="Password"
          type="password"
          register={register}
          placeholder="Your password"
          error={errors.password}
          autoComplete="off"
          inputProps={{
            ref: registerRef(1),
            onKeyDown: handleKeyDown(1),
          }}
        />
        <ModalActions onCancel={closeModal} />
      </form>
    </Modal>
  );
}
