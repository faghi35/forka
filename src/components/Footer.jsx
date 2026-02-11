import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Qui Sommes-Nous', path: '/qui-sommes-nous' },
    { name: 'La Fondatrice', path: '/la-fondatrice' },
    { name: 'Galerie', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const actionLinks = [
    { name: 'Devenir Membre', path: '/become-volunteer', icon: 'fa-user-plus' },
    { name: 'Faire un Don', path: '/donate-now', icon: 'fa-heart' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'fa-facebook-f', url: 'https://www.facebook.com/share/1XfYGoo2yH/?mibextid=wwXIfr', color: '#1877f2' },
    { name: 'Instagram', icon: 'fa-instagram', url: 'https://www.instagram.com/rachel_kamana', color: '#e4405f' },
    { name: 'LinkedIn', icon: 'fa-linkedin-in', url: 'https://www.linkedin.com/in/rachel-kamana-166418274', color: '#0077b5' },
    { name: 'Twitter', icon: 'fa-twitter', url: 'https://x.com/rachelkamanakab', color: '#1da1f2' },
  ];

  const locations = [
    {
      city: 'Kinshasa',
      address: '13 Avenue Pumbu, Q/Haut Commandement, C/ Gombe',
      phone: '+243 815 122 226'
    },
    {
      city: 'Goma',
      address: '25 Avenue La Fontière, Q/Katindo, C/ Goma',
      phone: '+243 972 721 395'
    },
    {
      city: 'Lubumbashi',
      address: '26 Avenue Munua, Q/Golf Meteo, C/ Lubumbashi',
      phone: '+243 815 122 226'
    }
  ];

  return (
    <footer style={{
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        opacity: '0.5'
      }} />

      {/* Decorative Shapes */}
      <div style={{
        position: 'absolute',
        top: '-50px',
        right: '-50px',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(229,173,64,0.1) 0%, transparent 70%)',
        borderRadius: '50%'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-100px',
        left: '-100px',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(229,173,64,0.05) 0%, transparent 70%)',
        borderRadius: '50%'
      }} />

      {/* Main Footer Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Newsletter Section */}
        <div style={{
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          padding: '60px 0'
        }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6" style={{ marginBottom: '30px' }}>
                <h3 style={{
                  color: '#fff',
                  fontSize: '2rem',
                  fontWeight: 700,
                  marginBottom: '10px',
                  fontFamily: "'Caveat', cursive"
                }}>
                  Restez Informé
                </h3>
                <p style={{
                  color: 'rgba(255,255,255,0.7)',
                  margin: 0,
                  fontSize: '1.1rem'
                }}>
                  Abonnez-vous à notre newsletter pour suivre nos actualités
                </p>
              </div>
              <div className="col-lg-6">
                <form style={{
                  display: 'flex',
                  gap: '15px',
                  flexWrap: 'wrap'
                }}>
                  <input 
                    type="email" 
                    placeholder="Votre adresse email"
                    style={{
                      flex: '1',
                      minWidth: '250px',
                      padding: '18px 25px',
                      border: '2px solid rgba(255,255,255,0.1)',
                      borderRadius: '50px',
                      background: 'rgba(255,255,255,0.05)',
                      color: '#fff',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#e5ad40';
                      e.target.style.background = 'rgba(255,255,255,0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                      e.target.style.background = 'rgba(255,255,255,0.05)';
                    }}
                  />
                  <button 
                    type="submit"
                    style={{
                      padding: '18px 40px',
                      background: 'linear-gradient(135deg, #e5ad40 0%, #d4952f 100%)',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '50px',
                      fontWeight: 600,
                      fontSize: '1rem',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 10px 30px rgba(229,173,64,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-3px)';
                      e.target.style.boxShadow = '0 15px 40px rgba(229,173,64,0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 10px 30px rgba(229,173,64,0.3)';
                    }}
                  >
                    <i className="fas fa-paper-plane"></i>
                    S'abonner
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Widgets */}
        <div style={{ padding: '80px 0 50px' }}>
          <div className="container">
            <div className="row">
              {/* About Column */}
              <div className="col-xl-3 col-lg-4 col-md-6" style={{ marginBottom: '40px' }}>
                <div style={{ paddingRight: '20px' }}>
                  {/* Logo */}
                  <div style={{ marginBottom: '25px' }}>
                    <img 
                      src="/assets/images/resources/logo-footer.png" 
                      alt="Forka" 
                      style={{ maxWidth: '180px', height: 'auto' }}
                    />
                  </div>
                  
                  <p style={{
                    color: 'rgba(255,255,255,0.7)',
                    lineHeight: 1.8,
                    marginBottom: '25px',
                    fontSize: '0.95rem'
                  }}>
                    La Fondation Rachel Kamana (FORKA) est une organisation congolaise à but non lucratif, 
                    engagée dans l'éducation, l'autonomisation des jeunes et des femmes.
                  </p>

                  {/* Social Links */}
                  <div style={{ display: 'flex', gap: '12px' }}>
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          width: '45px',
                          height: '45px',
                          background: 'rgba(255,255,255,0.1)',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#fff',
                          fontSize: '1.1rem',
                          transition: 'all 0.3s ease',
                          textDecoration: 'none'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = social.color;
                          e.target.style.transform = 'translateY(-5px)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'rgba(255,255,255,0.1)';
                          e.target.style.transform = 'translateY(0)';
                        }}
                      >
                        <i className={`fab ${social.icon}`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Links Column */}
              <div className="col-xl-2 col-lg-4 col-md-6" style={{ marginBottom: '40px' }}>
                <div>
                  <h4 style={{
                    color: '#fff',
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    marginBottom: '25px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <span style={{
                      width: '30px',
                      height: '3px',
                      background: '#e5ad40',
                      borderRadius: '2px'
                    }}></span>
                    Liens Rapides
                  </h4>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    {quickLinks.map((link) => (
                      <li key={link.path} style={{ marginBottom: '12px' }}>
                        <Link 
                          to={link.path}
                          style={{
                            color: 'rgba(255,255,255,0.7)',
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            transition: 'all 0.3s ease',
                            fontSize: '0.95rem'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.color = '#e5ad40';
                            e.target.style.paddingLeft = '10px';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.color = 'rgba(255,255,255,0.7)';
                            e.target.style.paddingLeft = '0';
                          }}
                        >
                          <i className="fas fa-chevron-right" style={{ fontSize: '0.7rem' }}></i>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Links Column */}
              <div className="col-xl-2 col-lg-4 col-md-6" style={{ marginBottom: '40px' }}>
                <div>
                  <h4 style={{
                    color: '#fff',
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    marginBottom: '25px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <span style={{
                      width: '30px',
                      height: '3px',
                      background: '#e5ad40',
                      borderRadius: '2px'
                    }}></span>
                    Actions
                  </h4>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    {actionLinks.map((link) => (
                      <li key={link.path} style={{ marginBottom: '12px' }}>
                        <Link 
                          to={link.path}
                          style={{
                            color: 'rgba(255,255,255,0.7)',
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            transition: 'all 0.3s ease',
                            fontSize: '0.95rem'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.color = '#e5ad40';
                            e.target.style.paddingLeft = '10px';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.color = 'rgba(255,255,255,0.7)';
                            e.target.style.paddingLeft = '0';
                          }}
                        >
                          <i className={`fas ${link.icon}`} style={{ fontSize: '0.9rem' }}></i>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Contact Column */}
              <div className="col-xl-5 col-lg-12 col-md-6" style={{ marginBottom: '40px' }}>
                <div>
                  <h4 style={{
                    color: '#fff',
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    marginBottom: '25px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <span style={{
                      width: '30px',
                      height: '3px',
                      background: '#e5ad40',
                      borderRadius: '2px'
                    }}></span>
                    Nos Bureaux
                  </h4>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {locations.map((location) => (
                      <div 
                        key={location.city}
                        style={{
                          background: 'rgba(255,255,255,0.05)',
                          padding: '20px',
                          borderRadius: '15px',
                          border: '1px solid rgba(255,255,255,0.1)',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(229,173,64,0.1)';
                          e.currentTarget.style.borderColor = 'rgba(229,173,64,0.3)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                        }}
                      >
                        <div style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '15px'
                        }}>
                          <div style={{
                            width: '45px',
                            height: '45px',
                            background: '#e5ad40',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#fff',
                            fontSize: '1.2rem',
                            flexShrink: 0
                          }}>
                            <i className="fas fa-building"></i>
                          </div>
                          <div>
                            <h5 style={{
                              color: '#fff',
                              fontWeight: 600,
                              marginBottom: '5px',
                              fontSize: '1rem'
                            }}>
                              {location.city}
                            </h5>
                            <p style={{
                              color: 'rgba(255,255,255,0.6)',
                              fontSize: '0.85rem',
                              margin: '0 0 8px 0',
                              lineHeight: 1.5
                            }}>
                              {location.address}
                            </p>
                            <a 
                              href={`tel:${location.phone}`}
                              style={{
                                color: '#e5ad40',
                                textDecoration: 'none',
                                fontSize: '0.9rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                              }}
                            >
                              <i className="fas fa-phone-alt" style={{ fontSize: '0.8rem' }}></i>
                              {location.phone}
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Email */}
                  <div style={{
                    marginTop: '20px',
                    padding: '20px',
                    background: 'linear-gradient(135deg, rgba(229,173,64,0.1) 0%, rgba(229,173,64,0.2) 100%)',
                    borderRadius: '15px',
                    border: '1px solid rgba(229,173,64,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px'
                  }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      background: '#e5ad40',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontSize: '1.3rem'
                    }}>
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                      <p style={{
                        color: 'rgba(255,255,255,0.6)',
                        margin: '0 0 5px 0',
                        fontSize: '0.85rem'
                      }}>
                        Email général
                      </p>
                      <a 
                        href="mailto:contact@forka.org"
                        style={{
                          color: '#fff',
                          textDecoration: 'none',
                          fontWeight: 600,
                          fontSize: '1rem'
                        }}
                      >
                        contact@forka.org
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          padding: '30px 0',
          background: 'rgba(0,0,0,0.2)'
        }}>
          <div className="container">
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '20px'
            }}>
              <p style={{
                color: 'rgba(255,255,255,0.6)',
                margin: 0,
                fontSize: '0.9rem'
              }}>
                Copyright &copy; {currentYear} <span style={{ color: '#e5ad40' }}>Forka</span>. Tous droits réservés.
              </p>
              <p style={{
                color: 'rgba(255,255,255,0.6)',
                margin: 0,
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                Design by{' '}
                <a 
                  href="https://www.faghiweb-services.com" 
                  target="_blank" 
                  rel="noreferrer"
                  style={{
                    color: '#e5ad40',
                    textDecoration: 'none',
                    fontWeight: 600
                  }}
                >
                  Faghi Web Services
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
