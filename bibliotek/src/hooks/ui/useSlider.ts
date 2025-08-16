import { useRef } from "react";

export function useSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  return { sliderRef, scrollLeft, scrollRight };
}
