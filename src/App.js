import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentModal from "./Components/StudentModal";
import NewStudent from "./pages/NewStudent";
import StudentPage from "./pages/StudentPage";
import StudentsPage from "./pages/StudentsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentsPage />} />
          <Route path="/student/:id" element={<StudentPage />} />
          <Route path="/student/new" element={<NewStudent />} />
          <Route path="/test" element={<StudentModal />} />
        </Routes>
      </BrowserRouter>
      {/* <StudentsPage /> */}
    </>
  );
}

export default App;
