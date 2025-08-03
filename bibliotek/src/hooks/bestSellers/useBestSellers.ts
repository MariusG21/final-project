import axios from "axios";
import { useEffect, useState } from "react";
import type { BestSeller } from "@/types/Book";

export function useBestSellers() {
  const [bestSellers, setBestSellers] = useState<BestSeller[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchBestSellers = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get("/api/best-sellers");
      setBestSellers(data.data);
    } catch (err) {
      console.error(`Something went wrong: ${err}`);
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Failed loading the books...");
      } else {
        setError("Failed loading the books...");
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBestSellers();
  }, []);

  return { bestSellers, isLoading, error };
}
