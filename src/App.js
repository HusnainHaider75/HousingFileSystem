import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/login";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import { useAuth0 } from "@auth0/auth0-react";
function App() {
  const{ isAuthenticated }=useAuth0();

  return (
    <>
    <Router> 
      { isAuthenticated ? <Topbar/> : ""}
      <div className="container"> 
      { isAuthenticated ? <Sidebar/> : "" } 
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/home" component={Home}/>
          <Route path="/users" component={UserList}/> 
          <Route path="/user/:userId" component={User}/> 
          <Route path="/newUser" component={NewUser}/> 
          <Route path="/products" component={ProductList}/> 
          <Route path="/product/:productId" component={Product}/>
          <Route path="/newproduct" component={NewProduct}/> 
        </Switch>

      </div>
    </Router>
    </>
  );
}

export default App;
