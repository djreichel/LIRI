# LIRI
Language Interpretation and Recognition Interface

My LIRI node app toggles through one of four user input commands: concert-this, spotify-this-song, movie-this and do-what-it-says.

**Concert-this** (with user input mirroring "node liri concert-this <artist/band name here>")
This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:

*Name of the venue*
*Venue location*
*Date of the Event (use moment to format this as "MM/DD/YYYY")*

Here's a screenshot of the working concert-this code:
![Image of concert-this]
(https://github.com/djreichel/LIRI/assets/liri-concert-this.png)

**Spotify-this-song** (with user input mirroring "node liri spotify-this-song <song name here>")
This will show the following information about the song in your terminal/bash window

*Artist(s)*
*The song's name*
*A preview link of the song from Spotify*
*The album that the song is from*

Here's a screenshot of the working spotify-this-song code:
![Image of spotify-this-song]
(./assets/liri-spotify-this-song.png)

If no song name is provided then the program will default to "The Sign" by Ace of Base.)

**Movie-this** (with user input mirroring "node liri movie-this <movie name here>")
This will output the following information to your terminal/bash window:

*Title of the movie*
*Year the movie came out*
*IMDB Rating of the movie*
*Rotten Tomatoes Rating of the movie*
*Country where the movie was produced*
*Language of the movie*
*Plot of the movie*
*Actors in the movie*

Here's a screenshot of the working movie-this code:
![Image of spotify-this-song]
(../assets/liri-movie-this.png)

If no movie name is provided then the program will default to "Mr. Nobody")

**Do-what-it-says** (with user input mirroring "node liri do-what-it-says")
This will output one of LIRI's commands from a random text file.

Here's a screenshot of the working do-what-it-says code:
![Image of do-what-it-says]
(assets/liri-do-what-it-says.png)
