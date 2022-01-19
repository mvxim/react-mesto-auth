import React from "react"

const Menu = ({ userEmail, signOut, isMobile }) => {
  
  
  return (
      <div className={ `header__nav ${ isMobile ? "header__nav_viewport_mobile" : "header__nav_viewport_desktop" } ` }>
        { userEmail
          ?
          <p className="header__email">
            { userEmail }
          </p>
          : "" }
        
        <button
            className="header__link header__link_type_button button"
            type="button"
            onClick={ signOut }
        >
          Выйти
        </button>
      </div>
  )
}

export default Menu
