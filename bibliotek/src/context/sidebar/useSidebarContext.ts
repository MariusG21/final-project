import { useContext } from "react";
import { SidebarContext } from "./SidebarContext";

export const useSidebarContext = () => {
  const ctx = useContext(SidebarContext);

  if (!ctx) {
    throw new Error(
      "useSidebarContext should only be used in children of SidebarProvider"
    );
  }

  return ctx;
};
