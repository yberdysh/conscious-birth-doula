import "./index.scss";
import logo from "../../assets/logo.png";
import mailIcon from "../../assets/mail-icon.png";
import locationIcon from "../../assets/location-icon-2.png";
import phoneIcon from "../../assets/phone-icon-2.png";
import fbIcon from "../../assets/icons8-facebook-60.png";
import igIcon from "../../assets/icons8-instagram-50.png";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  const navigate = useNavigate();
  function handleLogo() {
    navigate("/");
  }

  return (
    <div className="footer-container" id="footer">
      <div className="footer">
        <div className="footer__first-part">
          <Logo />
          <p>
            Powered by Lady Fascia- your local myofascial release therapist and
            conscious homebirth doula serving the Lehigh Valley: Allentown,
            Bethlehem, Easton, Quakertown, Emmaus, etc.
          </p>
        </div>
        <div className="footer__content">
          <div className="footer__navigation">
            <div className="footer__navigation__header">Navigation</div>
            <Link className="footer__navigation__nav" to="/">
              Home
            </Link>
            <Link className="footer__navigation__nav" to="/about">
              About
            </Link>
            <Link className="footer__navigation__nav" to="/services">
              Services
            </Link>
            {/* <Link className="footer__navigation__nav" to="/what-is-mfr">
              What is MFR
            </Link> */}
            <Link className="footer__navigation__nav" to="/contact">
              Contact
            </Link>
            {/* <Link className="footer__navigation__nav" to="/booking">
              Book Now
            </Link> */}
          </div>
          <div className="footer__contact-container">
            <div className="footer__contact">
              <div className="footer__contact__header">Get in Touch</div>
              <div className="footer__contact__contact-method" data-larger-icon>
                <img className="contact-img" src={mailIcon} alt="Email Icon" />
                <div className="contact-label">LadyFascia@gmail.com</div>
              </div>
              <div className="footer__contact__contact-method">
                <img className="contact-img" src={phoneIcon} alt="Phone Icon" />
                <div className="contact-label">484-929-3680</div>
              </div>
              <div className="footer__contact__contact-method">
                <img
                  className="contact-img"
                  src={locationIcon}
                  alt="Location Icon"
                />
                <div className="contact-label">Bethlehem, PA</div>
              </div>
            </div>
            {/* <div className="footer__social">
              <div className="footer__social__header">Follow on Social</div>
              <div className="footer__social__icons">
                <a
                  href="https://www.facebook.com/profile.php?id=61575785021618"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="contact-img"
                    src={fbIcon}
                    alt="Facebook Icon"
                  />
                </a>
                <a
                  href="https://www.instagram.com/ladyfascia/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="contact-img"
                    src={igIcon}
                    alt="Instagram Icon"
                  />
                </a>
              </div>
            </div> */}
          </div>
          <div className="footer__social">
            <div className="footer__social__header">Follow on Social</div>
            <div className="footer__social__icons">
              <a
                href="https://www.facebook.com/profile.php?id=61575785021618"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="contact-img" src={fbIcon} alt="Facebook Icon" />
              </a>
              <a
                href="https://www.instagram.com/ladyfascia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="contact-img"
                  src={igIcon}
                  alt="Instagram Icon"
                />
              </a>
            </div>
          </div>
          <div className="footer__other">
            <div className="footer__other__header">Something Else?</div>
            <a
              className="footer__other__link"
              href="https://myofascialawakening.com"
              target="_blank"
            >
              Myofascial Release
            </a>
            <a
              className="footer__other__link"
              href="https://ladyfascia.com"
              target="_blank"
            >
              Learn about Lady Fascia
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
