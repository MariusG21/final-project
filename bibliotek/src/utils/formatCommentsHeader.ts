export const formatHeaderText = (count: number): string => {
  switch (count) {
    case 0:
      return "No comments yet.";
    case 1:
      return "1 Comment:";
    default:
      return `${count} Comments:`;
  }
};
