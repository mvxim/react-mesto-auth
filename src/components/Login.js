import useForm from "../hooks/useForm"
import AuthForm from "./AuthForm"

const Login = ({ isLoading, onSignin }) => {
  
  const { handleChange, isValid, values, errors, resetForm } = useForm()
  
  const handleSubmit = (event) => {
    event.preventDefault()
    onSignin(values)
  }
  
  return (
      <main className="auth page__main">
        <section className="auth__container">
          <h2 className="auth__title">
            Вход
          </h2>
          <AuthForm
              onChange={ handleChange }
              onSubmit={ handleSubmit }
              formData={ values }
              buttonText="Войти"
              isFormValid={ isValid }
              errors={ errors }
              resetForm={ resetForm }
              isLoading={ isLoading }
          />
        </section>
      
      </main>
  )
}

export default Login
