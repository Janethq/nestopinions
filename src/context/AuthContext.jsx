import { createContext, useState, useEffect } from "react";
import debug from "debug";
import { jwtDecode } from "jwt-decode";
import { getToken } from "../utils/services/clientToken";
// import { checkToken } from "../utils/services/auth";

const log = debug("mern:context:AuthContext");

//create context to useContext in children
export const AuthContext = createContext();

//using children prop to access nested components --> wrapped by this component
export default function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(null); //initialize to no user authenticated

  log("user %o", authUser);

  // useEffect(() => {
  //   const verifyUser = async () => {
  //     try {
  //       const user = await checkToken();
  //       setAuthUser(user);
  //     } catch (error) {
  //       setAuthUser(null);
  //     }
  //   };
  //   verifyUser();
  // }, []);

  useEffect(() => {
    const token = getToken();
    if (token) {
      // get user data based on token --> decode to get user info
      const user = jwtDecode(token);
      setAuthUser(user);
    } else {
      setAuthUser(null);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ setAuthUser, authUser }}>
      {children}
    </AuthContext.Provider>
  );
}
