import { Outlet, Link, NavLink } from "react-router-dom";
import { ReactComponent as LogoSVG } from '../assets/icons/site-logo.svg';
import { ReactComponent as ShortMenu } from '../assets/icons/short-menu-1.svg';

import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function Header({children}) {

  let location = useLocation();

  const navContainerEl = useRef();
  let shortMenuBtnEl = useRef();

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
    
    if(window.getComputedStyle(shortMenuBtnEl).display === "none") {
      navContainerEl.current.classList.remove("btn-visible");
    } else {
      navContainerEl.current.classList.add("btn-visible");
    }
    
  };
  
  useEffect(() => {

    removeClassOpened();

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

  const buttonRef = (node) => {
    if(node instanceof HTMLElement) {
      shortMenuBtnEl = node;
    }
  };


    return (
      <>
      <header 
        ref={navContainerEl} 
        id="site-nav">
          <div>
        <nav 
          className="content-wrapper">

          <div id="nav-logo">
            <Link to="/">
              <LogoSVG />
            </Link>
          </div>

          <div
            id="short-menu-btn" 
            role="button" 
            className=""
            onClick={handleMenuBtnClick} 
            ref={buttonRef} >
                
            <ShortMenu />		 
	        </div>
          
          <div className="pages-nav">
            <NavLink to="/" className={getLinkActiveClassName()} >Home</NavLink>
            <NavLink to="/about" className={getLinkActiveClassName()} >About</NavLink>
            <NavLink to="/menu" className={getLinkActiveClassName()} >Menu</NavLink>
            <NavLink to="/reservation" className={getLinkActiveClassName()}>Reservations</NavLink>
            <NavLink to="order-online" className={getLinkActiveClassName()} >Order online</NavLink>
            
            
            <Link to="/login">Login</Link>

            <Outlet />
          </div>

          </nav>
          </div>
        </header>

        
      </>
    );
  }