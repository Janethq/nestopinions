import debug from "debug";
import { Route, Routes } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { LandingPage } from "../LandingPage";
import Register from "../AuthPages/Register";
import Login from "../AuthPages/Login";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

const log = debug("mern:pages:App:App");

function App() {
  const [user, setUser] = useState(null); //empty object === user  vs null === !user
  log("user %o", user);

  // if (!user) {
  //   return <Register setUser={setUser} />;
  // } //testing

  return (
    <>
      <main className="App">
        <NavBar />
        <Toaster />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register setUser={setUser} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          {/* <Route path="/property/:id" element={<PropertyPage />} /> */}
        </Routes>
      </main>
    </>
  );
}

export default App;
