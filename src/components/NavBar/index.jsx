import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./index.scss";
import { BREAKPOINTS } from "../../utils/getBreakpoint";
import Logo from "../Logo";

function NavBar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const navigate = useNavigate();
  const location = useLocation();

  // Makes navbar go away when you scroll down, and reappear when you scroll up
  useEffect(() => {
    const nav = document.getElementById("nav");

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > 41) {
        if (prevScrollPos > currentScrollPos) {
          if (nav) nav.style.top = "0";
        } else {
          if (nav) nav.style.top = "-150px";
        }
      } else {
        if (nav) nav.style.top = "0";
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  // Adjust content height depending on the nav bar height
  const adjustContentMarginTop = () => {
    const navBar = document.getElementById("nav");
    const content = document.getElementById("page-content");

    if (navBar && content) {
      content.style.marginTop = `${navBar.offsetHeight}px`;
    } else {
      content.style.marginTop = "0px";
    }
  };

  // useEffect to adjust the page content spacing during resizing
  useEffect(() => {
    adjustContentMarginTop();

    window.addEventListener("resize", adjustContentMarginTop);
    return () => {
      window.removeEventListener("resize", adjustContentMarginTop);
    };
  }, []);

  function toggleMobileNav() {
    if (window.innerWidth > BREAKPOINTS.TABLET) {
      setIsMobileNavOpen(false);
    } else {
      setIsMobileNavOpen(!isMobileNavOpen);
    }
  }

  // TODO: remove conditional when site goes live
  return (
    <div className="navbar-container" id="nav">
      <nav className="navbar">
        <Logo clickFunction={() => setIsMobileNavOpen(false)} />
        <div className="navbar-links" data-is-active={isMobileNavOpen}>
          <Link
            className="navbar-links__link"
            onClick={() => setIsMobileNavOpen(false)}
            to="/"
          >
            Home
          </Link>
          <Link
            className="navbar-links__link"
            onClick={() => setIsMobileNavOpen(false)}
            to="/about"
          >
            About
          </Link>
          <Link
            className="navbar-links__link"
            onClick={() => setIsMobileNavOpen(false)}
            to="/services"
          >
            Services
          </Link>
          {/* <Link
              className="navbar-links__link"
              onClick={() => setIsMobileNavOpen(false)}
              to="/resources"
            >
              Resources
            </Link> */}
          <Link
            className="navbar-links__link"
            onClick={() => setIsMobileNavOpen(false)}
            to="/contact"
          >
            Contact
          </Link>
        </div>
        <div
          className="navbar__mobile-menu"
          onClick={toggleMobileNav}
          data-is-active={isMobileNavOpen}
        >
          <span className="mobile-menu-icon"></span>
          <span className="mobile-menu-icon"></span>
          <span className="mobile-menu-icon"></span>
          <span className="mobile-menu-icon"></span>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
