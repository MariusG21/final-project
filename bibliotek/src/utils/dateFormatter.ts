import dayjs from "./dayjsConfig";

export const formatDate = (date: string) => {
  const d = dayjs(date);
  const now = dayjs();

  if (now.diff(d, "day") < 7) {
    return d.fromNow();
  }
  return d.format("MMMM D, YYYY");
};
