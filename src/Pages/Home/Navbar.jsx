import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [NavActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!NavActive);
  };
  const closeMenu = () => {
    setNavActive(false);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu;
    }
  }, []);

  return (
    <nav className={`navbar ${NavActive ? 'active' : ''}`}>
      <div>
        <img src="./img/logo.svg" alt="Logoipsum" />
      </div>
      <a></a>
    </nav>
  );
};

export default Navbar;
