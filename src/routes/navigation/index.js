import {Outlet, Link} from "react-router-dom"
import {Fragment} from "react"

import "../../styles/navigation.scss"

const Navigation = () => {
  return (
    <Fragment>
      <div className="nav">
        <Link className="nav-home" to="/">
          <h1>Poketch App</h1>
        </Link>
        <div className="nav-modes-container">
          <Link className="nav-mode" to="/pokedex">
            <h3>Pokedex</h3>
          </Link>
          <Link className="nav-mode" to="/type-matchups">
            <h3>Type Matchups</h3>
          </Link>
          <Link className="nav-mode" to="/team-builder">
            <h3>Team Builder</h3>
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
