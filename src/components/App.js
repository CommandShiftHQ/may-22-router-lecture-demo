import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  NavLink,
} from "react-router-dom";
import "../styles/app.css";

import productsJson from "../data/products.json";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";

const App = () => {
  return (
    <div className="app active">
      <Router>
        <h1>Example shop</h1>
        <nav>
          <ul className="app__nav-list">
            <li className="app__nav-list-item">
              <NavLink className="app__nav-list-link" end to="/">Homepage</NavLink>
            </li>
            <li className="app__nav-list-item">
              <NavLink className="app__nav-list-link" to="products">Products</NavLink>
            </li>
            <li className="app__nav-list-item">
              <NavLink className="app__nav-list-link" to="about">About</NavLink>
            </li>
            <li className="app__nav-list-item">
              <NavLink className="app__nav-list-link" to="contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<h2>Home component</h2>} />
          <Route path="products" element={<ProductList products={productsJson} />} />
          <Route path="products/product/:id" element={<ProductDetails products={productsJson} />} />
          <Route path="about" element={<h2>About component</h2>} />
          <Route path="contact" element={<h2>Contact component</h2>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
