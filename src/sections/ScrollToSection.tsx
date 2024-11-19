import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToSection = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            // Scroll to the section if a hash is present
            const sectionId = location.hash.replace("#", "");
            const element = document.getElementById(sectionId);

            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            // Scroll to the top when navigating to a new page
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [location.pathname, location.hash]);

    return null; // No UI, just functionality
};

export default ScrollToSection;
