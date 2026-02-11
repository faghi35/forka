/**
 * FORKA - Fondation Rachel Kamana
 * Main JavaScript File
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // PRELOADER
    // ==========================================
    const preloader = document.getElementById('preloader');
    
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 1500);
    
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 2000);
    
    // ==========================================
    // HEADER SCROLL EFFECT
    // ==========================================
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // ==========================================
    // MOBILE NAVIGATION
    // ==========================================
    const mobileMenuToggler = document.getElementById('mobileMenuToggler');
    const mobileNav = document.getElementById('mobileNav');
    const mobileNavClose = document.getElementById('mobileNavClose');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-list a');
    
    function openMobileNav() {
        mobileNav.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeMobileNav() {
        mobileNav.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    mobileMenuToggler.addEventListener('click', openMobileNav);
    mobileNavClose.addEventListener('click', closeMobileNav);
    mobileNavOverlay.addEventListener('click', closeMobileNav);
    
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', closeMobileNav);
    });
    
    // ==========================================
    // HERO SLIDER
    // ==========================================
    const heroSlides = document.querySelectorAll('.hero-slide');
    const heroDots = document.querySelectorAll('.hero-slider-dots .dot');
    const prevArrow = document.querySelector('.hero-slider-arrows .prev');
    const nextArrow = document.querySelector('.hero-slider-arrows .next');
    let currentSlide = 0;
    let slideInterval;
    
    function showSlide(index) {
        // Remove active class from all slides and dots
        heroSlides.forEach(slide => slide.classList.remove('active'));
        heroDots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current slide and dot
        heroSlides[index].classList.add('active');
        heroDots[index].classList.add('active');
        
        currentSlide = index;
    }
    
    function nextSlide() {
        const next = (currentSlide + 1) % heroSlides.length;
        showSlide(next);
    }
    
    function prevSlide() {
        const prev = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
        showSlide(prev);
    }
    
    // Auto slide
    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 5000);
    }
    
    function stopSlideShow() {
        clearInterval(slideInterval);
    }
    
    // Event listeners
    nextArrow.addEventListener('click', () => {
        stopSlideShow();
        nextSlide();
        startSlideShow();
    });
    
    prevArrow.addEventListener('click', () => {
        stopSlideShow();
        prevSlide();
        startSlideShow();
    });
    
    heroDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopSlideShow();
            showSlide(index);
            startSlideShow();
        });
    });
    
    // Start auto slideshow
    startSlideShow();
    
    // ==========================================
    // GALLERY FILTER
    // ==========================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Gallery items initial animation
    galleryItems.forEach((item, index) => {
        item.style.transition = 'all 0.4s ease';
        item.style.animationDelay = `${index * 0.1}s`;
    });
    
    // ==========================================
    // SCROLL TO TOP BUTTON
    // ==========================================
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ==========================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update active menu item
                document.querySelectorAll('.main-menu__list a').forEach(link => {
                    link.classList.remove('active');
                });
                if (this.classList.contains('nav-link')) {
                    this.classList.add('active');
                }
            }
        });
    });
    
    // ==========================================
    // ACTIVE NAV LINK ON SCROLL
    // ==========================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.main-menu__list a');
    
    function highlightNavOnScroll() {
        const scrollPos = window.scrollY + 200;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavOnScroll);
    
    // ==========================================
    // CONTACT FORM
    // ==========================================
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Show success message (you can replace this with actual form submission)
            alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
            contactForm.reset();
        });
    }
    
    // ==========================================
    // ANIMATION ON SCROLL
    // ==========================================
    const animateElements = document.querySelectorAll('.section-header, .about-image-wrapper, .about-content, .founder-image-wrapper, .founder-content, .gallery-item, .contact-card, .contact-form-wrapper');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
    
    // Add animate-in class style
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
    
    // ==========================================
    // PARALLAX EFFECT
    // ==========================================
    const heroSection = document.querySelector('.hero-section');
    
    window.addEventListener('scroll', () => {
        if (heroSection) {
            const scrolled = window.pageYOffset;
            const parallax = heroSection.querySelector('.hero-slide.active');
            if (parallax) {
                parallax.style.backgroundPositionY = `${scrolled * 0.5}px`;
            }
        }
    });
    
    // ==========================================
    // NEWSLETTER FORM
    // ==========================================
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            if (email) {
                alert('Merci de votre inscription à notre newsletter !');
                newsletterForm.reset();
            }
        });
    }
    
    // ==========================================
    // GALLERY LIGHTBOX (SIMPLE)
    // ==========================================
    const galleryImages = document.querySelectorAll('.gallery-item img');
    
    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-overlay"></div>
                <div class="lightbox-content">
                    <img src="${img.src}" alt="${img.alt}">
                    <button class="lightbox-close"><i class="fas fa-times"></i></button>
                </div>
            `;
            
            document.body.appendChild(lightbox);
            document.body.style.overflow = 'hidden';
            
            // Add lightbox styles
            const lightboxStyle = document.createElement('style');
            lightboxStyle.textContent = `
                .lightbox {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 10000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .lightbox-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0,0,0,0.9);
                }
                .lightbox-content {
                    position: relative;
                    z-index: 1;
                    max-width: 90%;
                    max-height: 90%;
                }
                .lightbox-content img {
                    max-width: 100%;
                    max-height: 90vh;
                    border-radius: 10px;
                }
                .lightbox-close {
                    position: absolute;
                    top: -40px;
                    right: 0;
                    background: none;
                    border: none;
                    color: white;
                    font-size: 1.5rem;
                    cursor: pointer;
                }
            `;
            document.head.appendChild(lightboxStyle);
            
            // Close lightbox
            lightbox.querySelector('.lightbox-close').addEventListener('click', () => {
                lightbox.remove();
                document.body.style.overflow = '';
            });
            
            lightbox.querySelector('.lightbox-overlay').addEventListener('click', () => {
                lightbox.remove();
                document.body.style.overflow = '';
            });
        });
    });
    
    console.log('FORKA website initialized successfully!');
});
