import { usePageTitleAndFavicon } from "@/hooks/common/usePageTitleAndFavicon";

export function TitleAndFavicon({ pageTitle }: { pageTitle?: string }) {
  const { title, favicon } = usePageTitleAndFavicon(pageTitle);

  return (
    <>
      <title>{title}</title>
      <link
        rel="icon"
        type="image/svg+xml"
        href={favicon ? favicon : "/home-favicon.png"}
      />
    </>
  );
}
