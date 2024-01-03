// import './App.css';

// function App() {
//   return (
//       <div>
//           <h1>ReactJS 시작</h1>
//       </div>
//   );
// }

// export default App;

import { BrowserRouter as Route, Routes } from "react-router-dom";
import React from "react";

import Components from "./views/components/components.jsx";
import HomeComponents from "./views/components/home-components.jsx";
import ScheduleComponents from "./views/schedule-components/schedule-components.jsx";
import MeetingComponents from "./views/meeting-components/meeting-components.jsx";
import SigninForm from "./views/check-components/check-components.jsx";
import SignupForm from "./views/check-components/sections/join.jsx"
import About from "./views/else-components/about.jsx";

function App() {
  return (
    <Routes>
      <Route path="/meeting" element={<MeetingComponents />} />
      <Route path="/schedule" element={<ScheduleComponents />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/signin" element={<SigninForm />} />
      <Route path="/about" element={<About />} />
      <Route path="/home" element={<HomeComponents />} />
      <Route path="/" element={<Components />} />
    </Routes>
  );
}

export default App;