import { motion, useAnimation } from "framer-motion";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import Logo from "/images/logo.svg";
import Button from "./Button";

const navItems = [
  "Timeline",
  "Testimonials",
  "Sponsors",
  "FAQs",
  "Sponsor Us",
  "Contact",
];

const NavBar = () => {
  const navContainerRef = useRef(null);
  const logoRef = useRef(null);
  const controls = useAnimation();

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle smooth scrolling
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = navContainerRef.current?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight - 20;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleNavClick = (e, item) => {
    e.preventDefault();
    const sectionId = item.toLowerCase().replace(/\s+/g, '-');
    scrollToSection(sectionId);
  };

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
      logoRef.current.classList.remove("invert");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
      logoRef.current.classList.add("invert");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
      logoRef.current.classList.add("invert");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    controls.start({
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      transition: { duration: 0.2 }
    });
  }, [isNavVisible, controls]);

  return (
    <motion.div
      ref={navContainerRef}
      initial={{ y: 0, opacity: 1 }}
      animate={controls}
      className="fixed w-[90%] md:w-[80%] top-4 z-50 py-3 md:py-6 md:px-12 px-4 transition-all duration-700 rounded-lg"
    >
      <header className="w-full">
        <nav className="flex items-center justify-between">
          {/* Logo and Product button */}
          <div className="flex items-center gap-7">
            <motion.img
              ref={logoRef}
              src={Logo}
              alt="logo"
              className="w-8 md:w-auto transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            />

            <Button
              id="product-button"
              title="Brochure"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 flex items-center justify-center gap-1"
            />
          </div>

          {/* Navigation Links and Audio Button */}
          <div className="flex h-full items-center">
            <div className="hidden lg:block">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="nav-hover-btn"
                  onClick={(e) => handleNavClick(e, item)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </motion.div>
  );
};

export default NavBar;