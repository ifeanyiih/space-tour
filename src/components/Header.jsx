import React from 'react'
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import open from '/assets/shared/icon-hamburger.svg'
import close from '/assets/shared/icon-close.svg'

const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-inline-start: auto;
  font-family: "Barlow Condensed", sans-serif;

  .menu_open, .menu_close {
    width: 40px;
    height: 40px;
    overflow: hidden;
    background-repeat: no-repeat;
    background-color: transparent;
    border-color: transparent;
    background-size: 24px 24px;
    background-position: center center;
    white-space: nowrap;
    text-indent: 100%;


    @media (min-width: 768px) {
      display: none;
    }
  }

  .menu_open {
    
    margin-inline-start: auto;
    background-image: url(${open});
  }

  .menu_close {
    background-image: url(${close});
    position: absolute;
    top: 29px;
    right: 24px;
  }

  .rect {
    display: none;
    display: inline-block;
    position: relative;
    right: -30px;
    z-index: 10;
    mix-blend-mode: normal;
    opacity: 0.25;
    background-color: #fff;

    @media (min-width: 1024px) {
      display: block;
      width: 200px;
      height: 1px;
    }

    @media (min-width: 1280px) {
      width: 300px;
    }

    @media (min-width: 1440px) {
      width: 473px;
      height: 1px;
    }
  }

  .main_nav_container {
    display: inline-block;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(81.5485px);
    padding-inline: 0;
    position: fixed;
    width: 69%;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    transition: right .05s;

    
    @media (min-width: 768px) {
      padding-inline: 4rem 4rem;
      display: inline-block;
      position: static;
      width: auto;
      height: auto;
    }

    @media (min-width: 1440px) {
      padding-inline: 123px 165px;
    }
  }

  .hidden {
    right: -100%;
    transition: all .1s;

    @media (min-width: 768px) {
      display: block;
    }
  }

  .main_nav_list {
    list-style: none;

    margin-block-start: 118px;
    margin-inline-start: 32px;

    @media (min-width: 768px) {
      margin-block-start: 0;
      margin-inline-start: 0;
      display: flex;
      gap: 24px;
    }

    @media (min-width: 1024px) {
      gap: 48px;
    }

    @media (min-width: 1440px) {
      gap: 48px;
    }

    li + li {
      margin-block-start: 32px;

      @media (min-width: 768px) {
        margin-block-start: 0;
      }
    }

    a {
      text-decoration: none;
      display: flex;
      gap: 12px;
      color: #fff;
      font-size: 1rem;
      letter-spacing: 2.7px;
      line-height: 19.2px;
      font-weight: 400;
      text-transform: uppercase;
      position: relative;
      
      @media (min-width: 768px) {
        padding-block: 39px 38px;
      }

      &.active::after, :hover::after  {
        content: "";
        height: 3px;
        bottom: 0;
        position: absolute;
        inline-size: 100%;
        background-color: #fff;
      }

      :hover::after{
        mix-blend-mode: normal;
        opacity: 0.5;
      }

      .path_no {
        font-weight: 700;
      }
    }
  }
`

const HeaderComponent = styled.header`
  position: absolute;
  display: flex;
  align-items: center;
  top: 24px;
  right: 24px;
  left: 24px;


  .logo{
    background-color: #fff;
    width: 48px;
    height: 48px;
    border-radius: 100%;


    @media (min-width: 768px) {
      width: 48px;
      height: 48px;
    }
  }

  @media (min-width: 768px) {
    top: 0;
    left: 39px;
    right: 0;
  }
  
  @media (min-width: 1440px) {
    top: 40px;
    left: 55px;
  }



`

const Header = () => {

  const openClick = (e) => {
    let menu_container = document.querySelector('.main_nav_container');
    menu_container.classList.remove('hidden');
  }

  const closeClick = (e) => {
    let menu_container = document.querySelector('.main_nav_container');
    menu_container.classList.add('hidden');
  }

  return (
    <HeaderComponent>
      <div className="logo">
        <Link aria-label='main page logo' to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
        </Link>
      </div>
      <Nav>
        <div className="rect"></div>
        <button 
          onClick={openClick}
          className="menu_open"
        >
          menu open
        </button>
        <div className="main_nav_container hidden">
          <ul className="main_nav_list">
            <li>
              <NavLink to="/" className="main_nav_link">
                <span className="path_no">00</span>Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/destination" className="main_nav_link">
                <span className="path_no">01</span>
                Destination
              </NavLink>
            </li>

            <li>
              <NavLink to="/crew" className="main_nav_link">
                <span className="path_no">02</span>
                Crew
              </NavLink>
            </li>

            <li>
              <NavLink to="/technology" className="main_nav_link">
                <span className="path_no">03</span>
                Technology
              </NavLink>
            </li>

          </ul>
          <button 
            onClick={closeClick}
            className='menu_close'
          >
            menu close
          </button>
        </div>
      </Nav>
    </HeaderComponent>
  )
}

export default Header