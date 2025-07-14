document.addEventListener("DOMContentLoaded", () => {
  








const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    const links = document.querySelectorAll('.menu-links a');
    const menuLinks = document.getElementById('menuLinks');
    let isOpen = false;

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      menu.classList.toggle('active');

      if (!isOpen) {
        // Animate menu links in with GSAP
        gsap.fromTo(links, {
          opacity: 0,
          y: 50
        }, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.2
        });

        gsap.to(menuLinks, { opacity: 1, duration: 0.4 });
        isOpen = true;
      } else {
        // Hide instantly
        gsap.to(menuLinks, { opacity: 0, duration: 0.2 });
        isOpen = false;
      }
    });


    const slides = document.querySelectorAll('.slide');
  const bullets = document.querySelectorAll('.bullet');

  bullets.forEach((bullet, i) => {
    bullet.addEventListener('click', () => {
      slides.forEach(s => s.classList.remove('active'));
      bullets.forEach(b => b.classList.remove('active'));

      slides[i].classList.add('active');
      bullet.classList.add('active');
    });
  });


  //hero
  
     // Floating astronaut animation
    gsap.to(".astronaut", {
      y: -30,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });


    setTimeout(() => {
        
    // Fade-in + slide for heading
    gsap.from("#headline", {
      opacity: 0,
      x: -100,
      duration: 1.5,
      delay: 0.5,
      ease: "power3.out"
      
    });

    // Fade-in + slide for paragraph
    gsap.from("#paragraph", {
      opacity: 0,
      x: -100,
      duration: 1.5,
      delay: 1.2,
      ease: "power3.out"
    });


    }, 5000);

     gsap.from(".left-image", {
      x: -60,
      opacity: 0,
      duration: 1
    });

    gsap.from(".experience", {
      delay: 0.5,
      opacity: 0,
      y: 30,
      duration: 1
    });

    gsap.from(".main-heading span", {
      delay: 0.3,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 1.2,
      ease: "power3.out"
    });

    gsap.from(".image-art", {
      scrollTrigger: {
        trigger: ".image-art",
        start: "top 80%",
      },
      x: -60,
      opacity: 0,
      duration: 1
    });

    gsap.from(".text-content p, .cta", {
      scrollTrigger: {
        trigger: ".text-content",
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.2
    });

     // Split text into characters
    const splitText = new SplitType('#scrollText', { types: 'chars' });

    // Animate each letter color on scroll
    gsap.fromTo(splitText.chars,
      { color: "#555" },
      {
        color: "#fff",
        stagger: 0.03,
        scrollTrigger: {
          trigger: "#scrollText",
          start: "top 70%",
          end: "bottom 30%",
          scrub: true
        }
      });





      






    const loadingBar = document.querySelector('.loading-bar');
  const topPanel = document.querySelector('.split-top');
  const bottomPanel = document.querySelector('.split-bottom');
  const content = document.querySelector('.content');
  const preloader = document.querySelector('.preloader');

  // Step 1: Animate the loading bar
  gsap.to(loadingBar, {
    width: "100%",
    duration: 2,
    ease: "power2.inOut",
    onComplete: () => {
      // Step 2: Cinematic panel split
      const tl = gsap.timeline({
        onComplete: () => {
          // Cleanup and show content
          topPanel.remove();
          bottomPanel.remove();
          preloader.remove();

          gsap.to(content, {
            opacity: 1,
            duration: 1,
            ease: "power2.out"
          });
        }
      });
const interval = setInterval(() => {
  if (loadingBar.style.width === '100%') {
    loadingBar.style.transition = 'opacity 0.5s ease';
    loadingBar.style.opacity = '0';
    clearInterval(interval); // stop checking
  }
}, 10); 

      tl.to(topPanel, {
        y: "-100%",
        skewY: 4,
        scaleY: 1.1,
        duration: 2,
        ease: "power4.inOut"
      }, 0);

      tl.to(bottomPanel, {
        y: "100%",
        skewY: -4,
        scaleY: 1.1,
        duration: 2,
        ease: "power4.inOut"
      }, 0);
    }
  });







  

    const horizontalSection = document.querySelector(".horizontal-section");

    gsap.to(horizontalSection, {
      xPercent: -150, // move -150% of its own width (250vw - 100vw)
      ease: "none",
      scrollTrigger: {
        trigger: ".horizontal-section-wrapper",
        start: "top top",
        end: () => "+=" + horizontalSection.offsetWidth,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      }
    });


const cards = document.querySelectorAll('.split-service-card');

      gsap.from(cards, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.2
      });

      cards.forEach(card => {
        const icon = card.querySelector('.split-card-icon');
        const title = card.querySelector('.split-card-title');
        const text = card.querySelector('.split-card-text');
        const link = card.querySelector('.split-learn-more');
        const arrow = card.querySelector('.split-learn-more i');

        card.addEventListener('mouseenter', () => {
          gsap.to(card, { y: -10, duration: 0.3, ease: "power2.out" });
          gsap.to(icon, { scale: 1.1, rotation: 5, duration: 0.3, ease: "back.out(1.7)" });
          gsap.to(title, { color: '#ffffff', x: 5, duration: 0.3 });
          gsap.to(text, { color: 'rgba(255, 255, 255, 0.9)', x: 5, duration: 0.3 });
          gsap.to(link, { color: '#ffffff', x: 5, duration: 0.3 });
          gsap.to(arrow, { x: 5, duration: 0.3 });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, { y: 0, duration: 0.3, ease: "power2.out" });
          gsap.to(icon, { scale: 1, rotation: 0, duration: 0.3, ease: "back.out(1.7)" });
          gsap.to(title, { color: '#2c3e50', x: 0, duration: 0.3 });
          gsap.to(text, { color: '#7f8c8d', x: 0, duration: 0.3 });
          gsap.to(link, { color: '#000', x: 0, duration: 0.3 });
          gsap.to(arrow, { x: 0, duration: 0.3 });
        });
      });
    



      // Scroll to Top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// GSAP Parallax & Fade In Animation
gsap.registerPlugin(ScrollTrigger);

gsap.from(".footer__title", {
  y: 100,
  opacity: 0,
  duration: 1,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".footer",
    start: "top 80%",
  },
});

gsap.from(".footer__links li, .footer__contact div", {
  y: 50,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".footer__container",
    start: "top 90%",
  },
});

// Fade in form and text
gsap.from(".contact-text, .contact-form", {
  opacity: 0,
  y: 100,
  duration: 1,
  stagger: 0.3,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".contact-section",
    start: "top 80%",
  }
});

// Background icon animation on scroll
gsap.to(".background-icon", {
  rotate: 360,
  scale: 1.1,
  duration: 3,
  ease: "none",
  scrollTrigger: {
    trigger: ".contact-section",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});



gsap.from(".about-content", {
  opacity: 0,
  x: -50,
  duration: 1.2,
  ease: "power2.out"
});

gsap.from(".about-image", {
  opacity: 0,
  x: 50,
  duration: 1.2,
  ease: "power2.out",
  delay: 0.2
});


    });

   
