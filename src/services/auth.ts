const auth = () => {
  let inMemoryJWT: any = null;

  const getAcessToken = () => inMemoryJWT;

  const clearAccessToken = () => {
    inMemoryJWT = null;
  };

  const setAccessToken = (accessToken: any) => {
    inMemoryJWT = accessToken;
  };

  return {
    getAcessToken,
    clearAccessToken,
    setAccessToken,
  };
};
