import React from "react"
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import Home from './routes/home'
import Portfolio from './routes/portfolio'
import Contact from './routes/contact'

const App = () => {

  const menu = React.useRef(null)

  const burger = () => {
    menu.current.classList.toggle('is-active')
  }

    return (

<Router>
<nav className="navbar is-fixed-top is-black" role="navigation" aria-label="main navigation">
<div className="container">
  <div className="navbar-brand">
    <a role="button" className="navbar-burger" onClick={burger} aria-label="menu" aria-expanded="false">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  <div ref={menu} className="navbar-menu">
    <div className="navbar-start">
      <Link className="navbar-item" to='/'>Home</Link>
      <Link className="navbar-item" to='/portfolio'>Portfolio</Link>
      <Link className="navbar-item" to='/contact'>Contact</Link>
    </div>
    <div className="navbar-end">
      <div className="navbar-item">
        <div className="field is-grouped">
          <div className="control">
            <a href="https://twitter.com/kikers17" className="button">
            <span className="icon">
              <i className="fab fa-twitter"></i>
            </span>
            <span>Twitter</span>
            </a>
          </div>
          <div classNameName="control">
            <a href="https://github.com/kikers17" className="button">
              <span className="icon">
                <i className="fab fa-github"></i>
              </span>
              <span>Github</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</nav>
<Switch>
  <Route path="/portfolio">
    <Portfolio/>
  </Route>
  <Route path="/contact">
    <Contact/>
  </Route>
  <Route path="/">
    <Home/>
  </Route>
  </Switch>
</Router>

        )
}


export default App
