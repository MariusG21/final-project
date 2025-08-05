type AuthErrorContextValue = {
  showUnauthorizedModal: boolean;
  triggerUnauthorizedLogout: () => void;
  closeUnauthorizedModal: () => void;
};

export type { AuthErrorContextValue };
