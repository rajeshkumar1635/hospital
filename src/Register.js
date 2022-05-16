import React, { Component } from 'react'
export default class Register extends Component {
    constructor(props) {
      super(props)
    this.state={
        FirstName:'',
        LastName:"",
        PhoneNumber:"",
        Gender:"Select",
        Password: "",
        ConfirmPassword:""

    }
    }
    handleChange=(event)=>{
        let name=event.target.name;
        let val=event.target.value;
        this.setState({[name]:val});
    }
    handleSubmit=(event)=>{
     
event.preventDefault();
if(this.state.Password===this.state.ConfirmPassword )
{
alert("you have registered successfully");
   }
   else{
     alert("Please give the correct confirm password");
   }
     }
  render() {
    return (
      <div class="container h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-10 col-md-8 col-lg-6">
        <h1>
          Registration Form
        </h1>
<form onSubmit={this.handleSubmit} className="form-example">
<label>
    FirstName</label>
    <input type="text" onChange={this.handleChange} name="FirstName" className='form-control FirstName'/>
    <br></br>
    <label>
        LastName</label>
        <input type="text" onChange={this.handleChange} name="LastName" className='form-control LastName'/>
        <br></br>
        <label>
       Password
        </label>
        <input type="password" name="Password" onChange={this.handleChange} className="form-control password"/>
        <br></br>
      
        <label>
           Confirm Password
        </label>
        <input type="password" name="ConfirmPassword" onChange={this.handleChange} className="form-control ConfirmPassword"/>
        <br></br>
        Phone Number
        <input type="text" onChange={this.handleChange} name="PhoneNumber" className="form-control PhoneNumber"/><br></br>
        <label>
            Gender</label>
<select name="Gender" onChange={this.handleChange} value={this.state.Gender} className="form-control Gender">
    <option value="Male"> Male </option>
<option value="Female"> Female</option>
</select><br></br>
<label>
  Date of Birth
</label>
<input type='date' name='birthdate' className='form-control birthdate'
      placeholder='Enter BirthDate'
       onChange={this.handleChange}
      />
<div class="col-12">
    <div className="form-check">
      <input class="form-check-input is-invalid" type="checkbox" value="" aria-describedby="invalidCheck3Feedback" required/>
      <label class="form-check-label" for="invalidCheck3">
        Agree to terms and conditions
      </label>
      <div  class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
<input type="submit" value ="Submit" class="btn btn-primary btn-customized"/>
</form>
      </div>
      </div>
      </div>
    )
  }
}
