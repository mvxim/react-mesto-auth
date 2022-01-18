import { Link, useHistory } from "react-router-dom"
import * as auth from "../auth"
import useForm from "../hooks/useForm"
import AuthForm from "./AuthForm"

const Register = ({signUpStatus, isLoading, setIsLoading, handleInfoTooltip}) => {
  
  const { handleChange, isValid, values, errors, resetForm } = useForm()
  
  const history = useHistory()
  
  const handleRegistration = (event) => {
    event.preventDefault()
    setIsLoading(true)
    auth.register(values).then(response => {
      signUpStatus(true)
      handleInfoTooltip(true)
      history.push("/sign-in")
      console.log(response)
    })
        .catch((error) => {
          console.log(error)
          signUpStatus(false)
          handleInfoTooltip(true)
        })
        .finally(() => setIsLoading(false))
  }
  
  return (
      <main className="auth page__main">
        <section className="auth__container">
          <h2 className="auth__title">
            Регистрация
          </h2>
          <AuthForm
              onChange={ handleChange }
              onSubmit={ handleRegistration }
              formData={ values }
              buttonText="Зарегистрироваться"
              isFormValid={ isValid }
              errors={ errors }
              resetForm={resetForm}
              isLoading={isLoading}
          />
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
