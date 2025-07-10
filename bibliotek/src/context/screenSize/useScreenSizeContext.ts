import { useContext } from "react";
import { ScreenSizeContext } from "./ScreenSizeContext";

export const useScreenSizeContext = () => {
  const ctx = useContext(ScreenSizeContext);

  if (!ctx) {
    throw new Error(
      "useScreenSizeContext should only be used in children of ScreenSizeProvider"
    );
  }

  return ctx;
};
