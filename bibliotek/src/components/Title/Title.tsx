import { usePageTitle } from "@/hooks/common/usePageTitle";

export function Title({ bookTitle }: { bookTitle?: string }) {
  const title = usePageTitle(bookTitle);

  return <title>{title}</title>;
}
