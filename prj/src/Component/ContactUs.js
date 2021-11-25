import React, { Component } from 'react'
import submit from '../Service/Submit'

import axios from 'axios';

 class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          message: ''
        }
      }
    
      handleSubmit(e){
        e.preventDefault();
        axios({
          method: "POST",
          url:"http://localhost:3002/send",
          data:  this.state
        }).then((response)=>{
          if (response.data.status === 'success') {
            alert("Message Sent.");
            this.resetForm()
          } else if (response.data.status === 'fail') {
            alert("Message failed to send.")
          }
        })
      }
    
     

     
    
  
    render() {
      return(
        <div className = "card col-md-4  offset-md-4 offset-md-3" id="add" style={{marginTop:"100px"}}>
            <h3 style={{textAlign:"center"}}>Contact Us</h3>
             <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                 
          <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
          </div>
          <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
          </div>
          <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} /><br/>
          </div>
          <button   type="submit" className="btn btn-primary">Submit</button><br/><br/>
        </form>
      </div>
    );
  }

  onNameChange(event) {
	  this.setState({name: event.target.value})
  }

  onEmailChange(event) {
	  this.setState({email: event.target.value})
  }

  onMessageChange(event) {
	  this.setState({message: event.target.value})
  }
}
export default ContactUs
  
