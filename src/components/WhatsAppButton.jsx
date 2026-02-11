import { useState } from 'react';

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const phoneNumber = '+243815122226'; // Numéro de contact principal
  const message = 'Bonjour FORKA, je souhaite avoir plus d\'informations sur vos services.';
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* Bouton WhatsApp Flottant */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          textDecoration: 'none',
        }}
      >
        {/* Tooltip */}
        <div
          style={{
            background: '#fff',
            color: '#333',
            padding: '12px 18px',
            borderRadius: '12px',
            fontSize: '0.9rem',
            fontWeight: 500,
            boxShadow: '0 5px 20px rgba(0,0,0,0.15)',
            opacity: isHovered ? 1 : 0,
            visibility: isHovered ? 'visible' : 'hidden',
            transform: isHovered ? 'translateX(0)' : 'translateX(10px)',
            transition: 'all 0.3s ease',
            whiteSpace: 'nowrap',
            position: 'relative',
          }}
        >
          Discuter sur WhatsApp
          <span
            style={{
              position: 'absolute',
              right: '-8px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: 0,
              height: 0,
              borderTop: '8px solid transparent',
              borderBottom: '8px solid transparent',
              borderLeft: '8px solid #fff',
            }}
          />
        </div>

        {/* Bouton Principal */}
        <div
          style={{
            width: '65px',
            height: '65px',
            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: isHovered 
              ? '0 10px 30px rgba(37, 211, 102, 0.5)' 
              : '0 5px 20px rgba(37, 211, 102, 0.4)',
            transition: 'all 0.3s ease',
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            position: 'relative',
          }}
        >
          {/* Effet de pulsation */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: '50%',
              border: '2px solid #25D366',
              animation: 'pulse-ring 2s ease-out infinite',
            }}
          />
          
          {/* Icône WhatsApp */}
          <i 
            className="fab fa-whatsapp" 
            style={{ 
              color: '#fff', 
              fontSize: '2rem',
            }}
          />
        </div>
      </a>

      {/* Animation CSS */}
      <style>{`
        @keyframes pulse-ring {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;
