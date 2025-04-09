import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ScrollToTop from "./utils/scrollToTop";
import Navbar from "./components/NavBar";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop>
        <div id="page-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </ScrollToTop>
      <Footer />
    </Router>
  );
}

export default App;
