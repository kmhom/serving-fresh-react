import React from "react";
import { Route, Switch } from "react-router-dom";
import DisplayProducts from "./pages/displayProduct";
import Cart from "./pages/cart";

// Nav here will take all the adress from children page to this and give
// it to the switch route

function Nav() {
  return (
      <Switch>
        <Route exact path="/" component={DisplayProducts} />
        <Route path="/cart" component={Cart} />
      </Switch>
  );
}

export default Nav;