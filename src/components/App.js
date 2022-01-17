import { useState } from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import "../index.css"
import AppContent from "./AppContent"
import Footer from "./Footer"
import Header from "./Header"
import Login from "./Login"
import ProtectedRoute from "./ProtectedRoute"
import Register from "./Register"


function App() {
  const [ isLoggedIn, setIsLoggedIn ] = useState(true)

  return (
      <div className="page">
        <div className="page__container">
          <Header/>
          <Switch>
            <ProtectedRoute
                exact
                path="/"
                loggedIn={ isLoggedIn }
                component={ AppContent }
            />
            <Route path="/sign-up">
              <Register/>
            </Route>
            <Route path="/sign-in">
              <Login/>
            </Route>
            <Route>
              { isLoggedIn ? (
                  <Redirect exact to="/" />
              ) : (
                   <Redirect to="/sign-in" />
               )}
            </Route>
          </Switch>
          <Footer/>
        </div>
      </div>
  )
}

export default App
