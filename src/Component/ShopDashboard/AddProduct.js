import axios from 'axios';
import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap';
import { addtool } from '../../apicalls/Tool'



export default class Addproduct extends Component {
    

    constructor(props){
		super(props);
        this.state={
            shop:JSON.parse(localStorage.getItem('shopInfo')) || null,
            "name":'',  
		    "category":'',
        "price":'',
        "size":'',
		    "description":'',
		    "image":'',
            image_file: null,
            image_preview: ''
        };
         }

    componentDidMount() {
           console.log(this.state.category)
         }
     handleLogout=(event)=>{
        event.preventDefault();
        localStorage.clear()
        window.location.href='/'
   }
    handleChange=(event)=>{
		this.setState({[event.target.name]:event.target.value});
	}

  custom_file_upload_url = 'http://localhost:1234/api/upload';
  
  handleImagePreview = (e) => {
    let image_as_base64 = URL.createObjectURL(e.target.files[0]);
    let image_as_files = e.target.files[0];

    this.setState({
      image_preview: image_as_base64,
      image_file: image_as_files,
    });

    this.handleSubmitFile(image_as_files);
  };

  // Image/File Submit Handler
  handleSubmitFile = (image) => {
    if (image) {
      let formData = new FormData();
      formData.append("myfile", image);
      // the image field name should be similar to your api endpoint field name
      // in my case here the field name is customFile

      axios
        .post(this.custom_file_upload_url, formData, {
          headers: {
            Authorization:
              "YOUR_API_AUTHORIZATION_KEY_SHOULD_GOES_HERE_IF_HAVE",
            "Content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log("Success" + res.data);
          this.setState({ img: res.data });
          console.log(this.state.img);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

	handleSubmit=(event)=>{
		event.preventDefault();
		var date=Date.now()
		addtool(this.state.name,this.state.price,this.state.size,this.state.type,this.state.description,this.state.img,this.state.shop.id,1).then((res)=>{
		    console.log(this.state.img)
        if(res==true){
          alert("Product Added")
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
          <a onClick={()=>window.location.href=`/userdash/${this.state.user.id}` } class="nav-link">
            <span class="sidebar-icon"><span  class="fa fa-book"></span></span>
            <span>Shop Products</span>
          </a>
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
    <Form.Control name="name" onChange={(e) => this.handleChange(e)} style={{width:"436px"}} type="text" placeholder="Enter Name" required />
  </Form.Group>
  <Form.Group>
  <Form.Label style={{color:"Black"}}>Category</Form.Label><br></br>
          <select name="type" onChange={(e) => this.handleChange(e)}>
              <option>Choose category</option>
              <option>Tent</option>
              <option>Shoes</option>
              <option>Pant</option>
          </select>
    </Form.Group><br></br>

  <Form.Group  className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{color:"Black"}}>Description</Form.Label><br></br>
    <Form.Control  name="description"  onChange={(e) => this.handleChange(e)} style={{width:"436px"}} type="text" placeholder="Enter details" required />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label style={{color:"Black"}}>Size</Form.Label><br></br>
    <Form.Control  name="size"  onChange={(e) => this.handleChange(e)} style={{width:"436px"}} type="number" placeholder="enter Size" required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label style={{color:"Black"}}>Price</Form.Label><br></br>
    <Form.Control  name="price"  onChange={(e) => this.handleChange(e)} style={{width:"436px"}} type="text" placeholder="enter price" />
  </Form.Group>
  <Form.Group controlId="formFileLg" className="mb-3">
    <Form.Label>Enter Pictures</Form.Label>
    <Form.Control  name="pictures"  onChange={(e) => this.handleImagePreview(e)} style={{width:"436px"}} type="file" size="lg" />
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