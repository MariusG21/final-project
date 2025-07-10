import { useEffect, useState, type ReactNode } from "react";
import { ScreenSizeContext } from "./ScreenSizeContext";

export function ScreenSizeProvider({ children }: { children: ReactNode }) {
  const [isSmall, setIsSmall] = useState<boolean>(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ScreenSizeContext.Provider value={{ isSmall }}>
      {children}
    </ScreenSizeContext.Provider>
  );
}
