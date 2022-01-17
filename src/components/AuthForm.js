import { useEffect } from "react"

const AuthForm = ({
  buttonText, onSubmit, formData, onChange, errors, resetForm
}) => {
  
  useEffect(() => {
    resetForm()
  }, [ resetForm ])
  
  return (
      <form
          className="auth__form"
          name="signin"
          onSubmit={ onSubmit }
      >
        <fieldset className="fieldset auth__fieldset">
          <input
              className="auth__input"
              type="email"
              name="email"
              placeholder="Email"
              value={ formData.email || "" }
              onChange={ onChange }
          />
          <span className="modal__error">
            { errors.email }
          </span>
          <input
              className="auth__input"
              type="password"
              name="password"
              placeholder="Пароль"
              minLength="4"
              maxLength="32"
              value={ formData.password || "" }
              onChange={ onChange }
          />
          <span className="modal__error">
          { errors.password }
          </span>
        </fieldset>
        <button
            className="auth__button"
            type="submit"
        >
          { buttonText }
        </button>
      
      </form>
  )
}

export default AuthForm
