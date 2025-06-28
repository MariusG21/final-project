import axios from "axios";
import { useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthLayout } from "@/components/Auth/AuthLayout";
import { AuthFooter } from "@/components/Auth/components/AuthFooter";
import { FormGroup } from "@/components/Auth/components/FormGroup";
import { AuthActions } from "@/components/Auth/components/AuthActions";
import styles from "./LoginPage.module.css";
import toast from "react-hot-toast";

type LoginFormData = {
  username: string;
  password: string;
};

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});

export function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const defaultUsername = location.state?.username || "";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm<LoginFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      username: defaultUsername,
      password: "",
    },
  });

  const onSubmit = async (formData: LoginFormData) => {
    try {
      console.log("Form submitted with data:", formData);
      const { data } = await axios.post("/api/users/login", formData);
      console.log(data);
      toast.success("Logged in successfully");
      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message: string =
          error.response?.data?.message || "Login failed.";
        if (message === "Incorrect username.") {
          setError("username", {
            message,
          });
        } else if (message === "Incorrect password.") {
          setError("password", {
            message,
          });
        } else {
          toast.error(message);
          console.error(message, error);
          reset();
        }
      } else {
        console.error("Something went wrong: ", error);
      }
    }
  };

  return (
    <AuthLayout title="LOGIN" subtitle="TO YOUR ACCOUNT">
      <form onSubmit={handleSubmit(onSubmit)} className={styles["login-form"]}>
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
