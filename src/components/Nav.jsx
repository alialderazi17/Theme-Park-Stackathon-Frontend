import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <nav className="navbar">
      <div>
        <NavLink to="/themeparks">Theme Parks</NavLink>
        <NavLink to="/themeparks/new"> Add Park</NavLink>
      </div>
    </nav>
  )
}

export default Nav
