import React from "react"
import AuthForm from "./AuthForm"

const Login = () => {
  
  return (
      <main className="auth page__main">
        <section className="auth__container">
          <h2 className="auth__title">
            Вход
          </h2>
          <AuthForm buttonText="Войти"/>
        </section>
      
      </main>
  )
}

export default Login
