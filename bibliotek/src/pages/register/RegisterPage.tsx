import * as yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthLayout } from "@/components/Auth/AuthLayout";
import { FormGroup } from "@/components/Auth/components/FormGroup";
import { AuthActions } from "@/components/Auth/components/AuthActions";
import { AuthFooter } from "@/components/Auth/components/AuthFooter";
import styles from "./RegisterPage.module.css";

type RegisterFormData = {
  username: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

const schema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(2, "Username must be at least 2 characters")
    .max(20, "Username must be at most 20 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format")
    .max(50, "Email must be at most 50 characters"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(50, "Password must be at most 50 characters"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

export function RegisterPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (formData: RegisterFormData) => {
    try {
      delete formData.confirmPassword;
      formData.username = formData.username.trim();
      formData.email = formData.email.trim().toLowerCase();

      await axios.post("/api/users/register", formData);

      toast.success("Registration was successfully");
      navigate("/login", {
        state: {
          username: formData.username,
        },
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

  return (
    <AuthLayout title="REGISTER" subtitle="YOUR ACCOUNT">
      <form
        onSubmit={handleSubmit(onSubmit)}
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
            placeholder="Confirm your password"
            error={errors.confirmPassword}
          />
        </div>

        <AuthActions submitText="Register" cancelLink="/" />
      </form>

      <AuthFooter
        text="Already have an account?"
        linkTo="/login"
        linkText="Login"
      />
    </AuthLayout>
  );
}
