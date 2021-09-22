//import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//import screens
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import ProductScreen from "./screens/ProductScreen";

//import components
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
    <Navbar />
    {/*SideDrawer*/}
    {/*Backdrop*/}
    <main>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/product/:id" component={ProductScreen} />
        <Route exact path="/cart" component={CartScreen} />
      </Switch>
    </main>
  </Router>
  );   
}

export default App;
