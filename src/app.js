import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pomodoro from "./pages/Pomodoro";
import Welcome from "./pages/Welcome";

const app = () => {
  return (
    <div className="100 min-h-screen">
    <Router>
        <Routes>
          <Route path="/" element={ <Welcome /> } />
          <Route path="/pomodoro" element={ <Pomodoro /> } />
        </Routes>
    </Router>
  </div>
  );
};

export default app;
