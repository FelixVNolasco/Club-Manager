import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./Components/Footer";
import { Navbar } from "./Components/Navbar";
import NewStudent from "./pages/NewStudent";
import StudentPage from "./pages/StudentPage";
import StudentsPage from "./pages/StudentsPage";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<StudentsPage />} />
          <Route path="/student/:id" element={<StudentPage />} />
          <Route path="/student/new" element={<NewStudent />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
