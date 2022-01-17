import React from "react"

const AuthForm = ({ buttonText, title }) => {
  
  const handleSubmit = (event) => {
    event.preventDefault()
  }
  
  return (
      <form
          className="auth__form"
          name="signin"
          onSubmit={ handleSubmit }
      >
        <fieldset className="fieldset auth__fieldset">
          <input
              className="auth__input"
              type="email"
              placeholder="Email"
          />
          <span className="modal__error">
          
          </span>
          <input
              className="auth__input"
              type="password"
              placeholder="Пароль"
          />
          <span className="modal__error">
          
          </span>
        </fieldset>
        <button
        className="auth__button"
            type="submit">
          { buttonText }
        </button>
      
      </form>
  )
}

export default AuthForm
