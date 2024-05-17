import * as usersAPI from "../api/usersAPI";
import debug from "debug";
import { getToken, setToken } from "./clientToken";

const log = debug("mern:utils:services:auth");

export const getUser = () => {
  const token = getToken();
  return token ? JSON.parse(atob(token.split(".")[1])).user : null;
};

export const register = async (userData) => {
  log("userData: %o", userData);

  // return userData for testing, without processing tokens yet
  const token = await usersAPI.register(userData);
  log("Response from server: %o", token);
  setToken(token);
  return getUser();
};

export const login = async (email, password) => {
  log("loggingIn: %o", email, password);
  const user = { email, password };

  const token = await usersAPI.login(user);
  log("token: %o", token);
  setToken(token);
  return getUser();
};

export const checkToken = async () => {
  const dateStr = await usersAPI.checkToken();
  return new Date(dateStr);
};
