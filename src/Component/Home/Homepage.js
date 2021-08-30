
import { FlagOutlined } from '@material-ui/icons'
import React, { Component } from 'react'
import { Button, Card, Carousel, ListGroup, ListGroupItem } from 'react-bootstrap'
import { getTools } from '../../apicalls/Tool'
import './HomePage.css'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import Shoes from '../images/shoes.jpg'
import Banner from '../Home/Banner.gif'


export default class Homepage extends Component {
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
          console.log(res)
          self.setState({ tools: res.data });
        })
        .catch((err) => console.log(err));
    };
  
    render() {

        return (
            <div>
                 <div><NavBar/></div>
 
 <div><Carousel>
  <Carousel.Item>
    <img
       className="d-block w-100"
      src={Banner}
      alt="First slide"
    />
    {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://c8.alamy.com/comp/2B39XJW/tent-camping-with-mountain-and-trees-banner-2B39XJW.jpg"
      alt="Second slide"
    />

    {/* <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://c8.alamy.com/comp/2B39XJW/tent-camping-with-mountain-and-trees-banner-2B39XJW.jpg"
      alt="Third slide"
    />

    {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
</Carousel>
</div>
<div className="container-fluid" style={{backgroundColor:"white",height:"auto",padding:"15px"}}>
  <div className="row">
{this.state.tools.map((item)=>
<div className="col-md-3">
<Card className="hover-btn" onClick={(e)=>window.location.href=`/ProductDetail/${item.id}`} style={{ width: '18rem', margin:"10px 10px 10px 10px"}}>
  <Card.Img variant="top" src={item.image} />
  <Card.Body>
    <Card.Title><b>Name:</b> {item.name}</Card.Title>
    <Card.Title><b>Description:</b>{item.description.slice(0, 40)}</Card.Title>
    <Card.Title><b>Size:</b> {item.size}</Card.Title>
    <Card.Title><b>Type:</b> {item.type}</Card.Title>
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
  <Button onClick={(e)=>window.location.href=`/ProductDetail/${item.id}`} variant="primary">View Details</Button>
  </Card.Body>
</Card>
</div>)}
</div>
</div> 
<div >   
<Footer/>
</div>

            </div>
           
        )
    }
}
