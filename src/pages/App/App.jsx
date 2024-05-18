// import debug from "debug";
import { Route, Routes } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { LandingPage } from "../LandingPage";
import Register from "../AuthPages/Register";
import Login from "../AuthPages/Login";
import ProtectedRoute from "../../components/ProtectedRoutes";
import DashboardPage from "../DashboardPage";
// import { useState } from "react";
import { Toaster } from "react-hot-toast";

import ReviewForm from "../../components/ReviewForm/ReviewForm";
import PropertyDetails from "../PropertyDetails";
import ReviewDetails from "../../components/ReviewDetails/ReviewDetails";
import PropertyFormPage from "../PropertyFormPage";

// const log = debug("mern:pages:App:App");

function App() {
  return (
    <>
      <main className="App">
        <NavBar />
        <Toaster />
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/:userId/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />

          <Route path="/addReview" element={<ReviewForm />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/addreview" element={<ReviewForm />} />
          <Route path="/seereview" element={<ReviewDetails />} />
          <Route path="/addproperty" element={<PropertyFormPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
