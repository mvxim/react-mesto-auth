import React from "react"
import AuthForm from "./AuthForm"

const Login = () => {
  
  return (
      <section className="auth">
        <h2 className="auth__title">
          Вход
        </h2>
        <AuthForm buttonText="Войти"/>
      </section>
  )
}

export default Login
