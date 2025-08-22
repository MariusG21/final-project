import { useEffect, useRef, type RefObject } from "react";

export function useClickOutside<T extends HTMLElement>(
  callback: () => void,
  extraRefs?: RefObject<HTMLElement | null>[]
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as Node;

      const isInsideMainRef = ref.current?.contains(target);
      const isInsideExtraRefs = extraRefs?.some((extraRef) =>
        extraRef.current?.contains(target)
      );

      if (!isInsideMainRef && !isInsideExtraRefs) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [callback, extraRefs]);

  return ref;
}
