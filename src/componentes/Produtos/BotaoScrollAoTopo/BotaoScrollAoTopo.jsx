// src/ScrollToTopButton.js
import React, { useState, useEffect } from 'react';
import './BotaoScrollAoTopo.css'; // para estilização

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset + window.innerHeight >= document.documentElement.scrollHeight - 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-button">
          Voltar ao topo
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
