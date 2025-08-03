import { useEffect } from "react";

export function usePageTitle(title: string | null) {
  useEffect(() => {
    if (title === null || title === undefined) {
      document.title = "Bibliotek";
      return;
    }
    document.title = title;
  }, [title]);
}
