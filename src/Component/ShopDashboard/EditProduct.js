import axios from 'axios';
import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap';
import { editTool, getById } from '../../apicalls/Tool';

export default class EditProduct extends Component {
  constructor(props){
		super(props);
        this.state={
            shop:JSON.parse(localStorage.getItem('shopInfo')) || null,
            id:this.props.match.params.id,
            product: []
         }
  }

    componentDidMount() {
           console.log(this.state.category)
           this.getTools();
         }
         getTools = () => {
          let self = this;
          getById(self.state.id)
            .then(function (res) {
            // alert(res)
              self.setState({ product: res.data });
              console.log(res.data);
            })
            .catch((err) => console.log(err));
        };
     handleLogout=(event)=>{
        event.preventDefault();
        localStorage.clear()
        window.location.href='/'
   }
    handleChange=(event)=>{
      this.state.product[event.target.name] = event.target.value;
      this.setState({ product: this.state.product });
	}

	handleSubmit=(event)=>{
		event.preventDefault();
		var date=Date.now()
		editTool(this.state.product,1).then((res)=>{
        if(res==true){
          alert("Product Edited")
        }
       window.location.href=`/shopdash/${this.state.shop.id}`
		}).catch((err)=>{
	
		}
		)
	}
  

render() {
  
    const myStyle = {
        width:'100%',
        fontFamily: "Arial",
        height:"40px"
};

    return (
        <div class="container">
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
 {/* <li class="nav-item">
      <a onClick={()=>window.location.href='/profile'} class="nav-link">
        <span class="sidebar-icon"><span class="fa fa-user-circle"></span></span>
        {/* <span>{this.state.user.username}</span> */}
      {/* </a> */}
    {/* </li> */} 
    <li class="nav-item   ">
      {/* <a onClick={()=>window.location.href=`/userdash/${this.state.user.id}` } class="nav-link">
        <span class="sidebar-icon"><span  class="fa fa-book"></span></span>
        <span>Shop Products</span>
      </a> */}
    </li>

    <li class="nav-item ">
      <a onClick={()=>window.location.href='/userorders'} class="nav-link">
          <span class="sidebar-icon"><span class="fa fa-cart-plus"></span></span>
          <span>Client Orders</span>
      </a>
    </li>
     <li>
     <Button  variant="contained" color="secondary" onClick={(event)=>this.handleLogout(event)}>Logout</Button>
    </li>
    </ul>
</div>
</nav>

        <div>
            <div>
            <Form style={{marginLeft:"400px",paddingTop:"50px",paddingBottom:"50px", border:"0px"}}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label style={{color:"Black"}}>Product Name</Form.Label><br></br>
    <Form.Control defaultValue={this.state.product.name} name="name" onChange={(e) => this.handleChange(e)} style={{width:"436px"}} type="text" placeholder="Enter Name" required />
  </Form.Group>
  <Form.Group>
  <Form.Label style={{color:"Black"}}>Category</Form.Label><br></br>
          <select name="type" onChange={(e) => this.handleChange(e)}>
              <option>{this.state.product.type}</option>
              <option>Tent</option>
              <option>Shoes</option>
              <option>Pant</option>
          </select>
    </Form.Group><br></br>

  <Form.Group  className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{color:"Black"}}>Description</Form.Label><br></br>
    <Form.Control defaultValue={this.state.product.description} name="description"  onChange={(e) => this.handleChange(e)} style={{width:"436px"}} type="textarea" placeholder="Enter details" required />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label style={{color:"Black"}}>Size</Form.Label><br></br>
    <Form.Control defaultValue={this.state.product.size}  name="size"  onChange={(e) => this.handleChange(e)} style={{width:"436px"}} type="text" placeholder="enter Size" required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label style={{color:"Black"}}>Price</Form.Label><br></br>
    <Form.Control defaultValue={this.state.product.price}  name="price"  onChange={(e) => this.handleChange(e)} style={{width:"436px"}} type="text" placeholder="enter price" />
  </Form.Group>
  
  <Button onClick={(e) => this.handleSubmit(e)} style={{height:"50px"}} variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    )   
}
}