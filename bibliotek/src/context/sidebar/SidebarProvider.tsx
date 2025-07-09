import { useEffect, useState, type ReactNode } from "react";
import { SidebarContext } from "./SidebarContext";

export default function SidebarProvider({ children }: { children: ReactNode }) {
  const [isSidebarOpenForSmallScreens, setIsSidebarOpenForSmallScreens] =
    useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpenForSmallScreens(!isSidebarOpenForSmallScreens);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpenForSmallScreens(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <SidebarContext.Provider
      value={{ isSidebarOpenForSmallScreens, toggleSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
}
