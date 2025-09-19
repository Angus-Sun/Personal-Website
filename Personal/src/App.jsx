import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Projects } from "./pages/Projects";

function App() {
  return (
    <Routes>
      <Route index element={<Home />}/>
      <Route path="projects" element={<Projects />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;