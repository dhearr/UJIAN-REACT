import "./App.css";
import Dashboard from "./pages/dashboard";
import Formulir from "./pages/formulir";
import Home from "./pages/home";
import Product from "./pages/product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/formulir" element={<Formulir />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
