
import { useMyContext } from '../context/SectionProvider'

import Logo from '../assets/images/Logo.svg'
import waves from '../assets/icons/Waves.svg'
import burger from '../assets/icons/burger.svg'
import { slide as Menu } from 'react-burger-menu'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
  const menuStyles = {
    bmCrossButton: {
      position: 'fixed',
      top: '70px',
      height: '30px',
      width: '30px',
    },
    bmCross: {
      background: '#bdc3c7',
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
    },
    bmMenu: {
      background: 'white', // Set the background color to red
      padding: '2.5em 1.5em 0',
      width: '300px',
      position: 'fixed',
      top: '50px'
    },
    bmMorphShape: {
      fill: '#373a47',
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em',
    },
    bmItem: {
      display: 'inline-block',
    },
    bmOverlay: {
      background: 'transparent',
    },
  };

  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const { updateValue } = useMyContext();

  const handleClick = (value: string) => {
    setIsOpen(false);
    if (value === "Event") {
      // If it's the "Event" link, navigate to the event route first
      updateValue(value);
    } else {
      // For other links, update the context value and navigate
      updateValue(value);
      // Optionally, you can navigate to the corresponding route here
      // Example:
      // history.push(`/${value.toLowerCase()}`);
    }
  };
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={Logo} alt="logo" className="logo" />
        </div>
        <div className="navbar-container">
          <ul className="navbar-menu">
            <li>
              <Link to={"/"} onClick={() => updateValue("mission")}>
                Our Mission
              </Link>
            </li>
            <li>
              <Link to={"/"} onClick={() => updateValue("coral")}>
                Coral Reef
              </Link>
            </li>
            <li>
              <Link to={"/"} onClick={() => updateValue("team")}>
                Team
              </Link>
            </li>
            <li>
              <Link to={"/"} onClick={() => updateValue("gallery")}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to={"/"} onClick={() => updateValue("merchandise")}>
                Merchandise
              </Link>
            </li>
            <li>
              <Link to={"/"} onClick={() => updateValue("news")}>
                News
              </Link>
            </li>
            <li>
              <Link to={"/"} onClick={() => handleClick("Event")}>
                Event
              </Link>
            </li>
          </ul>
          {location.pathname !== "/dive-with-us" && (
            <Link to={"/dive-with-us"}>
              <div className="txt-link-navbar">
                <img src={waves} alt="icon-waves" className="icon-waves" />
                Dive With Us
              </div>
            </Link>
          )}
          <div className="container-btn-navbar">
            <a href='https://www.patreon.com/ibf' target="_blank" rel="noopener noreferrer">
              <button className='btn-navbar'>Donate</button>
            </a>
          </div>
          <div className='container-burger-menu'>
            <Menu
              isOpen={isOpen}
              onOpen={() => setIsOpen(true)}
              onClose={() => setIsOpen(false)}
              styles={menuStyles}
              right
              customBurgerIcon={<img src={burger} alt="burger" className="burger-icon" />}
            >
              <div className='txt-burger-menu' onClick={() => handleClick("mission")}>
                <Link to={"/"}>
                  Our Mission
                </Link>
              </div>
              <div className='txt-burger-menu' onClick={() => handleClick("coral")}>
                <Link to={"/"}>
                  Coral Reef
                </Link>
              </div>
              <div className='txt-burger-menu' onClick={() => handleClick("team")}>
                <Link to={"/"}>
                  Team
                </Link>
              </div>
              <div className='txt-burger-menu' onClick={() => handleClick("gallery")}>
                <Link to={"/"}>
                  Gallery
                </Link>
              </div>
              <div className='txt-burger-menu' onClick={() => handleClick("merchandise")}>
                <Link to={"/"}>
                  Merchandise
                </Link>
              </div>
              <div className='txt-burger-menu' onClick={() => handleClick("news")}>
                <Link to={"/"}>
                  News
                </Link>
              </div>
              <div className='txt-burger-menu' onClick={() => handleClick("Event")}>
                <Link to={"/"}>
                  Event
                </Link>
              </div>
              {location.pathname !== '/dive-with-us' && (
                <div className='txt-burger-menu' onClick={() => handleClick("")}>
                  <Link to={"/dive-with-us"}>
                    Dive With us
                  </Link>
                </div>
              )}
            </Menu>
          </div>
        </div>
      </nav>
    </header>
  )
}