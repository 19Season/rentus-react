
import './App.css';
import React from "react";
import Routes from "./route";
import {Container} from "@material-ui/core";

function App() {

    //const [name,setName]=React.useState([{name:'Ram',rollNo:'10',isGirl:false}])
    // setTimeout(function (){setName([{name:'Sita',rollNo:'11',isGirl:true}])},3000)
  return (
    <div className="App">
            <Routes  />
    </div>
  );
}

export default App