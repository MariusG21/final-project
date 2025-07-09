import { useState, type ReactNode } from "react";
import { SidebarContext } from "./SidebarContext";

export default function SidebarProvider({ children }: { children: ReactNode }) {
  const [isSidebarOpenForSmallScreens, setIsSidebarOpenForSmallScreens] =
    useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpenForSmallScreens(!isSidebarOpenForSmallScreens);
  };

  return (
    <SidebarContext.Provider
      value={{ isSidebarOpenForSmallScreens, toggleSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
}
