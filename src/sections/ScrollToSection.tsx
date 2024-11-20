import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';  // Use React Router for client-side navigation

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
       window.scrollTo(0, 0);
    const hash = location.hash;

   
    if (hash) {
      const element = document.querySelector(hash);

      if (element) {
       
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest', 
          });
        }, 100);
      }
    }
  }, [location]);

  return null;
};

export default ScrollToSection;
