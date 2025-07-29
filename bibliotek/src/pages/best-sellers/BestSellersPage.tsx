import { Header } from "@/components/Header/Header";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { LoadingMessage } from "@/components/InfoMessages/LoadingMessage/LoadingMessage";
import { ErrorMessage } from "@/components/InfoMessages/ErrorMessage/ErrorMessage";
import { useBestSellers } from "@/hooks/useBestSellers";
import { BestSellersHeader } from "./components/BestSellersHeader";
import { Podium } from "./components/Podium";
import styles from "./BestSellersPage.module.css";

export function BestSellersPage() {
  const { isLoading, error, bestSellers } = useBestSellers();

  return (
    <>
      <Header />
      <Sidebar />
      <main className={styles["best-sellers-page"]}>
        <BestSellersHeader />
        {isLoading ? (
          <LoadingMessage
            message="Books are loading. Please wait."
            position="toTop"
          />
        ) : error ? (
          <ErrorMessage message={error} position="toTop" />
        ) : (
          <Podium bestSellers={bestSellers} />
        )}
      </main>
    </>
  );
}
