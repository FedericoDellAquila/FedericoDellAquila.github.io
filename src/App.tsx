import { HashRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </HashRouter>
  );
}
