import { ViewDetailsButton } from "@/components/Buttons/ViewDetailsButton";
import { ToggleFavoriteButton } from "@/components/Buttons/ToggleFavoriteButton";
import type { BookshelfBookType as BookmarkedBookType } from "@/types/Book";

type HiddenActionsProps = Pick<BookmarkedBookType, "id">;

export function HiddenActions({ id }: HiddenActionsProps) {
  return (
    <>
      <ViewDetailsButton id={id} />
      <ToggleFavoriteButton id={id} />
    </>
  );
}
