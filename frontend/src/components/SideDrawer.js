import "./SideDrawer.css";
import { Link } from "react-router-dom";

const SideDrawer = ({ show, click }) => {
  const sideDrawerClass = ["sidedrawer"];

  if (show) {
    sideDrawerClass.push("show");
  }
  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className="sidedrawer__links" onClick={click}>
        <li>
          <Link to="/cart" className="cart__link">
            <span>
              <i className="fas fa-shopping-cart fa-2x" aria-hidden="true"></i>
            </span>
            <span>
              Cart
              <span className="cartlogo__badge">0</span>
            </span>
          </Link>
        </li>
        <li>
            <Link to="/">Shop</Link>
          </li>
      </ul>
    </div>
  );
};

export default SideDrawer;


