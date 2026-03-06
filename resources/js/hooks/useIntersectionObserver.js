import {useEffect} from "react";

/**
 * useIntersectionObserver hook
 * 
 * @param {Object} ref - React ref of the element to observe
 * @param {Function} callback - Function to call when element is in view
 * @param {Object} options - IntersectionObserver options
 */
function useIntersectionObserver(ref, callback, options = { threshold: 0.1, rootMargin: '0px' }) {
    useEffect(() => {
        if (!ref.current || !callback) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    callback();
                }
            });
        }, options);

        const currentRef = ref.current;
        observer.observe(currentRef);

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref, callback, options]);
}

export default useIntersectionObserver;
