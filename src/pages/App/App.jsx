import debug from "debug";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
// import NewOrderPage from "../NewOrderPage/NewOrderPage";
// import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import Home from "../../components/Home/Home";
import Register from "../../components/Register/Register";
import Login from "../../components/Login/Login";

const log = debug("mern:pages:App:App");

function App() {
  const [user, setUser] = useState(getUser());
  log("user %o", user);

  if (!user) {
    return (
      <main className="App">
        <AuthPage setUser={setUser} />
      </main>
    );
  }

  return (
    <>
      <main className="App">
        <NavBar/>
        {/* <NavBar setUser={setUser} /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          {/* <Route path="/orders" element={<OrderHistoryPage />} />
          <Route path="/orders/new" element={<NewOrderPage />} />

          <Route path="/orders2" element={<OrderHistoryPage />}>
            <Route path="new" element={<NewOrderPage />} />
            <Route path="simon" element={<p>Simon</p>} />
          </Route> */}
        </Routes>
      </main>
    </>
  );
}

export default App;
