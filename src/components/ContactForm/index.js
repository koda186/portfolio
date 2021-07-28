import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import "./index.css";


class ContactForm extends React.Component {
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
    console.log(this.state);
    axios({
      method: "POST",
      url:"/sendtome",
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      }
      else if (response.data.status === 'fail') {
        alert("Message failed to send.");
      }
  })
}

resetForm(){
  this.setState({name: '', email: '', message: ''})
}

  render() {
    return(
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="form-group">
            <label htmlFor="name"><h4><b>Name</b></h4></label>
            <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1"><h4><b>Email address</b></h4></label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
          </div>
          <div className="form-group">
            <label htmlFor="message"><h4><b>Message</b></h4></label>
            <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
          </div>
          <div className="col text-center">
            <button type="submit" className="btn btn-primary btn-lg"><b>Submit</b></button>
          </div>
        </form>
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

export default ContactForm;
