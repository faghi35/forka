const Donate = () => {
  return (
    <>
      {/* Page Header */}
      <section style={{ 
        padding: '150px 0 100px', 
        background: 'linear-gradient(rgba(26, 26, 46, 0.85), rgba(22, 33, 62, 0.85)), url(/assets/images/backgrounds/become-volunteer-one-bg-5.jpg)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Shape décoratif */}
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '50px',
          opacity: 0.1
        }}>
          <img src="/assets/images/shapes/about-one-shape-1.png" alt="" style={{ width: '200px' }} />
        </div>
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '30px',
          opacity: 0.1
        }}>
          <img src="/assets/images/shapes/about-one-shape-2.png" alt="" style={{ width: '150px' }} />
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="text-center">
            <span style={{ 
              color: '#e5ad40', 
              fontSize: '1.1rem', 
              textTransform: 'uppercase',
              letterSpacing: '3px',
              display: 'block',
              marginBottom: '15px',
              fontFamily: "'changa one', cursive"
            }}>Soutenez Notre Cause</span>
            <h2 style={{ 
              fontSize: '3.5rem', 
              color: '#fff', 
              marginBottom: '20px',
              fontWeight: 700,
              fontFamily: "'Caveat', cursive"
            }}>Faire un Don</h2>
            <div style={{
              width: '80px',
              height: '4px',
              background: '#e5ad40',
              margin: '0 auto'
            }}></div>
          </div>
        </div>
      </section>

      {/* Section Introduction */}
      <section style={{ padding: '80px 0', backgroundColor: '#f8f9fa', position: 'relative' }}>
        {/* Shape décoratif */}
        <div style={{
          position: 'absolute',
          top: '50%',
          right: '0',
          transform: 'translateY(-50%)',
          opacity: 0.05
        }}>
          <img src="/assets/images/shapes/about-one-shape-3.png" alt="" style={{ width: '300px' }} />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p style={{ 
                fontSize: '1.3rem', 
                color: '#666', 
                lineHeight: 1.8,
                marginBottom: '30px'
              }}>
                Votre générosité nous permet de continuer notre mission et d'aider les familles dans le besoin.
                Chaque don compte et fait une réelle différence dans la vie de ceux que nous servons.
              </p>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '40px',
                flexWrap: 'wrap',
                marginTop: '40px'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    background: '#e5ad40',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 15px',
                    color: '#fff',
                    fontSize: '1.8rem'
                  }}>
                    <i className="fas fa-heart"></i>
                  </div>
                  <span style={{ color: '#333', fontWeight: 600 }}>100% Sécurisé</span>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    background: '#e5ad40',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 15px',
                    color: '#fff',
                    fontSize: '1.8rem'
                  }}>
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <span style={{ color: '#333', fontWeight: 600 }}>Déductible d'impôts</span>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    background: '#e5ad40',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 15px',
                    color: '#fff',
                    fontSize: '1.8rem'
                  }}>
                    <i className="fas fa-hand-holding-heart"></i>
                  </div>
                  <span style={{ color: '#333', fontWeight: 600 }}>Impact Direct</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Montants de Don */}
      <section style={{ padding: '100px 0', backgroundColor: '#fff', position: 'relative' }}>
        {/* Shape décoratif */}
        <div style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          opacity: 0.05
        }}>
          <img src="/assets/images/shapes/about-one-shape-1.png" alt="" style={{ width: '250px' }} />
        </div>

        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <span style={{ 
              color: '#e5ad40', 
              fontSize: '1rem', 
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>Choisissez Votre Montant</span>
            <h3 style={{ 
              fontSize: '2.5rem', 
              color: '#333', 
              marginTop: '15px',
              fontWeight: 700,
              fontFamily: "'Caveat', cursive"
            }}>Faites un Don Aujourd'hui</h3>
          </div>

          <div className="row">
            <div className="col-lg-4" style={{ marginBottom: '30px' }}>
              <div style={{ 
                background: '#fff', 
                padding: '50px 40px', 
                borderRadius: '20px', 
                textAlign: 'center',
                boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                height: '100%',
                border: '2px solid transparent',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  width: '100px',
                  height: '100px',
                  background: '#f8f9fa',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 25px'
                }}>
                  <i className="fas fa-utensils" style={{ fontSize: '2.5rem', color: '#e5ad40' }}></i>
                </div>
                <h3 style={{ 
                  color: '#e5ad40', 
                  marginBottom: '15px',
                  fontSize: '3rem',
                  fontWeight: 'bold'
                }}>25$</h3>
                <h5 style={{ color: '#333', marginBottom: '15px' }}>Repas Familial</h5>
                <p style={{ color: '#666', marginBottom: '30px', lineHeight: 1.7 }}>
                  Fournit des repas nutritifs pour une famille pendant une semaine complète
                </p>
                <button style={{
                  padding: '15px 40px',
                  background: 'transparent',
                  color: '#e5ad40',
                  border: '2px solid #e5ad40',
                  borderRadius: '50px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}>Donner</button>
              </div>
            </div>
            <div className="col-lg-4" style={{ marginBottom: '30px' }}>
              <div style={{ 
                background: '#fff', 
                padding: '50px 40px', 
                borderRadius: '20px', 
                textAlign: 'center',
                boxShadow: '0 20px 50px rgba(229, 173, 64, 0.15)',
                height: '100%',
                border: '2px solid #e5ad40',
                position: 'relative',
                transform: 'scale(1.05)'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#e5ad40',
                  color: '#fff',
                  padding: '8px 25px',
                  borderRadius: '25px',
                  fontSize: '0.9rem',
                  fontWeight: 600
                }}>Populaire</div>
                <div style={{
                  width: '100px',
                  height: '100px',
                  background: '#e5ad40',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 25px'
                }}>
                  <i className="fas fa-graduation-cap" style={{ fontSize: '2.5rem', color: '#fff' }}></i>
                </div>
                <h3 style={{ 
                  color: '#e5ad40', 
                  marginBottom: '15px',
                  fontSize: '3rem',
                  fontWeight: 'bold'
                }}>50$</h3>
                <h5 style={{ color: '#333', marginBottom: '15px' }}>Éducation</h5>
                <p style={{ color: '#666', marginBottom: '30px', lineHeight: 1.7 }}>
                  Soutient l'éducation d'un enfant pour un mois complet avec fournitures scolaires
                </p>
                <button style={{
                  padding: '15px 40px',
                  background: '#e5ad40',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '50px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 10px 20px rgba(229, 173, 64, 0.3)'
                }}>Donner</button>
              </div>
            </div>
            <div className="col-lg-4" style={{ marginBottom: '30px' }}>
              <div style={{ 
                background: '#fff', 
                padding: '50px 40px', 
                borderRadius: '20px', 
                textAlign: 'center',
                boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                height: '100%',
                border: '2px solid transparent',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  width: '100px',
                  height: '100px',
                  background: '#f8f9fa',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 25px'
                }}>
                  <i className="fas fa-home" style={{ fontSize: '2.5rem', color: '#e5ad40' }}></i>
                </div>
                <h3 style={{ 
                  color: '#e5ad40', 
                  marginBottom: '15px',
                  fontSize: '3rem',
                  fontWeight: 'bold'
                }}>100$</h3>
                <h5 style={{ color: '#333', marginBottom: '15px' }}>Abri d'Urgence</h5>
                <p style={{ color: '#666', marginBottom: '30px', lineHeight: 1.7 }}>
                  Permet de fournir un abri temporaire à une famille en situation d'urgence
                </p>
                <button style={{
                  padding: '15px 40px',
                  background: 'transparent',
                  color: '#e5ad40',
                  border: '2px solid #e5ad40',
                  borderRadius: '50px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}>Donner</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Montant Personnalisé */}
      <section style={{ 
        padding: '100px 0', 
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        position: 'relative'
      }}>
        {/* Shape décoratif */}
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '50px',
          opacity: 0.1
        }}>
          <img src="/assets/images/shapes/about-one-shape-2.png" alt="" style={{ width: '150px' }} />
        </div>
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '50px',
          opacity: 0.1
        }}>
          <img src="/assets/images/shapes/about-one-shape-1.png" alt="" style={{ width: '150px' }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div style={{ 
                background: 'rgba(255,255,255,0.05)', 
                padding: '60px', 
                borderRadius: '20px', 
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)',
                textAlign: 'center'
              }}>
                <h3 style={{ 
                  color: '#fff', 
                  marginBottom: '15px',
                  fontSize: '2rem',
                  fontWeight: 700,
                  fontFamily: "'Caveat', cursive"
                }}>Montant Personnalisé</h3>
                <p style={{ 
                  color: 'rgba(255,255,255,0.7)', 
                  marginBottom: '40px',
                  fontSize: '1.1rem'
                }}>
                  Choisissez le montant qui vous convient et faites la différence
                </p>
                
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  gap: '15px',
                  marginBottom: '30px',
                  flexWrap: 'wrap'
                }}>
                  {['10$', '25$', '50$', '100$', '250$', '500$'].map((amount) => (
                    <button 
                      key={amount}
                      style={{
                        padding: '12px 25px',
                        background: 'transparent',
                        color: '#fff',
                        border: '2px solid rgba(255,255,255,0.3)',
                        borderRadius: '10px',
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {amount}
                    </button>
                  ))}
                </div>

                <div style={{ marginBottom: '30px' }}>
                  <input 
                    type="number" 
                    placeholder="Entrez un montant personnalisé"
                    style={{
                      width: '100%',
                      maxWidth: '400px',
                      padding: '20px 25px',
                      background: 'rgba(255,255,255,0.1)',
                      border: '2px solid rgba(255,255,255,0.2)',
                      borderRadius: '15px',
                      fontSize: '1.2rem',
                      color: '#fff',
                      textAlign: 'center'
                    }}
                  />
                </div>

                <button style={{
                  padding: '18px 60px',
                  background: '#e5ad40',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '50px',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 10px 30px rgba(229, 173, 64, 0.3)'
                }}>
                  Faire un Don Maintenant
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Impact */}
      <section style={{ padding: '80px 0', backgroundColor: '#e5ad40' }}>
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
              <div style={{ color: '#fff' }}>
                <i className="fas fa-hands-helping" style={{ fontSize: '3rem', marginBottom: '15px', display: 'block' }}></i>
                <span style={{ fontSize: '3rem', fontWeight: 'bold', display: 'block' }}>5000+</span>
                <span style={{ fontSize: '1.1rem', opacity: 0.9 }}>Dons Reçus</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
              <div style={{ color: '#fff' }}>
                <i className="fas fa-users" style={{ fontSize: '3rem', marginBottom: '15px', display: 'block' }}></i>
                <span style={{ fontSize: '3rem', fontWeight: 'bold', display: 'block' }}>500+</span>
                <span style={{ fontSize: '1.1rem', opacity: 0.9 }}>Familles Aidées</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
              <div style={{ color: '#fff' }}>
                <i className="fas fa-heart" style={{ fontSize: '3rem', marginBottom: '15px', display: 'block' }}></i>
                <span style={{ fontSize: '3rem', fontWeight: 'bold', display: 'block' }}>98%</span>
                <span style={{ fontSize: '1.1rem', opacity: 0.9 }}>Vers l'action directe</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
              <div style={{ color: '#fff' }}>
                <i className="fas fa-globe" style={{ fontSize: '3rem', marginBottom: '15px', display: 'block' }}></i>
                <span style={{ fontSize: '3rem', fontWeight: 'bold', display: 'block' }}>15+</span>
                <span style={{ fontSize: '1.1rem', opacity: 0.9 }}>Pays Partenaires</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Donate;
