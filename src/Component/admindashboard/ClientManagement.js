import { Button } from '@material-ui/core';
import React, { Component } from 'react'
import { getClients } from '../../apicalls/client';

export default class ClientManagement extends Component {
    state={
		Clients:[]
	}

    componentDidMount() {
        this.getallClients();
        console.log(this.state.Clients)
    }

    getallClients=()=>{
        let self=this;
        getClients().then(function(res){
            console.log(res.data)
            self.setState({Clients:res.data})
        }).catch((err)=>console.log(err));
    }

    // handleDelete=(e,id)=>{
    //     DeleteTool(id).then(function(res){
    //       console.log(res)
    //       window.location.reload()
    //     }).catch((err)=>console.log(err));
    // }
    
    render() {
        return (
            <div>
                <nav class="navbar navbar-dark navbar-theme-primary px-4 col-12 d-md-none">
    <a class="navbar-brand mr-lg-5" href="../../index.html">
        <img class="navbar-brand-dark" src="../../assets/img/brand/light.svg" alt="Volt logo" /> <img class="navbar-brand-light" src="../../assets/img/brand/dark.svg" alt="Volt logo" />
    </a>
    <div class="d-flex align-items-center">
        <button class="navbar-toggler d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    </div>
</nav>

        <div class="container-fluid bg-soft">
            <div class="row">
                <div class="col-12">

                    <nav id="sidebarMenu" class="sidebar d-md-block bg-primary text-white collapse" data-simplebar>
    <div class="sidebar-inner px-4 pt-3">
      <div class="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
        <div class="d-flex align-items-center">
          <div class="user-avatar lg-avatar mr-4">
            <img src="" class="card-img-top rounded-circle border-white" alt="Bonnie Green" />
          </div>
        </div>
      </div>
      <ul class="nav flex-column">
      <li class="nav-item  active ">
          <a onClick={()=>window.location.href='/admindash'} class="nav-link">
            <span class="sidebar-icon"><span class="fas fa-chart-pie"></span></span>
            <span>Back</span>
          </a>
        </li>
        <li class="nav-item ">
          <a onClick={()=>window.location.href='/products'} class="nav-link">
              <span class="sidebar-icon"><span class="fas fa-hand-holding-usd"></span></span>
              <span>Products </span>
          </a>
        </li>
        <li class="nav-item ">
          <a onClick={()=>window.location.href='/Client'} class="nav-link">
              <span class="sidebar-icon"><span class="fas fa-cog"></span></span>
              <span>Clients</span>
          </a>
        </li>
        <li class="nav-item ">
          <a onClick={()=>window.location.href='/shop'} class="nav-link">
              <span class="sidebar-icon"><span class="fas fa-cog"></span></span>
              <span>Shops</span>
          </a>
        </li>

        <li class="nav-item ">
          <a onClick={()=>window.location.href='/orders'} class="nav-link">
              <span class="sidebar-icon"><span class="fas fa-cog"></span></span>
              <span>Order</span>
          </a>
        </li>
        {/* <li class="nav-item ">
          <a onClick={()=>window.location.href='/admins'} class="nav-link">
              <span class="sidebar-icon"><span class="fas fa-cog"></span></span>
              <span>Admin</span>
          </a>
        </li> */}
         <li>
         <Button  variant="contained" color="secondary" onClick={()=>window.location.href='/'}>Logout</Button>
        </li>
        </ul>
    </div>
</nav>









                
                    <main class="content">

                        


                        <div class="mt-5 px-4">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>Username</th>						
                                        <th>Address</th>
                                        <th>Email</th>
                                        <th>Contact</th>
                                        {/* <th>Action</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                {this.state.Clients.map((item)=>
                                    <tr>
                                        <td>
                                            <a href="../invoice.html" class="font-weight-bold">
                                                {item.id}
                                            </a>
                                        </td>
                                        <td>
                                            <span class="font-weight-normal">{item.username}</span>
                                        </td>
                                        <td><span class="font-weight-normal">{item.address}</span></td>                        
                                        <td><span class="font-weight-normal">{item.email}</span></td>

                                        <td><span class="font-weight-bold text-warning">{item.phone}</span></td>
                                          <td>
                                            {/* <div class="btn-group">
                                                <Button style={{ width:"100px"}} variant ="contained" color="primary" onClick={this.handleDelete(item.id)}>Delete</Button>
                                            </div> */}
                                        </td>
                                    </tr>
                                )}
                                                
                                </tbody>
                            </table>
                           
                        </div>
                        
                    </main>
                </div>
            </div>
        </div>
            </div>
        )
    }
}