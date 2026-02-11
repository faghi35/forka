import { useState, useEffect } from 'react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Délai pour montrer le preloader
    const loadingTimer = setTimeout(() => {
      setIsFading(true);
    }, 1500);

    // Délai pour complètement retirer le preloader du DOM
    const hideTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 99999,
        opacity: isFading ? 0 : 1,
        visibility: isFading ? 'hidden' : 'visible',
        transition: 'opacity 0.5s ease, visibility 0.5s ease'
      }}
    >
      {/* Logo Container */}
      <div style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px'
      }}>
        {/* Logo Image with Pulse Animation */}
        <div style={{
          position: 'relative',
          animation: 'pulse 2s ease-in-out infinite'
        }}>
          {/* Outer Ring */}
          <div style={{
            position: 'absolute',
            top: '-20px',
            left: '-20px',
            right: '-20px',
            bottom: '-20px',
            border: '2px solid rgba(229, 173, 64, 0.3)',
            borderRadius: '50%',
            animation: 'rotate 3s linear infinite'
          }}>
            <div style={{
              position: 'absolute',
              top: '-5px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '10px',
              height: '10px',
              background: '#e5ad40',
              borderRadius: '50%'
            }} />
          </div>

          {/* Middle Ring */}
          <div style={{
            position: 'absolute',
            top: '-10px',
            left: '-10px',
            right: '-10px',
            bottom: '-10px',
            border: '2px dashed rgba(229, 173, 64, 0.5)',
            borderRadius: '50%',
            animation: 'rotateReverse 4s linear infinite'
          }} />

          {/* Logo */}
          <img 
            src="/assets/images/resources/preloader.png" 
            alt="Forka"
            style={{
              width: '120px',
              height: 'auto',
              filter: 'drop-shadow(0 10px 30px rgba(229, 173, 64, 0.3))'
            }}
          />
        </div>

        {/* Loading Text */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '15px'
        }}>
          <h3 style={{
            color: '#fff',
            fontSize: '1.5rem',
            fontWeight: 600,
            margin: 0,
            fontFamily: "'Caveat', cursive",
            letterSpacing: '2px'
          }}>
            Forka
          </h3>

          {/* Progress Bar */}
          <div style={{
            width: '200px',
            height: '3px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '3px',
            overflow: 'hidden',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              background: 'linear-gradient(90deg, #e5ad40, #d4952f)',
              borderRadius: '3px',
              animation: 'progress 1.5s ease-in-out infinite'
            }} />
          </div>

          {/* Loading Dots */}
          <div style={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center'
          }}>
            <span style={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '0.85rem'
            }}>
              Chargement
            </span>
            <div style={{ display: 'flex', gap: '4px' }}>
              {[0, 1, 2].map((i) => (
                <span 
                  key={i}
                  style={{
                    width: '6px',
                    height: '6px',
                    background: '#e5ad40',
                    borderRadius: '50%',
                    animation: `bounce 1.4s ease-in-out ${i * 0.16}s infinite`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '10%',
        width: '100px',
        height: '100px',
        border: '1px solid rgba(229, 173, 64, 0.1)',
        borderRadius: '50%',
        animation: 'float 6s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '10%',
        width: '150px',
        height: '150px',
        border: '1px solid rgba(229, 173, 64, 0.1)',
        borderRadius: '50%',
        animation: 'float 8s ease-in-out infinite reverse'
      }} />

      {/* CSS Animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes rotateReverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes progress {
          0% {
            width: 0%;
            left: 0;
          }
          50% {
            width: 100%;
            left: 0;
          }
          100% {
            width: 0%;
            left: 100%;
          }
        }

        @keyframes bounce {
          0%, 80%, 100% {
            transform: scale(0);
            opacity: 0.5;
          }
          40% {
            transform: scale(1);
            opacity: 1;
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
    </div>
  );
};

export default Preloader;
