import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.classList.toggle('mobile-nav-active');
  };

  return (
    <>
      <header className="main-header">
        <nav className="main-menu">
          <div className="main-menu__wrapper">
            <div className="main-menu__wrapper-inner">
              <div className="main-menu__left">
                <div className="main-menu__logo">
                  <a href="/">
                    <img src="/assets/images/resources/logo.png" alt="Touch of Love Outreach" />
                  </a>
                </div>
                <div className="main-menu__shape-1 float-bob-x">
                  <img src="/assets/images/shapes/main-menu-shape-1.png" alt="" />
                </div>
              </div>
              <div className="main-menu__right">
                <div className="main-menu__right-top">
                  <div className="main-menu__right-top-left">
                    <div className="main-menu__volunteers">
                      <div className="main-menu__volunteers-icon">
                        <img src="/assets/images/icon/main-menu-heart-icon.png" alt="" />
                      </div>
                      <div className="main-menu__volunteers-text-box">
                        <p className="main-menu__volunteers-text">
                          <a href="/become-volunteer">Devenir <span>membre</span></a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="main-menu__right-top-right">
                    <div className="main-menu__right-top-address">
                      <ul className="list-unstyled main-menu__right-top-address-list">
                        <li>
                          <div className="icon">
                            <span className="icon-phone-call"></span>
                          </div>
                          <div className="content">
                            <p>Helpline</p>
                            <h5><a href="tel:+243815122226">+243 815 122 226</a></h5>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-message"></span>
                          </div>
                          <div className="content">
                            <p>Send email</p>
                            <h5><a href="mailto:contact@forka.org">contact@forka.org</a></h5>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-location"></span>
                          </div>
                          <div className="content">
                            <p>13 Avenue Pumbu, Q/Haut Commandement, C/ Gombe</p>
                            <h5>Kinshasa, RDC</h5>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="main-menu__right-top-social">
                      <a href="https://www.facebook.com/share/1XfYGoo2yH/?mibextid=wwXIfr" target="_blank" rel="noreferrer">
                        <i className="fab fa-facebook"></i>
                      </a>
                      <a href="https://www.instagram.com/rachel_kamana?igsh=MWI5eHphYWZ6NnhsZA%3D%3D&utm_source=qr" target="_blank" rel="noreferrer">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="https://www.linkedin.com/in/rachel-kamana-166418274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="https://x.com/rachelkamanakab?s=11" target="_blank" rel="noreferrer">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="main-menu__right-bottom">
                  <div className="main-menu__main-menu-box">
                    <button className="mobile-nav__toggler" onClick={toggleMobileMenu}>
                      <i className="fa fa-bars"></i>
                    </button>
                    <ul className="main-menu__list">
                      <li className={`dropdown current megamenu ${location.pathname === '/' ? 'active' : ''}`}>
                        <Link to="/">Acceuil</Link>
                      </li>
                      <li className={location.pathname === '/qui-sommes-nous' ? 'active' : ''}>
                        <Link to="/qui-sommes-nous">Qui Sommes-Nous</Link>
                      </li>
                      <li className={location.pathname === '/la-fondatrice' ? 'active' : ''}>
                        <Link to="/la-fondatrice">La Fondatrice</Link>
                      </li>
                      <li className={location.pathname === '/gallery' ? 'active' : ''}>
                        <Link to="/gallery">Galerie</Link>
                      </li>
                      <li className={location.pathname === '/contact' ? 'active' : ''}>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="main-menu__main-menu-content-box">
                    <div className="main-menu__search-cat-btn-box">
                      <div className="main-menu__btn-box">
                        <a href="/donate-now" className="main-menu__btn">
                          <span className="fa fa-heart"></span> Faire un don
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className={`stricky-header stricked-menu main-menu ${isSticky ? 'stricky-fixed' : ''}`}>
        <div className="sticky-header__content"></div>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav__wrapper ${mobileMenuOpen ? 'expanded' : ''}`}>
        <div className="mobile-nav__overlay mobile-nav__toggler" onClick={toggleMobileMenu}></div>
        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler" onClick={toggleMobileMenu}>
            <i className="fa fa-times"></i>
          </span>
          <div className="logo-box">
            <a href="/" aria-label="logo image">
              <img src="/assets/images/resources/logo.png" width="143" alt="" />
            </a>
          </div>
          <div className="mobile-nav__container">
            <ul className="mobile-menu-list" style={{fontFamily:"ubuntu"}}>
              <li><a href="/">Acceuil</a></li>
              <li><a href="/qui-sommes-nous">Qui Sommes-Nous</a></li>
              <li><a href="/la-fondatrice">La Fondatrice</a></li>
              <li><a href="/gallery">Galerie</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <ul className="mobile-nav__contact list-unstyled" style={{fontFamily:"ubuntu"}}>
            <li>
              <i className="fa fa-envelope text-white"></i>
              <a href="mailto:contact@forka.org">contact@forka.org</a>
            </li>
            <li>
              <i className="fa fa-phone-alt text-white"></i>
              <a href="tel:+243815122226">+243 815 122 226</a>
            </li>
            <li>
              <i className="fa fa-phone-alt text-white"></i>
              <a href="tel:+243815122226">+243 972 721 395</a>
            </li>
            <li>
              <i className="fa fa-phone-alt text-white"></i>
              <a href="tel:+243815122226">+243 972 721 395</a>
            </li>
          </ul>
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <a href="https://www.facebook.com/share/1XfYGoo2yH/?mibextid=wwXIfr" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/rachel_kamana?igsh=MWI5eHphYWZ6NnhsZA%3D%3D&utm_source=qr" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/rachel-kamana-166418274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://x.com/rachelkamanakab?s=11" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;