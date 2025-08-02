import { useRef } from "react";

export function useArrowNavigation<T extends HTMLElement>() {
  const refs = useRef<(T | null)[]>([]);

  const registerRef = (index: number) => (el: T | null) => {
    refs.current[index] = el;
  };

  const handleKeyDown = (index: number) => (e: React.KeyboardEvent<T>) => {
    const total = refs.current.length;

    switch (e.key) {
      case "ArrowDown": {
        e.preventDefault();
        const nextIndex = (index + 1) % total;
        refs.current[nextIndex]?.focus();
        break;
      }
      case "ArrowUp": {
        e.preventDefault();
        const prevIndex = (index - 1 + total) % total;
        refs.current[prevIndex]?.focus();
        break;
      }
    }
  };

  return { registerRef, handleKeyDown };
}
