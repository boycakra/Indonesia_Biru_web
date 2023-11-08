import { useMyContext } from '../context/SectionProvider'

import Logo from '../assets/images/Logo.svg'
import waves from '../assets/icons/Waves.svg'
import { Link } from 'react-router-dom'

export default function Header() {
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
          <Link to={"/dive-with-us"}>
            <div className="txt-link-navbar">
              <img src={waves} alt="icon-waves" className="icon-waves" />
              Dive With Us
            </div>
          </Link>
          <div className="container-btn-navbar">
            <a href='https://www.patreon.com/ibf' target="_blank" rel="noopener noreferrer">
              <button className='btn-navbar'>Donate</button>
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}