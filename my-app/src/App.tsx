import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Members from "./Members";
import Claims from "./Claims";
import Reports from "./Reports";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/members" element={<Members />} />
          <Route path="/claims" element={<Claims />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
