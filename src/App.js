import React, { Component } from 'react'
//import Contact from './Contact';
//import Register from "./Register"
import hos from "./images/1.jpg"

export default class App extends Component {

  render() {
    const myStyle={
      height:'120vh',
      outerWidth:'5vh',
      marginTop:'-70px',
      fontSize:'50px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
  };
    return (
      <div> 
<div>
      <img src={hos} className="img-fluid" alt="..." style={myStyle}/>
  
</div>
<div>
<h1>
        Welcome To Time Hospital!!!
      </h1>
      <br></br>
        <ul>Why Time
          <li>
          Round-the-clock doctor availability</li><li>
Broad range of Specialities</li><li>
Detailed digital prescriptions</li><li>
Digitised health records
          </li>
        </ul>
      </div>
<footer class="bg-light text-center text-lg-start">
  <div class="text-center p-3" style = {{backgroundColor: "rgba(0, 0, 0, 0.2)"}} >
  &copy; 2022 Copyright:<br>
  </br>
  <h3>
    Designed and Developed By RajeshKumar
  </h3>
  </div>
</footer>
      </div>

    )
  }
}
