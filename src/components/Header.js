import { Outlet, Link, NavLink } from "react-router-dom";
import { ReactComponent as LogoSVG } from '../assets/icons/site-logo.svg';
import { ReactComponent as ShortMenu } from '../assets/icons/short-menu-1.svg';

import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function Header({responsive}) {

  let location = useLocation();

  const navContainerEl = useRef();
  let shortMenuBtn = useRef();

  const scrolledPosition = useRef(0);

  const handleMenuBtnClick = (e, toHide) => {
    e.preventDefault();

    if (toHide) {
      navContainerEl.current.classList.remove("menu-opened");
      return;
    }

    if (navContainerEl.current.classList.contains("menu-opened")) {
        navContainerEl.current.classList.remove("menu-opened");
      } else {
        navContainerEl.current.classList.add("menu-opened");
      }
}

  const removeClassOpened = () => {
    navContainerEl.current.classList.remove("menu-opened");
    
    if( shortMenuBtn.current && window.getComputedStyle(shortMenuBtn.current).display === "none") {
      navContainerEl.current.classList.remove("btn-visible");
    } else {
      navContainerEl.current.classList.add("btn-visible");
    }
    
  };

  const changeFocus = () => {
    //document.activeElement.blur();
    document.body.focus();
  }
  
  useEffect(() => {

    removeClassOpened();
    changeFocus();

    window.addEventListener("resize", removeClassOpened);

    return () => {
      window.removeEventListener("resize", removeClassOpened);
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = (e) => {

      let movement  = scrolledPosition.current - e.target.scrollTop;

      if(!(movement < 30 && movement > -30)) {
        if (e.target.scrollTop < 50 ) {
          //???error Cannot read properties of null (reading 'classList')    at HTMLDivElement.handleScroll 
          navContainerEl.current.classList.remove("page-scrolled-down", "page-scrolled-up");
          navContainerEl.current.classList.add("in-place");

          scrolledPosition.current = e.target.scrollTop;
          
        } else if (e.target.scrollTop >= 350) {
    
          if (movement < 0) {
            navContainerEl.current.classList.add("page-scrolled-up");
            navContainerEl.current.classList.remove("page-scrolled-down", "in-place");
          } else {
            navContainerEl.current.classList.add("page-scrolled-down");
            navContainerEl.current.classList.remove("page-scrolled-up", "in-place");
          }

          scrolledPosition.current = e.target.scrollTop;
        }
    
        
      }

      handleMenuBtnClick(e, true);
    }

    (window.document.getElementById("root")).addEventListener('scroll', handleScroll);

    return () => {
      (window.document.getElementById("root")).removeEventListener('scroll', handleScroll);
    }
  }, []);



  const getLinkActiveClassName = () => {
    return ({ isActive }) => (isActive ? "active-link" : "")
  }


    return (
      <>
      <header 
        ref={navContainerEl} 
        id="site-nav">
          <div>
        <nav aria-label="main navigation"
          className="content-wrapper">

          <div id="nav-logo">
            <Link aria-label="Go to Home page" to="/">
              <LogoSVG />
            </Link>
          </div>

        { responsive < 3 && 
          <a href=""
            id="short-menu-btn" 
            aria-label="Open menu"
            role="button" 
            onClick={handleMenuBtnClick} 
            ref={shortMenuBtn} >
                
            <ShortMenu />		 
          </a>
        }
          
          
          <div className="pages-nav">
            <NavLink to="/" className={getLinkActiveClassName()} >Home</NavLink>
            <NavLink to="/reservation" className={getLinkActiveClassName()} >Reservations</NavLink>

            <Outlet />
          </div>

          </nav>
          </div>
        </header>

        
      </>
    );
  }