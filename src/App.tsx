import { Route, Routes, BrowserRouter } from "react-router";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<h1>test page</h1>} />
        <Route path="*" element={<h1>Page not found [Federico]</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
