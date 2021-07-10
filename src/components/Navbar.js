import React, { useState } from 'react';
import { Link } from 'react-scroll'
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
  }

  const dragToAbout = () => {
    const about = document.getElementById('about')
    var currentScrollPos = about.offsetTop;
    var stickyHeight = 0
    if(about) {
      if (prevScrollpos > currentScrollPos) {
        stickyHeight = 80
      }
      window.scroll({
        top: about.offsetTop-stickyHeight,
        left: 0,
        behavior: 'smooth'
      });
    }
  }

  const dragToProduct = () => {
    const product = document.getElementById('product')
    var currentScrollPos = product.offsetTop;
    var stickyHeight = 0
    if(product) {
      if (prevScrollpos > currentScrollPos) {
        stickyHeight = 80
      }
      window.scroll({
        top: product.offsetTop-stickyHeight,
        left: 0,
        behavior: 'smooth'
      });
    }
  }

  const dragToSocial = () => {
    const social = document.getElementById('social')
    var currentScrollPos = social.offsetTop;
    var stickyHeight = 0
    if(social) {
      if (prevScrollpos > currentScrollPos) {
        stickyHeight = 80
      }
      window.scroll({
        top: social.offsetTop-stickyHeight,
        left: 0,
        behavior: 'smooth'
      });
    }
  }

  const dragToContactUs = () => {
    const contactus = document.getElementById('contact-us')
    if(contactus) {
      window.scroll({
        top: contactus.offsetTop,
        left: 0,
        behavior: 'smooth'
      });
    }
  }

  return (
    <>
      <nav id="navbar" className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img
              alt=""
              src='/images/logo-singo.svg'
            />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link
                className='nav-links'
                onClick={dragToAbout}
              >
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-links'
                onClick={dragToProduct}
              >
                Products
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-links'
                onClick={dragToSocial}>
                Social
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to=''
                className='nav-links'
                onClick={dragToContactUs}
              >
                Contact Us
              </Link>
            </li>

            {/* <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li> */}
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;