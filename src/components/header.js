import React from "react";
import * as FA from "react-icons/fa";
import  { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

class ShortenLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ userInput: e.target.value });
  };

  shortenLink = () => {
    const apiUrl = 'https://jutify.000webhostapp.com/api/shorten';
    const requestData = {
      actual_link: this.state.userInput,
      custom_password: 'Tite_ni_IshowSpeed_lumitaw',
    };

    axios
      .post(apiUrl, requestData)
      .then((response) => {
        const shortenedLink = response.data.shortened_link;
        Swal.fire({
          title: 'Shortened Link',
          text: shortenedLink,
          icon: 'success',
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: 'Error',
          text: 'Failed to shorten the link. Please try again later.',
          icon: 'error',
        });
      });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter URL"
          value={this.state.userInput}
          onChange={this.handleInputChange}
        />
        <button onClick={this.shortenLink}>Shorten Link</button>
      </div>
    );
  }
}

export default ShortenLink;

