import { Link } from "react-router-dom"
import useForm from "../hooks/useForm"
import AuthForm from "./AuthForm"

const Register = ({ isLoading, onSignup }) => {
  
  const { handleChange, isValid, values, errors, resetForm } = useForm()
  
  const handleSubmit = (event) => {
    event.preventDefault()
    onSignup(values)
  }
  return (
      <main className="auth page__main">
        <section className="auth__container">
          <h2 className="auth__title">
            Регистрация
          </h2>
          <AuthForm
              onChange={ handleChange }
              onSubmit={ handleSubmit }
              formData={ values }
              buttonText="Зарегистрироваться"
              isFormValid={ isValid }
              errors={ errors }
              resetForm={ resetForm }
              isLoading={ isLoading }
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
