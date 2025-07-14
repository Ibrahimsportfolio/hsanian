document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lenis
    const lenis = new Lenis({
        lerp: 0.1,
        smooth: true,
    });
    
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
    
    // Rest of your code that uses GSAP, ScrollTrigger, etc.
});