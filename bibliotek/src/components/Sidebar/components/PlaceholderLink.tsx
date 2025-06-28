import type { IconType } from "react-icons";

type PlaceholderLinkProps = {
  icon: IconType;
};

export function PlaceholderLink({ icon: Icon }: PlaceholderLinkProps) {
  return (
    <a href="#" onClick={(evt) => evt.preventDefault()}>
      <Icon />
    </a>
  );
}
