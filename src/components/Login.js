import React from "react"
import { useHistory } from "react-router-dom"
import * as auth from "../auth"
import useForm from "../hooks/useForm"
import AuthForm from "./AuthForm"

const Login = ({ isLoggedIn }) => {
  
  const { handleChange, isValid, values, errors, resetForm } = useForm()
  
  
  const history = useHistory()
  
  const handleAuth = (event) => {
    event.preventDefault()
    console.log(values)
    auth.login(values).then(response => {
      console.log(response)
      isLoggedIn(true)
      // history.push("/")
    })
        .catch((error) => {
          console.log(error)
        })
  }
  
  return (
      <main className="auth page__main">
        <section className="auth__container">
          <h2 className="auth__title">
            Вход
          </h2>
          <AuthForm
              onChange={ handleChange }
              onSubmit={ handleAuth }
              formData={ values }
              buttonText="Войти"
              isFormValid={ isValid }
              errors={ errors }
              resetForm={resetForm}
          />
        </section>
      
      </main>
  )
}

export default Login
