import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { Button, Card } from 'react-bootstrap'
import { getParticularClientOrders } from '../../apicalls/Order'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBRow } from 'mdb-react-ui-kit'

export default class myOrders extends Component {
  state={
    open:'',
    order:[],
    id:this.props.match.params.id,
}

componentDidMount() {
    this.getallOrder();
  
    console.log(this.state.id)
    console.log(this.state.order.orders)
}
  getallOrder=()=>{
    let self=this;
    getParticularClientOrders(this.state.id).then(function(res){
        console.log(res.data)
        self.setState({order:res.data})
    }).catch((err)=>console.log(err));
}


    render() {
        return (
            <div>
            <div>
                <NavBar/>
            </div>
            <div> 
              {this.state.order.map((item)=>
//             <Card className="text-center">
//   <Card.Header>Featured</Card.Header>
//   <Card.Body>
    
//   <Card.Body>
//   <Card.Title><img src= {item.product.image}/></Card.Title>
//   <Card.Title>Name: {item.product.name}</Card.Title>
//   <Card.Title>Description: {item.product.description}</Card.Title>
//   <Card.Title>Size: {item.product.size}</Card.Title>
//   <Card.Title>Type: {item.product.type}</Card.Title>
// </Card.Body>
//     <Button variant="primary">Go somewhere</Button>
//   </Card.Body>
// </Card>)}

//             </div>

//                 <div >
                // <Footer/>
            // </div>
            <MDBCard style={{ maxWidth: '540px', margin:"auto", marginTop:"30px" }}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src={item.product.image} alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>Name: {item.product.name}</MDBCardTitle>
            <MDBCardTitle>Type: {item.product.type}</MDBCardTitle>
            <MDBCardText>
            Description: {item.product.description}
            </MDBCardText>
           
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>)}
    </div>
    <div style={{marginTop:"280px"}}><Footer/></div>
</div>)
    }}
