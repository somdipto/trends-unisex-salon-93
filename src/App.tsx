
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Locations from "./pages/Locations";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/location" element={<Locations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Index />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
