import sendHTTPRequest from "./sendHTTPRequest";

const BASE_URL = "/api/users";

export const register = (userData) =>
  sendHTTPRequest(`${BASE_URL}/register`, "POST", userData);
