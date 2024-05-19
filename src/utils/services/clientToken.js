//--------------------CLIENT-SIDE--------------------------------

export const setToken = (token) => {
  localStorage.setItem("token", token);
};

export const getToken = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;
  const payload = JSON.parse(atob(token.split(".")[1]));
  if (payload.exp < Date.now() / 1000) {
    removeToken();
    return null;
  }
  return token;
};

export const removeToken = () => {
  localStorage.removeItem("token");
};
