import {combineReducers} from 'redux';


const songsReducer = () => {
  return [ 
    { title: 'No Scrubs', duration: '4.05'},
    { title: 'Macarena', duration: '2.30'},
    {title: 'All Star', duration: '3.15'},
    { title: 'I want it That Way', duration: '1,45'}
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;

}


// keys of the combine object will show up state of the object
export default combineReducers ({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});