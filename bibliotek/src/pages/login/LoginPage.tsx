import { useLocation } from "react-router";
import { AuthLayout } from "@/components/Auth/AuthLayout";
import { AuthFooter } from "@/components/Auth/components/AuthFooter";
import { FormGroup } from "@/components/Auth/components/FormGroup";
import { AuthActions } from "@/components/Auth/components/AuthActions";
import styles from "./LoginPage.module.css";
import { useLogin } from "@/hooks/auth/useLogin";
import { useLoginForm } from "@/hooks/auth/useLoginForm";

export function LoginPage() {
  const location = useLocation();
  const defaultUsername = location.state?.username || "";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useLoginForm(defaultUsername);

  const { loginUser } = useLogin(reset, setError);

  return (
    <AuthLayout title="LOGIN" subtitle="TO YOUR ACCOUNT">
      <form onSubmit={handleSubmit(loginUser)} className={styles["login-form"]}>
        <FormGroup
          id="username"
          label="Username"
          register={register}
          placeholder="Your username"
          error={errors.username}
        />
        <FormGroup
          id="password"
          label="Password"
          type="password"
          register={register}
          placeholder="Your password"
          error={errors.password}
        />

        <AuthActions submitText="Login" cancelLink="/" />
      </form>
      <AuthFooter
        text="Don't have an account?"
        linkTo="/register"
        linkText="Register"
      />
    </AuthLayout>
  );
}
