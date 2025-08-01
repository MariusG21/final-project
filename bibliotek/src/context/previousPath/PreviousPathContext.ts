import { createContext } from "react";
import type { PreviousPathContextValue } from "./types";

export const PreviousPathContext =
  createContext<PreviousPathContextValue | null>(null);
