import { useState } from "react";
import { useRedirect } from "@/hooks/redirect/useRedirect";

export function useSearch() {
  const { redirectTo } = useRedirect();
  const [search, setSearch] = useState("");

  const handleChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const handleSearch = () => {
    const query = search.trim();
    if (query) {
      redirectTo(`/?search=${encodeURIComponent(query)}`);
      setSearch("");
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
    else if (e.key === "Escape") e.currentTarget.blur();
  };

  return { search, handleChangeEvent, handleSearch, handleKeyDown };
}
