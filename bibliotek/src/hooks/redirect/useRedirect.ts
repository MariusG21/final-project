import { useNavigate } from "react-router";
import { usePreviousPathContext } from "@/context/previousPath/usePreviousPathContext";

type RedirectBackOptions = {
  fallbackPath?: string;
  state?: Record<string, unknown>;
  replace?: boolean;
};

type RedirectToOptions = {
  state?: Record<string, unknown>;
  replace?: boolean;
};

export function useRedirect() {
  const navigate = useNavigate();
  const { prevPath } = usePreviousPathContext();

  const redirectBackOr = ({
    fallbackPath = "/",
    state,
    replace,
  }: RedirectBackOptions = {}) => {
    if (prevPath) {
      navigate(prevPath, { state, replace });
    } else {
      navigate(fallbackPath);
    }
  };

  const redirectTo = (path: string, options?: RedirectToOptions) => {
    navigate(path, options);
  };

  return { redirectBackOr, redirectTo };
}
