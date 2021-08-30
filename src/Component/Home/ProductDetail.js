import React, { Component } from 'react'
import { Button, Card, ListGroup, ListGroupItem, Navbar } from 'react-bootstrap'
import { getById } from '../../apicalls/Tool'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import Tent from '../images/tent.jpg'

export default class ProductDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      search:'',
      tools: [],
      id:this.props.match.params.id,
      isLogin:!!localStorage.getItem('userinfo') || false,
      user:JSON.parse(localStorage.getItem('userinfo')) || null,
    }
    }
  componentDidMount() {
    this.getallTools();
    console.log(this.state.id)

  }

  getallTools = () => {
    let self = this;
    getById(this.state.id)
      .then(function (res) {
        self.setState({ tools: res.data });
      })
      .catch((err) => console.log(err));
  };

    render() {
        return (
            <div>
                <div><NavBar/></div>
                    <div style={{padding:"40px",background:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,255,221,1) 34%)    "}}>
                    <Card className="hover-btn" style={{ width: '30rem', margin:"auto", padding:"40px" }}>
  <Card.Img variant="top" src={this.state.tools.image}/>
  <Card.Body>
  <Card.Title>Name: {this.state.tools.name}</Card.Title>
    <Card.Title>Description: {this.state.tools.description}</Card.Title>
    <Card.Title>Size: {this.state.tools.size}</Card.Title>
    <Card.Title>type: {this.state.tools.type}</Card.Title>
    {/* <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text> */}
  </Card.Body>
  {/* <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup> */}
  <Card.Body>
  <Button  onClick={(e)=>window.location.href=`/order/${this.state.tools.id}`} variant="primary">Order Now</Button>
  </Card.Body>
</Card>
                    </div>
                <div><Footer/></div>
            </div>
        )
    }
}
