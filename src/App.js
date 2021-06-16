import "./App.css";
import Index from "./Pages/Index";
import Product from "./Pages/Product";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Index />
        </Route>
        <Route path="/*">
          <Product />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
