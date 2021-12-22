import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import About from "./Pages/Home/About/About";
import Products from "./Pages/Home/Products/Products";
import Navigation from "./Pages/Shared/Navigation/Navigation";
import Footer from "./Pages/Shared/Footer/Footer";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import Booking from "./Pages/Booking/Booking/Booking";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import AddProduct from "./Pages/AddProduct/AddProduct";
import ManageProducts from "./Pages/ManageProducts/ManageProducts";
import MyOrders from "./Pages/MyOrders/MyOrders";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>

            <Route path="/booking/:productId">
              <Booking></Booking>
            </Route>
            <Route path="/myOrders">
              <MyOrders></MyOrders>
            </Route>
            <PrivateRoute path="/addAProduct">
              <AddProduct />
            </PrivateRoute>
            <PrivateRoute path="/manageProducts">
              <ManageProducts></ManageProducts>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
