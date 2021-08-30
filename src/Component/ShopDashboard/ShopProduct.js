import React, { Component } from 'react'
//  import { getUserBook } from '../../apiCall/BookAPI'
//  import {deleteBook } from '../../apiCall/BookAPI'
import { Button } from '@material-ui/core'
import { DeleteTool, getAllBookedTools, getByShopId } from '../../apicalls/Tool'
import { Link } from 'react-router-dom'

export  class Shopdashboard extends Component {

  constructor(props){
        super(props)
        this.state={
            shop:JSON.parse(localStorage.getItem('shopInfo')) || null,
            id:this.props.match.params.id,
            product:[]
            }
    }

    componentDidMount() {
      console.log(this.props.match.params.userId)
       this.getAllBookedTool();
       console.log(this.state.tools)
       
    }

    handleDelete=(e,id)=>{
        DeleteTool(id).then(function(res){
          console.log(res)
          window.location.reload()
        }).catch((err)=>console.log(err));
    }





    getAllBookedTool=()=>{
      let self=this;
      getByShopId(this.state.id).then(function(res){
        //   alert(res)
            self.setState({product:res})
        }).catch((err)=>console.log(err));
    }

    handleEdit=(e,id)=>{
        console.log(id)
        e.preventDefault();
        // window.location.href=`/edit/${id}`;
      }

    handleLogout=(event)=>{
        event.preventDefault();
        localStorage.clear()
        window.location.href='/'
    }

    render() {
     
     const imgStyle={
      width:'50px'
     }
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
     
      <ul class="nav flex-column">
       <li>
        <Button className="dash"  variant="contained" color="primary" onClick={()=>window.location.href='/'}> <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>&nbsp;Return to Home</Button>
        </li>
     {/* <li class="nav-item  active  ">
          <a onClick={()=>window.location.href='/profile'} class="nav-link">
            <span class="sidebar-icon"><span class="fa fa-user-circle"></span></span>
            <span>{this.state.user.username}</span>
          </a>
        </li> */}
        {/* <li class="nav-item  ">
          <a onClick={()=>window.location.href=`/edit/${this.state.id}`} class="nav-link">
              <span class="sidebar-icon"><span class="fa fa-plus"></span></span>
              <span>Edit Products</span>
          </a>
        </li> */}
        <li class="nav-item ">
          <a onClick={()=>window.location.href=`/shoporder/${this.state.id}`} class="nav-link">
              <span class="sidebar-icon"><span class="fa fa-cart-plus"></span></span>
              <span>Shop Orders</span>
          </a>
        </li>
        <li class="nav-item ">
          <a onClick={()=>window.location.href='/add'} class="nav-link">
              <span class="sidebar-icon"><span class="fa fa-cart-plus"></span></span>
              <span>Add products</span>
          </a>
        </li>
         <li>
           <Button  variant="contained" color="secondary" onClick={(event)=>this.handleLogout(event)}>Logout</Button>
        </li>
        </ul>
    </div>
</nav>









                
                    <main class="content">

          


                        <div class= " mt-5">

                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>name</th>						
                                        <th>price</th>
                                        <th>size</th>
                                        <th>type</th>
                                        <th>Image</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                {this.state?.product?.map((item)=>
                                    <tr>
                                        <td>
                                            <span class="font-weight-normal">{item?.name}</span>
                                        </td>                      
                                        <td><span class="font-weight-normal">{item?.price}</span></td>
                                        <td><span class="font-weight-bold">{item?.size}</span></td>
                                        <td><span class="font-weight-bold text-warning">{item?.type}</span></td>
                                        <td><img style={imgStyle} src={item?.image} /></td>
                                        <td>
                                            <div class="btn-group">
                                                <Link to={`/edit/${item.id}`}>
                                                <Button variant="contained" color="primary" >Edit</Button></Link>&nbsp;

                                                 <Button variant="contained" color="primary" onClick={(e)=>this.handleDelete(e,item.id)}>Delete</Button>
                                        
                                            </div>
                                        </td>                                    </tr>
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
export default Shopdashboard;