import { Header } from "@/components/Header/Header";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { SecondHeader } from "@/components/SecondHeader/SecondHeader";
import styles from "./BookshelfPage.module.css";

export function BookshelfPage() {
  return (
    <>
      <Header />
      <Sidebar />
      <SecondHeader title="Bookshelf" />
    </>
  );
}
