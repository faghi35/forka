import { useState, useEffect, useCallback } from 'react';

const slides = [
  {
    id: 1,
    image: '/assets/images/backgrounds/slide1.png',
    subtitle: 'Welcome to',
    title: 'Touch of Love Outreach, \nAberdeen',
    buttonText: 'Discover more',
    buttonLink: '/our-purpose'
  },
  {
    id: 2,
    image: '/assets/images/backgrounds/slide2.png',
    subtitle: '',
    title: '',
    buttonText: 'Read More',
    buttonLink: '/award-6'
  },
  {
    id: 3,
    image: '/assets/images/backgrounds/slide3.png',
    subtitle: '',
    title: '',
    buttonText: 'Read More',
    buttonLink: '/award-6'
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating]);

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="main-slider-three clearfix">
      <div className="swiper-container thm-swiper__slider">
        <div className="swiper-wrapper">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`swiper-slide ${index === currentSlide ? 'active' : ''}`}
              style={{
                opacity: index === currentSlide ? 1 : 0,
                position: index === currentSlide ? 'relative' : 'absolute',
                transition: 'opacity 0.6s ease-in-out'
              }}
            >
              <div
                className="image-layer-three"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
              <div className="main-slider-three-color"></div>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                zIndex: 10,
                padding: '0 20px',
                width: '100%'
              }}>
                <h3 style={{
                  color: '#fff',
                  fontSize: '3.2rem',
                  fontWeight: 600,
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                  margin: 0,
                  fontFamily: "'Changa One', cursive"
                }}>
                  Ensemble, construisons un avenir meilleur
                </h3>
                <p style={{
                  color: '#fff',
                  fontSize: '1.2rem',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                  margin: '15px 0 0 0',
                  fontFamily: "'Ubuntu', sans-serif"
                }}>
                  Rejoignez-nous dans notre mission d'aide et de soutien
                </p>
                <a href="/contact" style={{
                  display: 'inline-block',
                  marginTop: '25px',
                  padding: '12px 30px',
                  backgroundColor: '#e5ad40',
                  color: '#fff',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '1rem',
                  fontWeight: 500,
                  transition: 'all 0.3s ease'
                }}>
                  En savoir plus
                </a>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className={`main-slider-three__content ${index === currentSlide ? 'animated' : ''}`}>
                      {slide.subtitle && (
                        <p className="main-slider-three__sub-title">{slide.subtitle}</p>
                      )}
                      {slide.title && (
                        <h2 className="main-slider-three__title">
                          {slide.title.split('\n').map((line, i) => (
                            <span key={i}>
                              {line}
                              {i < slide.title.split('\n').length - 1 && <br />}
                            </span>
                          ))}
                        </h2>
                      )}
                      {slide.buttonText && (
                        <div className="main-slider-three__btn-box">
                          <a href={slide.buttonLink} className="thm-btn main-slider-three__btn">
                            {slide.buttonText}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination bullets */}
        <div className="swiper-pagination" id="main-slider-pagination">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`swiper-pagination-bullet ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;