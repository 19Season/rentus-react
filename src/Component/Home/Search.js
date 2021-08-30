import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import { getToolsByCategory } from '../../apicalls/Tool'

export default class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
       search:'',
      tools: [],
      type:this.props.match.params.type,
      user:localStorage.getItem('userinfo') || null,
    }
  }
    componentDidMount() {
      this.getSearch();
      console.log(this.state.type)
    }
    handleChange=(event)=>{
      this.setState({[event.target.name]:event.target.value});
    }
  
    handleSearch=(event)=>{
      window.location.href=`/search/${this.state.search}`
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
                <div><NavBar/></div>
                <div className="container-fluid" style={{backgroundColor:"white",height:"600px",padding:"15px"}}>
                {this.state.tools.map((item)=>   
<Card style={{ width: '18rem', margin:"10px 10px 10px 10px"}}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
  <Card.Title>{item.name}</Card.Title>
    <Card.Title>{item.description}</Card.Title>
    <Card.Title>{item.size}</Card.Title>
    <Card.Title>{item.type}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <Card.Body>
  <Button onClick={(e)=>window.location.href=`/order/${this.state.tools.id}`} variant="primary">Order Now</Button>
  </Card.Body>
</Card>)}
</div> 
<div style={{marginTop:"100px"}}>
    
<Footer/>
</div>
            </div>
        )
    }
}
