import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ScrollToTop from "./utils/scrollToTop";
import Navbar from "./components/NavBar";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop>
        <div id="page-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
        </div>
      </ScrollToTop>
      <Footer />
    </Router>
  );
}

export default App;
