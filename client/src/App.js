import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
// import Navbar from "./components/Navbar";
import NavLinks from "./components/Navigation/NavLinks";
import Announcement from "./components/Announcement";
import { Route, Redirect, Switch } from "react-router-dom";
import React, { useCallback, useState } from "react";
import Auth from "./pages/Auth";
import { AuthContext } from "./shared/context/auth-context";
import Collections from "./pages/Collections";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;
  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/collections">
          <Collections />
        </Route>
        <Route exact path="/myGarage">
          <ProductList />
        </Route>
        <Route exact path="/myGarage/:productId">
          <Product />
        </Route>
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/collections">
          <Collections />
        </Route>
        <Route exact path="/login">
          <Auth />
        </Route>
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
  
      <NavLinks />
      <Announcement />
      <main>{routes}</main>
    
    </AuthContext.Provider>
  );
};

export default App;
