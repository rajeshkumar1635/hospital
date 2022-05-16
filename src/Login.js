import React, { Component } from 'react'

export default class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       Username:"",
       Password: ""
    }
  }
  handleChange=(event)=>{
    let name=event.target.name;
    let val=event.target.value;
    this.setState({[name]:val});
}
handleSubmit=(event)=>{
  event.preventDefault();
  alert("Going to home");
}
  render() {
    return (
      <div className="container h-100">
          <div class="row h-100 justify-content-center align-items-center">
          <div class="col-10 col-md-8 col-lg-6">
          <form className="form-example" onSubmit={this.handleSubmit}>
  Username
<input type="text" name="Username" onChange={this.handleChange} className="form-control Username"/>
<div>
<label>
  Password
</label>
<input type="password" name="Password" className="form-control Password" onChange={this.handleChange}/>
</div>
<br>
</br>
<div>
<input type="submit" value ="Submit" className="btn btn-primary"/>
  </div>
          </form>
          </div>
      </div>
      </div>
    )
  }
}
