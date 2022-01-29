export const getInfoUser = (user) => {
  const { displayName, photoURL, email, stsTokenManager } = user;
  const { refreshToken, accessToken } = stsTokenManager;
  return { displayName, photoURL, email, refreshToken, accessToken };
};
