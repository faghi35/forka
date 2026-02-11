const Founder = () => {
  return (
    <>
      {/* Page Header */}
      <section style={{ 
        padding: '150px 0 100px', 
        background: 'linear-gradient(rgba(26, 26, 46, 0.85), rgba(22, 33, 62, 0.85)), url(/assets/images/backgrounds/become-volunteer-one-bg-1.jpg)',
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
            }}>Notre Histoire</span>
            <h2 style={{ 
              fontSize: '3.5rem', 
              color: '#fff', 
              marginBottom: '20px',
              fontWeight: 700,
              fontFamily: "'Caveat', cursive"
            }}>La Fondatrice</h2>
            <div style={{
              width: '80px',
              height: '4px',
              background: '#e5ad40',
              margin: '0 auto'
            }}></div>
          </div>
        </div>
      </section>

      {/* Section Principale */}
      <section style={{ padding: '100px 0', backgroundColor: '#f8f9fa', position: 'relative' }}>
        {/* Shape décoratif */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '0',
          opacity: 0.05
        }}>
          <img src="/assets/images/shapes/about-one-shape-3.png" alt="" style={{ width: '300px' }} />
        </div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5" style={{ marginBottom: '40px' }}>
              <div style={{ 
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                gap: '20px'
              }}>
                {/* Barre verticale colorée */}
                <div style={{
                  width: '25px',
                  height: '350px',
                  background: 'linear-gradient(to bottom, #00715d 0%, #e5ad40 50%, #00715d 100%)',
                  borderRadius: '15px',
                  flexShrink: 0
                }} />
                
                {/* Photo Container */}
                <div style={{ position: 'relative' }}>
                  {/* Fond gris clair */}
                  <div style={{
                    background: '#e8e8e8',
                    borderRadius: '25px',
                    padding: '20px 20px 60px 20px',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.15)'
                  }}>
                    <img 
                      src="/assets/images/resources/founder.jpg" 
                      alt="Rachel Kamana" 
                      style={{ 
                        width: '100%',
                        maxWidth: '380px',
                        height: 'auto',
                        aspectRatio: '1/1',
                        objectFit: 'cover',
                        borderRadius: '20px',
                        display: 'block'
                      }}
                    />
                    
                    {/* Nom en écriture manuscrite */}
                    <div style={{
                      position: 'absolute',
                      bottom: '10px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      textAlign: 'center'
                    }}>
                      <span style={{
                        fontFamily: "'Caveat', cursive",
                        fontSize: '2.5rem',
                        color: '#e5ad40',
                        fontWeight: 700,
                        textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                        letterSpacing: '2px'
                      }}>
                        Rachel Kamana
                      </span>
                    </div>
                  </div>
                  
                  {/* Décorations subtiles */}
                  <div style={{
                    position: 'absolute',
                    top: '-15px',
                    right: '-15px',
                    width: '60px',
                    height: '60px',
                    border: '3px solid #e5ad40',
                    borderRadius: '50%',
                    opacity: 0.3
                  }} />
                  <div style={{
                    position: 'absolute',
                    bottom: '50px',
                    left: '-25px',
                    width: '50px',
                    height: '50px',
                    background: '#00715d',
                    borderRadius: '10px',
                    opacity: 0.2,
                    transform: 'rotate(15deg)'
                  }} />
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <span style={{ 
                color: '#00715d', 
                fontSize: '1rem', 
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontWeight: 600,
                fontFamily: "'changa one', cursive"
              }}>Une Vision, Une Mission</span>
              <h3 style={{ 
                fontSize: '2.5rem', 
                color: '#333', 
                margin: '15px 0 25px',
                fontWeight: 700,
                lineHeight: 1.3,
                fontFamily: 'var(--oxpins-font-three)'
              }}>
                Rachel Kamana - Fondatrice de FORKA Foundation
              </h3>
              
              {/* Informations Personnelles */}
              <div style={{ marginBottom: '30px' }}>
                <h4 style={{ color: '#333', marginBottom: '15px', fontWeight: 600 }}>Informations Personnelles</h4>
                <ul style={{ color: '#666', lineHeight: 1.8, paddingLeft: '20px' }}>
                  <li><strong>Nom complet :</strong> Rachel Kamana</li>
                  <li><strong>Date et lieu de naissance :</strong> 21 mars, Goma</li>
                  <li><strong>Nationalité :</strong> Congolaise</li>
                  <li><strong>Situation familiale :</strong> Mariée et mère de 5 enfants</li>
                </ul>
              </div>

              {/* Parcours et Formation */}
              <div style={{ marginBottom: '30px' }}>
                <h4 style={{ color: '#333', marginBottom: '15px', fontWeight: 600 }}>Parcours et Formation</h4>
                <h5 style={{ color: '#555', marginBottom: '10px', fontWeight: 600 }}>Diplômes et formations académiques :</h5>
                <ul style={{ color: '#666', lineHeight: 1.8, paddingLeft: '20px' }}>
                  <li>Licence en droit public obtenue à l'Université de Lubumbashi</li>
                </ul>
                
                <h5 style={{ color: '#555', marginBottom: '10px', fontWeight: 600, marginTop: '20px' }}>Formations complémentaires :</h5>
                <ul style={{ color: '#666', lineHeight: 1.8, paddingLeft: '20px' }}>
                  <li>Coaching, entrepreneuriat et leadership à l'EMA</li>
                  <li>Formations avancées en gouvernance des ONG et leadership féminin au CCL et IPM</li>
                  <li>Formation en anglais à CALI</li>
                  <li>Ateliers spécialisés en gestion de projets, communication institutionnelle et diplomatie</li>
                </ul>
              </div>

              {/* Parcours Professionnel */}
              <div style={{ marginBottom: '30px' }}>
                <h4 style={{ color: '#333', marginBottom: '15px', fontWeight: 600 }}>Parcours Professionnel</h4>
                <ul style={{ color: '#666', lineHeight: 1.8, paddingLeft: '20px' }}>
                  <li><strong>Directrice Générale</strong> à KARKA Services</li>
                  <li><strong>Directrice Commerciale</strong> à SODI</li>
                  <li><strong>Fondatrice et Directrice</strong> de la FORKA Foundation, engagée dans l'éducation, l'autonomisation des jeunes et des femmes, l'action humanitaire et active dans l'agriculture, l'élevage</li>
                  <li><strong>Directrice Générale</strong> de BGC SARL, active dans la sous-traitance, construction et événementiel</li>
                  <li>Organisatrice de grands événements culturels et éducatifs, avec une expertise en communication diplomatique et partenariats internationaux</li>
                </ul>
              </div>

              {/* Engagement Humanitaire */}
              <div style={{ marginBottom: '30px' }}>
                <h4 style={{ color: '#333', marginBottom: '15px', fontWeight: 600 }}>Engagement Humanitaire</h4>
                <ul style={{ color: '#666', lineHeight: 1.8, paddingLeft: '20px' }}>
                  <li><strong>Nom de la fondation :</strong> FORKA Foundation</li>
                  <li><strong>Année de création :</strong> 2023</li>
                  <li><strong>Mission :</strong> Promouvoir l'éducation et l'autonomisation des jeunes et des femmes, défendre la dignité humaine et contribuer au développement social durable</li>
                  <li><strong>Programmes :</strong> Programmes éducatifs, formations en leadership, initiatives de soutien aux femmes et aux jeunes dans l'agriculture et l'élevage</li>
                  <li><strong>Zones d'intervention :</strong> République Démocratique du Congo, avec ouverture progressive vers des partenariats internationaux</li>
                </ul>
              </div>

              <div style={{ 
                background: '#fff', 
                padding: '30px', 
                borderRadius: '15px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                borderLeft: '5px solid #00715d',
                marginBottom: '30px'
              }}>
                <i className="fas fa-quote-left" style={{ color: '#00715d', fontSize: '1.5rem', marginBottom: '15px' }}></i>
                <p style={{ 
                  fontSize: '1.2rem', 
                  color: '#555', 
                  fontStyle: 'italic',
                  margin: 0,
                  lineHeight: 1.8,
                  fontFamily:"'ubuntu'"
                }}>
                  "Chaque petite action de gentillesse peut transformer une vie. Ensemble, nous pouvons 
                  construire un monde où personne n'est laissé pour compte."
                </p>
              </div>

              <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
                <div style={{ textAlign: 'center' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#00715d', display: 'block' }}>2023+</span>
                  <span style={{ color: '#666' }}>Année de création FORKA</span>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#00715d', display: 'block' }}>5</span>
                  <span style={{ color: '#666' }}>Enfants</span>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#00715d', display: 'block' }}>50+</span>
                  <span style={{ color: '#666' }}>Programmes éducatifs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Parcours */}
      <section style={{ padding: '100px 0', backgroundColor: '#fff', position: 'relative' }}>
        {/* Shape décoratif */}
        <div style={{
          position: 'absolute',
          bottom: '0',
          right: '0',
          opacity: 0.05
        }}>
          <img src="/assets/images/shapes/about-one-shape-1.png" alt="" style={{ width: '250px' }} />
        </div>

        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <span style={{ 
              color: '#00715d', 
              fontSize: '1rem', 
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>Son Parcours</span>
            <h3 style={{ 
              fontSize: '2.5rem', 
              color: '#333', 
              marginTop: '15px',
              fontWeight: 700,
              fontFamily: "'changa one', cursive"
            }}>Les Étapes Clés</h3>
          </div>

          <div className="row">
            <div className="col-lg-4" style={{ marginBottom: '30px' }}>
              <div style={{ 
                background: '#f8f9fa', 
                padding: '50px 30px', 
                borderRadius: '15px',
                textAlign: 'center',
                position: 'relative',
                height: '100%',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  background: '#00715d', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 25px',
                  color: '#fff',
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  boxShadow: '0 10px 20px rgba(229, 173, 64, 0.3)'
                }}>1</div>
                <h4 style={{ color: '#333', marginBottom: '15px', fontWeight: 600 }}>Formation Académique</h4>
                <p style={{ color: '#666', lineHeight: 1.7 }}>
                  Licence en droit public à l'Université de Lubumbashi, suivie de formations avancées en leadership et gouvernance.
                </p>
              </div>
            </div>
            <div className="col-lg-4" style={{ marginBottom: '30px' }}>
              <div style={{ 
                background: '#f8f9fa', 
                padding: '50px 30px', 
                borderRadius: '15px',
                textAlign: 'center',
                position: 'relative',
                height: '100%',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  background: '#00715d', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 25px',
                  color: '#fff',
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  boxShadow: '0 10px 20px rgba(229, 173, 64, 0.3)'
                }}>2</div>
                <h4 style={{ color: '#333', marginBottom: '15px', fontWeight: 600 }}>Création de FORKA</h4>
                <p style={{ color: '#666', lineHeight: 1.7 }}>
                  Fondation de la FORKA Foundation en 2023, marquant un tournant vers l'action humanitaire structurée.
                </p>
              </div>
            </div>
            <div className="col-lg-4" style={{ marginBottom: '30px' }}>
              <div style={{ 
                background: '#f8f9fa', 
                padding: '50px 30px', 
                borderRadius: '15px',
                textAlign: 'center',
                position: 'relative',
                height: '100%',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  background: '#00715d', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 25px',
                  color: '#fff',
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  boxShadow: '0 10px 20px rgba(229, 173, 64, 0.3)'
                }}>3</div>
                <h4 style={{ color: '#333', marginBottom: '15px', fontWeight: 600 }}>Impact National</h4>
                <p style={{ color: '#666', lineHeight: 1.7 }}>
                  Des milliers de vies transformées à travers nos programmes éducatifs et d'autonomisation en RDC.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section style={{ 
        padding: '80px 0', 
        background: 'linear-gradient(135deg, #055143ff 0%, #00715d 100%)',
        position: 'relative'
      }}>
        {/* Shape décoratif */}
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '50px',
          opacity: 0.1
        }}>
          <img src="/assets/images/shapes/about-one-shape-2.png" alt="" style={{ width: '150px' }} />
        </div>
        <div style={{
          position: 'absolute',
          bottom: '20px',
          right: '50px',
          opacity: 0.1
        }}>
          <img src="/assets/images/shapes/about-one-shape-1.png" alt="" style={{ width: '150px' }} />
        </div>

        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <h3 style={{ 
            fontSize: '2.5rem', 
            color: '#fff', 
            marginBottom: '20px',
            fontWeight: 700,
            fontFamily: "'Caveat', cursive"
          }}>Rejoignez Notre Mission</h3>
          <p style={{ 
            fontSize: '1.2rem', 
            color: 'rgba(255,255,255,0.9)', 
            maxWidth: '600px',
            margin: '0 auto 30px'
          }}>
            Ensemble, nous pouvons continuer à faire une différence dans la vie des familles 
            qui en ont le plus besoin.
          </p>
          <a href="/become-volunteer" style={{
            display: 'inline-block',
            padding: '15px 40px',
            background: '#fff',
            color: '#00715d',
            textDecoration: 'none',
            borderRadius: '50px',
            fontWeight: 600,
            fontSize: '1.1rem',
            transition: 'all 0.3s ease',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
          }}>Devenir Bénévole</a>
        </div>
      </section>
    </>
  );
};

export default Founder;
