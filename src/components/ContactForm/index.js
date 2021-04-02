import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"; // eslint-disable-next-line


class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  render() {
    return(
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
          </div>
          <div class="col text-center">
          <button type="button" class="btn btn-primary btn-lg">Submit</button>
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

    handleSubmit(event) {
    }
  }

export default ContactForm;
