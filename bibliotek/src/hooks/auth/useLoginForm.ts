import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export type LoginFormData = {
  username: string;
  password: string;
};

const schema = yup
  .object({
    username: yup
      .string()
      .required("Username is required")
      .min(2, "Username must be at least 2 characters")
      .max(20, "Username must be at most 20 characters"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .max(50, "Password must be at most 50 characters"),
  })
  .required();

export function useLoginForm({ username, password }: LoginFormData) {
  return useForm<LoginFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      username,
      password,
    },
  });
}
