import gsap from 'gsap/gsap-core';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

const useScrollToSection = item => {
    gsap.registerPlugin(ScrollToPlugin);

    const handleScrollToSection = () => {
        gsap.to(window, {
            duration: 1,
            scrollTo: { y: item, offsetY: 50 },
            ease: 'power2.Out',
        });
    };

    return handleScrollToSection(item);
};

export default useScrollToSection;
