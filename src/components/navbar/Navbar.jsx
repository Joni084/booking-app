import "./navbar.css"
// import Button form '../UI/button/Button'
import Button from "../../UI/button/Button"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">BOOKING</span>
        <div className="navItems">
          <Button className="navButton">Register</Button>
          <Button className="navButton">Login</Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar