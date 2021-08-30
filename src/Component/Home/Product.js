import React, { Component } from 'react'
import { Button, Card, Navbar } from 'react-bootstrap'
import { getTools } from '../../apicalls/Tool'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import './HomePage.css'

export default class Product extends Component {
  constructor(props){
    super(props)
    this.state = {
      search:'',
      tools: [],
      // isLogin:!!localStorage.getItem('userinfo') || false,
      // user:localStorage.getItem('userinfo') || null,
    }
    }
    componentDidMount() {
      this.getallTools();
      console.log(this.state.tools)
    }

    getallTools = () => {
      let self = this;
      getTools()
        .then(function (res) {
          self.setState({ tools: res.data });
        })
        .catch((err) => console.log(err));
    };
  
    render() {
        return (
            <div>
                <div><NavBar/></div>
                <div className="container-fluid" style={{background:"white",padding:"15px"}}>
                <div className="row">
                {this.state.tools.map((item)=>
                <div className="col-md-3">
                                 <Card className="hover-btn" style={{ width: '18rem', padding:"10px", marginBottom:"20px" }}>
    <Card.Img style={{maxWdith:"100%",height:"100px", width:"100px", margin: "auto" }} variant="top" src={item.image}/>
    <Card.Body style={{ height : '18rem'}} >
    <Card.Title><b>Name:</b>{item.name}</Card.Title>
    <Card.Title><b>Description:</b>{item.description.slice(0, 20)}</Card.Title>
    <Card.Title><b>Size:</b>{item.size}</Card.Title>
    <Card.Title><b>Type:</b>{item.type}</Card.Title>
    {/* <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text> */}
    <Button onClick={(e)=>window.location.href=`/ProductDetail/${item.id}`} variant="primary">View Details</Button>
  </Card.Body>
</Card>
</div>)}
</div>
</div> 
<div><Footer/></div>
            </div>
        )
    }
}
