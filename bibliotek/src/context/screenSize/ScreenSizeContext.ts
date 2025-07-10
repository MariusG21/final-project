import { createContext } from "react";
import type { ScreenSizeContextValue } from "./types";

export const ScreenSizeContext = createContext<ScreenSizeContextValue | null>(
  null
);
