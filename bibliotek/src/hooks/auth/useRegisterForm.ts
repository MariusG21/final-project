import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export type RegisterFormData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const schema = yup
  .object({
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
  })
  .required();

export function useRegisterForm() {
  return useForm<RegisterFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
}
