//code to read and set any environment variables with the dotenv package
require("dotenv").config();

//code required to import the keys.js file and store it in a variable
var keys = require("./keys.js");
var axios = require("axios");
// var BandsInTownEvents = require('bandsintown-events');
var Spotify = require("node-spotify-api");
var moment = require("moment");
var fs = require("fs");

// access your keys information
var spotify = new Spotify(keys.spotify);
//variable to hold bands in town events data
// var Events = new BandsInTownEvents();

//liri.js can take in one of the following commands:
var commands = process.argv[2];
var inputValue = process.argv;
var search = "";
var searchlog = "";

for (var i = 3; i < inputValue.length; i++) {

  if (i > 3 && i < inputValue.length) {
    search = search + "+" + inputValue[i];
    searchlog = searchlog + " " + inputValue;
  } else {
    search += inputValue[i];

  }
}

//create a switch-case statement - if else statements will also work
//the switch-case will direct which function is used
switch (commands) {
  case "concert-this":
    concertThis();
    // console.log ("concert this called");
    break;

  case "spotify-this-song":
    spotifyThisSong();
    //console.log("spotify-this-song is called");
    break;

  case "movie-this":
    movieThis();
    //console.log("movie-this is called");
    break;

  case "do-what-it-says":
    doWhatItSays();
    //console.log("working on do what it says");
    break;

  default:
    console.log("Please enter a valid command.")
}

// Run the axios.get function on Bands In Town... /////////////////////////////////////////////////////////////////////////////
// The axios.get function takes in a URL and returns a promise (just like $.ajax)
function concertThis() {
  
  axios
    .get("https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp") //add bands in town url
    .then(function (response) {

      // console.log(response.data);
      for (var event = 0; event < response.data.length; event++) {
        var eventDate = response.data[event].datetime;
        // Name of the venue - Venue location - Date of the Event (use moment to format this as "MM/DD/YYYY")
        console.log("Venue: " + response.data[event].venue.name);
        console.log("City: " + response.data[event].venue.city);
        console.log("State: " + response.data[event].venue.region);
        console.log("Country: " + response.data[event].venue.country);
        console.log("Date: " + moment(eventDate).format("MM/DD/YYYY"));
        console.log(" ");
      }
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error);
        // console.log(error.response.status);
        // console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an object that comes back with details pertaining to the error that occurred.
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
      console.log(concertThis);
    });
}

//spotify search///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//If no song is provided then your program will default to "The Sign" by Ace of Base.?????????????
function spotifyThisSong() {

  spotify
    .search({
      type: "track",
      query: search
    })
    .then(function (response) {
      for (var i = 0; i < 1; i++) {
        // console.log(response);
        // print out the required info
        console.log("Artist: " + response.tracks.items[i].album.artists[0].name);
        console.log("Song: " + response.tracks.items[i].name);
        console.log("Preview link: " + response.tracks.items[i].external_urls.spotify);
        console.log("Album: " + response.tracks.items[i].album.name);
        console.log(" ");
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}
// omdb search ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'?????????????????
function movieThis() {

  axios.get("http://www.omdbapi.com/?t=" + search + "&apikey=trilogy").then(
    function (response) {
      // var argOne = "";
      // if (inputValue != argOne) {
      //   console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
      //   console.log("It's on Netflix!");
      // }
      // console.log(response.data);
      // print out the required info
      console.log("Title: " + response.data.Title);
      console.log("Year: " + response.data.Year);
      console.log("Rating: " + response.data.Rated);
      console.log("Rotten Tomatoes: " + response.data.Ratings[1].Value);
      console.log("Country: " + response.data.Country);
      console.log("Language: " + response.data.Language);
      console.log("Plot: " + response.data.Plot);
      console.log("Actors: " + response.data.Actors);  
      console.log(" ");    
    }
  );
}

// do-what-it-says/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Reads and prints the random.txt file.
function doWhatItSays() {

  fs.readFile("random.txt", "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }

    // Break the string down by comma separation and store the contents into the output array.
    var output = data.split(",");

    // Loop Through the newly created output array
    for (var i = 0; i < output.length; i++) {

      // Print each element (item) of the array/
      console.log(output[i]);
    }
  });
  console.log(doWhatItSays);
}