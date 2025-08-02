import { useEffect } from "react";
import { useLocation } from "react-router";
import { useAuthContext } from "@/context/auth/useAuthContext";
import { AuthLayout } from "@/components/Auth/AuthLayout";
import { AuthFooter } from "@/components/Auth/components/AuthFooter";
import { FormGroup } from "@/components/Auth/components/FormGroup";
import { AuthActions } from "@/components/Auth/components/AuthActions";
import { AlreadyLoggedInMessage } from "@/components/InfoMessages/AlreadyLoggedInMessage/AlreadyLoggedInMessage";
import { useLogin } from "@/hooks/auth/useLogin";
import { useLoginForm } from "@/hooks/auth/useLoginForm";
import { useRedirect } from "@/hooks/redirect/useRedirect";
import { useAutoFocus } from "@/hooks/ui/useAutoFocus";
import { useArrowNavigation } from "@/hooks/ui/useArrowNavigation";
import styles from "./LoginPage.module.css";

export function LoginPage() {
  const { user } = useAuthContext();
  const location = useLocation();
  const { username = "", password = "" } = location.state ?? {};
  const { redirectTo } = useRedirect();
  const { registerRef, handleKeyDown } = useArrowNavigation();
  const usernameRef = useAutoFocus<HTMLInputElement>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useLoginForm({ username, password });

  const { loginUser } = useLogin(reset, setError);

  useEffect(() => {
    if (username || password) {
      reset({ username, password });
      redirectTo(location.pathname, { replace: true });
    }
  }, [username, password, reset, redirectTo, location.pathname]);

  return (
    <AuthLayout title="LOGIN" subtitle="TO YOUR ACCOUNT">
      {!user ? (
        <>
          <form
            onSubmit={handleSubmit(loginUser)}
            className={styles["login-form"]}
          >
            <FormGroup
              id="username"
              label="Username"
              register={register}
              placeholder="Your username"
              error={errors.username}
              inputProps={{
                ref: (el) => {
                  usernameRef.current = el;
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
              placeholder="Your password"
              error={errors.password}
              autoComplete="current-password"
              inputProps={{
                ref: registerRef(1),
                onKeyDown: handleKeyDown(1),
              }}
            />

            <AuthActions submitLabel="Login" />
          </form>
          <AuthFooter
            text="Don't have an account?"
            linkTo="/register"
            linkText="Register"
          />
        </>
      ) : (
        <AlreadyLoggedInMessage message="Looks like you're already in!" />
      )}
    </AuthLayout>
  );
}
