// import './App.css';

// function App() {
//   return (
//       <div>
//           <h1>ReactJS 시작</h1>
//       </div>
//   );
// }

// export default App;

import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import React from "react";

import Components from "./views/components/components.jsx";
import ScheduleComponents from "./views/schedule-components/schedule-components.jsx";
import Login from "./views/check-components/check-components.jsx";
import SignupForm from "./views/check-components/sections/join.jsx"

function App() {
  return (
    <Routes>
      <Route path="/schedule" element={<ScheduleComponents />} />
      <Route path="/join" element={<SignupForm />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Components />} />
    </Routes>
  );
}

export default App;