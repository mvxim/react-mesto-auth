import { Link } from "react-router-dom"
import headerLogo from "../images/logo/logo_color_white.svg"

function Header() {
  return (
      <header className="header page__header">
        <Link
            className="header__link"
            to="/"
            
        >
          <img
              alt="Логотип сервиса «Место»."
              className="header__logo"
              src={ headerLogo }
          />
        </Link>
      </header>
  )
}

export default Header
