import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "../src/UseAuth/UseAuth";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import Home from "./Home/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navigate replace to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/login"
          element={
            <AuthProvider>
              <Login />
            </AuthProvider>
          }
        />
          <Route
          path="/Home"
          element={
            <AuthProvider>
              <Home />
            </AuthProvider>
          }
        />
  
        <Route path="*" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
