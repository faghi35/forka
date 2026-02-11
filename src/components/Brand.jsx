import { useState, useEffect, useRef } from 'react';

const brands = [
  { id: 1, image: '/assets/images/brand/1.png', alt: 'Brand 1' },
  { id: 2, image: '/assets/images/brand/2.png', alt: 'Brand 2' },
  { id: 3, image: '/assets/images/brand/3.png', alt: 'Brand 3' },
  { id: 4, image: '/assets/images/brand/4.png', alt: 'Brand 4' },
  { id: 5, image: '/assets/images/brand/5.png', alt: 'Brand 5' },
  { id: 6, image: '/assets/images/brand/6.png', alt: 'Brand 6' },
  { id: 7, image: '/assets/images/brand/7.png', alt: 'Brand 7' }
];

const Brand = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(5);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) {
        setItemsPerView(2);
      } else if (window.innerWidth < 768) {
        setItemsPerView(3);
      } else if (window.innerWidth < 992) {
        setItemsPerView(4);
      } else {
        setItemsPerView(5);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (brands.length - itemsPerView + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [itemsPerView]);

  return (
    <section className="brand-one">
      <div className="container">
        <div className="brand-slider-container" ref={containerRef}>
          <div
            className="brand-slider-wrapper"
            style={{
              display: 'flex',
              transition: 'transform 0.5s ease-in-out',
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
            }}
          >
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="brand-slide"
                style={{
                  flex: `0 0 ${100 / itemsPerView}%`,
                  padding: '0 15px'
                }}
              >
                <img src={brand.image} alt={brand.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;