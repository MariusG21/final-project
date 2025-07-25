import { Header } from "@/components/Header/Header";
import { SecondHeader } from "@/components/SecondHeader/SecondHeader";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import styles from "./BookmarkedPage.module.css";

export function BookmarkedPage() {
  return (
    <>
      <Header />
      <Sidebar />
      <SecondHeader title="Favorites" />
      <main className={styles["bookmarked-page"]}></main>
    </>
  );
}
