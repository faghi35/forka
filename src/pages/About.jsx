const AboutPage = () => {
  return (
    <>
      {/* Page Header avec background */}
      <section className="page-header" style={{
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
            }}>À Propos de Nous</span>
            <h2 style={{
              fontSize: '3.5rem',
              color: '#fff',
              marginBottom: '20px',
              fontWeight: 700,
              fontFamily: "'Caveat', cursive"
            }}>Qui Sommes-Nous</h2>
            <div style={{
              width: '80px',
              height: '4px',
              background: '#e5ad40',
              margin: '0 auto'
            }}></div>
          </div>
        </div>
      </section>

      {/* Section Mission & Vision */}
      <section style={{ padding: '100px 0', backgroundColor: '#f8f9fa', position: 'relative' }}>
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
          <div className="row align-items-center">
            <div className="col-lg-6" style={{ marginBottom: '40px' }}>
              <div style={{ position: 'relative' }}>
                <img
                  src="/assets/images/resources/fk-4.jpg"
                  alt="Notre Mission"
                  style={{
                    width: '100%',
                    borderRadius: '10px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '-20px',
                  right: '-20px',
                  background: '#00715d',
                  padding: '20px 30px',
                  borderRadius: '10px',
                  color: '#fff',
                  textAlign: 'center'
                }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 'bold', display: 'block' ,fontFamily: "'changa one', cursive"}}>10+</span>
                  <span style={{ fontSize: '0.9rem' }}>Années d'expérience</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <span style={{
                color: '#00715d',
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontWeight: 600,
                fontFamily: "'changa one', cursive"
              }}>Notre Mission</span>
              <h3 style={{
                fontSize: '2.5rem',
                color: '#333',
                margin: '15px 0 25px',
                fontWeight: 700,
                lineHeight: 1.3,
                fontFamily: "'Caveat', cursive"
              }}>
                FORKA : Au Cœur de la Transformation Sociale
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: '#666',
                lineHeight: 1.8,
                marginBottom: '20px'
              }}>
                La Fondation Rachel Kamana (FORKA) est une organisation congolaise à but non lucratif, à vocation sociale, fondée par Rachel Kamana, entrepreneure engagée, visionnaire inspirante et coach en leadership transformationnel.
                Forte de sa mission profondément ancrée dans la promotion du progrès social, FORKA s'investit activement dans l’éveil et le renforcement du leadership féminin ainsi que dans l'autonomisation de la jeunesse congolaise.
              </p>
              <p style={{
                fontSize: '1.1rem',
                color: '#666',
                lineHeight: 1.8,
                marginBottom: '30px'
              }}>
                Nous nous engageons à fournir un soutien holistique aux familles vulnérables,
                à offrir des opportunités aux jeunes et à autonomiser les mères pour qu'elles
                puissent construire un avenir meilleur pour leurs enfants.
              </p>
              <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: '#00715d',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff'
                  }}>
                    <i className="fas fa-check"></i>
                  </div>
                  <span style={{ color: '#333', fontWeight: 600 }}>Familles Aidées</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: '#00715d',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff'
                  }}>
                    <i className="fas fa-check"></i>
                  </div>
                  <span style={{ color: '#333', fontWeight: 600 }}>Jeunes Formés</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Vision */}
      <section style={{ padding: '100px 0', backgroundColor: '#fff', position: 'relative' }}>
        <div className="container">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-lg-6" style={{ marginBottom: '40px' }}>
              <div style={{ position: 'relative' }}>
                <img
                  src="/assets/images/resources/hol-home.jpeg"
                  alt="Notre Vision"
                  style={{
                    width: '100%',
                    borderRadius: '10px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                  }}
                />
                {/* Shape décoratif */}
                <div style={{
                  position: 'absolute',
                  top: '-30px',
                  left: '-30px',
                  zIndex: -1
                }}>
                  <img src="/assets/images/resources/fk-2.jpg" alt="" style={{ width: '100px' }} />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <span style={{
                color: '#00715d',
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontWeight: 600,
                fontFamily: "'changa one', cursive"
              }}>Notre Vision</span>
              <h3 style={{
                fontSize: '2.5rem',
                color: '#333',
                margin: '15px 0 25px',
                fontWeight: 700,
                lineHeight: 1.3,
                fontFamily: "'Caveat', cursive"
              }}>
                Un Avenir Meilleur pour Tous
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: '#666',
                lineHeight: 1.8,
                marginBottom: '30px'
              }}>
                Faire de la jeunesse congolaise et surtout de la femme une force transformatrice enracinée dans sa terre, pour que chaque communauté devienne un centre de leadership durable, autonome et respecté.

              </p>
              <div style={{
                background: '#f8f9fa',
                padding: '30px',
                borderRadius: '10px',
                borderLeft: '4px solid #00715d'
              }}>
                <p style={{
                  fontSize: '1.1rem',
                  color: '#555',
                  fontStyle: 'italic',
                  margin: 0,
                  lineHeight: 1.8
                }}>
                  "Nous croyons en un monde où l'amour et le soutien communautaire peuvent transformer
                  des vies et créer un avenir meilleur pour les générations futures."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Services */}
      <section style={{
        padding: '100px 0',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #00715d 100%)',
        position: 'relative'
      }}>
        {/* Shape décoratif */}
        <div style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          opacity: 0.1
        }}>
          <img src="/assets/images/shapes/about-one-shape-1.png" alt="" style={{ width: '250px' }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <span style={{
              color: '#e5ad40',
              fontSize: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontFamily: "'changa one', cursive"
            }}>Nos Services</span>
            <h3 style={{
              fontSize: '2.5rem',
              color: '#fff',
              marginTop: '15px',
              fontWeight: 700,
              fontFamily: "'Caveat', cursive"
            }}>Ce Que Nous Faisons</h3>
          </div>

          <div className="row">
            <div className="col-lg-4" style={{ marginBottom: '30px' }}>
              <div style={{
                background: 'rgba(255,255,255,0.05)',
                padding: '40px 30px',
                borderRadius: '15px',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'all 0.3s ease',
                height: '100%'
              }}>
                <div style={{
                  width: '90px',
                  height: '90px',
                  background: '#e5ad40',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 25px',
                  color: '#fff',
                  fontSize: '2.5rem'
                }}>
                  <i className="fas fa-users"></i>
                </div>
                <h4 style={{ color: '#fff', marginBottom: '15px', fontWeight: 600 ,fontFamily: "'changa one', cursive"}}>Soutien Familial</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 ,fontFamily: "'ubuntu', cursive"}}>
                  Accompagnement complet pour les familles en difficulté avec des ressources
                  pratiques et un soutien émotionnel.
                </p>
              </div>
            </div>
            <div className="col-lg-4" style={{ marginBottom: '30px' }}>
              <div style={{
                background: 'rgba(255,255,255,0.05)',
                padding: '40px 30px',
                borderRadius: '15px',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'all 0.3s ease',
                height: '100%'
              }}>
                <div style={{
                  width: '90px',
                  height: '90px',
                  background: '#e5ad40',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 25px',
                  color: '#fff',
                  fontSize: '2.5rem'
                }}>
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h4 style={{ color: '#fff', marginBottom: '15px', fontWeight: 600 ,fontFamily: "'changa one', cursive"}}>Autonomisation Jeunesse</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 ,fontFamily: "'ubuntu', cursive"}}>
                  Programmes éducatifs et développement personnel pour les jeunes afin de
                  réaliser leur plein potentiel.
                </p>
              </div>
            </div>
            <div className="col-lg-4" style={{ marginBottom: '30px' }}>
              <div style={{
                background: 'rgba(255,255,255,0.05)',
                padding: '40px 30px',
                borderRadius: '15px',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'all 0.3s ease',
                height: '100%'
              }}>
                <div style={{
                  width: '90px',
                  height: '90px',
                  background: '#e5ad40',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 25px',
                  color: '#fff',
                  fontSize: '2.5rem'
                }}>
                  <i className="fas fa-heart"></i>
                </div>
                <h4 style={{ color: '#fff', marginBottom: '15px', fontWeight: 600 ,fontFamily: "'changa one', cursive"}}>Soutien aux Mères</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 ,fontFamily: "'ubuntu', cursive"}}>
                  Aide pratique et émotionnelle pour les mères célibataires et les familles
                  monoparentales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Stats */}
      <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
              <div style={{ color: '#00715d' }}>
                <span style={{ fontSize: '3.5rem', fontWeight: 'bold', display: 'block' ,fontFamily: "'changa one', cursive"}}>500+</span>
                <span style={{ fontSize: '1.1rem', opacity: 0.9 }}>Familles Aidées</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
              <div style={{ color: '#00715d' }}>
                <span style={{ fontSize: '3.5rem', fontWeight: 'bold', display: 'block' ,fontFamily: "'changa one', cursive"}}>1000+</span>
                <span style={{ fontSize: '1.1rem', opacity: 0.9 }}>Jeunes Formés</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
              <div style={{ color: '#00715d' }}>
                <span style={{ fontSize: '3.5rem', fontWeight: 'bold', display: 'block' ,fontFamily: "'changa one', cursive"}}>50+</span>
                <span style={{ fontSize: '1.1rem', opacity: 0.9 }}>Bénévoles</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
              <div style={{ color: '#00715d' }}>
                <span style={{ fontSize: '3.5rem', fontWeight: 'bold', display: 'block' ,fontFamily: "'changa one', cursive"}}>10+</span>
                <span style={{ fontSize: '1.1rem', opacity: 0.9 }}>Années d'Action</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
