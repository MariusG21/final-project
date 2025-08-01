import { useEffect, useRef, useState, type ReactNode } from "react";
import { useLocation } from "react-router";
import { PreviousPathContext } from "./PreviousPathContext";

const IGNORED_PATHS = ["/register"];

export function PreviousPathProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const prevPathRef = useRef<string | null>(null);
  const [prevPath, setPrevPath] = useState<string | null>(null);

  useEffect(() => {
    const isIgnored = IGNORED_PATHS.includes(location.pathname);
    const isSameAsLast = prevPathRef.current === location.pathname;

    if (!isSameAsLast && !isIgnored) {
      setPrevPath(prevPathRef.current);
      prevPathRef.current = location.pathname;
    }
  }, [location.pathname]);

  return (
    <PreviousPathContext.Provider value={{ prevPath }}>
      {children}
    </PreviousPathContext.Provider>
  );
}
