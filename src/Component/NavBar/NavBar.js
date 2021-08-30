import React, { Component } from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap'
import { getToolsByCategory } from '../../apicalls/Tool';
import logo from '../images/rentus.png';
import "./NavBar.css";

export default class NavBar extends Component {
  constructor(props){
    super(props)
    this.state = {
       search:'',
      tools: [],
      clientInfo:JSON.parse(localStorage.getItem("clientInfo")),
      isClientLogin:JSON.parse(localStorage.getItem("clientInfo"))

      ? !!JSON.parse(localStorage.getItem("clientInfo"))
      : false,
    }
  }
    componentDidMount() {
      this.getSearch();
      console.log(this.state.tools)
    }
    handleChange=(event)=>{
      this.setState({[event.target.name]:event.target.value});
    }
  
    handleSearch=(event)=>{
      window.location.href=`/search/${this.state.search}`
    }
    handleLogout=(e)=>{
      e.preventDefault();
      localStorage.clear();
      window.location.href='/'
  }

    getSearch = () => {
      let self=this;
      getToolsByCategory(this.state.type).then(function (res) {
          self.setState({ tools: res.data });
          console.log(self.state.tools)
        })
        .catch((err) => console.log(err));
    };

    render() {
        return (
            <div>
                 <Navbar bg="light" variant="light">
    <Container>
        <div style={{display:"flex", justifyContent:"space-between"}}>
    <Navbar.Brand onClick={()=>window.location.href='/'}><img src={logo} className="image"></img> </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link onClick={()=>window.location.href='/product'}>Products</Nav.Link>
      <Nav.Link href="/ContactUs">Contact-Us</Nav.Link>&nbsp;&nbsp;&nbsp;
      <div>
      <Form className="d-flex">
      <FormControl style={{width:"300px"}}
        onChange={(event)=>this.handleChange(event)}
        type="search"
        name="search"
        placeholder="Search product eg:tent"
        className="mr-2"
        aria-label="Search"
      />
      <Button onClick={(event)=>this.handleSearch(event)} style={{width:"80px"}} variant="outline-success">Search</Button>
    </Form>
    </div>
    </Nav>
    </div>
    <div>
      {!this.state.isClientLogin?
    <Nav>
        <Nav.Link href="/register"><Button variant="outline-info">Register</Button></Nav.Link>
        <Nav.Link href="/login"><Button  variant="outline-success">login</Button></Nav.Link></Nav>
        :<Nav>
        <Nav.Link onClick={()=>window.location.href=`/myorders/${this.state.clientInfo.id}`}><Button variant="outline-info">My Orders</Button></Nav.Link>
        <Nav.Link  onClick={(e)=>this.handleLogout(e)}><Button variant="outline-danger">log Out</Button></Nav.Link></Nav>}
        </div>
    </Container>
  </Navbar>

            </div>
        )
    }
}
