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
  },
  // Methods

  // prints a list of all playlists, in the form:
  // p01: Coding Music - 2 tracks
  // p02: Other Playlist - 1 tracks
  printPlaylists : function () {
    for (list in this.playlists){
      console.log(`${list}: ${this.playlists[list].name} - ${this.playlists[list].tracks.length} tracks`)
    }
  },
  
  // prints a list of all tracks, using the following format:
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  // t03: Four Thirty-Three by John Cage (Woodstock 1952)
  printTracks : function () {
    for (track in this.tracks){
      console.log(`${track}: ${this.tracks[track].name} by ${this.tracks[track].artist} (${this.tracks[track].album})`)
    }
  },
  
  // prints a list of tracks for a given playlist, using the following format:
  // p01: Coding Music - 2 tracks
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  printPlaylist : function (playlistId) {
    console.log(`${playlistId}: ${this.playlists[playlistId].name} - ${this.playlists[playlistId].tracks.length}`)
    for (track of this.playlists[playlistId].tracks) {
      console.log(`${track}: ${this.tracks[track].name} by ${this.tracks[track].artist} (${this.tracks[track].album})`)
    }
  },

  // adds an existing track to an existing playlist
  addTrackToPlaylist : function (trackId, playlistId) {
    //check if playlist exsits
    if (!(playlistId in this.playlists)){
      console.log("Playlist not in library!")
      return false;
    }
    // check track exists
    if (!(trackId in this.tracks)){
      console.log("Track not in library!")
      return false;
    }
    // already done? bail!
    if (this.playlists[playlistId].tracks.includes(trackId)) {
      console.log("Track already in playlist!")
      return true;
    }
    this.playlists[playlistId].tracks.push(trackId);
    return true;
  },

  // generates a unique id
  // (already implemented: use this for addTrack and addPlaylist)
  generateUid : function () {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  
  padNum : function (num, size) {
    // Convert the number passed as an argument to a string
    num = num.toString();
    // Create a while loop to add padding until the desired size is reached
    while (num.length < size) num = "0" + num;
    // Return the padded number
    return num;
  },

  // adds a track to the library
  addTrack : function (name, artist, album) {
    //get a new trackID
    const listOfTrackIndex = Object.keys(this.tracks).map(function(x){ return x.substring(1)});
    //  console.log("listOfTrackIndex:",listOfTrackIndex);
    let digits = listOfTrackIndex.length.toString().length + 1; 
    let newTrackIndex = "";
    // grab the last song's id, and increment it, and create a string
    newTrackIndex = "t" + this.padNum(Number(listOfTrackIndex.length + 1),digits);
    //  console.log("newTrackIndex:", newTrackIndex);
    //create new obj
    const newTrack = {  /// use this new id string as a key
      "id" : newTrackIndex,
      "name" : name,
      "artist" : artist,
      "album" : album
    } 
    //populate the library
    this.tracks[newTrackIndex] = newTrack;
  },

  // adds a playlist to the library
  addPlaylist : function (name/*, tracks*/) {
    const newPlaylistGuts = {
      /// use this new id string as a key
      "id" : "",
      "name" : name,
      "tracks" : []
    }
    let newPlaylistIndex = "p";
    // get a new playlist ID
    const listOfPlaylistIndex = Object.keys(this.playlists).map(function(x){ return x.substring(1)});
    //console.log("listOfPlaylistIndex:",listOfPlaylistIndex);
    let digits = listOfPlaylistIndex.length.toString().length + 1; 
    //  grab the last playlists id, and increment it, and create a string
    newPlaylistIndex += padNum(Number(listOfPlaylistIndex.length + 1),digits);
    newPlaylistGuts.id = newPlaylistIndex;
    this.playlists[newPlaylistIndex] = newPlaylistGuts;
    // console.log("newPlaylistIndex:", newPlaylistIndex);
    // console.log("newPlaylistGuts:", newPlaylistGuts);
    console.log(typeof newPlaylistIndex);
    console.log(typeof this.Playlists);
    console.log(typeof [newPlaylistGuts])
    // }
    console.log(this.playlists)
  }

  

};

// Tests...
console.log(library.printPlaylists())
console.log(library.printTracks())
console.log(library.printPlaylist("p02"))
console.log(library.addTrackToPlaylist("t01", "p02"))
console.log(library.addTrackToPlaylist("t01", "p02"))
console.log(library.tracks);


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function (query) {
  
}


  library.addTrack("Bohemian Rhapsody","Queen","A Night at the Opera");
  library.addTrack("Sweet Child O' Mine", "Guns N' Roses", "Appetite for Destruction");
  library.addTrack("Billie Jean", "Michael Jackson", "Thriller");
  library.addTrack("Like a Rolling Stone", "Bob Dylan", "Highway 61 Revisited");
  library.addTrack("Imagine", "John Lennon", "Imagine");
  library.addTrack("Back in Black", "AC/DC", "Back in Black");
  library.addTrack("My Generation", "The Who", "My Generation");
  library.addTrack("Purple Haze", "Jimi Hendrix", "Are You Experienced");
  library.addTrack("Every Breath You Take", "The Police", "Synchronicity");
  library.addTrack("Paint It Black", "The Rolling Stones", "Aftermath");
  library.addTrack("What's Going On", "Marvin Gaye", "What's Going On");
  library.addTrack("Boys Don't Cry", "The Cure", "Three Imaginary Boys");
  library.addTrack("Losing My Religion", "R.E.M.", "Out of Time");
  library.addTrack("Baba O'Riley", "The Who", "Who's Next");
  library.addTrack("Heart of Glass", "Blondie", "Parallel Lines");
  library.addTrack("Sunday Bloody Sunday", "U2", "War");
  library.addTrack("Good Vibrations", "The Beach Boys", "Smiley Smile");
  library.addTrack("London Calling", "The Clash", "London Calling");
  library.addTrack("Crazy Train", "Ozzy Osbourne", "Blizzard of Ozz");
  library.addTrack("Hallelujah", "Jeff Buckley", "Grace");
  library.addTrack("One Love", "Bob Marley & The Wailers", "Exodus");
