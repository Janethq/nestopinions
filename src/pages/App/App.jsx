// import debug from "debug";
import { Route, Routes } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { LandingPage } from "../LandingPage";
import Register from "../AuthPages/Register";
import Login from "../AuthPages/Login";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import { PropertyDetails } from "../PropertyDetails";
import ReviewDetails from "../../components/ReviewDetails/ReviewDetails";

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
          <Route path="/addReview" element={<ReviewForm />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/addreview" element={<ReviewForm />} />
          <Route path="/seereview" element={<ReviewDetails />} />
         
        </Routes>
      </main>
    </>
  );
}

export default App;
