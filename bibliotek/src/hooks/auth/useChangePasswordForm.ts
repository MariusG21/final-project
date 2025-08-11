import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export type ChangePasswordFormData = {
  currentPassword: string;
  password: string;
};

const schema = yup
  .object({
    currentPassword: yup
      .string()
      .required("Current password is required")
      .min(8, "Password must be at least 8 characters")
      .max(50, "Password must be at most 50 characters"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .max(50, "Password must be at most 50 characters"),
  })
  .required();

export function useChangePasswordForm() {
  return useForm<ChangePasswordFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      currentPassword: "",
      password: "",
    },
  });
}
