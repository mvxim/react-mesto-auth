import React from "react"

const AuthForm = ({buttonText, title}) => {
  return (
      <form
          className="auth__from"
          name="signin"
      >
        <fieldset>
          <input type="email"/>
          <input type="password"/>
        </fieldset>
        <button type="submit">
          {buttonText}
        </button>
    
      </form>
  )
}

export default AuthForm
