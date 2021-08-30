import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import { makeOrders } from '../../apicalls/Order'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'

export default class Registerform extends Component {
    constructor(props){
        super(props)
        this.state = {
        
          id:this.props.match.params.id,
          isLogin:!!localStorage.getItem('clientInfo') || false,
          client:JSON.parse(localStorage.getItem('clientInfo')) || null,
          address:'',
          name:'',
          phone:'',
        }
        }      
    componentDidMount() {
     
      }
       handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value});
      }
      orderProduct=(event)=>{
        alert("here")
        if(this.state.isLogin==false){
          window.location.href='/login'
        }
        if(this.state.client ==null || this.state.client==[]|| this.state.client==''){
          window.location.href='/login'
        }else{
        makeOrders(this.state.id,this.state.client.id,this.state.name,this.state.address,this.state.phone,3)
         .then(function (res) {
              window.location.href="/"
             alert("order successful")
          })
           .catch((err) => console.log(err));
      }
      }
    render() {
        return (
            <div>
                <div><NavBar/></div>
                <div style={{backgroundImage:"url(https://img5.goodfon.com/wallpaper/nbig/9/1d/norvegiia-palatka-raavr-avrapr.jpg)", height:"850px"}} >
                <Form method="post" onSubmit={(e)=>this.orderProduct(e)} style={{marginLeft:"400px",paddingTop:"200px",paddingBottom:"50px", border:"0px"}}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label style={{color:"White"}}>Name</Form.Label><br></br>
    <Form.Control onChange={(e)=>this.handleChange(e)} name='name' style={{width:"436px"}} type="text" placeholder="Enter Name" required />
  </Form.Group>
  <Form.Group>
  <Form.Label style={{color:"White"}}> Delivery address</Form.Label><br></br>
    <Form.Control onChange={(e)=>this.handleChange(e)} name='address' style={{width:"436px"}} type="text" placeholder="Enter Address " required/>
    </Form.Group>
    <Form.Group><br></br>
  <Form.Label style={{color:"White"}}>Contact Number</Form.Label><br></br>
    <Form.Control onChange={(e)=>this.handleChange(e)} name='phone' style={{width:"436px"}} type="text" placeholder="enter your phone number   " required/>
    </Form.Group><br></br>
  <Button  style={{height:"50px"}} variant="primary" type="submit" >
    Order
  </Button>
</Form>
</div>
<div><Footer/></div>
            </div>
        )
    }
}
