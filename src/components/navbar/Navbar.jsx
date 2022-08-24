import "./navbar.css"
// import Button form '../UI/button/Button'
import Button from "../../UI/button/Button"
import { useState } from "react"


const Navbar = () => {
  const [title, setTitle] = useState("register");
  const handler = () => {
    setTitle("updated");
  }
  return (
    <div className="navbar">
      <div className="navContainer">
        <h2 className="logo">BOOKING</h2>
        <div className="navItems">
          <Button className="navButton" onClick={handler}>{title}</Button>
          <Button className="navButton">Login</Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar