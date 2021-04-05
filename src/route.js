import React, { Component } from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import SignIn from './Component/login/loginform';
import Registerform from './Component/Register/Registerform';
import AdminManagement from './Component/admindashboard/AdminManagement';
import Admindashboard from './Component/admindashboard/Admindashboard';
import Productmanagement from './Component/admindashboard/Productmanagement';
import UserManagement from './Component/admindashboard/UserManagement';
import OrderManagement from './Component/admindashboard/OrderManagement';

class Routes extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/login" component={SignIn}/>
                        <Route exact path="/register" component={Registerform}/> 
                        <Route exact path="/admindash" component={Admindashboard} />
						<Route exact path="/products" component={Productmanagement} />
						<Route exact path="/users" component={UserManagement} />
						<Route exact path="/admins" component={AdminManagement} />
						<Route exact path="/orders" component={OrderManagement} />
                    </Switch>
                </Router>
            </div>
        )
    }
}
export default Routes;
