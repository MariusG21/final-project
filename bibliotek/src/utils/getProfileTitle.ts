export const getProfileTitle = (username?: string) => {
  if (!username) return "User's Profile";

  const possessive =
    username.endsWith("s") || username.endsWith("S") ? "'" : "'s";

  return `${username}${possessive} Profile`;
};
