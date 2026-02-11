import { useState, useEffect } from 'react';

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const galleryItems = [
    {
      id: 1,
      category: 'education',
      title: "Distribution de fournitures scolaires",
      image: "/assets/images/gallery/gallery-1-1.png",
      description: "Distribution de kits scolaires aux enfants démunis",
      size: 'large'
    },
    {
      id: 2,
      category: 'events',
      title: "Cérémonie de remise de prix",
      image: "/assets/images/gallery/gallery-1-2.png",
      description: "Célébration des meilleurs élèves méritants",
      size: 'small'
    },
    {
      id: 3,
      category: 'community',
      title: "Aide aux familles vulnérables",
      image: "/assets/images/gallery/gallery-1-3.png",
      description: "Soutien aux familles en situation difficile",
      size: 'small'
    },
    {
      id: 4,
      category: 'education',
      title: "Atelier de formation",
      image: "/assets/images/gallery/gallery-1-4.png",
      description: "Formation professionnelle pour les jeunes",
      size: 'small'
    },
    {
      id: 5,
      category: 'events',
      title: "Journée de l'enfant",
      image: "/assets/images/gallery/gallery-1-5.png",
      description: "Célébration de la journée internationale de l'enfant",
      size: 'large'
    },
    {
      id: 6,
      category: 'community',
      title: "Distribution alimentaire",
      image: "/assets/images/gallery/gallery-1-1.png",
      description: "Distribution de denrées alimentaires aux familles",
      size: 'small'
    },
    {
      id: 7,
      category: 'education',
      title: "Construction d'écoles",
      image: "/assets/images/gallery/gallery-1-2.png",
      description: "Projet de construction d'infrastructures scolaires",
      size: 'small'
    },
    {
      id: 8,
      category: 'events',
      title: "Conférence de presse",
      image: "/assets/images/gallery/gallery-1-3.png",
      description: "Présentation des activités de la fondation",
      size: 'small'
    },
    {
      id: 9,
      category: 'community',
      title: "Soutien aux mères",
      image: "/assets/images/gallery/gallery-1-4.png",
      description: "Accompagnement des mères célibataires",
      size: 'large'
    },
    {
      id: 10,
      category: 'education',
      title: "Bourses d'études",
      image: "/assets/images/gallery/gallery-1-5.png",
      description: "Remise de bourses aux étudiants méritants",
      size: 'small'
    },
    {
      id: 11,
      category: 'events',
      title: "Gala de charité",
      image: "/assets/images/gallery/gallery-1-1.png",
      description: "Soirée de collecte de fonds pour les projets",
      size: 'small'
    },
    {
      id: 12,
      category: 'community',
      title: "Formation agricole",
      image: "/assets/images/gallery/gallery-1-2.png",
      description: "Initiation aux techniques agricoles modernes",
      size: 'small'
    }
  ];

  const filters = [
    { id: 'all', label: 'Tous', icon: 'fa-th' },
    { id: 'education', label: 'Éducation', icon: 'fa-graduation-cap' },
    { id: 'community', label: 'Communauté', icon: 'fa-hands-helping' },
    { id: 'events', label: 'Événements', icon: 'fa-calendar-star' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timer);
  }, [activeFilter]);

  const openLightbox = (item) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      {/* Page Header Amélioré */}
      <section style={{ 
        padding: '150px 0 100px', 
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #1a1a2e 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated Shapes */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          opacity: 0.15,
          animation: 'float 6s ease-in-out infinite'
        }}>
          <img src="/assets/images/shapes/about-one-shape-1.png" alt="" style={{ width: '250px' }} />
        </div>
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          opacity: 0.1,
          animation: 'float 8s ease-in-out infinite reverse'
        }}>
          <img src="/assets/images/shapes/about-one-shape-2.png" alt="" style={{ width: '180px' }} />
        </div>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(229,173,64,0.1) 0%, transparent 70%)',
          borderRadius: '50%'
        }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="text-center">
            <span style={{ 
              color: '#00715d', 
              fontSize: '1rem', 
              textTransform: 'uppercase',
              letterSpacing: '4px',
              display: 'block',
              marginBottom: '20px',
              fontWeight: 600
            }}>Découvrez Nos Moments</span>
            <h2 style={{ 
              fontSize: '4rem', 
              color: '#fff', 
              marginBottom: '25px',
              fontWeight: 700,
              fontFamily: "'Caveat', cursive",
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}>Galerie Photos</h2>
            <div style={{
              width: '100px',
              height: '4px',
              background: 'linear-gradient(90deg, transparent, #00715d, transparent)',
              margin: '0 auto 30px'
            }}></div>
            <p style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: '1.2rem',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.8
            }}>
              Des moments capturés qui témoignent de notre engagement envers la communauté
            </p>
          </div>
        </div>
      </section>

      {/* Section Filtres Améliorée */}
      <section style={{ 
        padding: '50px 0', 
        backgroundColor: '#fff',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        position: 'relative',
        zIndex: 10
      }}>
        <div className="container">
          <div className="text-center">
            <div style={{ 
              display: 'inline-flex', 
              gap: '20px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              padding: '10px',
              background: '#f8f9fa',
              borderRadius: '60px'
            }}>
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  style={{
                    padding: '15px 35px',
                    background: activeFilter === filter.id 
                      ? 'linear-gradient(135deg, #033c32 0%, #00715d 100%)' 
                      : 'transparent',
                    color: activeFilter === filter.id ? '#fff' : '#666',
                    border: 'none',
                    borderRadius: '50px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    textTransform: 'uppercase',
                    fontSize: '0.9rem',
                    letterSpacing: '1px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    boxShadow: activeFilter === filter.id 
                      ? '0 10px 30px rgba(229, 173, 64, 0.4)' 
                      : 'none',
                    transform: activeFilter === filter.id ? 'translateY(-2px)' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (activeFilter !== filter.id) {
                      e.target.style.background = '#00715d';
                      e.target.style.color = '#fff';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeFilter !== filter.id) {
                      e.target.style.background = 'transparent';
                      e.target.style.color = '#666';
                    }
                  }}
                >
                  <i className={`fas ${filter.icon}`}></i>
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Galerie Masonry Améliorée */}
      <section style={{ 
        padding: '80px 0 100px', 
        backgroundColor: '#f8f9fa',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          height: '200px',
          background: 'linear-gradient(to bottom, #fff, transparent)'
        }} />
        
        {/* Decorative Elements */}
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '0',
          opacity: 0.03
        }}>
          <img src="/assets/images/shapes/about-one-shape-3.png" alt="" style={{ width: '400px' }} />
        </div>
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '0',
          opacity: 0.03
        }}>
          <img src="/assets/images/shapes/about-one-shape-4.png" alt="" style={{ width: '300px' }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '30px',
            opacity: isAnimating ? 0 : 1,
            transform: isAnimating ? 'translateY(20px)' : 'translateY(0)',
            transition: 'all 0.5s ease'
          }}>
            {filteredItems.map((item, index) => (
              <div 
                key={item.id} 
                className={item.size === 'large' ? 'col-span-2' : ''}
                style={{
                  gridColumn: item.size === 'large' ? 'span 2' : 'span 1',
                  animation: `fadeInUp 0.6s ease ${index * 0.1}s both`
                }}
              >
                <div 
                  onClick={() => openLightbox(item)}
                  style={{ 
                    position: 'relative',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
                    height: item.size === 'large' ? '450px' : '350px',
                    cursor: 'pointer',
                    transform: 'translateY(0)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.15)';
                    const overlay = e.currentTarget.querySelector('.gallery-overlay');
                    if (overlay) overlay.style.opacity = '1';
                    const img = e.currentTarget.querySelector('img');
                    if (img) img.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.1)';
                    const overlay = e.currentTarget.querySelector('.gallery-overlay');
                    if (overlay) overlay.style.opacity = '0';
                    const img = e.currentTarget.querySelector('img');
                    if (img) img.style.transform = 'scale(1)';
                  }}
                >
                  <img 
                    src={item.image} 
                    alt={item.title}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  />
                  
                  {/* Overlay */}
                  <div 
                    className="gallery-overlay"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      right: '0',
                      bottom: '0',
                      background: 'linear-gradient(to top, rgba(26,26,46,0.95) 0%, rgba(26,26,46,0.6) 50%, transparent 100%)',
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      padding: '30px'
                    }}
                  >
                    <span style={{
                      background: '#00715d',
                      color: '#fff',
                      padding: '6px 16px',
                      borderRadius: '20px',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginBottom: '15px',
                      width: 'fit-content'
                    }}>
                      {filters.find(f => f.id === item.category)?.label}
                    </span>
                    <h4 style={{ 
                      color: '#fff', 
                      marginBottom: '10px',
                      fontSize: item.size === 'large' ? '1.5rem' : '1.3rem',
                      fontWeight: 700
                    }}>
                      {item.title}
                    </h4>
                    <p style={{ 
                      color: 'rgba(255,255,255,0.8)', 
                      margin: 0, 
                      fontSize: '0.95rem',
                      lineHeight: 1.6
                    }}>
                      {item.description}
                    </p>
                    
                    {/* View Icon */}
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '70px',
                      height: '70px',
                      background: '#00715d',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 10px 30px rgba(229,173,64,0.5)'
                    }}>
                      <i className="fas fa-expand" style={{ color: '#fff', fontSize: '1.5rem' }}></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Message si aucun résultat */}
          {filteredItems.length === 0 && (
            <div className="text-center" style={{ padding: '80px 20px' }}>
              <div style={{
                width: '120px',
                height: '120px',
                background: '#f0f0f0',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 30px'
              }}>
                <i className="fas fa-images" style={{ fontSize: '3rem', color: '#ccc' }}></i>
              </div>
              <h4 style={{ color: '#666', marginBottom: '10px' }}>Aucune photo dans cette catégorie</h4>
              <p style={{ color: '#999' }}>Essayez une autre catégorie de filtres</p>
            </div>
          )}
        </div>
      </section>

      {/* Section Statistiques Améliorée */}
      <section style={{ padding: '100px 0', backgroundColor: '#fff' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <span style={{ 
              color: '#00715d', 
              fontSize: '1rem', 
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>En Chiffres</span>
            <h3 style={{ 
              fontSize: '2.5rem', 
              color: '#333', 
              marginTop: '15px',
              fontWeight: 700,
              fontFamily: "'Caveat', cursive"
            }}>Notre Impact en Images</h3>
          </div>

          <div className="row">
            {[
              { icon: 'fa-camera', number: '500+', label: 'Photos', color: '#00715d' },
              { icon: 'fa-users', number: '10k+', label: 'Personnes aidées', color: '#00715d' },
              { icon: 'fa-heart', number: '50+', label: 'Projets réalisés', color: '#00715d' },
              { icon: 'fa-hand-holding-heart', number: '100+', label: 'Bénévoles actifs', color: '#00715d' }
            ].map((stat, index) => (
              <div key={index} className="col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
                <div style={{
                  background: 'linear-gradient(135deg, #f8f9fa 0%, #fff 100%)',
                  padding: '50px 30px',
                  borderRadius: '20px',
                  textAlign: 'center',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                  transition: 'all 0.4s ease',
                  border: '1px solid rgba(229,173,64,0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.08)';
                }}
                >
                  <div style={{
                    width: '90px',
                    height: '90px',
                    background: `linear-gradient(135deg, ${stat.color}20 0%, ${stat.color}40 100%)`,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 25px',
                    color: stat.color,
                    fontSize: '2.2rem',
                    border: `3px solid ${stat.color}`
                  }}>
                    <i className={`fas ${stat.icon}`}></i>
                  </div>
                  <h3 style={{ 
                    color: '#333', 
                    fontSize: '3rem', 
                    fontWeight: 'bold', 
                    marginBottom: '10px',
                    background: 'linear-gradient(135deg, #333 0%, #00715d 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>{stat.number}</h3>
                  <p style={{ color: '#666', margin: 0, fontSize: '1.1rem' }}>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Lightbox */}
      {selectedImage && (
        <div 
          onClick={closeLightbox}
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'rgba(0,0,0,0.95)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
            animation: 'fadeIn 0.3s ease'
          }}
        >
          <button 
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '30px',
              right: '30px',
              width: '50px',
              height: '50px',
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              borderRadius: '50%',
              color: '#fff',
              fontSize: '1.5rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#00715d';
              e.target.style.transform = 'rotate(90deg)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.1)';
              e.target.style.transform = 'rotate(0deg)';
            }}
          >
            <i className="fas fa-times"></i>
          </button>
          
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '1200px',
              maxHeight: '90vh',
              position: 'relative',
              animation: 'scaleIn 0.4s ease'
            }}
          >
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title}
              style={{
                maxWidth: '100%',
                maxHeight: '80vh',
                borderRadius: '15px',
                boxShadow: '0 25px 80px rgba(0,0,0,0.5)'
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: '-80px',
              left: '0',
              right: '0',
              textAlign: 'center'
            }}>
              <span style={{
                background: '#00715d',
                color: '#fff',
                padding: '8px 20px',
                borderRadius: '25px',
                fontSize: '0.85rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                marginBottom: '15px',
                display: 'inline-block'
              }}>
                {filters.find(f => f.id === selectedImage.category)?.label}
              </span>
              <h3 style={{ 
                color: '#fff', 
                fontSize: '1.8rem',
                marginBottom: '10px'
              }}>
                {selectedImage.title}
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', margin: 0 }}>
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Styles pour les animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
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

export default GalleryPage;
