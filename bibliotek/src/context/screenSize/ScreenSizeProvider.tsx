import { useEffect, useState, type ReactNode } from "react";
import { ScreenSizeContext } from "./ScreenSizeContext";

export function ScreenSizeProvider({ children }: { children: ReactNode }) {
  const [isSmall, setIsSmall] = useState<boolean>(window.innerWidth <= 768);
  const [isSidebarOpenForSmallSize, setIsSidebarOpenForSmallSize] =
    useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpenForSmallSize((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      const isSmallNow = window.innerWidth <= 768;

      setIsSmall((prev) => (prev === isSmallNow ? prev : !prev));
      if (!isSmallNow) {
        setIsSidebarOpenForSmallSize((prev) => (prev ? false : prev));
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ScreenSizeContext.Provider
      value={{ isSmall, isSidebarOpenForSmallSize, toggleSidebar }}
    >
      {children}
    </ScreenSizeContext.Provider>
  );
}
