import { useEffect } from "react"

const AuthForm = ({
  buttonText, onSubmit, formData, onChange, errors, resetForm, isFormValid, isLoading
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
              required
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
              required
          />
          <span className="modal__error">
          { errors.password }
          </span>
        </fieldset>
        <button
            disabled={ !isFormValid || isLoading }
            className={`auth__button ${ isFormValid && !isLoading ? "" : "auth__button_disabled" }`}
            type="submit"
        >
          { isLoading ? "⏳ Обработка" : buttonText }
        </button>
      
      </form>
  )
}

export default AuthForm
