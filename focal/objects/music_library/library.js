const library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    }
  },
  playlists: {
    p01: {
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function () {
  for (list in library.playlists){
    console.log(`${list}: ${library.playlists[list].name} - ${library.playlists[list].tracks.length} tracks`)
  }
}
//console.log(printPlaylists())

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function () {
  for (track in library.tracks){
    console.log(`${track}: ${library.tracks[track].name} by ${library.tracks[track].artist} (${library.tracks[track].album})`)
  }
}
//console.log(printTracks())


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function (playlistId) {
  console.log(`${playlistId}: ${library.playlists[playlistId].name} - ${library.playlists[playlistId].tracks.length}`)
  for (track of library.playlists[playlistId].tracks) {
    console.log(`${track}: ${library.tracks[track].name} by ${library.tracks[track].artist} (${library.tracks[track].album})`)
  }
}
//console.log(printPlaylist("p02"))

// adds an existing track to an existing playlist
const addTrackToPlaylist = function (trackId, playlistId) {
  //check if playlist exsits
  if (!(playlistId in library.playlists)){
    console.log("Playlist not in library!")
    return false;
  }
  // check track exists
  if (!(trackId in library.tracks)){
    console.log("Track not in library!")
    return false;
  }
  // already done? bail!
  if (library.playlists[playlistId].tracks.includes(trackId)) {
    console.log("Track already in playlist!")
    return true;
  }
  library.playlists[playlistId].tracks.push(trackId);
  return true;
}
// console.log(addTrackToPlaylist("t01", "p02"))
// console.log("############################################")
// console.log(addTrackToPlaylist("t01", "p02"))


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function () {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

function padNum(num, size) {
  // Convert the number passed as an argument to a string
  num = num.toString();
  // Create a while loop to add padding until the desired size is reached
  while (num.length < size) num = "0" + num;
  // Return the padded number
  return num;
}

// adds a track to the library
const addTrack = function (name, artist, album) {
  //get a new trackID
  const listOfTrackIndex = Object.keys(library.tracks).map(function(x){ return x.substring(1)});
  //  console.log("listOfTrackIndex:",listOfTrackIndex);
  let digits = listOfTrackIndex.length.toString().length + 1; 
  let newTrackIndex = "";
  // grab the last song's id, and increment it, and create a string
  newTrackIndex = "t" + padNum(Number(listOfTrackIndex.length + 1),digits);
  //  console.log("newTrackIndex:", newTrackIndex);
  //create new obj
  const newTrack = {  /// use this new id string as a key
    "id" : newTrackIndex,
    "name" : name,
    "artist" : artist,
    "album" : album
  } 
  //populate the library
  library.tracks[newTrackIndex] = newTrack;
}


addTrack("Bohemian Rhapsody","Queen","A Night at the Opera");
addTrack("Sweet Child O' Mine", "Guns N' Roses", "Appetite for Destruction");
addTrack("Billie Jean", "Michael Jackson", "Thriller");
addTrack("Like a Rolling Stone", "Bob Dylan", "Highway 61 Revisited");
addTrack("Imagine", "John Lennon", "Imagine");
addTrack("Back in Black", "AC/DC", "Back in Black");
addTrack("My Generation", "The Who", "My Generation");
addTrack("Purple Haze", "Jimi Hendrix", "Are You Experienced");
addTrack("Every Breath You Take", "The Police", "Synchronicity");
addTrack("Paint It Black", "The Rolling Stones", "Aftermath");
addTrack("What's Going On", "Marvin Gaye", "What's Going On");
addTrack("Boys Don't Cry", "The Cure", "Three Imaginary Boys");
addTrack("Losing My Religion", "R.E.M.", "Out of Time");
addTrack("Baba O'Riley", "The Who", "Who's Next");
addTrack("Heart of Glass", "Blondie", "Parallel Lines");
addTrack("Sunday Bloody Sunday", "U2", "War");
addTrack("Good Vibrations", "The Beach Boys", "Smiley Smile");
addTrack("London Calling", "The Clash", "London Calling");
addTrack("Crazy Train", "Ozzy Osbourne", "Blizzard of Ozz");
addTrack("Hallelujah", "Jeff Buckley", "Grace");
addTrack("One Love", "Bob Marley & The Wailers", "Exodus");


// console.log(library.tracks);


// adds a playlist to the library
const addPlaylist = function (name/*, tracks*/) {
  const newPlaylistGuts = {
    /// use this new id string as a key
    "id" : "",
    "name" : name,
    "tracks" : []
  }
  let newPlaylistIndex = "p";
  // get a new playlist ID
  const listOfPlaylistIndex = Object.keys(library.playlists).map(function(x){ return x.substring(1)});
  //console.log("listOfPlaylistIndex:",listOfPlaylistIndex);
  let digits = listOfPlaylistIndex.length.toString().length + 1; 
  //  grab the last playlists id, and increment it, and create a string
  newPlaylistIndex += padNum(Number(listOfPlaylistIndex.length + 1),digits);
  newPlaylistGuts.id = newPlaylistIndex;
  library.playlists[newPlaylistIndex] = newPlaylistGuts;
  // console.log("newPlaylistIndex:", newPlaylistIndex);
  // console.log("newPlaylistGuts:", newPlaylistGuts);
  console.log(typeof newPlaylistIndex);
  console.log(typeof library.Playlists);
  console.log(typeof [newPlaylistGuts])
  // }
  console.log(library.playlists)

}



// Playlist 1: Classic Rock

// "Bohemian Rhapsody" - Queen
// "Sweet Child O' Mine" - Guns N' Roses
// "My Generation" - The Who
// "Purple Haze" - Jimi Hendrix
// "Paint It Black" - The Rolling Stones
// "Baba O'Riley" - The Who
// "Good Vibrations" - The Beach Boys
// "London Calling" - The Clash
// "Crazy Train" - Ozzy Osbourne
// "One Love" - Bob Marley & The Wailers
// Playlist 2: 80s Hits

// "Billie Jean" - Michael Jackson
// "Every Breath You Take" - The Police
// "Boys Don't Cry" - The Cure
// "Heart of Glass" - Blondie
// "Sunday Bloody Sunday" - U2
// "Back in Black" - AC/DC
// "Losing My Religion" - R.E.M.
// "Hallelujah" - Jeff Buckley
// "What's Going On" - Marvin Gaye
// "Imagine" - John Lennon
// Playlist 3: Singer-Songwriter Ballads

// "Bohemian Rhapsody" - Queen
// "Like a Rolling Stone" - Bob Dylan
// "Imagine" - John Lennon
// "Baba O'Riley" - The Who
// "Good Vibrations" - The Beach Boys
// "Hallelujah" - Jeff Buckley
// "One Love" - Bob Marley & The Wailers
// "What's Going On" - Marvin Gaye
// "My Generation" - The Who
// "Heart of Glass" - Blondie
// Playlist 4: High-Energy Workout

// "Sweet Child O' Mine" - Guns N' Roses
// "Back in Black" - AC/DC
// "Purple Haze" - Jimi Hendrix
// "Crazy Train" - Ozzy Osbourne
// "London Calling" - The Clash
// "Boys Don't Cry" - The Cure
// "Every Breath You Take" - The Police
// "Paint It Black" - The Rolling Stones
// "Baba O'Riley" - The Who
// "One Love" - Bob Marley & The Wailers
// Playlist 5: Feel-Good Pop

// "Billie Jean" - Michael Jackson
// "Sunday Bloody Sunday" - U2
// "Like a Rolling Stone" - Bob Dylan
// "One Love" - Bob Marley & The Wailers
// "Good Vibrations" - The Beach Boys
// "Heart of Glass" - Blondie
// "Losing My Religion" - R.E.M.
// "What's Going On" - Marvin Gaye
// "Imagine" - John Lennon
// "Bohemian Rhapsody" - Queen



// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function (query) {

}