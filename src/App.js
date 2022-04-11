import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewStudent from "./pages/NewStudent";
import StudentPage from "./pages/StudentPage";
import StudentsPage from "./pages/StudentsPage";


function App() {
  return <>
     <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<StudentsPage/>} />
        <Route path="/student/new" element={<NewStudent/>} />
      </Routes>
    </BrowserRouter>
    {/* <StudentsPage /> */}
  </>;
}

export default App;
