import React from 'react';
import $ from 'jquery';

export default class PersonForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
      firstName: "",
      lastName: ""
    }
  }

  updateFirstName(event) {
    this.setState({
      firstName: event.target.value
    });
  }

  updateLastName(event) {
    this.setState({
      lastName: event.target.value
    });
  }

  save() {
    var context = this;

    $.ajax({
      url: "http://localhost:3000/api/v1/people/save",
      method: "POST",
      data: {
        id: context.state.id,
        first_name: context.state.firstName,
        last_name: context.state.lastName
      },
      success: function (response) {
        alert("Successfully saved record!");
      },
      error: function (response) {
        alert("Error in saving record!");
      }
    });
  }

  render() {
    return (
      <div>
        First Name:
        <input type="text" value={this.state.firstName} onChange={this.updateFirstName.bind(this)} />
        Last Name:
        <input type="text" value={this.state.lastName} onChange={this.updateLastName.bind(this)} />
        <hr />

        <button onClick={this.save.bind(this)}>
          Save
        </button>
      </div>
    );
  }
}