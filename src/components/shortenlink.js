import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import * as FA from 'react-icons/fa';

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
        const shortenedLink = response.shortened_url;
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
      <div className="your-class-name-here">
        <div className="shadow-md w-full flex justify-center items-center">
          <div className="md:px-10 py-4 px-7">
            <div className="flex text-3xl font-bold cursor-pointer items-center">
              JUTI
              <FA.FaHandLizard className="w-7 h-7 text-blue-600 scale-x-[-1] hover:scale-x-[-1]" />
              Y<span className="font-bold"></span>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10 gap-3">
          <input
            type="text"
            placeholder="Enter URL"
            value={this.state.userInput}
            onChange={this.handleInputChange}
            className="input input-bordered input-warning w-full max-w-xs"
          />
          <button
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-blue-600"
            onClick={this.shortenLink}
          >
            Shorten
          </button>
        </div>
      </div>
    );
  }
}

export default ShortenLink;
