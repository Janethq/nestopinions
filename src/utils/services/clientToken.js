//--------------------CLIENT-SIDE--------------------------------

export const setToken = (token) => {
  localStorage.setItem("token", token);
  //store token expiry
  const payload = JSON.parse(atob(token.split(".")[1]));
  const expirationTime = payload.exp * 1000; // to milliseconds
  localStorage.setItem("tokenExpiration", expirationTime);
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
  localStorage.removeItem("tokenExpiration");
};

// check if token is expired
export const isTokenExpired = () => {
  const expirationTime = localStorage.getItem("tokenExpiration");
  return expirationTime ? Date.now() > parseInt(expirationTime, 10) : true;
};
