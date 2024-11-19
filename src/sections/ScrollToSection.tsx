import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';  // You should use React Router here, not Next.js

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Extract the section ID from the URL hash
      const sectionId = location.hash.replace('#', '');
      const element = document.getElementById(sectionId);

      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location.hash]);  // Re-run this effect when the hash in the URL changes

  return null; // This component does not render anything
};

export default ScrollToSection;
