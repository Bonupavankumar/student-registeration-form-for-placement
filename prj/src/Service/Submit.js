import axios from 'axios'
import React, { Component } from 'react'

export default class Submit extends Component {
    handleSubmit(e) {
        e.preventDefault();
      
        axios({
          method: "POST",
          url:"http://localhost:3002/send",
          data:  this.state
        }).then((response)=>{
          if (response.data.status === 'success') {
            alert("Message Sent.");
            this.resetForm()
          } else if(response.data.status === 'fail') {
            alert("Message failed to send.")
          }
        })
      }
   
    }

