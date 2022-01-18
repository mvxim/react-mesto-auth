import { Link, Route, Switch, useHistory } from "react-router-dom"
import headerLogo from "../images/logo/logo_color_white.svg"

function Header({ userEmail, isLoggedIn }) {
  
  const history = useHistory()
  
  const signOut = () => {
    localStorage.removeItem("jwt")
    isLoggedIn(false)
    history.push("/sign-in")
  }
  
  return (
      <header className="header page__header">
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
        <Switch>
          <Route path="/sign-up">
            <Link
                className="header__link button link"
                to="/sign-in"
            >Войти</Link>
          </Route>
          <Route path="/sign-in">
            <Link
                className="header__link button link"
                to="/sign-up"
            >Регистрация</Link>
          </Route>
          <Route exact path="/">
            <div className="header__nav">
              <p className="header__email">
                { userEmail ? userEmail : "" }
              </p>
              <button
                  className="header__link header__link_type_button button"
                  type="button"
                  onClick={ signOut }
              >
                Выйти
              </button>
            </div>
          
          </Route>
        </Switch>
      
      </header>
  )
}

export default Header
