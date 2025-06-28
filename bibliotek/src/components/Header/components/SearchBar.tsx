import searchIcon from "@/assets/images/icons/search-icon.png";
import styles from "./SearchBar.module.css";

export function SearchBar() {
  return (
    <label className={styles["search-label"]} htmlFor="search-bar">
      <input
        id="search-bar"
        className={styles["search-bar"]}
        type="text"
        placeholder="Search..."
      />
      <button className={styles["search-icon"]}>
        <img src={searchIcon} />
      </button>
    </label>
  );
}
