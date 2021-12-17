import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Announcement from "./components/Announcement";
import { Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <main>
        <Route exact path="/">
          <Redirect to="/collections" />
        </Route>
        <Route exact path="/collections">
          <Home />
        </Route>
        <Route exact path="/myGarage">
          <ProductList />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route> 
        <Route exact path="/myGarage/:productId">
          <Product />
        </Route> 
      </main>
    </div>
  )
};

export default App;
