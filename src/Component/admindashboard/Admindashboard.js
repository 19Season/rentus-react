import React, { Component } from 'react';
import "./css/volt.css";
import "./vendor/notyf/notyf.min.css";
import "./vendor/@fortawesome/fontawesome-free/css/all.min.css";

export default class Admindashboard extends Component {
    render() {
        return (
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
            <span>Overview</span>
          </a>
        </li>
        <li class="nav-item ">
          <a onClick={()=>window.location.href='/products'} class="nav-link">
              <span class="sidebar-icon"><span class="fas fa-hand-holding-usd"></span></span>
              <span>Tools</span>
          </a>
        </li>
        <li class="nav-item ">
          <a onClick={()=>window.location.href='/users'} class="nav-link">
              <span class="sidebar-icon"><span class="fas fa-cog"></span></span>
              <span>Clients</span>
          </a>
        </li>
        <li class="nav-item ">
          <a onClick={()=>window.location.href='/orders'} class="nav-link">
              <span class="sidebar-icon"><span class="fas fa-cog"></span></span>
              <span>Order</span>
          </a>
        </li>
        <li class="nav-item ">
          <a onClick={()=>window.location.href='/admins'} class="nav-link">
              <span class="sidebar-icon"><span class="fas fa-cog"></span></span>
              <span>Admin</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>










                
                    <main class="content">

                        <nav class="navbar navbar-top navbar-expand navbar-dashboard navbar-dark pl-0 pr-2 pb-0">
    <div class="container-fluid px-0">
      <div class="d-flex justify-content-between w-100" id="navbarSupportedContent">
        <div class="d-flex">
         
          <form class="navbar-search form-inline" id="navbar-search-main">
            <div class="input-group input-group-merge search-bar">
                <span class="input-group-text" id="topbar-addon"><span class="fas fa-search"></span></span>
                <input type="text" class="form-control" id="topbarInputIconLeft" placeholder="Search" aria-label="Search" aria-describedby="topbar-addon" />
            </div>
          </form>
        </div>

        <ul class="navbar-nav align-items-center">
         
          <li class="nav-item dropdown">
            <a class="nav-link pt-1 px-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <div class="media d-flex align-items-center">
                <img class="user-avatar md-avatar rounded-circle" alt="Image placeholder" src="" />
                <div class="media-body ml-2 text-dark align-items-center d-none d-lg-block">
                  <span class="mb-0 font-small font-weight-bold">Bonnie Green</span>
                </div>
              </div>
            </a>
            <div class="dropdown-menu dashboard-dropdown dropdown-menu-right mt-2">
              <a class="dropdown-item font-weight-bold" href="#"><span class="far fa-user-circle"></span>My Profile</a>
              <a class="dropdown-item font-weight-bold" href="#"><span class="fas fa-cog"></span>Settings</a>
              <a class="dropdown-item font-weight-bold" href="#"><span class="fas fa-envelope-open-text"></span>Messages</a>
              <a class="dropdown-item font-weight-bold" href="#"><span class="fas fa-user-shield"></span>Support</a>
              <div role="separator" class="dropdown-divider"></div>
              <a class="dropdown-item font-weight-bold" href="#"><span class="fas fa-sign-out-alt text-danger"></span>Logout</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>

                       
                        
                            <div class="col-12 col-sm-6 col-xl-4 mb-4">
                                <div class="card border-light shadow-sm">
                                    <div class="card-body">
                                        <div class="row d-block d-xl-flex align-items-center">
                                           
                                            <div class="col-12 col-xl-7 px-xl-0">
                                                <div class="d-none d-sm-block">
                                                    <h2 class="h5">Users</h2>
                                                    <h3 class="mb-1">345k</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 col-xl-4 mb-4">
                                <div class="card border-light shadow-sm">
                                    <div class="card-body">
                                        <div class="row d-block d-xl-flex align-items-center">
                                            <div class="col-12 col-xl-7 px-xl-0">
                                                <div class="d-none d-sm-block">
                                                    <h2 class="h5">Books</h2>
                                                    <h3 class="mb-1">$43,594</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 col-xl-4 mb-4">
                                <div class="card border-light shadow-sm">
                                    <div class="card-body">
                                        <div class="row d-block d-xl-flex align-items-center">
                                        <div class="col-12 col-xl-7 px-xl-0">
                                                <div class="d-none d-sm-block">
                                                    <h2 class="h5">Orders</h2>
                                                    <h3 class="mb-1">$43,594</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                      </main>  
                </div>
            </div>
            </div>
        </div>
        </div>
        )
    }
}
