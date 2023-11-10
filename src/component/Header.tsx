import { useMyContext } from '../context/SectionProvider'

import Logo from '../assets/images/Logo.svg'
import waves from '../assets/icons/Waves.svg'
import burger from '../assets/icons/burger.svg'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation();
  const { updateValue } = useMyContext();
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
                Marchandise
              </Link>
            </li>
            <li>
              <Link to={"/"} onClick={() => updateValue("news")}>
                News
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
            <img src={burger} alt="burger" className="burger-icon" />
          </div>
        </div>
      </nav>
    </header>
  )
}
