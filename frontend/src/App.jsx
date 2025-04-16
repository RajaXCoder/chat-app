import "./App.css";
import Homepage from "./Pages/HomePage";
import { Routes, Route } from "react-router";
import Chatpage from "./Pages/ChatPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/chat" element={<Chatpage />} />
      </Routes>
      {/* <footer>
        <p>© 2025 Raju. All rights reserved.</p>
        <p>
          This project is developed by Raju using React, Express, and MongoDB.
        </p>
      </footer> */}
    </div>
  );
}

export default App;
