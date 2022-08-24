import "./TopNavbar.css";
import {
  faClockFour,
  faMailBulk,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../UI/button/Button";
const TopNavbar = () => {
  return (
    <div className="topNavbar">
      <div className="topNavbarContainer">
        <div className="topNavbarItems">
          <div className="topNavbarItem">
            <FontAwesomeIcon icon={faMailBulk} />
            <span>info@e-booking </span>
          </div>
          <div className="topNavbarItem">
            <FontAwesomeIcon icon={faMessage} />
            <span>+251 937928215</span>
          </div>
        </div>
        <div className="topNavbarItems">
          <div className="topNavbarItem">
            <FontAwesomeIcon icon={faClockFour} />
            <span>offical hour 8:00am - 6:00am</span>
          </div>
          <div className="topNavbarItem">
            <Button className="tobNavbarBtn">Contact us</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
