import "./navbar.css"
// import Button form '../UI/button/Button'
import Button from "../../UI/button/Button"
import { useState } from "react"
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const [title, setTitle] = useState("register");
  const handler = () => {
    setTitle("updated");
  }
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/");
  };
  return (
    <div className="navbar">
      <div className="navContainer">
        <h2 className="logo" onClick={handleSearch}>BOOKING</h2>
        <div className="navItems">
          <Button className="navButton" onClick={handler}>{title}</Button>
          <Button className="navButton">Login</Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar