import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ConstructionPage from "./pages/ConstructionPage";
import ScrollToTop from "./utils/scrollToTop";
import Navbar from "./components/NavBar";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop>
        <div id="page-content">
          <Routes>
            <Route path="/" element={<ConstructionPage />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </div>
      </ScrollToTop>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
