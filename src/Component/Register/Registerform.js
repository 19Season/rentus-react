import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import { ClientRegister, ShopRegister } from '../../apicalls/Register';
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'

export default class Registerform extends Component {
  constructor(props){
		super(props);
		this.state={
      name:'',
      address:'',
      number:'',
      email:'',
			uname:'',
			psw:'',
			user:'Client'
		}
	}

	handleChange=(event)=>{
		this.setState({[event.target.name]:event.target.value});
		console.log(this.state.uname)
		console.log(this.state.psw)
		console.log(this.state.user)
		console.log(this.state.name)
		console.log(this.state.address)
		console.log(this.state.email)
		console.log(this.state.phone)
		
	}

	handleSubmit=(event)=>{
		// console.log(this.state.uname,this.state.psw,this.state.user)
		event.preventDefault();
		var date=Date.now()
		if(this.state.user=='Client'){
			console.log("client");
		ClientRegister(this.state.uname,this.state.psw,this.state.name,this.state.address,this.state.email,this.state.number,3).then((res)=>{
			if(res==null){
				alert("fill it properly")
			}else{
			window.location.href=`/login`;
			console.log(res);
			}
			console.log(localStorage.getItem('userInfo'));	
		}).catch((err)=>{
			console.log(err)
		}
		)
	}
		else{
			console.log("shop");
			ShopRegister(this.state.uname,this.state.psw,this.state.name,this.state.address,this.state.email,this.state.number,3).then((res)=>{
				if(res==null){
					alert("fill it properly")
				}else{
				window.location.href=`/login`;
				console.log(res);
				}
				console.log(localStorage.getItem('userInfo'));	
			}).catch((err)=>{
				console.log(err)
			}
			)
		}
	}
    render() {
        return (
            <div>
                <div><NavBar/></div>
                <div style={{backgroundImage:"url(https://img5.goodfon.com/wallpaper/nbig/9/1d/norvegiia-palatka-raavr-avrapr.jpg)", height:"850px"}} >
                <Form onSubmit={(event)=>this.handleSubmit(event)} style={{marginLeft:"400px",paddingTop:"50px",paddingBottom:"50px", border:"0px"}}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label style={{color:"White"}}>Name</Form.Label><br></br>
    <Form.Control name="name" onChange={(e)=>this.handleChange(e)} style={{width:"436px"}} type="text" placeholder="Enter Name" required />
  </Form.Group>
  <Form.Group>
  <Form.Label style={{color:"White"}}>Address</Form.Label><br></br>
    <Form.Control name="address" onChange={(e)=>this.handleChange(e)} style={{width:"436px"}} type="text" placeholder="Enter Address " required/>
    </Form.Group>
    <Form.Group><br></br>
  <Form.Label style={{color:"White"}}>Username</Form.Label><br></br>
    <Form.Control name="uname" onChange={(e)=>this.handleChange(e)} style={{width:"436px"}} type="text" placeholder="Enter your username " required/>
    </Form.Group><br></br>

  <Form.Group  className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{color:"White"}}>Email address</Form.Label><br></br>
    <Form.Control name="email" onChange={(e)=>this.handleChange(e)} style={{width:"436px"}} type="email" placeholder="Enter email" required /><br></br>
    <Form.Text style={{color:"White"}} >
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label style={{color:"White"}}>Phone Number</Form.Label><br></br>
    <Form.Control name="number" onChange={(e)=>this.handleChange(e)} style={{width:"436px"}} type="number" placeholder="enter Strong Password" required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label style={{color:"White"}}>Password</Form.Label><br></br>
    <Form.Control name="psw" onChange={(e)=>this.handleChange(e)} style={{width:"436px"}} type="password" placeholder="enter Strong Password" />
  </Form.Group>
  <select onChange={(e)=>this.handleChange(e)} name="user" >
	  	  <option value="Client">Register as client</option>
			<option value="shop">Register as shop</option>
</select><br></br>
  <Button style={{ marginTop:"50px", height:"50px", }} variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
<div><Footer/></div>
            </div>
        )
    }
}
