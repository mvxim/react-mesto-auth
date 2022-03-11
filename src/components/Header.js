import { Link, Route, Switch, useHistory } from 'react-router-dom';
import headerLogo from '../images/logo/logo_color_white.svg';
import { logout } from '../utils/auth';
import Menu from './Menu';

function Header({ userEmail, isLoggedIn, onLogOut, isMenuActive, showMenu }) {
  
  const history = useHistory();
  
  const signOut = async () => {
    await logout();
    onLogOut(false);
    history.push('/signin');
  };
  
  const toggleMenu = () => {
    showMenu(!isMenuActive);
  };
  
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
            <Route path="/signup">
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
                  to="/signin"
              >Войти</Link>
            </Route>
            
            <Route path="/signin">
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
                  to="/signup"
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
                            className={ `header__menu-button ${ isMenuActive ? 'header__menu-button_active' : '' }` }
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
  );
}

export default Header;
