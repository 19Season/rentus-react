import React, { Component } from 'react';
import { addData, ShopLogin} from '../../apicalls/login';
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer';
import { Button, DropdownButton, Form } from 'react-bootstrap'
import './login.css'
import { Dropdown } from 'bootstrap';

export class loginform extends Component {
	constructor(props){
		super(props);
		this.state={
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
		
	}

	handleSubmit=(event)=>{
		// console.log(this.state.uname,this.state.psw,this.state.user)
		event.preventDefault();
		var date=Date.now()
		if(this.state.user=='Client'){
			console.log("client");
		addData(this.state.uname,this.state.psw,3).then((res)=>{
			if(res=="failed to signin"){
				alert("incorrect username or password")
			}else{
			localStorage.setItem("expiry_time",JSON.stringify(date+8640000));
			localStorage.setItem("clientInfo",JSON.stringify(res));
			window.location.href="/";
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
			ShopLogin(this.state.uname,this.state.psw,3).then((res)=>{
				if(res=="failed to signin"){
					alert("incorrect username or password")
				}else{
				localStorage.setItem("expiry_time",JSON.stringify(date+8640000));
				localStorage.setItem("shopInfo",JSON.stringify(res));
				window.location.href=`/shopdash/${res.id}`;
				console.log(res);
				}
				console.log(localStorage.getItem('userInfo'));	
			}).catch((err)=>{
				console.log(err)
					this.setState({uname:'',psw:''});
			}
			)
		}
	}
  render() {
    return (
<div>
	
  <div class="header">
	<div><NavBar/></div>
	<div>
	<div style={{backgroundImage:"url(https://img5.goodfon.com/wallpaper/nbig/9/1d/norvegiia-palatka-raavr-avrapr.jpg)", height:"850px"}}>
                <Form onSubmit={(event)=>this.handleSubmit(event)} style={{marginLeft:"400px",paddingTop:"50px",paddingBottom:"50px", border:"0px"}}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label style={{color:"White", marginTop:"90px"}}>Username</Form.Label><br></br>
    <Form.Control name="uname" onChange={(e)=>this.handleChange(e)} required style={{width:"436px"}} type="text" placeholder="Enter your username " required/>
    </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label style={{color:"White"}}>Password</Form.Label><br></br>
    <Form.Control name="psw" onChange={(e)=>this.handleChange(e)} required style={{width:"436px"}} type="password" placeholder="Enter Strong Password" />
  </Form.Group>


  <select className="dropdown" onChange={(e)=>this.handleChange(e)} name="user" >
	  	<option  value="Client">Login as client</option>
			<option  value="shop">Login as shop</option>
	  	  
</select><br></br><br></br> 
  <Button onClick={(event)=>this.handleSubmit(event)} style={{height:"50px"}} variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
</div>
  <div><Footer/></div>
</div>
</div>
    );
  }
}
export default loginform;

