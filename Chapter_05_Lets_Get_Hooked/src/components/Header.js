import { LOGO_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={LOGO_URL} />
      <div className="search">
        <FontAwesomeIcon icon={faSearch} size="2x" />
      </div>

      <ul className="nav-items">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>
          {" "}
          <FontAwesomeIcon icon={faShoppingCart} />
        </li>
      </ul>
    </div>
  );
};

export default Header;
