import React from 'react'
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'

const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-inline-start: auto;
  font-family: "Barlow Condensed", sans-serif;

  button {
    display: none;
  }

  .rect {
    display: inline-block;
    position: relative;
    right: -30px;
    z-index: 10;
    mix-blend-mode: normal;
    opacity: 0.25;
    background-color: #fff;

    @media (min-width: 1024px) {
      width: 300px;
      height: 1px;
    }

    @media (min-width: 1440px) {
      width: 473px;
      height: 1px;
    }
  }

  .main_nav_container {
    display: inline-block;
    padding-inline: 4rem 4rem;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(81.5485px);
    backdrop-filter: blur(5px);

    @media (min-width: 1440px) {
      padding-inline: 123px 165px;
    }
  }

  .main_nav_list {
    list-style: none;
    display: flex;
    gap: 24px;

    @media (min-width: 1024px) {
      gap: 48px;
    }

    @media (min-width: 1440px) {
      gap: 48px;
    }

    a {
      display: block;
      text-decoration: none;
      display: flex;
      gap: 12px;
      color: #fff;
      font-size: 1rem;
      letter-spacing: 2.7px;
      line-height: 19.2px;
      font-weight: 400;
      text-transform: uppercase;
      padding-block: 39px 38px;
      position: relative;

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
  right: 0;
  left: 24px;


  .logo{
    background-color: #fff;
    width: 48px;
    height: 48px;
    border-radius: 100%;
  }

  @media (min-width: 768px) {
    top: 0;
    left: 39px;
  }
  
  @media (min-width: 1440px) {
    top: 40px;
    left: 55px;
  }



`

const Header = () => {
  return (
    <HeaderComponent>
      <div className="logo">
        <Link aria-label='main page logo' to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
        </Link>
      </div>
      <Nav>
        <div className="rect"></div>
        <button className="menu_open">
          menu open
        </button>
        <div className="main_nav_container">
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
          <button className='menu_close'>
            menu close
          </button>
        </div>
      </Nav>
    </HeaderComponent>
  )
}

export default Header