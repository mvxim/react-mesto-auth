import { Link, Route, Switch, useHistory } from "react-router-dom"
import headerLogo from "../images/logo/logo_color_white.svg"
import Menu from "./Menu"

function Header({ userEmail, isLoggedIn, onLogOut, isMenuActive, showMenu }) {
  
  const history = useHistory()
  
  const signOut = () => {
    localStorage.removeItem("jwt")
    onLogOut(false)
    history.push("/sign-in")
  }
  
  const toggleMenu = () => {
    showMenu(!isMenuActive)
  }
  
  return (
      <header className="header page__header">
        { (isLoggedIn && isMenuActive) && <Menu
            userEmail={ userEmail }
            isMenuActive={ isMenuActive }
            signOut={ signOut }
            isMobile={ true }
        /> }
        <div className="header__wrapper">
          <Switch>
            <Route path="/sign-up">
              <Link
                  className="button"
                  to="/"
              >
                <img
                    alt="Логотип сервиса «Место»."
                    className="header__logo"
                    src={ headerLogo }
                />
              </Link>
              <Link
                  className="header__link button link"
                  to="/sign-in"
              >Войти</Link>
            </Route>
            
            <Route path="/sign-in">
              <Link
                  className="button"
                  to="/"
              >
                <img
                    alt="Логотип сервиса «Место»."
                    className="header__logo"
                    src={ headerLogo }
                />
              </Link>
              <Link
                  className="header__link button link"
                  to="/sign-up"
              >Регистрация</Link>
            </Route>
            
            <Route
                exact
                path="/"
            >
              <Link
                  className="button"
                  to="/"
              >
                <img
                    alt="Логотип сервиса «Место»."
                    className="header__logo"
                    src={ headerLogo }
                />
              </Link>
              <div className="header__menu-wrapper">
                <Menu
                    userEmail={ userEmail }
                    isMenuActive={ isMenuActive }
                    signOut={ signOut }
                    isMobile={ false }
                />
                {
                    isLoggedIn && (
                        <button
                        className={ `header__menu-button ${isMenuActive ? "header__menu-button_active" : ""}` }
                        onClick={ toggleMenu }
                        type="button"
                    >
                      <span/>
                    </button>)
                }
              
              </div>
            </Route>
          
          </Switch>
        </div>
      
      
      </header>
  )
}

export default Header
