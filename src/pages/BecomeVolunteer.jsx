const BecomeVolunteerPage = () => {
  return (
    <>
      {/* Page Header avec background image */}
      <section style={{ 
        padding: '150px 0 100px', 
        background: 'linear-gradient(rgba(26, 26, 46, 0.85), rgba(22, 33, 62, 0.85)), url(/assets/images/backgrounds/become-volunteer-one-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
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
          <img src="/assets/images/shapes/become-volunteer-shape-1.png" alt="" style={{ width: '200px' }} />
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
              marginBottom: '15px'
            }}>Rejoignez Notre Équipe</span>
            <h2 style={{ 
              fontSize: '3.5rem', 
              color: '#fff', 
              marginBottom: '20px',
              fontWeight: 700,
              fontFamily: "'Caveat', cursive"
            }}>Devenir Bénévole</h2>
            <div style={{
              width: '80px',
              height: '4px',
              background: '#e5ad40',
              margin: '0 auto 25px'
            }}></div>
            <p style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: '1.2rem',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Rejoignez notre équipe de bénévoles passionnés et contribuez activement à faire 
              une différence dans la vie des familles de notre communauté.
            </p>
          </div>
        </div>
      </section>

      {/* Section Pourquoi Devenir Bénévole */}
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
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <span style={{ 
              color: '#e5ad40', 
              fontSize: '1rem', 
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>Pourquoi Nous Rejoindre</span>
            <h3 style={{ 
              fontSize: '2.5rem', 
              color: '#333', 
              marginTop: '15px',
              fontWeight: 700,
              fontFamily: "'Caveat', cursive"
            }}>Domaines d'Intervention</h3>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
              <div style={{ 
                background: '#fff', 
                padding: '40px 30px', 
                borderRadius: '15px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                height: '100%',
                transition: 'all 0.3s ease',
                border: '1px solid transparent'
              }}>
                <div style={{ 
                  width: '90px', 
                  height: '90px', 
                  background: 'linear-gradient(135deg, #e5ad40 0%, #d4952f 100%)', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 25px',
                  color: '#fff',
                  fontSize: '2.5rem',
                  boxShadow: '0 10px 20px rgba(229, 173, 64, 0.3)'
                }}>
                  <i className="fas fa-hand-holding-heart"></i>
                </div>
                <h5 style={{ color: '#333', marginBottom: '15px', fontWeight: 600 }}>Aide Alimentaire</h5>
                <p style={{ color: '#666', lineHeight: 1.7, margin: 0 }}>
                  Distribution de repas et de denrées alimentaires aux familles dans le besoin
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
              <div style={{ 
                background: '#fff', 
                padding: '40px 30px', 
                borderRadius: '15px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                height: '100%',
                transition: 'all 0.3s ease',
                border: '1px solid transparent'
              }}>
                <div style={{ 
                  width: '90px', 
                  height: '90px', 
                  background: 'linear-gradient(135deg, #e5ad40 0%, #d4952f 100%)', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 25px',
                  color: '#fff',
                  fontSize: '2.5rem',
                  boxShadow: '0 10px 20px rgba(229, 173, 64, 0.3)'
                }}>
                  <i className="fas fa-book-reader"></i>
                </div>
                <h5 style={{ color: '#333', marginBottom: '15px', fontWeight: 600 }}>Soutien Scolaire</h5>
                <p style={{ color: '#666', lineHeight: 1.7, margin: 0 }}>
                  Tutorat et accompagnement éducatif pour les jeunes de la communauté
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
              <div style={{ 
                background: '#fff', 
                padding: '40px 30px', 
                borderRadius: '15px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                height: '100%',
                transition: 'all 0.3s ease',
                border: '1px solid transparent'
              }}>
                <div style={{ 
                  width: '90px', 
                  height: '90px', 
                  background: 'linear-gradient(135deg, #e5ad40 0%, #d4952f 100%)', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 25px',
                  color: '#fff',
                  fontSize: '2.5rem',
                  boxShadow: '0 10px 20px rgba(229, 173, 64, 0.3)'
                }}>
                  <i className="fas fa-users"></i>
                </div>
                <h5 style={{ color: '#333', marginBottom: '15px', fontWeight: 600 }}>Accompagnement Familial</h5>
                <p style={{ color: '#666', lineHeight: 1.7, margin: 0 }}>
                  Soutien psychologique et pratique aux familles vulnérables
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
              <div style={{ 
                background: '#fff', 
                padding: '40px 30px', 
                borderRadius: '15px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                height: '100%',
                transition: 'all 0.3s ease',
                border: '1px solid transparent'
              }}>
                <div style={{ 
                  width: '90px', 
                  height: '90px', 
                  background: 'linear-gradient(135deg, #e5ad40 0%, #d4952f 100%)', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 25px',
                  color: '#fff',
                  fontSize: '2.5rem',
                  boxShadow: '0 10px 20px rgba(229, 173, 64, 0.3)'
                }}>
                  <i className="fas fa-bullhorn"></i>
                </div>
                <h5 style={{ color: '#333', marginBottom: '15px', fontWeight: 600 }}>Communication</h5>
                <p style={{ color: '#666', lineHeight: 1.7, margin: 0 }}>
                  Médias sociaux, sensibilisation et organisation d'événements
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Bénéfices */}
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
          <div className="row align-items-center">
            <div className="col-lg-6" style={{ marginBottom: '40px' }}>
              <div style={{ position: 'relative' }}>
                <img 
                  src="/assets/images/resources/fk-1.jpg" 
                  alt="Bénévoles" 
                  style={{ 
                    width: '100%', 
                    borderRadius: '15px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
                  }}
                />
                {/* Shape décoratif */}
                <div style={{
                  position: 'absolute',
                  bottom: '-20px',
                  right: '-20px',
                  zIndex: -1
                }}>
                  <img src="/assets/images/shapes/about-one-shape-4.png" alt="" style={{ width: '120px' }} />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <span style={{ 
                color: '#e5ad40', 
                fontSize: '1rem', 
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontWeight: 600
              }}>Avantages</span>
              <h3 style={{ 
                fontSize: '2.5rem', 
                color: '#333', 
                margin: '15px 0 25px',
                fontWeight: 700,
                lineHeight: 1.3,
                fontFamily: "'Caveat', cursive"
              }}>
                Pourquoi Devenir Bénévole ?
              </h3>
              
              <div style={{ marginBottom: '20px' }}>
                {[
                  { icon: 'fa-heart', title: 'Faites la différence', desc: 'Contribuez directement à améliorer la vie des familles' },
                  { icon: 'fa-users', title: 'Rencontrez des gens inspirants', desc: 'Faites partie d\'une communauté solidaire et bienveillante' },
                  { icon: 'fa-star', title: 'Développez vos compétences', desc: 'Acquérez de l\'expérience et enrichissez votre CV' },
                  { icon: 'fa-smile', title: 'Satisfaction personnelle', desc: 'Ressentez la joie de donner et d\'aider les autres' }
                ].map((item, index) => (
                  <div key={index} style={{ 
                    display: 'flex', 
                    gap: '20px', 
                    marginBottom: '25px',
                    alignItems: 'flex-start'
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      background: '#e5ad40',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontSize: '1.5rem',
                      flexShrink: 0
                    }}>
                      <i className={`fas ${item.icon}`}></i>
                    </div>
                    <div>
                      <h5 style={{ color: '#333', marginBottom: '8px', fontWeight: 600 }}>{item.title}</h5>
                      <p style={{ color: '#666', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Formulaire */}
      <section style={{ 
        padding: '100px 0', 
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
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

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div style={{ 
                background: '#fff', 
                padding: '60px', 
                borderRadius: '20px', 
                boxShadow: '0 30px 60px rgba(0,0,0,0.2)',
                position: 'relative'
              }}>
                {/* Shape décoratif */}
                <div style={{
                  position: 'absolute',
                  top: '-30px',
                  right: '-30px',
                  zIndex: -1
                }}>
                  <img src="/assets/images/shapes/about-one-shape-4.png" alt="" style={{ width: '100px' }} />
                </div>

                <h3 style={{ 
                  textAlign: 'center', 
                  marginBottom: '10px', 
                  color: '#333',
                  fontSize: '2.2rem',
                  fontWeight: 700,
                  fontFamily: "'Caveat', cursive"
                }}>Formulaire d'Inscription</h3>
                <p style={{ 
                  textAlign: 'center', 
                  color: '#666', 
                  marginBottom: '40px'
                }}>
                  Rejoignez notre équipe de bénévoles dès aujourd'hui
                </p>

                <form>
                  <div className="row">
                    <div className="col-md-6" style={{ marginBottom: '25px' }}>
                      <label style={{ 
                        display: 'block', 
                        marginBottom: '8px', 
                        color: '#333', 
                        fontWeight: 500 
                      }}>
                        Prénom *
                      </label>
                      <input 
                        type="text" 
                        placeholder="Votre prénom"
                        style={{
                          width: '100%',
                          padding: '15px 20px',
                          border: '2px solid #eee',
                          borderRadius: '10px',
                          fontSize: '1rem',
                          transition: 'all 0.3s ease'
                        }}
                      />
                    </div>
                    <div className="col-md-6" style={{ marginBottom: '25px' }}>
                      <label style={{ 
                        display: 'block', 
                        marginBottom: '8px', 
                        color: '#333', 
                        fontWeight: 500 
                      }}>
                        Nom *
                      </label>
                      <input 
                        type="text" 
                        placeholder="Votre nom"
                        style={{
                          width: '100%',
                          padding: '15px 20px',
                          border: '2px solid #eee',
                          borderRadius: '10px',
                          fontSize: '1rem',
                          transition: 'all 0.3s ease'
                        }}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6" style={{ marginBottom: '25px' }}>
                      <label style={{ 
                        display: 'block', 
                        marginBottom: '8px', 
                        color: '#333', 
                        fontWeight: 500 
                      }}>
                        Email *
                      </label>
                      <input 
                        type="email" 
                        placeholder="Votre email"
                        style={{
                          width: '100%',
                          padding: '15px 20px',
                          border: '2px solid #eee',
                          borderRadius: '10px',
                          fontSize: '1rem',
                          transition: 'all 0.3s ease'
                        }}
                      />
                    </div>
                    <div className="col-md-6" style={{ marginBottom: '25px' }}>
                      <label style={{ 
                        display: 'block', 
                        marginBottom: '8px', 
                        color: '#333', 
                        fontWeight: 500 
                      }}>
                        Téléphone *
                      </label>
                      <input 
                        type="tel" 
                        placeholder="Votre téléphone"
                        style={{
                          width: '100%',
                          padding: '15px 20px',
                          border: '2px solid #eee',
                          borderRadius: '10px',
                          fontSize: '1rem',
                          transition: 'all 0.3s ease'
                        }}
                      />
                    </div>
                  </div>
                  <div style={{ marginBottom: '25px' }}>
                    <label style={{ 
                      display: 'block', 
                      marginBottom: '8px', 
                      color: '#333', 
                      fontWeight: 500 
                    }}>
                      Domaine d'intérêt *
                    </label>
                    <select style={{
                      width: '100%',
                      padding: '15px 20px',
                      border: '2px solid #eee',
                      borderRadius: '10px',
                      fontSize: '1rem',
                      background: '#fff',
                      color: '#666'
                    }}>
                      <option value="">Sélectionnez votre domaine d'intérêt</option>
                      <option value="food">Aide Alimentaire</option>
                      <option value="education">Soutien Scolaire</option>
                      <option value="family">Accompagnement Familial</option>
                      <option value="communication">Communication</option>
                      <option value="events">Événements</option>
                    </select>
                  </div>
                  <div style={{ marginBottom: '30px' }}>
                    <label style={{ 
                      display: 'block', 
                      marginBottom: '8px', 
                      color: '#333', 
                      fontWeight: 500 
                    }}>
                      Votre Message
                    </label>
                    <textarea 
                      placeholder="Parlez-nous de vous et de votre motivation..."
                      rows="4"
                      style={{
                        width: '100%',
                        padding: '15px 20px',
                        border: '2px solid #eee',
                        borderRadius: '10px',
                        fontSize: '1rem',
                        resize: 'vertical',
                        transition: 'all 0.3s ease'
                      }}
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button 
                      type="submit"
                      style={{
                        padding: '18px 60px',
                        background: 'linear-gradient(135deg, #e5ad40 0%, #d4952f 100%)',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '50px',
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 10px 30px rgba(229, 173, 64, 0.3)'
                      }}
                    >
                      Devenir Bénévole
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section style={{ padding: '100px 0', backgroundColor: '#f8f9fa', position: 'relative' }}>
        {/* Shape décoratif */}
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '50px',
          opacity: 0.05
        }}>
          <img src="/assets/images/shapes/testimonial-two-shape-1.png" alt="" style={{ width: '150px' }} />
        </div>

        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <span style={{ 
              color: '#e5ad40', 
              fontSize: '1rem', 
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>Témoignages</span>
            <h3 style={{ 
              fontSize: '2.5rem', 
              color: '#333', 
              marginTop: '15px',
              fontWeight: 700,
              fontFamily: "'Caveat', cursive"
            }}>Ce Que Disent Nos Bénévoles</h3>
          </div>

          <div className="row">
            <div className="col-lg-4" style={{ marginBottom: '30px' }}>
              <div style={{ 
                background: '#fff', 
                padding: '40px 30px', 
                borderRadius: '15px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                height: '100%'
              }}>
                <div style={{ display: 'flex', gap: '5px', marginBottom: '20px' }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <i key={star} className="fas fa-star" style={{ color: '#e5ad40' }}></i>
                  ))}
                </div>
                <p style={{ color: '#666', lineHeight: 1.8, marginBottom: '25px', fontStyle: 'italic' }}>
                  "Devenir bénévole chez Touch of Love a changé ma vie. La satisfaction de voir les sourires 
                  des familles que nous aidons est inestimable."
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: '#e5ad40',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '1.5rem',
                    fontWeight: 'bold'
                  }}>M</div>
                  <div>
                    <h6 style={{ margin: 0, color: '#333', fontWeight: 600 }}>Marie K.</h6>
                    <span style={{ color: '#999', fontSize: '0.9rem' }}>Bénévole depuis 2 ans</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4" style={{ marginBottom: '30px' }}>
              <div style={{ 
                background: '#fff', 
                padding: '40px 30px', 
                borderRadius: '15px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                height: '100%'
              }}>
                <div style={{ display: 'flex', gap: '5px', marginBottom: '20px' }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <i key={star} className="fas fa-star" style={{ color: '#e5ad40' }}></i>
                  ))}
                </div>
                <p style={{ color: '#666', lineHeight: 1.8, marginBottom: '25px', fontStyle: 'italic' }}>
                  "Une expérience enrichissante qui m'a permis de développer de nouvelles compétences 
                  tout en aidant ma communauté. Je recommande vivement !"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: '#e5ad40',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '1.5rem',
                    fontWeight: 'bold'
                  }}>J</div>
                  <div>
                    <h6 style={{ margin: 0, color: '#333', fontWeight: 600 }}>Jean P.</h6>
                    <span style={{ color: '#999', fontSize: '0.9rem' }}>Bénévole depuis 1 an</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4" style={{ marginBottom: '30px' }}>
              <div style={{ 
                background: '#fff', 
                padding: '40px 30px', 
                borderRadius: '15px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                height: '100%'
              }}>
                <div style={{ display: 'flex', gap: '5px', marginBottom: '20px' }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <i key={star} className="fas fa-star" style={{ color: '#e5ad40' }}></i>
                  ))}
                </div>
                <p style={{ color: '#666', lineHeight: 1.8, marginBottom: '25px', fontStyle: 'italic' }}>
                  "L'équipe est formidable et l'impact de nos actions est concret. C'est une aventure 
                  humaine extraordinaire que je vis chaque jour."
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: '#e5ad40',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '1.5rem',
                    fontWeight: 'bold'
                  }}>S</div>
                  <div>
                    <h6 style={{ margin: 0, color: '#333', fontWeight: 600 }}>Sophie M.</h6>
                    <span style={{ color: '#999', fontSize: '0.9rem' }}>Bénévole depuis 3 ans</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BecomeVolunteerPage;
