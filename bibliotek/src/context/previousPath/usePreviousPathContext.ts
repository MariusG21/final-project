import { useContext } from "react";
import { PreviousPathContext } from "./PreviousPathContext";

export const usePreviousPathContext = () => {
  const ctx = useContext(PreviousPathContext);

  if (!ctx) {
    throw new Error(
      "usePreviousPathContext should only be used in children of PreviousPathProvider."
    );
  }

  return ctx;
};
