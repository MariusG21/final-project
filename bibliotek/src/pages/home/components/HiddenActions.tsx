import { ToggleFavoriteButton } from "@/components/Buttons/ToggleFavoriteButton";
import { ViewDetailsButton } from "@/components/Buttons/ViewDetailsButton";
import type { Book } from "@/types/Book";
import { SaleBadge } from "./SaleBadge";

type HiddenActionsProps = Pick<Book, "id" | "discount">;

export function HiddenActions({ id, discount }: HiddenActionsProps) {
  return (
    <>
      <ViewDetailsButton id={id} />
      <ToggleFavoriteButton id={id} />
      {discount && <SaleBadge discount={discount} />}
    </>
  );
}
