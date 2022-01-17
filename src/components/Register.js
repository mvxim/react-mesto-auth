import React from "react"
import { Link } from "react-router-dom"
import AuthForm from "./AuthForm"

const Register = () => {
  return (
      <main className="auth page__main">
        <section className="auth__container">
          <h2 className="auth__title">
            Регистрация
          </h2>
          <AuthForm buttonText="Зарегистрироваться"/>
          <Link
              className="auth__link button link"
              to="/sign-in"
          >
            Уже&nbsp;зарегистрированы? Войти
          </Link>
        </section>
    
      </main>
  )
}

export default Register
