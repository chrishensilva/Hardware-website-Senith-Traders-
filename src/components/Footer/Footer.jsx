import { Link } from 'react-router-dom';
import logo from '../../assets/LOGO.jpeg';
import './Footer.css';

// Import custom icons
import mapIcon from '../../assets/map.png';
import phoneIcon from '../../assets/phone-call.png';
import emailIcon from '../../assets/email.png';
import timeIcon from '../../assets/time.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        {/* Top Grid */}
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__col footer__col--brand">
            <Link to="/" className="footer__logo">
              <img src={logo} alt="K D Senith Traders PVT LTD Logo" className="footer__logo-img" />
              <div className="footer__logo-text">
                <div className="footer__brand-name">K D Senith Traders</div>
                <div className="footer__brand-sub">PVT LTD</div>
              </div>
            </Link>
            <p className="footer__tagline">
              Your trusted partner for safety equipment and quality hardware tools. Serving contractors, workshops, and homeowners.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h3 className="footer__col-title">Quick Links</h3>
            <ul className="footer__links">
              <li><Link to="/" className="footer__link">Home</Link></li>
              <li><Link to="/products" className="footer__link">Products</Link></li>
              <li><Link to="/contact" className="footer__link">Contact Us</Link></li>
              <li><Link to="/contact" className="footer__link">Request a Quote</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="footer__col">
            <h3 className="footer__col-title">Categories</h3>
            <ul className="footer__links">
              <li><Link to="/products?cat=manhole" className="footer__link">Manhole & Gully Covers</Link></li>
              <li><Link to="/products?cat=parking" className="footer__link">Parking Safety</Link></li>
              <li><Link to="/products?cat=safety" className="footer__link">Safety Equipments</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h3 className="footer__col-title">Contact</h3>
            <ul className="footer__contact-list">
              <li>
                <div className="footer__contact-icon-wrap">
                  <img src={mapIcon} alt="" className="footer__contact-img-icon" />
                </div>
                <span>26/C/1 Biyagama Road, Talwatta Gonawala,<br />Kelaniya 11600, Sri Lanka</span>
              </li>
              <li>
                <div className="footer__contact-icon-wrap">
                  <img src={phoneIcon} alt="" className="footer__contact-img-icon" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <a href="tel:0117320068" className="footer__link">011 732 0068</a>
                  <a href="tel:0771453183" className="footer__link">077 145 3183</a>
                  <a href="tel:0756539790" className="footer__link">075 653 9790</a>
                </div>
              </li>
              <li>
                <div className="footer__contact-icon-wrap">
                  <img src={emailIcon} alt="" className="footer__contact-img-icon" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <a href="mailto:info@senithtrader.lk" className="footer__link">info@senithtrader.lk</a>
                  <a href="mailto:kd@senithtrader.lk" className="footer__link">kd@senithtrader.lk</a>
                </div>
              </li>
              <li>
                <div className="footer__contact-icon-wrap">
                  <img src={timeIcon} alt="" className="footer__contact-img-icon" />
                </div>
                <span>Mon–Sat: 8:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="footer__divider"></div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; {currentYear} K D Senith Traders PVT LTD. All rights reserved.
          </p>
          <p className="footer__disclaimer">
            Professional hardware & safety equipment supplier.
          </p>
        </div>
      </div>
    </footer>
  );
}
