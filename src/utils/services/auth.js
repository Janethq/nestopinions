import * as usersAPI from "../api/usersAPI";
import debug from "debug";

const log = debug("mern:utils:services:auth");

export const register = async (userData) => {
  log("userData: %o", userData);

  // return userData for testing, without processing tokens yet
  const response = await usersAPI.register(userData);
  log("Response from server: %o", response);
  return response;
};
