import React, { useState, useEffect } from 'react';


const Header = () => {
  const [isVisible, setIsVisible] = useState(true);

      const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setIsVisible(false); // Hide header when scrolling down
    } else {
      setIsVisible(true); // Show header when scrolling up
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header id="header" className={`header d-flex align-items-center fixed-top ${isVisible ? '' : 'hidden'}`}>
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <div className="logo-container d-flex flex-column">
          <a href="/" className="logo d-flex align-items-center">
            <img src="assets/img/logo.png" alt="" />
            <h1 style={{ textTransform: 'none', fontSize: '26px', margin: 0, fontWeight: 700 }}>LabFry</h1>
          </a>
          <span style={{ fontSize: '14px', color: 'white', marginLeft: '80px', marginTop: '-5px' }}>technology</span>
        </div>
        <nav id="navmenu" className="navmenu">
          <a href="#" style={{ color: 'red', fontSize: '16px', fontWeight: 500, textDecoration: 'none', marginRight: '20px' }}>Menu</a>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;

