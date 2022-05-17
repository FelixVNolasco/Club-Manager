import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Components/Auth/Login";
import { Signup } from "./Components/Auth/Signup";
import { Footer } from "./Components/Footer";
import { Navbar } from "./Components/Navbar";
import { ClubPage } from "./pages/ClubPage";
import { ClubsPage } from "./pages/ClubsPage";
import StudentPage from "./pages/StudentPage";
import StudentsPage from "./pages/StudentsPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<StudentsPage />} />
        <Route path="/student/:id" element={<StudentPage />} />
        <Route path="/clubs" element={<ClubsPage />} />
        <Route path="/clubs/:id" element={<ClubPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
