import { Link, Route, Switch } from "react-router-dom"
import headerLogo from "../images/logo/logo_color_white.svg"

function Header({ isLoggedIn }) {
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
          <Route path="/">
            <div>
              <button className="header__link button" type="button">
                Выйти
              </button>
            </div>
          
          </Route>
        </Switch>
      
      </header>
  )
}

export default Header
