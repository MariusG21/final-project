import { createContext } from "react";
import type { UserProfileContextValue } from "./types";

export const UserProfileContext = createContext<UserProfileContextValue | null>(
  null
);
