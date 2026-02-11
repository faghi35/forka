import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: 'fa-phone-alt',
      title: 'Téléphone',
      content: '+243 815 122 226',
      link: 'tel:+243815122226',
      color: '#e5ad40',
      hoverColor: '#d4952f'
    },
    {
      icon: 'fa-envelope',
      title: 'Email',
      content: 'contact@forka.org',
      link: 'mailto:contact@forka.org',
      color: '#e5ad40',
      hoverColor: '#d4952f'
    },
    {
      icon: 'fa-map-marker-alt',
      title: 'Adresse',
      content: '13 Avenue Pumbu, Q/Haut Commandement, C/ Gombe',
      link: '#',
      color: '#e5ad40',
      hoverColor: '#d4952f'
    }
  ];

  const officeLocations = [
    { city: 'Kinshasa', address: '13 Avenue Pumbu, Q/Haut Commandement, C/ Gombe', phone: '+243 815 122 226' },
    { city: 'Goma', address: '25 Avenue La Fontière, Q/Katindo, C/ Goma', phone: '+243 972 721 395' },
    { city: 'Lubumbashi', address: '26 Avenue Munua, Q/Golf Meteo, C/ Lubumbashi', phone: '+243 815 122 226' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'fa-facebook-f', url: 'https://www.facebook.com/share/1XfYGoo2yH/', color: '#1877f2' },
    { name: 'Instagram', icon: 'fa-instagram', url: 'https://www.instagram.com/rachel_kamana', color: '#e4405f' },
    { name: 'LinkedIn', icon: 'fa-linkedin-in', url: 'https://www.linkedin.com/in/rachel-kamana-166418274', color: '#0077b5' },
    { name: 'Twitter', icon: 'fa-twitter', url: 'https://x.com/rachelkamanakab', color: '#1da1f2' }
  ];

  return (
    <>
      {/* Page Header Amélioré */}
      <section style={{ 
        padding: '150px 0 100px', 
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #1a1a2e 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated Background */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(229,173,64,0.1) 0%, transparent 60%)',
          borderRadius: '50%'
        }} />
        
        {/* Floating Shapes */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          opacity: 0.15,
          animation: 'float 6s ease-in-out infinite'
        }}>
          <img src="/assets/images/shapes/about-one-shape-1.png" alt="" style={{ width: '200px' }} />
        </div>
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          opacity: 0.1,
          animation: 'float 8s ease-in-out infinite reverse'
        }}>
          <img src="/assets/images/shapes/about-one-shape-2.png" alt="" style={{ width: '150px' }} />
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="text-center">
            <span style={{ 
              color: '#e5ad40', 
              fontSize: '1rem', 
              textTransform: 'uppercase',
              letterSpacing: '4px',
              display: 'block',
              marginBottom: '20px',
              fontWeight: 600
            }}>Restons en Contact</span>
            <h2 style={{ 
              fontSize: '4rem', 
              color: '#fff', 
              marginBottom: '25px',
              fontWeight: 700,
              fontFamily: "'Caveat', cursive",
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}>Contactez-Nous</h2>
            <div style={{
              width: '100px',
              height: '4px',
              background: 'linear-gradient(90deg, transparent, #e5ad40, transparent)',
              margin: '0 auto 30px'
            }}></div>
            <p style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: '1.2rem',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.8
            }}>
              Nous sommes là pour répondre à toutes vos questions et vous accompagner dans vos projets
            </p>
          </div>
        </div>
      </section>

      {/* Section Info Contact - Cartes Modernes */}
      <section style={{ padding: '80px 0 60px', backgroundColor: '#f8f9fa', position: 'relative' }}>
        <div className="container">
          <div className="row">
            {contactInfo.map((item, index) => (
              <div key={index} className="col-lg-4" style={{ marginBottom: '30px' }}>
                <a 
                  href={item.link}
                  style={{ 
                    display: 'block',
                    background: '#fff', 
                    padding: '50px 30px', 
                    borderRadius: '20px', 
                    textAlign: 'center',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                    height: '100%',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    border: '1px solid rgba(229, 173, 64, 0.1)',
                    textDecoration: 'none',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.15)';
                    const icon = e.currentTarget.querySelector('.contact-icon');
                    if (icon) {
                      icon.style.transform = 'scale(1.1) rotate(5deg)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.08)';
                    const icon = e.currentTarget.querySelector('.contact-icon');
                    if (icon) {
                      icon.style.transform = 'scale(1) rotate(0deg)';
                    }
                  }}
                >
                  {/* Background Glow Effect */}
                  <div style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background: `radial-gradient(circle, ${item.color}10 0%, transparent 50%)`,
                    opacity: 0,
                    transition: 'opacity 0.4s ease'
                  }} className="glow-effect" />
                  
                  <div 
                    className="contact-icon"
                    style={{ 
                      width: '100px', 
                      height: '100px', 
                      background: `linear-gradient(135deg, ${item.color} 0%, ${item.hoverColor} 100%)`, 
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 25px',
                      color: '#fff',
                      fontSize: '2.2rem',
                      boxShadow: `0 15px 30px ${item.color}40`,
                      transition: 'all 0.4s ease',
                      position: 'relative',
                      zIndex: 1
                    }}
                  >
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <h4 style={{ 
                    marginBottom: '15px', 
                    color: '#333', 
                    fontWeight: 600,
                    fontSize: '1.3rem',
                    position: 'relative',
                    zIndex: 1
                  }}>{item.title}</h4>
                  <p style={{ 
                    color: '#666', 
                    margin: 0, 
                    fontSize: '1.05rem',
                    lineHeight: 1.6,
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {item.content}
                  </p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Formulaire et Infos - Layout Moderne */}
      <section style={{ padding: '60px 0 100px', backgroundColor: '#f8f9fa', position: 'relative' }}>
        {/* Decorative Shape */}
        <div style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          opacity: 0.03
        }}>
          <img src="/assets/images/shapes/about-one-shape-1.png" alt="" style={{ width: '300px' }} />
        </div>

        <div className="container">
          <div className="row">
            {/* Formulaire */}
            <div className="col-lg-7" style={{ marginBottom: '40px' }}>
              <div style={{ 
                background: '#fff', 
                padding: '50px', 
                borderRadius: '25px', 
                boxShadow: '0 25px 60px rgba(0,0,0,0.1)',
                position: 'relative',
                height: '100%'
              }}>
                {/* Decorative Element */}
                <div style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '50px',
                  width: '80px',
                  height: '80px',
                  background: '#e5ad40',
                  borderRadius: '50%',
                  opacity: 0.1
                }} />

                <h3 style={{ 
                  marginBottom: '10px', 
                  color: '#333',
                  fontSize: '2.2rem',
                  fontWeight: 700,
                  fontFamily: "'Caveat', cursive"
                }}>Envoyez-nous un Message</h3>
                <p style={{ 
                  color: '#666', 
                  marginBottom: '40px',
                  fontSize: '1.05rem'
                }}>
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais
                </p>

                <form>
                  <div className="row">
                    <div className="col-md-6" style={{ marginBottom: '25px' }}>
                      <div style={{ position: 'relative' }}>
                        <label style={{ 
                          display: 'block', 
                          marginBottom: '10px', 
                          color: '#333', 
                          fontWeight: 500,
                          fontSize: '0.95rem'
                        }}>
                          Votre Nom
                        </label>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Entrez votre nom"
                          style={{
                            width: '100%',
                            padding: '18px 20px',
                            border: `2px solid ${focusedField === 'name' ? '#e5ad40' : '#eee'}`,
                            borderRadius: '15px',
                            fontSize: '1rem',
                            transition: 'all 0.3s ease',
                            backgroundColor: focusedField === 'name' ? '#fff' : '#fafafa',
                            outline: 'none'
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-6" style={{ marginBottom: '25px' }}>
                      <div style={{ position: 'relative' }}>
                        <label style={{ 
                          display: 'block', 
                          marginBottom: '10px', 
                          color: '#333', 
                          fontWeight: 500,
                          fontSize: '0.95rem'
                        }}>
                          Votre Email
                        </label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Entrez votre email"
                          style={{
                            width: '100%',
                            padding: '18px 20px',
                            border: `2px solid ${focusedField === 'email' ? '#e5ad40' : '#eee'}`,
                            borderRadius: '15px',
                            fontSize: '1rem',
                            transition: 'all 0.3s ease',
                            backgroundColor: focusedField === 'email' ? '#fff' : '#fafafa',
                            outline: 'none'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div style={{ marginBottom: '25px' }}>
                    <div style={{ position: 'relative' }}>
                      <label style={{ 
                        display: 'block', 
                        marginBottom: '10px', 
                        color: '#333', 
                        fontWeight: 500,
                        fontSize: '0.95rem'
                      }}>
                        Sujet
                      </label>
                      <input 
                        type="text" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Entrez le sujet"
                        style={{
                          width: '100%',
                          padding: '18px 20px',
                          border: `2px solid ${focusedField === 'subject' ? '#e5ad40' : '#eee'}`,
                          borderRadius: '15px',
                          fontSize: '1rem',
                          transition: 'all 0.3s ease',
                          backgroundColor: focusedField === 'subject' ? '#fff' : '#fafafa',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>
                  <div style={{ marginBottom: '35px' }}>
                    <div style={{ position: 'relative' }}>
                      <label style={{ 
                        display: 'block', 
                        marginBottom: '10px', 
                        color: '#333', 
                        fontWeight: 500,
                        fontSize: '0.95rem'
                      }}>
                        Votre Message
                      </label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Écrivez votre message ici..."
                        rows="5"
                        style={{
                          width: '100%',
                          padding: '18px 20px',
                          border: `2px solid ${focusedField === 'message' ? '#e5ad40' : '#eee'}`,
                          borderRadius: '15px',
                          fontSize: '1rem',
                          resize: 'vertical',
                          transition: 'all 0.3s ease',
                          backgroundColor: focusedField === 'message' ? '#fff' : '#fafafa',
                          outline: 'none',
                          fontFamily: 'inherit'
                        }}
                      ></textarea>
                    </div>
                  </div>
                  <div>
                    <button 
                      type="submit"
                      style={{
                        width: '100%',
                        padding: '20px',
                        background: 'linear-gradient(135deg, #e5ad40 0%, #d4952f 100%)',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '15px',
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        boxShadow: '0 15px 30px rgba(229, 173, 64, 0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-3px)';
                        e.target.style.boxShadow = '0 20px 40px rgba(229, 173, 64, 0.5)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 15px 30px rgba(229, 173, 64, 0.4)';
                      }}
                    >
                      <i className="fas fa-paper-plane"></i>
                      Envoyer le Message
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="col-lg-5" style={{ marginBottom: '40px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                {/* Horaires */}
                <div style={{ 
                  background: '#fff', 
                  padding: '35px', 
                  borderRadius: '20px',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.08)'
                }}>
                  <h4 style={{ 
                    color: '#333', 
                    marginBottom: '25px', 
                    fontSize: '1.3rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}>
                    <div style={{
                      width: '45px',
                      height: '45px',
                      background: 'linear-gradient(135deg, #e5ad40 0%, #d4952f 100%)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontSize: '1.1rem'
                    }}>
                      <i className="fas fa-clock"></i>
                    </div>
                    Heures d'Ouverture
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {[
                      { day: 'Lundi - Vendredi', hours: '8h00 - 17h00' },
                      { day: 'Samedi', hours: '9h00 - 14h00' },
                      { day: 'Dimanche', hours: 'Fermé', isClosed: true }
                    ].map((item, index) => (
                      <div 
                        key={index}
                        style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: '12px 0',
                          borderBottom: index < 2 ? '1px solid #f0f0f0' : 'none'
                        }}
                      >
                        <span style={{ color: '#666', fontSize: '0.95rem' }}>{item.day}</span>
                        <span style={{ 
                          color: item.isClosed ? '#e74c3c' : '#333', 
                          fontWeight: item.isClosed ? 600 : 500,
                          fontSize: '0.95rem'
                        }}>{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Nos Bureaux */}
                <div style={{ 
                  background: '#fff', 
                  padding: '35px', 
                  borderRadius: '20px',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.08)'
                }}>
                  <h4 style={{ 
                    color: '#333', 
                    marginBottom: '25px', 
                    fontSize: '1.3rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}>
                    <div style={{
                      width: '45px',
                      height: '45px',
                      background: 'linear-gradient(135deg, #e5ad40 0%, #d4952f 100%)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontSize: '1.1rem'
                    }}>
                      <i className="fas fa-building"></i>
                    </div>
                    Nos Bureaux
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {officeLocations.map((office, index) => (
                      <div 
                        key={index}
                        style={{
                          padding: '15px',
                          background: '#f8f9fa',
                          borderRadius: '12px',
                          border: '1px solid #eee',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#fff';
                          e.currentTarget.style.borderColor = '#e5ad40';
                          e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = '#f8f9fa';
                          e.currentTarget.style.borderColor = '#eee';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        <h5 style={{ color: '#333', fontWeight: 600, marginBottom: '5px', fontSize: '1rem' }}>
                          {office.city}
                        </h5>
                        <p style={{ color: '#666', fontSize: '0.85rem', margin: '0 0 5px 0' }}>
                          {office.address}
                        </p>
                        <a href={`tel:${office.phone}`} style={{ color: '#e5ad40', fontSize: '0.85rem', textDecoration: 'none' }}>
                          {office.phone}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Réseaux Sociaux */}
                <div style={{ 
                  background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', 
                  padding: '35px', 
                  borderRadius: '20px',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
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
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`
                  }} />
                  
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <h4 style={{ 
                      color: '#fff', 
                      marginBottom: '20px', 
                      fontSize: '1.3rem',
                      fontWeight: 600
                    }}>
                      Suivez-Nous
                    </h4>
                    <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '25px', fontSize: '0.95rem' }}>
                      Restez connectés pour nos actualités
                    </p>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      {socialLinks.map((social) => (
                        <a 
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            width: '50px',
                            height: '50px',
                            background: 'rgba(255,255,255,0.1)',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#fff',
                            fontSize: '1.3rem',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease'
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </>
  );
};

export default Contact;
