import { BrowserRouter, Routes, Route } from "react-router-dom";
import Offerings from "./pages/Offerings";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Offerings />} />
      </Routes>
    </BrowserRouter>
  );
}
