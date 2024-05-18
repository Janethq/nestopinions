import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const DashboardPage = () => {
  const { authUser } = useContext(AuthContext);

  return (
    <div>
      DashboardPage <span>{authUser.username}</span>
    </div>
  );
};

export default DashboardPage;
