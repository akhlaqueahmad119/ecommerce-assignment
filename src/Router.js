import { Routes, Route } from "react-router-dom";

// All Product Pages
import AllProductPage from "./page/allProduct";
import CartPage from "./page/cart";


function Router() {

  return (
    <Routes>
      <Route exact path="/" element={<AllProductPage />} />
      <Route exact path="/cart" element={<CartPage />} />
    </Routes>
  );
}

export default Router;
