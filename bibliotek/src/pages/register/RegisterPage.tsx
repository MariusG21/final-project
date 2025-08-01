import { AuthLayout } from "@/components/Auth/AuthLayout";
import { FormGroup } from "@/components/Auth/components/FormGroup";
import { AuthActions } from "@/components/Auth/components/AuthActions";
import { AuthFooter } from "@/components/Auth/components/AuthFooter";
import { useRegister } from "@/hooks/auth/useRegister";
import { useRegisterForm } from "@/hooks/auth/useRegisterForm";
import styles from "./RegisterPage.module.css";

export function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useRegisterForm();

  const { registerUser } = useRegister(setError);

  return (
    <AuthLayout title="REGISTER" subtitle="YOUR ACCOUNT">
      <form
        onSubmit={handleSubmit(registerUser)}
        className={styles["register-form"]}
      >
        <FormGroup
          id="username"
          label="Username"
          register={register}
          placeholder="Your username"
          error={errors.username}
        />
        <FormGroup
          id="email"
          label="Email"
          register={register}
          placeholder="Your email"
          error={errors.email}
        />
        <div className={styles["password-group"]}>
          <FormGroup
            id="password"
            label="Password"
            type="password"
            register={register}
            placeholder="Your password"
            error={errors.password}
          />

          <FormGroup
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            register={register}
            placeholder="Confirm password"
            error={errors.confirmPassword}
          />
        </div>

        <AuthActions submitLabel="Register" />
      </form>

      <AuthFooter
        text="Already have an account?"
        linkTo="/login"
        linkText="Login"
      />
    </AuthLayout>
  );
}
