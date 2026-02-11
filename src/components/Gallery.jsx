import { useState } from 'react';

const galleryImages = [
  { id: 1, src: '/assets/images/gallery/gallery-1-1.png', alt: 'Gallery Image 1' },
  { id: 2, src: '/assets/images/gallery/gallery-1-2.png', alt: 'Gallery Image 2' },
  { id: 3, src: '/assets/images/gallery/gallery-1-3.png', alt: 'Gallery Image 3' },
  { id: 4, src: '/assets/images/gallery/gallery-1-4.png', alt: 'Gallery Image 4' },
  { id: 5, src: '/assets/images/gallery/gallery-1-5.png', alt: 'Gallery Image 5' }
];

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openLightbox = (image) => {
    setCurrentImage(image);
    setLightboxOpen(true);
    document.body.style.overflow = 'auto';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section className="gallery-one">
        <div className="gallery-one__top">
          <h3 className="gallery-one__top-title">Our photo gallery</h3>
        </div>
        <div className="gallery-one__bottom">
          <div className="gallery-one__container">
            <ul className="list-unstyled gallery-one__list">
              {galleryImages.map((image, index) => (
              <li
                key={image.id}
                className="gallery-one__single"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                  <div className="gallery-one__img">
                    <img src={image.src} alt={image.alt} />
                    <button
                      className="img-popup"
                      onClick={() => openLightbox(image)}
                      aria-label={`View ${image.alt}`}
                    ></button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && currentImage && (
        <div className="gallery-lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close lightbox">
            <i className="fa fa-times"></i>
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={currentImage.src} alt={currentImage.alt} />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;