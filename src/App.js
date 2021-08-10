import "./App.css";
import Index from "./Pages/Index";
import Product from "./Pages/Product";
import { Switch, Route } from "react-router-dom";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import { ColorfulBorder, Header, Menu } from "./Components";

function App() {
  return (
    <>
      <Header />
      <ColorfulBorder />
      <Menu />
      <Switch>
        <Route path="/" exact>
          <Index />
        </Route>
        <Route path="/category/:id">
          <Products />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/*">
          <Product />
        </Route>
      </Switch>
    </>
  );
}

export default App;
