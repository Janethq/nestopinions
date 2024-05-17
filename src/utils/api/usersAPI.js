import sendHTTPRequest from "./sendHTTPRequest";

const BASE_URL = "/api/users";

export const register = (userData) =>
  sendHTTPRequest(`${BASE_URL}/register`, "POST", userData);

export const login = (credentials) => {
  return sendHTTPRequest(`${BASE_URL}/login`, "POST", credentials);
};

export function checkToken() {
  return sendHTTPRequest(`${BASE_URL}/check-token`);
}
