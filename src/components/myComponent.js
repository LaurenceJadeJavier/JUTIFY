import $, { error } from "jquery"; // Import $ as an alias for jQuery
import React, { useState } from "react";
import Swal from "sweetalert2";
import * as FA from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const MyComponent = () => {
  const [inputUrl, setInputUrl] = useState("");
  const { code } = useParams(); // Extract the 'code' from the URL

  useEffect(() => {
    // If 'code' is present in the URL, perform AJAX request
    if (code) {
      const apiUrl = "https://jutify.000webhostapp.com/api/get";
      $.ajax({
        url:  'https://jutify.000webhostapp.com/api/get',
        type: 'POST',
        data: {
            "code" : code,
            "custom_password" : "Tite_ni_IshowSpeed_lumitaw"
                },
        dataType: 'JSON',
        success: function(response) 
        {
            if(response.actual_link)
            {
                window.location.href = response.actual_link;
            }

        },
        error: function(response){
            Swal.fire({
                title: "Oooops!",
                text: "Link not found!",
                icon: "error",

            });
        }
    
    })
    }
  }, [code]);

  const handleShorten = () => {
    // Replace with the actual API endpoint
    const apiUrl = "https://jutify.000webhostapp.com/api/shorten";

    // Prepare the data to be sent
    const requestData = {
      actual_link: inputUrl,
      custom_password: "Tite_ni_IshowSpeed_lumitaw",
    };

    // Make the AJAX request
    $.ajax({
      url: "https://jutify.000webhostapp.com/api/shorten",
      type: "POST",
      data: {
        actual_link: inputUrl,
        custom_password: "Tite_ni_IshowSpeed_lumitaw",
      },
      dataType: "JSON",
      success: function (response) {
        const tempInput = document.createElement("input");
        tempInput.style.position = "absolute";
        tempInput.style.left = "-1000px";
        tempInput.value = "http://localhost:3000/r/" + response.shortened_url;
        document.body.appendChild(tempInput);

        // Select and copy the link
        tempInput.select();
        document.execCommand("copy");

        // Remove the temporary input element
        document.body.removeChild(tempInput);

        Swal.fire({
          title: "Shortened Link",
          text:
            "http://localhost:3000/r/" +
            response.shortened_url +
            "Link copied to clipboard!",
          icon: "success",
        });
      },
    });
  };

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
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
          className="input input-bordered input-warning w-full max-w-xs border-blue-600"
        />
      </div>
      <div className="flex justify-center items-center mt-10">
        <button
          className="btn sm:btn-sm md:btn-md lg:btn-lg bg-blue-600 text-white font-bold"
          onClick={handleShorten}
        >
          Shorten
        </button>
      </div>
    </div>
  );
};

export default MyComponent;
