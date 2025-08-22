import { useEffect, useRef, useState } from "react";

export function useTruncatedText<T extends HTMLElement>(
  content: string | undefined,
  maxLines: number = 5
) {
  const ref = useRef<T | null>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      const el = ref.current;
      if (!el) return;
      const lineHeight = parseFloat(getComputedStyle(el).lineHeight);
      const maxHeight = lineHeight * maxLines;

      setIsOverflowing(el.scrollHeight > maxHeight + 2);
    };

    window.addEventListener("resize", checkOverflow);
    checkOverflow();

    return () => window.removeEventListener("resize", checkOverflow);
  }, [content, maxLines]);

  const style = !isExpanded
    ? {
        overflow: "hidden",
        display: "-webkit-box",
        lineClamp: maxLines,
        WebkitLineClamp: maxLines,
        WebkitBoxOrient: "vertical" as const,
      }
    : {};

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return { isExpanded, toggleExpand, isOverflowing, ref, style };
}
