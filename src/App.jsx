import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router components
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import StudentDetailsPage from "./pages/StudentDetailsPage";
import UserProfilePage from "./pages/UserProfilePage";

function App() {
  return (
    <Router>
      <div className="App relative z-20 pt-20">
        <Navbar />
        <Routes>
          {/* Route definitions */}
          <Route path="/" element={<HomePage />} />
          <Route path="/students/:studentId" element={<StudentDetailsPage />} />
          <Route path="/profile" element={<UserProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
