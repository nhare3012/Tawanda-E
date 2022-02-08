import "./HomeScreen.css";
// import { Link } from "react-router-dom";
import Product from "../components/Product";

function HomeScreen() {
  return (
    <div className="container t mt-5">
      <h2 className="homescreen__title ">Latest Arrivals</h2>
      <hr />
      <div className="homescreen__product  ">
        <Product />
      </div>
      {/* <Link to={`/product/${111}`} className="info__button">
        View Catalogue
      </Link> */}
    </div>
  );
}

export default HomeScreen;
