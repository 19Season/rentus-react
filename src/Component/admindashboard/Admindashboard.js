import { Button } from '@material-ui/core';
import React, { Component } from 'react'
import "../css/volt.css";


export default class Admindashboard extends Component {
    render() {
        return (
            <div>
                <div>
                <div>
                 <nav class="navbar navbar-dark navbar-theme-primary px-4 col-12 d-md-none">
    <a class="navbar-brand mr-lg-5" href="../../index.html">
        <img class="navbar-brand-dark" src="" alt="Volt logo" /> <img class="navbar-brand-light" src="" alt="Volt logo" />
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
          <div class="d-block">
            <h2 class="h6">Hi, Jane</h2>
            <a href="../../pages/examples/sign-in.html" class="btn btn-secondary text-dark btn-xs"><span class="mr-2"><span class="fas fa-sign-out-alt"></span></span>Sign Out</a>
          </div>
        </div>
        <div class="collapse-close d-md-none">
            <a href="#sidebarMenu" class="fas fa-times" data-toggle="collapse"
                data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="true"
                aria-label="Toggle navigation"></a>
        </div>
      </div>
      <ul class="nav flex-column">
        <li class="nav-item  active ">
          <a onClick={()=>window.location.href='/admindash'} class="nav-link">
            <span class="sidebar-icon"><span class="fas fa-chart-pie"></span></span>
            <span> Admin Dashboard</span>
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
              <span>Client</span>
          </a>
        </li>
        <li class="nav-item ">
          <a onClick={()=>window.location.href='/Shop'} class="nav-link">
              <span class="sidebar-icon"><span class="fas fa-cog"></span></span>
              <span>Shop</span>
          </a>
        </li>


        <li class="nav-item ">
          <a onClick={()=>window.location.href='/orders'} class="nav-link">
              <span class="sidebar-icon"><span class="fas fa-cog"></span></span>
              <span>Order</span>
          </a>
        </li>
         <li>
         <div class="btn-group">
         <Button  variant="contained" color="secondary" onClick={()=>window.location.href='/'}>Logout</Button>
        </div>
        </li>
      </ul>
    </div>
  </nav>

                </div>
            </div>
            </div>
        </div>
        </div>
            </div>
        )
    }
}
