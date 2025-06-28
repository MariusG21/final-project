import axios from "axios";
import { useState, useEffect } from "react";
import { Header } from "@/components/Header/Header";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import type { BestSeller } from "@/types/Book";
import { BestSellersHeader } from "./components/BestSellersHeader";
import { Podium } from "./components/Podium";
import styles from "./BestSellersPage.module.css";

export function BestSellersPage() {
  const [bestSellers, setBestSellers] = useState<BestSeller[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const { data } = await axios.get("/api/best-sellers");
        setBestSellers(data.data);
      } catch (err) {
        console.error(`Something went wrong: ${err}`);
        if (axios.isAxiosError(err)) {
          setError(
            err.response?.data?.message || "Failed loading the books..."
          );
        } else {
          setError("Failed loading the books...");
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchBestSellers();
  }, []);

  return (
    <>
      <Header />
      <Sidebar />
      <main className={styles["best-sellers-page"]}>
        <BestSellersHeader />
        {bestSellers.length && <Podium bestSellers={bestSellers} />}
      </main>
    </>
  );
}
