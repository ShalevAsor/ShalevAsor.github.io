import React, { useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Expertise from './components/Expertise';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  useEffect(() => {
    // Helper functions and event listeners
    const handleScrollToSection = () => {
      const section1 = document.querySelector('#section--1');
      if (section1) {
        section1.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const handleNavClick = (e) => {
      e.preventDefault();
      if (e.target.classList.contains('nav__link')) {
        const id = e.target.getAttribute('href');
        const targetElement = document.querySelector(id);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const handleHover = (e, opacity) => {
      if (e.target.classList.contains('nav__link')) {
        const link = e.target;
        const siblings = link.closest('.nav').querySelectorAll('.nav__link');
        const logo = link.closest('.nav').querySelector('img');
        siblings.forEach(el => {
          if (el !== link) el.style.opacity = opacity;
        });
        if (logo) logo.style.opacity = opacity;
      }
    };

    const handleStickyNav = (entries) => {
      const [entry] = entries;
      const nav = document.querySelector('.nav');
      if (nav) {
        if (!entry.isIntersecting) nav.classList.add('sticky');
        else nav.classList.remove('sticky');
      }
    };

    const handleRevealSection = (entries, observer) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        entry.target.classList.remove('section--hidden');
        observer.unobserve(entry.target);
      }
    };

    const handleLoadImg = (entries, observer) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        entry.target.src = entry.target.dataset.src;
        entry.target.addEventListener('load', () => {
          entry.target.classList.remove('lazy-img');
        });
        observer.unobserve(entry.target);
      }
    };

    const handleSlider = () => {
      const slides = document.querySelectorAll('.slide');
      const btnLeft = document.querySelector('.slider__btn--left');
      const btnRight = document.querySelector('.slider__btn--right');
      const dotContainer = document.querySelector('.dots');

      if (!slides.length || !btnLeft || !btnRight || !dotContainer) return;

      let curSlide = 0;
      const maxSlide = slides.length;

      const createDots = () => {
        slides.forEach((_, i) => {
          dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`);
        });
      };

      const activateDot = (slide) => {
        document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));
        const dot = document.querySelector(`.dots__dot[data-slide="${slide}"]`);
        if (dot) dot.classList.add('dots__dot--active');
      };

      const goToSlide = (slide) => {
        slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`));
      };

      const nextSlide = () => {
        curSlide = (curSlide === maxSlide - 1) ? 0 : curSlide + 1;
        goToSlide(curSlide);
        activateDot(curSlide);
      };

      const prevSlide = () => {
        curSlide = (curSlide === 0) ? maxSlide - 1 : curSlide - 1;
        goToSlide(curSlide);
        activateDot(curSlide);
      };

      const init = () => {
        goToSlide(0);
        createDots();
        activateDot(0);
      };
      init();

      btnRight.addEventListener('click', nextSlide);
      btnLeft.addEventListener('click', prevSlide);

      document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
      });

      dotContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('dots__dot')) {
          const { slide } = e.target.dataset;
          goToSlide(slide);
          activateDot(slide);
        }
      });
    };

    const initObserversAndListeners = () => {
      const btnScrollTo = document.querySelector('.btn--scroll-to');
      const navLinks = document.querySelector('.nav__links');
      const nav = document.querySelector('.nav');
      const header = document.querySelector('.header');
      const allSections = document.querySelectorAll('.section');
      const imgTargets = document.querySelectorAll('img[data-src]');

      if (btnScrollTo) btnScrollTo.addEventListener('click', handleScrollToSection);
      if (navLinks) navLinks.addEventListener('click', handleNavClick);
      if (nav) {
        nav.addEventListener('mouseover', (e) => handleHover(e, 0.5));
        nav.addEventListener('mouseout', (e) => handleHover(e, 1));
      }

      if (nav && header) {
        const navHeight = nav.getBoundingClientRect().height;
        const headerObserver = new IntersectionObserver(handleStickyNav, {
          root: null,
          threshold: 0,
          rootMargin: `-${navHeight}px`,
        });
        headerObserver.observe(header);
      }

      if (allSections) {
        const sectionObserver = new IntersectionObserver(handleRevealSection, {
          root: null,
          threshold: 0.15,
        });
        allSections.forEach((section) => {
          sectionObserver.observe(section);
          section.classList.add('section--hidden');
        });
      }

      if (imgTargets) {
        const imgObserver = new IntersectionObserver(handleLoadImg, {
          root: null,
          threshold: 0,
          rootMargin: '200px',
        });
        imgTargets.forEach((img) => imgObserver.observe(img));
      }

      handleSlider();

      // Add event listeners for Contact Me buttons
      const btnContactMe = document.querySelector('.btn.contact-me');
      const btnContactMeNavBar = document.querySelector('.nav__link.nav__link--btn');

      const handleContactMeClick = (e) => {
        e.preventDefault();
        const email = 'shalevasor@gmail.com';
        const mailtoLink = `mailto:${email}`;
        window.location.href = mailtoLink;
      };

      if (btnContactMe) btnContactMe.addEventListener('click', handleContactMeClick);
      if (btnContactMeNavBar) btnContactMeNavBar.addEventListener('click', handleContactMeClick);
    };

    initObserversAndListeners();

    return () => {
      // Cleanup event listeners if necessary
    };
  }, []);

  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Expertise />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;