//--------------------CLIENT-SIDE--------------------------------

export const setToken = (token) => {
  document.cookie = `token=${token}; Path=/; Secure; HttpOnly`;
};

export const getToken = () => {
  const match = document.cookie.match(new RegExp("(^| )token=([^;]+)"));
  if (!match) return null;
  const token = match[2];
  const payload = JSON.parse(atob(token.split(".")[1]));
  if (payload.exp < Date.now() / 1000) {
    removeToken();
    return null;
  }
  return token;
};

export const removeToken = () => {
  document.cookie = "token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT";
};
