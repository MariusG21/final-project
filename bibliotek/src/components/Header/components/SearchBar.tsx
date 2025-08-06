import { useSearch } from "@/hooks/search/useSearch";
import searchIcon from "@/assets/images/icons/search-icon.png";
import styles from "./SearchBar.module.css";

export function SearchBar() {
  const { search, handleChangeEvent, handleKeyDown, handleSearch } =
    useSearch();

  return (
    <label className={styles["search-label"]} htmlFor="search-bar">
      <input
        id="search-bar"
        className={styles["search-bar"]}
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleChangeEvent}
        onKeyDown={handleKeyDown}
        autoComplete="off"
      />
      <button
        type="button"
        className={styles["search-icon"]}
        onClick={handleSearch}
        aria-label="Search"
      >
        <img src={searchIcon} alt="search icon" />
      </button>
    </label>
  );
}
