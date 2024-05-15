// import debug from "debug";
import { Route, Routes } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { LandingPage } from "../LandingPage";
import Register from "../AuthPages/Register";
import Login from "../AuthPages/Login";

// const log = debug("mern:pages:App:App");

function App() {
  return (
    <>
      <main className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/property/:id" element={<PropertyPage />} /> */}
        </Routes>
      </main>
    </>
  );
}

export default App;
