import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Registerform from "./Component/Register/Registerform";
import Admindashboard from "./Component/admindashboard/Admindashboard";
import ProductManagement from "./Component/admindashboard/ProductManagement";
import OrderManagement from "./Component/admindashboard/OrderManagement";
import ClientManagement from "./Component/admindashboard/ClientManagement";
import ShopManagement from "./Component/admindashboard/ShopManagement";
import Home from "./Component/Home/Homepage";
import loginform from "./Component/login/loginform";
import Shopdashboard from "./Component/ShopDashboard/ShopProduct";
import Addproduct from "./Component/ShopDashboard/AddProduct";
import Product from "./Component/Home/Product";
import ContactUs from "./Component/ContactUs/ContactUs";
import ProductDetail from "./Component/Home/ProductDetail";
import Search from "./Component/Home/Search";
import ProductOrderForm from "./Component/OrderForm/ProductOrderForm"
import myOrders from "./Component/MyOrders/myOrders";
import ShopOrders from "./Component/ShopDashboard/ShopOrders";
import EditProduct from "./Component/ShopDashboard/EditProduct";

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expired: localStorage.getItem("expiry_time") || null,
      isClientLogin: localStorage.getItem("clientInfo")
        ? !!JSON.parse(localStorage.getItem("clientInfo"))
        : false,
      clientInfo: localStorage.getItem("clientInfo")
        ? JSON.parse(localStorage.getItem("clientInfo"))
        : [],
      adminLogin: localStorage.getItem("admininfo") || false,
    };
  }
  componentDidMount() {
    this.checkIfExpired();
  }
  checkIfExpired = () => {
    if (this.state.clientInfo.length && this.state.expired <= Date.now()) {
      localStorage.clear();
      window.location.reload();
    }
  };
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/admindash" component={Admindashboard} />
            <Route exact path="/products" component={ProductManagement} />
            <Route exact path="/Client" component={ClientManagement} />
            <Route exact path="/Shop" component={ShopManagement} />
            <Route exact path="/orders" component={OrderManagement} />
          </Switch>

          <Switch>
            <Route exact path="/shopdash/:id" component={Shopdashboard} />
            <Route exact path="/shoporder/:id" component={ShopOrders} />

            <Route exact path="/add" component={Addproduct} />
            <Route exact path="/edit/:id" component={EditProduct} />
          </Switch>

{
		this.state.isClientLogin?
          <Switch>
            <Route exact path="/login" component={Home} />
            <Route exact path="/register" component={Home} />
            <Route exact path="/" component={Home} />
            <Route exact path="/product" component={Product} />
            <Route exact path="/contactUs" component={ContactUs} />
            <Route exact path="/productdetail/:id" component={ProductDetail} />
            <Route exact path="/search/:type" component={Search} />
            <Route exact path="/order/:id" component={ProductOrderForm} />
            <Route exact path="/myorders/:id" component={myOrders} />

          </Switch>:
           <Switch>
           <Route exact path="/login" component={loginform} />
           <Route exact path="/register" component={Registerform} />
           <Route exact path="/" component={Home} />
           <Route exact path="/product" component={Product} />
           <Route exact path="/contactUs" component={ContactUs} />
           <Route exact path="/productdetail/:id" component={ProductDetail} />
           <Route exact path="/search/:type" component={Search} />
           <Route exact path="/order/:id" component={loginform} />
           
         </Switch>}

                  </Router>
      </div>
    );
  }
}
export default Routes;
