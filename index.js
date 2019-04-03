//  load the npm packages

//require('dotenv').config()

var axios = require("axios");
var Spotify = require("node-spotify-api");
var moment = require("moment");
var dotEnv = require("dotenv");

//  initialize the APIs
var spotify = new Spotify({
    id: d13f9a1f03c3493bb4527cb1dd06cd1b,
    secret: aecdca361c6c4114b79473e817ab0fec
  });

  // Run the axios.get function...
// The axios.get function takes in a URL and returns a promise (just like $.ajax)
axios
.get("https://en.wikipedia.org/wiki/Kudos_(granola_bar)")//add bands in town url
.then(function(response) {
  // If the axios was successful...
  // Then log the body from the site!
  console.log(response.data);
})
.catch(function(error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an object that comes back with details pertaining to the error that occurred.
    console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log("Error", error.message);
  }
  console.log(error.config);
});
